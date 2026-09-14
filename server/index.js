require('dotenv').config();
const express = require("express");
const helmet = require('helmet');
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const app = express();
const isProduction = process.env.NODE_ENV === "production";
const port = Number(process.env.SERVER_PORT || 3001);
const saltRounds = 12;
const sessionSecret = process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex");
const allowedOrigins = (process.env.CLIENT_ORIGINS || "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

if (isProduction && !process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET must be configured in production");
}

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET","POST"],
  credentials: true
}));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.json({ limit: "10kb" }));
app.set("trust proxy", isProduction ? 1 : 0);

app.use(
    session({
      key: "userId",
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        sameSite: "lax",
        secure: isProduction,
      },
    })
);

const db = mysql.createConnection({
  user: process.env.DB_USER || "root",
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  enableKeepAlive: true,
});

function credentialsAreValid(username, password) {
  return typeof username === "string"
    && username.trim().length >= 3
    && username.trim().length <= 100
    && typeof password === "string"
    && password.length >= 8
    && password.length <= 200;
}

app.get("/health", (req, res) => {
  db.ping((error) => {
    if (error) return res.status(503).json({ status: "degraded", database: "unavailable" });
    return res.json({ status: "ok", database: "connected" });
  });
});

app.post("/register", (req, res) => {
  const username = typeof req.body.username === "string" ? req.body.username.trim() : "";
  const password = req.body.password;

  if (!credentialsAreValid(username, password)) {
    return res.status(400).json({ error: "Username must be 3-100 characters and password must be 8-200 characters" });
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Hashing error', err);
      return res.status(500).json({ error: 'Registration failed' });
    }

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, hash],
        (err, result) => {
          if (err) {
            console.error('DB insert error', err);
            if (err.code === "ER_DUP_ENTRY") return res.status(409).json({ error: "Username already exists" });
            return res.status(500).json({ error: 'Registration failed' });
          }
          return res.status(201).json({ success: true });
        }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = typeof req.body.username === "string" ? req.body.username.trim() : "";
  const password = req.body.password;

  if (!credentialsAreValid(username, password)) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  db.query(
      "SELECT * FROM users WHERE username = ?;",
      [username],
      (err, result) => {
        if (err) {
          console.error("DB login error", err);
          return res.status(500).json({ error: "Login failed" });
        }

        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (error) return res.status(500).json({ error: "Login failed" });
            if (response) {
              // store minimal data in session
              req.session.user = { id: result[0].id, username: result[0].username };
              return res.json({ id: result[0].id, username: result[0].username });
            } else {
              return res.status(401).json({ message: "Wrong email/password combination!" });
            }
          });
        } else {
          return res.status(401).json({ message: "Wrong email/password combination!" });
        }
      }
  );
});

app.use((req, res) => res.status(404).json({ error: "Not found" }));
app.use((error, req, res, next) => {
  console.error("Unhandled server error", error);
  return res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`MealMuse API running on port ${port}`);
});

require('dotenv').config();
const express = require("express");
const helmet = require('helmet');
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const { response } = require("express");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET","POST"],
  credentials: true
}));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
      key: "userId",
      secret: process.env.SESSION_SECRET || "mealmuse",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      },
    })
);

const db = mysql.createConnection({
  user: process.env.DB_USER || "root",
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "loginsystem",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Hashing error', err);
      return res.status(500).send({ error: 'Registration failed' });
    }

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, hash],
        (err, result) => {
          if (err) {
            console.error('DB insert error', err);
            return res.status(500).send({ error: 'Registration failed' });
          }
          return res.send({ success: true });
        }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user});
  } else {
    res.send({loggedIn: false});
  }
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
      "SELECT * FROM users WHERE username = ?;",
      [username],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              // store minimal data in session
              req.session.user = { id: result[0].id, username: result[0].username };
              res.send({ id: result[0].id, username: result[0].username });
            } else {
              res.send({ message: "Wrong email/password combination!" });
            }
          });
        } else {
          res.send({ message: "User doesn't exist" });
        }
      }
  );
});

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

# MealMuse

MealMuse is a restaurant discovery app that turns food preferences, dietary choices, meal type, and budget into a tailored recommendation flow. It includes the original quiz branches, restaurant result pages, account creation, and session-based sign-in experience.

## Features

- Preference-based restaurant and meal discovery
- Vegetarian, vegan, red-meat, poultry, and seafood paths
- Breakfast, lunch, dinner, and dessert recommendations
- Budget-aware result branches
- React sign-up and sign-in screens
- MySQL-backed account storage
- Bcrypt password hashing
- Session-based authentication with secure cookie settings
- Health endpoint for deployment monitoring
- Responsive visual restaurant experience with reusable components

The existing quiz and result routes are preserved. The 2026 update modernizes the build tooling and API foundation without removing those flows.

## Stack

### Client

- React 19
- Vite 7
- React Router 7
- Styled Components
- Axios

### Server

- Node.js 20.19+
- Express 5
- `mysql2`
- `express-session`
- Bcrypt
- Helmet
- CORS

## Requirements

- Node.js 20.19 or newer
- npm 10 or newer
- MySQL 8 or a compatible MySQL server

Node and npm are needed to install dependencies and run the client/server builds. `node_modules` is intentionally not committed.

## Configuration

Copy the server environment template to the repository root:

```powershell
Copy-Item .env.example .env
```

Configure the database and session values:

```dotenv
NODE_ENV=development
SESSION_SECRET=replace-with-a-long-random-value
CLIENT_ORIGINS=http://localhost:3000
DB_USER=root
DB_PASSWORD=your-password
DB_HOST=localhost
DB_NAME=loginsystem
SERVER_PORT=3001
```

The client defaults to `http://localhost:3001`. To override the API origin, create `client/.env` from [client/.env.example](client/.env.example):

```dotenv
VITE_API_URL=http://localhost:3001
```

Never commit `.env`, production credentials, or real session secrets.

## Database setup

Create the configured database and user table before using registration:

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

Passwords are stored as bcrypt hashes. The API validates username and password lengths and returns a conflict response when a username already exists.

## Install and run

Install and start the client:

```powershell
cd client
npm install
npm run dev
```

The Vite client runs at `http://localhost:3000`.

In a second terminal, install and start the API in development mode:

```powershell
cd server
npm install
npm run dev
```

The API runs at `http://localhost:3001`. Verify the API and database connection with:

```powershell
Invoke-RestMethod http://localhost:3001/health
```

An operational response looks like:

```json
{
  "status": "ok",
  "database": "connected"
}
```

## Production

Build the client:

```powershell
cd client
npm run build
npm run preview
```

Run the API with production credentials:

```powershell
cd server
$env:NODE_ENV = "production"
npm start
```

Production requirements:

- Set a strong `SESSION_SECRET`
- Set `CLIENT_ORIGINS` to the real client origin, not `*`
- Use a dedicated MySQL account with only the required permissions
- Serve the client and API over HTTPS
- Keep `.env` outside source control

The API refuses to start in production when `SESSION_SECRET` is missing.

## Validation

Run the client build and tests:

```powershell
cd client
npm run build
npm test
```

Run the server test command:

```powershell
cd server
npm test
```

The first `npm install` in each workspace refreshes the existing lockfile for the current dependency graph.

## Project structure

```text
MealMuse/
├── client/
│   ├── src/             # React pages and reusable UI components
│   ├── index.html       # Vite entry document
│   ├── vite.config.js   # Client development/build configuration
│   └── package.json
├── server/
│   ├── index.js         # Express API and session authentication
│   └── package.json
├── .env.example         # Server configuration template
└── README.md
```

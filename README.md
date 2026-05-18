# MealMuse

MealMuse is a small web app that helps users choose a restaurant based on preferences.

Getting started

- Create a `.env` file in the project root (see `.env.example`) and set the following values:
	- `SESSION_SECRET` — secret for Express session
	- `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_NAME` — MySQL connection
	- `SERVER_PORT` — optional backend port (defaults to 3001)

Frontend (React)

1. Install dependencies and run dev server:
```bash
cd client
npm install
npm start
```

2. Build for production:
```bash
cd client
npm install
npm run build
```

Backend (Node)

1. Install and start the server:
```bash
cd server
npm install
npm start
```

Notes

- The app uses MySQL. Ensure the database named in `DB_NAME` exists and the DB user has access.
- Secrets and credentials should not be committed; use `.env` (ignored via `.gitignore`).

Preparing for GitHub

- Add a repository on GitHub and push this folder as the repository root.
- Recommended files to include: `.gitignore`, `.env.example`, `README.md` (already present).

Technologies

- Frontend: React
- Backend: Node.js + Express
- Database: MySQL

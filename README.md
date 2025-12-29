
# Sushi Shop — pet project

Monorepo with a React + Vite + TypeScript client and a Node.js + Express + MongoDB server.

## Structure

- `client/` — frontend (Vite, React, TypeScript)
- `server/` — backend (Express, MongoDB/Mongoose)
- `.husky/` — Git hooks (pre-commit)

## Requirements

- Node.js (LTS recommended)
- npm
- MongoDB (local or remote)

## Environment variables

### Server (`server/.env`)

The server reads env vars via `dotenv`.

- `MONGODB_URL` — MongoDB connection string
- `PORT` — server port (default: `5000`)
- `CORS` — comma-separated allowed origins (e.g. `http://localhost:5173,http://localhost:3000`)
- `JWT_ACCESS_SECRET` — secret for access tokens
- `JWT_REFRESH_SECRET` — secret for refresh tokens

Example:

```env
MONGODB_URL=mongodb://127.0.0.1:27017/sushi
PORT=5000
CORS=http://localhost:5173
JWT_ACCESS_SECRET=change_me_access
JWT_REFRESH_SECRET=change_me_refresh
```

### Client (`client/.env` or `client/.env.local`)

- `VITE_API_URL` — API base URL

Example:

```env
VITE_API_URL=http://localhost:5000
```

## Install

Install dependencies separately for the repo root (hooks), client, and server.

```bash
# repo root (husky)
npm install

# client
cd client
npm install

# server
cd ..\server
npm install
```

## Development

Open 2 terminals.

### 1) Server

```bash
cd server
npm run dev
```

### 2) Client

```bash
cd client
npm run dev
```

## Useful commands

### Client

```bash
cd client
npm run lint
npm run format
npm run build
```

### Server

```bash
cd server
npm run dev
```

## Pre-commit

This repo has a `pre-commit` hook configured with Husky: it runs `lint-staged` in the client workspace and checks only staged files.

Run without committing:

```bash
cd .\
\\.husky\\pre-commit
```

If `lint-staged` prints `No staged files match any configured task`, stage your changes first:

```bash
git add client/src/...
```

## Notes

- If you change the API URL, update `VITE_API_URL` and restart `npm run dev` in `client/`.


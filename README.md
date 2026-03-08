# Smart Local Services Finder & Emergency Assistance System

Starter setup for a full-stack app that helps users find trusted nearby services and trigger emergency assistance quickly.

## Tech Stack
- Frontend: Angular (standalone) + Sass (SCSS)
- Backend: Node.js + Express
- Database: MongoDB + Mongoose

## Project Structure

```text
smartlocal/
  frontend/                # Angular + Sass UI
  backend/                 # Express API + Mongo models
  .gitignore
  package.json             # pnpm workspace scripts
  pnpm-workspace.yaml      # workspace packages
  README.md
```

### Angular Skeletal Architecture (Feature-Based)

```text
frontend/src/app/
  core/                    # singleton services, guards, interceptors
    guards/
    interceptors/
    services/
    core.module.ts
  shared/                  # reusable UI/pipes/directives
    components/
    pipes/
    shared.module.ts
  features/
    auth/                  # lazy-loaded auth feature
      pages/
      services/
      models/
      auth.module.ts
      auth-routing.module.ts
    dashboard/             # lazy-loaded dashboard feature
      pages/
      services/
      models/
      dashboard.module.ts
      dashboard-routing.module.ts
  models/                  # app-level models
  state/                   # app-level state contracts
  utilities/               # helpers
  app.module.ts
  app-routing.module.ts
```

## Quick Start

### 1) Install dependencies
From `smartlocal/`:

```bash
pnpm install
```

### 2) Configure environment

```bash
cp backend/.env.example backend/.env
```

Set `MONGODB_URI` in `backend/.env`.

### 3) Run backend

```bash
pnpm dev:backend
```

Backend runs on `http://localhost:5000`.

### 4) Run frontend (in another terminal)

```bash
pnpm dev:frontend
```

Angular frontend runs on `http://localhost:4200`.

## API Endpoints
- `GET /api/health`
- `GET /api/services?category=plumber&city=Hyderabad`
- `POST /api/emergency/sos`

## Included Starter Features
- MongoDB connection on server startup
- Seeded default local services if DB is empty
- Service listing with category/city filters
- SOS alert persistence in MongoDB
- Angular UI with service search and one-tap SOS flow

## Next Milestones
1. Add authentication (users/providers/admin)
2. Add provider registration and verification workflow
3. Add ratings/reviews and moderation
4. Add geospatial queries using MongoDB geospatial indexes
5. Integrate real SOS dispatch (SMS/WhatsApp/call)

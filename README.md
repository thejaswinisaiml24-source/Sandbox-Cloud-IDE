# Sandbox

**Cloud Native Online IDE & Secure Code Execution Platform**

Sandbox is a modern, cloud-native online IDE where you write, save and
securely execute code inside isolated containers — no local setup required.
Built to feel like a premium SaaS product, in the spirit of Replit, GitHub,
Vercel and Linear.

> **Status:** Phase 1 — Foundation. This phase ships the landing page,
> project scaffolding, health API, database configuration, Docker setup and
> CI pipelines. Authentication, the editor and code execution ship in later
> phases (see [Roadmap](#roadmap)).

---

## Overview

This repository contains the full foundation for Sandbox: a React + FastAPI
application designed so every later phase — authentication, project
workspaces, the code editor, the execution engine — can be added without
restructuring what's already here.

## Features

- 🎨 **Premium landing page** — dark-theme SaaS design with animated hero,
  feature grid, architecture diagram and roadmap timeline
- ⚡ **FastAPI backend** — async, typed, with a global exception handler,
  structured logging and a versioned API
- 🗄️ **PostgreSQL + SQLAlchemy + Alembic** — migration-ready database layer
- 🐳 **Fully dockerized** — dev and production Dockerfiles for every service
- 🔀 **Nginx reverse proxy** — single entrypoint for production deployments
- ✅ **CI on every push** — lint, type-check and build for both frontend and
  backend via GitHub Actions
- 📱 **Responsive by default** — desktop, tablet and mobile layouts

## Architecture

```
Browser → Nginx → ┬─ Frontend (React, static build)
                   └─ Backend (FastAPI) → PostgreSQL
```

See [`docs/architecture.md`](docs/architecture.md) for the full breakdown of
services, responsibilities and design principles.

## Tech stack

| Layer      | Technology                                                        |
|------------|---------------------------------------------------------------------|
| Frontend   | React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion, React Router, Axios, Lucide React |
| Backend    | FastAPI, Python, SQLAlchemy, Alembic, Pydantic                     |
| Database   | PostgreSQL                                                          |
| Infra      | Docker, Docker Compose, Nginx, GitHub Actions                      |

## Folder structure

```
Sandbox/
├── frontend/            React + Vite + TypeScript application
│   └── src/
│       ├── components/  landing/, layout/, ui/, common/
│       ├── pages/       route-level views
│       ├── layouts/     shared page shells
│       ├── hooks/       reusable hooks
│       ├── contexts/    React context providers
│       ├── services/    API client & typed calls
│       ├── routes/      route definitions
│       ├── config/      site-level configuration
│       └── types/       shared TypeScript types
├── backend/              FastAPI application
│   └── app/
│       ├── routers/     HTTP endpoints
│       ├── core/        logging, exception handling
│       ├── database/    SQLAlchemy engine & session
│       ├── models/      ORM models (added in later phases)
│       ├── schemas/     Pydantic request/response models
│       ├── services/    business logic (added in later phases)
│       ├── middleware/  request middleware
│       └── config/      application settings
├── database/             database-related assets
├── docker/               shared docker assets
├── nginx/                reverse proxy configuration
├── docs/                 architecture & design docs
├── scripts/              setup & dev convenience scripts
├── .github/workflows/    CI pipelines
├── docker-compose.yml
└── .env.example
```

## Installation

### Prerequisites

- Node.js 20+
- Python 3.12+
- Docker & Docker Compose (recommended path)

### Quick start with Docker (recommended)

```bash
git clone https://github.com/your-org/sandbox.git
cd sandbox
cp .env.example .env
docker compose up --build
```

- Frontend → http://localhost:5173
- Backend API → http://localhost:8000/api/v1
- Swagger UI → http://localhost:8000/api/docs
- Full stack via reverse proxy → http://localhost

### Manual setup (without Docker)

```bash
./scripts/setup.sh   # installs frontend & backend dependencies
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

**Backend**

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
cp .env.example .env
uvicorn app.main:app --reload
```

## Development

| Command                          | Description                        |
|-----------------------------------|-------------------------------------|
| `npm run dev` (in `frontend/`)    | Start the Vite dev server           |
| `npm run lint`                    | Lint the frontend                   |
| `npm run typecheck`               | Type-check the frontend             |
| `npm run build`                   | Production build                    |
| `pytest -q` (in `backend/`)       | Run backend tests                   |
| `ruff check .` (in `backend/`)    | Lint the backend                    |
| `alembic revision --autogenerate` | Generate a new migration            |
| `alembic upgrade head`            | Apply migrations                    |

## Docker

| Command                          | Description                          |
|-----------------------------------|----------------------------------------|
| `docker compose up --build`       | Build and start the full stack       |
| `docker compose down`             | Stop all services                    |
| `docker compose logs -f backend`  | Tail backend logs                    |

## Roadmap

- ✅ **Phase 1 — Foundation** — landing page, scaffolding, health API, Docker & CI
- ⏭️ **Phase 2 — Authentication & Workspaces** — user accounts, project management, file storage
- ⏭️ **Phase 3 — Code Execution** — Monaco editor, Docker execution engine, multi-language runtimes
- ⏭️ **Phase 4 — Platform & Insights** — AI assistance, monitoring, analytics, admin panel

## Screenshots

_Add screenshots of the landing page here once deployed — e.g. `docs/screenshots/hero.png`._

## Future features

- Real-time collaborative editing
- One-click project templates
- Language-specific execution sandboxes
- Team workspaces and shared environments

## License

Distributed under the [MIT License](LICENSE).

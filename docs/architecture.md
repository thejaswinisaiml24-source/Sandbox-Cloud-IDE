# Architecture

## Request flow

```
Browser
  │  HTTPS
  ▼
Nginx (reverse proxy)
  │
  ├── /            → Frontend (React static build)
  └── /api/*       → Backend (FastAPI)
                         │
                         ▼
                    PostgreSQL
```

## Services

| Service    | Responsibility                                   | Port |
|------------|---------------------------------------------------|------|
| `frontend` | React SPA — UI, routing, API calls                | 5173 (dev) / 80 |
| `backend`  | FastAPI — REST API, business logic, DB access      | 8000 |
| `database` | PostgreSQL — durable relational storage            | 5432 |
| `nginx`    | Reverse proxy — single public entrypoint           | 80   |

## Design principles

- **Stateless services** — the frontend and backend hold no session state in-process, so either can scale horizontally behind the proxy.
- **Layered backend** — routers depend on services, services depend on the database layer; no layer reaches past the one below it.
- **Config via environment** — all runtime configuration is read from environment variables (see `.env.example`), never hard-coded.
- **Isolation-ready** — the folder layout leaves room for a dedicated execution engine and container orchestration layer in Phase 3, without restructuring what exists today.

#!/usr/bin/env bash
# One-time local setup: installs frontend and backend dependencies.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "==> Installing frontend dependencies"
(cd "$ROOT_DIR/frontend" && npm install)

echo "==> Creating backend virtual environment"
(cd "$ROOT_DIR/backend" && python3 -m venv .venv && ./.venv/bin/pip install -r requirements-dev.txt)

if [ ! -f "$ROOT_DIR/.env" ]; then
  cp "$ROOT_DIR/.env.example" "$ROOT_DIR/.env"
  echo "==> Created .env from .env.example — review it before running"
fi

echo "==> Setup complete. Run scripts/dev.sh to start the stack."

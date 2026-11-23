# Special Education Needs API

Initial FastAPI + PostgreSQL backend foundation.

## Local setup
1. Create a virtual environment and install `requirements.txt`.
2. Copy `.env.example` to `.env` and replace the secrets/passwords.
3. From the repository root, start PostgreSQL with `docker compose up -d db`.
4. From `backend/`, run `uvicorn app.main:app --reload`.

API docs: `http://localhost:8000/docs`

## Current endpoints
- `GET /health`
- `GET /api/v1/health`
- `GET /api/v1/courses`
- `POST /api/v1/admin/courses` (development-only; NOT protected yet)

## Production blockers
This is not production-ready. Before real student data or payments:
- Implement OTP delivery and verification with a trusted provider.
- Add JWT login, refresh, password/OTP rate limits, and admin role authorization.
- Protect every admin endpoint; remove the temporary unprotected admin route.
- Add Alembic migrations, audit logs, input validation, backups, HTTPS and monitoring.
- Configure secrets outside Git; never commit real credentials.
- Add payment provider webhooks with signature verification and idempotency.

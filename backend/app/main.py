from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select, text
from sqlalchemy.orm import Session
from app.core.config import settings
from app.db import Base, engine, get_db
from app.models import Course
from app.schemas import CourseCreate, CourseResponse, HealthResponse

app = FastAPI(title=settings.app_name, version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "DELETE"],
    allow_headers=["Authorization", "Content-Type"],
)

@app.on_event("startup")
def startup():
    # For local development only. Use Alembic migrations before production.
    if settings.environment == "development":
        Base.metadata.create_all(bind=engine)

@app.get("/health", response_model=HealthResponse)
def health():
    return HealthResponse(status="ok", app=settings.app_name)

@app.get(f"{settings.api_prefix}/health")
def api_health(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
    except Exception as exc:
        raise HTTPException(status_code=503, detail="Database unavailable") from exc
    return {"status": "ok", "database": "connected"}

@app.get(f"{settings.api_prefix}/courses", response_model=list[CourseResponse])
def list_courses(db: Session = Depends(get_db)):
    return list(db.scalars(select(Course).where(Course.is_published.is_(True)).order_by(Course.created_at.desc())))

@app.post(f"{settings.api_prefix}/admin/courses", response_model=CourseResponse, status_code=201)
def create_course(payload: CourseCreate, db: Session = Depends(get_db)):
    # Temporary development endpoint. Protect with admin JWT authorization before deployment.
    course = Course(**payload.model_dump())
    db.add(course)
    db.commit()
    db.refresh(course)
    return course

from datetime import datetime
from pydantic import BaseModel, ConfigDict, EmailStr, Field

class HealthResponse(BaseModel):
    status: str
    app: str

class CourseCreate(BaseModel):
    title: str = Field(min_length=2, max_length=220)
    description: str = ""
    language: str = "hi"
    price_paise: int = Field(default=0, ge=0)
    is_published: bool = False

class CourseResponse(CourseCreate):
    id: int
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

class UserCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=160)
    email: EmailStr | None = None
    phone: str | None = Field(default=None, min_length=10, max_length=20)

class UserResponse(BaseModel):
    id: int
    full_name: str
    email: str | None
    phone: str | None
    role: str
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

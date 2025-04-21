from typing import Optional

from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    """
    Base schema for User objects.
    """
    username: str
    email: EmailStr
    is_active: Optional[bool] = True

class UserCreate(UserBase):
    """
    Schema for creating a new User.
    """
    password: str

class UserRead(UserBase):
    """
    Schema for reading User objects.
    """
    id: int
    
    class Config:
        from_attributes = True
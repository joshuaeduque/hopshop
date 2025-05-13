from typing import Optional

from pydantic import BaseModel, EmailStr, field_validator


class UserBase(BaseModel):
    """
    Base schema for User objects.
    """

    username: str
    email: EmailStr
    is_active: Optional[bool] = True
    is_admin: Optional[bool] = False


class UserCreate(UserBase):
    """
    Schema for creating a new User.
    """

    # Add password field for creating a new user
    password: str

    @field_validator("password")
    def password_must_be_strong(cls, v):
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters long")
        return v


class UserRead(UserBase):
    """
    Schema for reading User objects.
    """

    id: int

    class Config:
        from_attributes = True


# Add this new schema for admin views that include password hash
class UserWithPasswordHash(UserRead):
    """
    Schema for admin views that include the password hash.
    This should only be used in secured admin endpoints.
    """

    hashed_password: str

    class Config:
        from_attributes = True

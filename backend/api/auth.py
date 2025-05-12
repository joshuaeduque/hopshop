from datetime import datetime, timedelta, timezone
from typing import Any

from fastapi import APIRouter, Body, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from jose import jwt
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr
from sqlmodel import select

from backend.core.config import settings
from backend.core.security import create_access_token as security_create_access_token
from backend.core.security import (
    create_password_reset_token,
    get_password_hash,
    verify_password,
    verify_password_reset_token,
)
from backend.db.database import SessionDep
from backend.db.models.user import User
from backend.utils.email import send_password_reset_email

# Password hashing settings
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT settings
SECRET_KEY = settings.SECRET_KEY  # Add this to your settings
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

router = APIRouter(prefix="/auth", tags=["auth"])


# Schema for login request
class LoginRequest(BaseModel):
    username: str
    password: str


# Schema for token response
class Token(BaseModel):
    access_token: str
    token_type: str
    user: dict


# Schema for password reset request
class PasswordResetRequest(BaseModel):
    email: EmailStr


# Schema for password reset confirmation
class PasswordReset(BaseModel):
    token: str
    new_password: str


def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


@router.post("/login", response_model=Token)
async def login(
    session: SessionDep,
    request: LoginRequest = None,
    form_data: OAuth2PasswordRequestForm = Depends(None),
):
    """
    Login endpoint that accepts both JSON and form data
    """
    # Determine if we're using form data or JSON
    username = (
        form_data.username if form_data else request.username if request else None
    )
    password = (
        form_data.password if form_data else request.password if request else None
    )

    if not username or not password:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Username and password are required",
        )

    # Find the user in the database
    user = session.exec(select(User).where(User.username == username)).first()

    # Check if user exists and password is correct
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Generate access token with admin status included
    access_token = create_access_token(
        data={"sub": str(user.id), "username": user.username, "is_admin": user.is_admin}
    )

    # Return token and user data
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {"id": user.id, "username": user.username, "email": user.email},
    }


@router.post("/token", response_model=Token)
async def login_for_access_token(
    session: SessionDep,
    form_data: OAuth2PasswordRequestForm = Depends(),
):
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    # Find the user in the database
    user = session.exec(select(User).where(User.username == form_data.username)).first()

    # Check if user exists and password is correct
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Generate access token with admin status included
    access_token = create_access_token(
        data={"sub": str(user.id), "username": user.username, "is_admin": user.is_admin}
    )

    # Return token in the format expected by OAuth2
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {"id": user.id, "username": user.username, "email": user.email},
    }


@router.post("/password-recovery/{email}", response_model=dict)
async def recover_password(email: str, session: SessionDep) -> Any:
    """
    Password Recovery

    Send a password recovery email to the user.
    """
    user = session.exec(select(User).where(User.email == email)).first()

    # Always return success to prevent email enumeration attacks
    if not user:
        return {"message": "Password recovery email sent"}

    password_reset_token = create_password_reset_token(email=email)
    send_password_reset_email(email_to=user.email, token=password_reset_token)

    return {"message": "Password recovery email sent"}


@router.post("/reset-password", response_model=dict)
async def reset_password(
    session: SessionDep,
    body: PasswordReset = Body(...),
) -> Any:
    """
    Reset password

    Reset the user's password using a token received by email.
    """
    email = verify_password_reset_token(token=body.token)
    if not email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid token",
        )

    user = session.exec(select(User).where(User.email == email)).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    # Hash the new password and update the user
    hashed_password = get_password_hash(body.new_password)
    user.hashed_password = hashed_password
    session.add(user)
    session.commit()

    return {"message": "Password updated successfully"}

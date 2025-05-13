import secrets
from datetime import datetime, timedelta, timezone
from typing import Any, Dict, Optional

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr
from sqlmodel import select

from backend.core.config import settings
from backend.db.database import SessionDep
from backend.db.models.user import User

# Password hashing settings
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT settings
SECRET_KEY = settings.SECRET_KEY
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
PASSWORD_RESET_TOKEN_EXPIRE_MINUTES = 30  # Token valid for 30 minutes

# OAuth2 scheme for token extraction
oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_STR}/auth/token")


class TokenData(BaseModel):
    username: Optional[str] = None
    is_admin: Optional[bool] = False


async def get_current_user(
    session: SessionDep,
    token: str = Depends(oauth2_scheme),
) -> User:
    """
    Validate the access token and return the current user.
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("username")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception

    user = session.exec(
        select(User).where(User.username == token_data.username)
    ).first()
    if user is None:
        raise credentials_exception

    return user


async def get_current_admin_user(
    current_user: User = Depends(get_current_user),
) -> User:
    """
    Check if the current user is an admin.
    """
    # You'll need to add an is_admin field to your User model
    if not getattr(current_user, "is_admin", False):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Not enough permissions"
        )
    return current_user


def get_password_hash(password: str) -> str:
    """
    Hash a password for storing.
    """
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verify a stored password against a provided password.
    """
    return pwd_context.verify(plain_password, hashed_password)


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """
    Create a JWT access token.
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(
            minutes=ACCESS_TOKEN_EXPIRE_MINUTES
        )
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def create_password_reset_token(email: str) -> str:
    """
    Create a password reset token.
    """
    delta = timedelta(minutes=PASSWORD_RESET_TOKEN_EXPIRE_MINUTES)
    now = datetime.now(datetime.timezone.utc)
    expires = now + delta
    exp = expires.timestamp()
    encoded_jwt = jwt.encode(
        {"exp": exp, "nbf": now.timestamp(), "sub": email, "type": "password_reset"},
        SECRET_KEY,
        algorithm=ALGORITHM,
    )
    return encoded_jwt


def verify_password_reset_token(token: str) -> Optional[str]:
    """
    Verify a password reset token and return the email if valid.
    """
    try:
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        if decoded_token["type"] != "password_reset":
            return None
        return decoded_token["sub"]
    except jwt.JWTError:
        return None
        return None

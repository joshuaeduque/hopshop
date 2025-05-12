# users.py
# file path: hopshop/backend/api/users.py
# This file defines the API endpoints for user management.
#
"""
This module defines the API endpoints for users.
"""

from typing import Dict, List

from fastapi import APIRouter, Depends, HTTPException, Query, Security
from passlib.context import CryptContext
from sqlmodel import Session, select

from backend.core.config import settings
from backend.core.security import create_password_reset_token, get_current_admin_user
from backend.db.database import SessionDep, get_session
from backend.db.models.user import User
from backend.schemas.user import UserCreate, UserRead, UserWithPasswordHash
from backend.utils.email import send_password_reset_email

router = APIRouter(prefix="/users", tags=["users"])

# Password hashing settings
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


@router.post("/", response_model=UserRead)
def create_user(
    user_data: UserCreate, session: Session = Depends(get_session)
) -> UserRead:
    """
    Create a new user in the database.

    Args:
        user_data (UserCreate): The user data to create a new user.
        session (Session): The database session dependency.

    Returns:
        UserRead: The created user object.

    Raises:
        HTTPException: If the user already exists, raises a 400 HTTP exception.
    """
    existing_user = session.exec(
        select(User).where(User.email == user_data.email)
    ).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    # Hash the password
    hashed_password = get_password_hash(user_data.password)

    # Create a new User object
    db_user = User(
        username=user_data.username,
        email=user_data.email,
        is_active=user_data.is_active,
        hashed_password=hashed_password,
    )

    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user


@router.get("/", response_model=List[UserRead])
def read_users(
    session: Session = Depends(get_session),
    offset: int = Query(0, ge=0),
    limit: int = Query(100, le=100),
) -> List[UserRead]:
    """
    Fetch a list of users from the database.

    Args:
        session (Session): The database session dependency.
        offset (int): The number of records to skip (default is 0).
        limit (int): The maximum number of records to return (default is 100).

    Returns:
        List[UserRead]: A list of UserRead objects.

    Raises:
        HTTPException: If no users are found, raises a 404 HTTP exception.
    """
    users = session.exec(select(User).offset(offset).limit(limit)).all()
    if users is None:
        raise HTTPException(status_code=404, detail="No users found")
    return users


@router.get("/{user_id}", response_model=UserRead)
def read_user(user_id: int, session: SessionDep):
    """Get a specific user by ID."""
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.post("/admin/reset-user-password/{user_id}", response_model=Dict[str, str])
def admin_reset_user_password(
    user_id: int,
    session: SessionDep,
    current_admin: User = Depends(get_current_admin_user),
):
    """
    Admin endpoint to trigger a password reset for a user.
    Sends a password reset email to the user.
    Requires admin privileges.
    """
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Create a password reset token and send email
    password_reset_token = create_password_reset_token(email=user.email)
    send_password_reset_email(email_to=user.email, token=password_reset_token)

    return user


# Secure admin endpoint with admin authentication
@router.get("/admin/users/{user_id}", response_model=UserWithPasswordHash)
def read_user_with_password_hash(
    user_id: int,
    session: SessionDep,
    current_admin: User = Depends(get_current_admin_user),
):
    """
    Admin endpoint to get a specific user by ID including password hash.
    Requires admin privileges.
    """
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


# Secure password verification endpoint with admin authentication
@router.post("/admin/verify-password", response_model=Dict[str, bool])
def verify_user_password(
    user_id: int,
    plain_password: str,
    session: SessionDep,
    current_admin: User = Depends(get_current_admin_user),
):
    """
    Admin endpoint to verify if a plain password matches a user's stored hash.
    Requires admin privileges.
    """
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Verify the password against the stored hash
    is_valid = pwd_context.verify(plain_password, user.hashed_password)

    return {"password_matches": is_valid}

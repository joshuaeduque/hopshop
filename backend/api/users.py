# users.py
# file path: hopshop/backend/api/users.py
# This file defines the API endpoints for user management.
#
"""
This module defines the API endpoints for users.
"""
from typing import List

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select

from backend.db.database import SessionDep, get_session
from backend.db.models.user import User
from backend.schemas.user import UserRead

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/", response_model=UserRead)
def create_user(
    db_user: UserRead,
    session: Session = Depends(get_session)
) -> UserRead:
    """
    Create a new user in the database.

    Args:
        user (UserRead): The user object to be created.
        session (Session): The database session dependency.

    Returns:
        UserRead: The created user object.

    Raises:
        HTTPException: If the user already exists, raises a 400 HTTP exception.
    """
    existing_user = session.exec(select(User).where(User.email == db_user.email)).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")
    
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user

@router.get("/", response_model=List[UserRead])
def read_users(
    session: Session = Depends(get_session),
    offset: int = Query(0, ge=0),
    limit: int = Query(100, le=100)
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
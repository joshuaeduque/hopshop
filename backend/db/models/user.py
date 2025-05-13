from typing import Optional

from sqlmodel import Field, SQLModel


class User(SQLModel, table=True):
    """
    User model for the database.
    """

    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(index=True)
    email: str = Field(unique=True, index=True)
    hashed_password: str
    is_active: bool = True
    is_admin: bool = False

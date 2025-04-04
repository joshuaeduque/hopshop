from typing import Optional

from sqlmodel import Field, SQLModel


class User(SQLModel, table=True):
    """
    Represents a user in the database.
    
    Attributes:
        id (Optional[int]): The unique identifier of the user.
        username (str): The username of the user.
        email (str): The email address of the user.
        hashed_password (str): The hashed password of the user.
        is_active (bool): Whether the user is active.
    """
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(index=True, unique=True)
    email: str = Field(index=True)
    hashed_password: str
    is_active: bool = Field(default=True)
    
    # Add relationships if needed
    # items: List["Item"] = Relationship(back_populates="owner")
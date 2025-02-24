# neon.py
# file path: hopshop/backend/db/models/neon.py
# This file defines the Neon database model.
#

from typing import Optional
from sqlmodel import SQLModel, Field
# TODO: use this as boiler plate for other database models
class Neon(SQLModel, table=True):
    """
    Represents a neon object in the database.

    Attributes:
        id (Optional[int]): The unique identifier of the neon.
        name (str): The name of the neon.
        value (float): The value of the neon.
    """
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    value: float = Field(default=0)
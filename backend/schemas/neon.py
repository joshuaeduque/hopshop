# neon.py
# file path: hopshop/backend/schemas/neon.py
# This file defines the pydantic schemas for neon objects.
#

from typing import Optional

from pydantic import BaseModel


# TODO: use this as boiler plate for other table schemas
class NeonBase(BaseModel):
    """
    NeonBase is a Pydantic model that represents a base schema for neon objects.

    Attributes:
        name (str): The name of the neon object.
        value (Optional[float]): The value associated with the neon object. Defaults to 0.
    """
    name: str
    value: Optional[float] = 0

class NeonCreate(NeonBase):
    """
    NeonCreate schema class for creating a new Neon instance.

    This class inherits from NeonBase and currently does not add any additional
    attributes or methods. It serves as a placeholder for future extensions
    specific to the creation of Neon instances.
    """
    pass

class NeonRead(NeonBase):
    """
    NeonRead schema class that inherits from NeonBase.

    Attributes:
        id (int): The unique identifier for the NeonRead instance.

    Config:
        from_attributes (bool): Configuration to enable attribute-based model creation.
    """
    id: int

    class Config:
        from_attributes = True
from pydantic import BaseModel
from typing import Optional

class NeonBase(BaseModel):
    name: str
    value: Optional[float] = 0

class NeonCreate(NeonBase):
    pass

class NeonRead(NeonBase):
    id: int

    class Config:
        from_attributes = True
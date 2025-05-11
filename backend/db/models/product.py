from typing import Optional

from sqlmodel import Field, SQLModel

class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    img_url: str = Field(index=True)
    name: str = Field(index=True)
    description: str = Field(index=True)
    price: int = Field(index=True)
    category: str = Field(index=True)
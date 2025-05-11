from pydantic import BaseModel

class ProductBase(BaseModel):
    img_url: str
    name: str
    description: str
    price: int
    category: str

class ProductCreate(ProductBase):
    id: int

class ProductRead(ProductBase):
    id: int
    
    class Config:
        from_attributes = True
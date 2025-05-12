from pydantic import BaseModel

class ProductBase(BaseModel):
    image_url: str
    name: str
    description: str
    price: int
    category: str

class ProductCreate(ProductBase):
    pass

class ProductRead(ProductBase):
    id: int
    
    class Config:
        from_attributes = True
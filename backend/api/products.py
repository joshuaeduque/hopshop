from typing import List

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select

from backend.db.database import SessionDep, get_session

from backend.db.models.product import Product
from backend.schemas.product import ProductRead

router = APIRouter(prefix="/products", tags=["products"])

@router.get("/{id}", response_model=ProductRead)
def read_product(id: int, session: SessionDep = Depends(get_session)):
    
    product = session.get(Product, id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
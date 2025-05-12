from typing import List

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select

from backend.db.database import SessionDep, get_session

from backend.db.models.product import Product
from backend.schemas.product import ProductRead, ProductCreate

router = APIRouter(prefix="/products", tags=["products"])


@router.get("/{id}", response_model=ProductRead)
def read_product(id: int, session: SessionDep) -> ProductRead:
    product = session.get(Product, id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@router.post("/", response_model=ProductRead)
def create_product(
    db_product: ProductCreate, session: Session = Depends(get_session)
) -> ProductRead:
    product = Product(**db_product.model_dump())
    session.add(product)
    session.commit()
    session.refresh(product)
    return product

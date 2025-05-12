from typing import List

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select

from backend.db.database import SessionDep, get_session

from backend.db.models.product import Product
from backend.schemas.product import ProductRead, ProductCreate

router = APIRouter(prefix="/products", tags=["products"])


@router.get("/", response_model=list[ProductRead])
def list_products(
    category: str | None = Query(None),
    offset: int = Query(0, ge=0),
    limit: int = Query(100, le=100),
    session: Session = Depends(get_session),
) -> list[ProductRead]:
    query = select(Product)
    if category:
        query = query.where(Product.category == category)
    query = query.offset(offset).limit(limit)
    return session.exec(query).all()


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

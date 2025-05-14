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
    """
    Retrieve a list of products with optional filtering by category and pagination.
    Args:
        category (str | None): The category to filter products by. Defaults to None.
        offset (int): The number of products to skip for pagination. Must be >= 0. Defaults to 0.
        limit (int): The maximum number of products to return. Must be <= 100. Defaults to 100.
        session (Session): The database session dependency.
    Returns:
        list[ProductRead]: A list of products matching the specified criteria.
    """

    query = select(Product)
    if category:
        query = query.where(Product.category == category)
    query = query.offset(offset).limit(limit)
    return session.exec(query).all()


@router.get("/{id}", response_model=ProductRead)
def read_product(id: int, session: SessionDep) -> ProductRead:
    """
    Retrieve a product by its ID from the database.
    Args:
        id (int): The unique identifier of the product to retrieve.
        session (SessionDep): The database session dependency used to query the database.
    Returns:
        ProductRead: The product data retrieved from the database.
    Raises:
        HTTPException: If the product with the given ID is not found, raises a 404 error.
    """

    product = session.get(Product, id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@router.post("/", response_model=ProductRead)
def create_product(
    db_product: ProductCreate, session: Session = Depends(get_session)
) -> ProductRead:
    """
    Creates a new product in the database.
    Args:
        db_product (ProductCreate): The data required to create a new product.
        session (Session, optional): The database session dependency. Defaults to the result of `get_session`.
    Returns:
        ProductRead: The newly created product with its details.
    """

    product = Product(**db_product.model_dump())
    session.add(product)
    session.commit()
    session.refresh(product)
    return product

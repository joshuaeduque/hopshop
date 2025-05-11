from sqlmodel import Session, select

from ..db.models.product import Product

def get_product(session: Session, id: int) -> Product | None:
    statement = select(Product).where(Product.id == id)
    return session.exec(statement).one_or_none()
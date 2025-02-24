from typing import List
from sqlmodel import Session, select
from db.models.neon import Neon

def get_all_neons(session: Session, offset: int = 0, limit: int = 100) -> List[Neon]:
    statement = select(Neon).offset(offset).limit(limit)
    return session.exec(statement).all()
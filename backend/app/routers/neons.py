from fastapi import APIRouter, Query, Depends
from sqlmodel import select, Session
from typing import Annotated

from app.db import get_session, SessionDep
from app.models.neons import Neons

router = APIRouter()

@router.get('/neons', response_model=list[Neons])
async def neons(session: SessionDep, offset: int = 0, limit: Annotated[int, Query(le=100)] = 100) -> list[Neons]:
    neons = session.exec(select(Neons).offset(offset).limit(limit)).all()
    return neons
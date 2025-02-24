from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List
from sqlmodel import Session
from db.database import get_session
from services.neon_service import get_all_neons
from schemas.neon import NeonRead

router = APIRouter()

@router.get('/neons', response_model=List[NeonRead])
def read_neons(
    session: Session = Depends(get_session),
    offset: int = Query(0, ge=0),
    limit: int = Query(100, le=100)
) -> List[NeonRead]:
    neons = get_all_neons(session, offset, limit)
    if neons is None:
        raise HTTPException(status_code=404, detail="No neons found")
    return neons
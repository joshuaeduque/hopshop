# neons.py
# file path: hopshop/backend/api/neons.py
# This file defines the API endpoints for managing neon objects.
#
from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List
from sqlmodel import Session
from db.database import get_session
from services.neon_service import get_all_neons
from schemas.neon import NeonRead

router = APIRouter()
# TODO: use this as boiler plate for other routers
@router.get('/neons', response_model=List[NeonRead])
def read_neons(
    session: Session = Depends(get_session),
    offset: int = Query(0, ge=0),
    limit: int = Query(100, le=100)
) -> List[NeonRead]:
    """
    Fetch a list of neons from the database.

    Args:
        session (Session): The database session dependency.
        offset (int): The number of records to skip (default is 0).
        limit (int): The maximum number of records to return (default is 100).

    Returns:
        List[NeonRead]: A list of NeonRead objects.

    Raises:
        HTTPException: If no neons are found, raises a 404 HTTP exception.
    """
    neons = get_all_neons(session, offset, limit)
    if neons is None:
        raise HTTPException(status_code=404, detail="No neons found")
    return neons
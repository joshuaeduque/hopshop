# neon_service.py
# file path: hopshop/backend/services/neon_service.py
# This file defines the services for managing neon objects.
#

from typing import List

from sqlmodel import Session, select

from ..db.models.neon import Neon


# TODO: use this as boiler plate for other services
def get_all_neons(session: Session, offset: int = 0, limit: int = 100) -> List[Neon]:
    """
    Retrieves all neons from the database with pagination.

    Args:
        session (Session): The database session.
        offset (int, optional): The offset to start retrieving neons from. Defaults to 0.
        limit (int, optional): The maximum number of neons to retrieve. Defaults to 100.

    Returns:
        List[Neon]: A list of Neon objects.
    """
    statement = select(Neon).offset(offset).limit(limit)
    return session.exec(statement).all()
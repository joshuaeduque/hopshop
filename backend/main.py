# main.py
# file path: hopshop/backend/main.py
# This file defines the main application and includes API endpoints and configurations.
#
"""
this module defines the main application and includes API endpoints and configurations.
"""

from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from sqlmodel import Session, select

from backend.api.auth import router as auth_router
from backend.api.neons import router as neon_router
from backend.api.users import router as user_router
from backend.core.config import settings
from backend.db.database import create_db_and_tables, engine
from backend.db.models.user import User

app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.DESCRIPTION,
    version=settings.VERSION,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
)

origins = settings.BACKEND_CORS_ORIGINS

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Context manager for the lifespan of the FastAPI application.

    This function is executed when the application starts up and shuts down.
    It is used to perform tasks such as creating the database and tables.

    Args:
        app (FastAPI): The FastAPI application instance.

    Yields:
        None
    """
    create_db_and_tables()
    yield


app.router.lifespan_context = lifespan

app.include_router(neon_router, prefix=settings.API_V1_STR)
app.include_router(user_router, prefix=settings.API_V1_STR)
app.include_router(auth_router, prefix=settings.API_V1_STR)


@app.get("/", tags=["utils"])
def root():
    """
    Root endpoint for the API.

    Returns:
        dict: A dictionary containing a message.
    """
    return {"message": "Hello World"}


# Use Path for cross-platform compatibility
IMAGES_DIR = Path(__file__).parent / "images"


@app.get("/pacman", tags=["utils"])
def pacman():
    """Endpoint to serve the pacman image."""
    image_path = IMAGES_DIR / "pacman.jpg"
    if not image_path.exists():
        raise HTTPException(status_code=404, detail="Image not found")
    return FileResponse(str(image_path))


@app.get("/api/v1/test-db", tags=["utils"])
async def test_db():
    """Test database connection"""
    try:
        with Session(engine) as session:
            # Try a simple query
            result = session.exec(select(User)).first()
            return result
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Database connection failed: {str(e)}"
        )

# main.py
# file path: hopshop/backend/main.py
# This file defines the main application and includes API endpoints and configurations.
#
"""
this module defines the main application and includes API endpoints and configurations.
"""
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from db.database import create_db_and_tables
from api.neons import router as neon_router
from core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.DESCRIPTION,
    version=settings.VERSION,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

origins = settings.BACKEND_CORS_ORIGINS

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
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

@app.get('/')
def root():
    """
    Root endpoint for the API.

    Returns:
        dict: A dictionary containing a message.
    """
    return {'message': 'Hello World'}

@app.get('/pacman')
def pacman():
    """
    Endpoint to serve the pacman image.

    Returns:
        FileResponse: A FileResponse object containing the pacman image.
    """
    return FileResponse('images/pacman.jpg')
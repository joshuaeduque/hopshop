# System imports
import os
from pathlib import Path
from contextlib import asynccontextmanager

# Library imports
from typing import Annotated
from dotenv import load_dotenv
from fastapi import FastAPI, Depends, Query
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import create_engine, SQLModel, Session, select

# Project imports
from models.neons import Neons

# TODO this needs a lot of work like error checking, proper file structure, etc.

# Get environment variables
# NOTE .env file is at the root directory

load_dotenv(dotenv_path=Path('../.env'))

pg_user = os.getenv('PGUSER')
pg_password = os.getenv('PGPASSWORD')
pg_host = os.getenv('PGHOST')
pg_database = os.getenv('PGDATABASE')

# Create the FastAPI app

app = FastAPI()

# Setup CORS for the app

origins = [
    'http://localhost',
    'https://localhost',
    'http://localhost:3000',
    'https://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

# Create the database engine

postgresql_url = f'postgresql://{pg_user}:{pg_password}@{pg_host}/{pg_database}?sslmode=require'
engine = create_engine(postgresql_url)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]

# Setup async context manager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    create_db_and_tables()
    yield
    # Shutdown (none atm)

# Setup API routes

@app.get('/')
async def root():
    return { 'message': 'Hello World' }

@app.get('/pacman')
async def pacman():
    return FileResponse('images/pacman.jpg')

@app.get('/neons')
async def neons(session: SessionDep, offset: int = 0, limit: Annotated[int, Query(le=100)] = 100) -> list[Neons]:
    neons = session.exec(select(Neons).offset(offset).limit(limit)).all()
    return neons

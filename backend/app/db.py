import os
from pathlib import Path
from typing import Annotated

from fastapi import Depends
from dotenv import load_dotenv
from sqlmodel import create_engine, Session, SQLModel

# Load environment variables from the .env file at the project's root directory
load_dotenv(dotenv_path=Path('../.env'))

# Retrieve database credentials from environment variables
pg_user = os.getenv('PGUSER')
pg_password = os.getenv('PGPASSWORD')
pg_host = os.getenv('PGHOST')
pg_database = os.getenv('PGDATABASE')

# Create the PostgreSQL connection url
postgresql_url = f'postgresql://{pg_user}:{pg_password}@{pg_host}/{pg_database}?sslmode=require'

# Create the database engine
engine = create_engine(postgresql_url)

# TODO document this
def get_session():
    with Session(engine) as session:
        yield session

# TODO document this
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

# Annotated type for dependency injection in routes
SessionDep = Annotated[Session, Depends(get_session)]
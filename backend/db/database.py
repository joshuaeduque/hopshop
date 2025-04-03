# database.py
# file path: backend/db/database.py
# This file defines the database connection and session management.
#
"""
This module defines the database connection and session management.

The module provides a SQLAlchemy engine for connecting to the PostgreSQL database
and a function for creating a new session for database operations. The session
is automatically closed when the context is exited.

"""
import os
from typing import Annotated
from urllib.parse import quote_plus

from fastapi import Depends
from dotenv import load_dotenv
from sqlmodel import create_engine, Session, SQLModel


# Load environment variables from the .env file at the project's root directory
load_dotenv(dotenv_path=".env")

# Retrieve database credentials from environment variables
pg_user = os.getenv('PGUSER')
pg_password = quote_plus(os.getenv('PGPASSWORD', ''))  # URL encode password
pg_host = os.getenv('PGHOST')
pg_database = os.getenv('PGDATABASE')
pg_schema = os.getenv('PGSCHEMA', 'public')  # Retrieve the schema from the environment variables
NEXTAUTH_SECRET = os.getenv("SECRET_KEY", "a-very-secret-key-that-should-be-in-env")

# Create the PostgreSQL connection url (Windows-friendly)
postgresql_url = f'postgresql://{pg_user}:{pg_password}@{pg_host}/{pg_database}'

# Create the database engine
# Add the schema to the engine's URL
search_path = f'{pg_schema},public'  # Set the search path to include the specified schema and public to ensure tables are created in the correct schema
engine = create_engine(postgresql_url, connect_args={'options': f'-csearch_path={search_path}'})

def get_session():
    """
    Provides a SQLAlchemy session for database operations.

    This function is a generator that yields a new session object
    from the SQLAlchemy engine. The session is automatically closed
    when the context is exited.

    Yields:
        session (Session): A SQLAlchemy session object for database operations.
    """
    with Session(engine) as session:
        yield session

def create_db_and_tables():
    """
    Create the database and all tables defined in the SQLModel metadata.

    This function initializes the database by creating all tables that are
    defined in the SQLModel metadata. It uses the `create_all` method of the
    SQLAlchemy engine to create the tables.

    Note:
        Ensure that the `engine` is properly configured and connected to the
        desired database before calling this function.
    """
    SQLModel.metadata.create_all(engine)

# Annotated type for dependency injection in routes
SessionDep = Annotated[Session, Depends(get_session)]

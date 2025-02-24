import os
from typing import Annotated

from fastapi import Depends
from dotenv import load_dotenv
from sqlmodel import create_engine, Session, SQLModel

# Load environment variables from the .env file at the project's root directory
load_dotenv()

# Retrieve database credentials from environment variables
pg_user = os.getenv('PGUSER')
pg_password = os.getenv('PGPASSWORD')
pg_host = os.getenv('PGHOST')
pg_database = os.getenv('PGDATABASE')
pg_schema = os.getenv('PGSCHEMA')  # Retrieve the schema from the environment variables

# Create the PostgreSQL connection url
postgresql_url = f'postgresql://{pg_user}:{pg_password}@{pg_host}/{pg_database}?sslmode=disable'

# Create the database engine
# Add the schema to the engine's URL
engine = create_engine(postgresql_url, connect_args={'options': f'-csearch_path={pg_schema}'})

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
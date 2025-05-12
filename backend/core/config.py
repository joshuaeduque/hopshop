# config.py
# file path: backend/core/config.py
# This file defines the configuration settings for the application.

"""_summary_
This module defines the configuration settings for the application.
"""


from typing import List, Union

from pydantic import field_validator
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """
    Settings class for the application.

    Attributes:
        API_V1_STR (str): The base URL for the API version 1.
        PROJECT_NAME (str): The name of the project.
        DESCRIPTION (str): A description of the project.
        VERSION (str): The version of the project.
        BACKEND_CORS_ORIGINS (List[str]): A list of allowed origins for CORS.
    """
    # PostgreSQL settings
    PGUSER: str
    PGPASSWORD: str
    PGHOST: str
    PGPORT: str = "5432"
    PGDATABASE: str
    PGSCHEMA: str = "test_schema"

    # Security settings
    SECRET_KEY: str
    NEXTAUTH_SECRET: str = ""

    # API and URL settings
    NEXT_PUBLIC_API_URL: str = "http://localhost:8000"
    NEXTAUTH_URL: str = "http://localhost:3000"

    # OAuth providers
    GOOGLE_CLIENT_ID: str = ""
    GOOGLE_CLIENT_SECRET: str = ""
    GITHUB_CLIENT_ID: str = ""
    GITHUB_CLIENT_SECRET: str = ""

    # Validate PostgreSQL URL
    @field_validator("PGDATABASE")
    def validate_postgres_url(cls, v, info):
        if not all(key in info.data for key in ["PGUSER", "PGPASSWORD", "PGHOST"]):
            raise ValueError("Missing PostgreSQL connection details")
        return v

    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "HopShop API"
    DESCRIPTION: str = "A frog-focused ecommerce API"
    VERSION: str = "1.0.0"
    BACKEND_CORS_ORIGINS: Union[List[str], str] = []

    @field_validator("BACKEND_CORS_ORIGINS")
    def assemble_cors_origins(cls, v: Union[List[str], str]) -> List[str]:
        """
        Validates and processes the BACKEND_CORS_ORIGINS field.

        This method is a Pydantic field validator that processes the
        BACKEND_CORS_ORIGINS configuration field. It takes a comma-separated
        string of origins and converts it into a list of stripped strings.

        Args:
            cls: The class this method is attached to.
            v (str): The value of the BACKEND_CORS_ORIGINS field.

        Returns:
            List[str]: A list of origins as strings.
        """
        if isinstance(v, str) and v != "":
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, list):
            return v
        return []

    class Config:
        case_sensitive = True
        env_file = ".env"
        env_file_encoding = 'utf-8'
        # Josh - had to add this to get it working on my machine
        extra = "allow"

def get_settings() -> Settings:
    return Settings()

settings = get_settings()

# config.py 
# file path: backend/core/config.py
# This file defines the configuration settings for the application.

"""_summary_
This module defines the configuration settings for the application.
"""


import os
from typing import List, Union
from pydantic import Field, field_validator
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
    PGUSER: str
    PGPASSWORD: str
    PGHOST: str
    PGDATABASE: str
    PGSCHEMA: str
    SECRET_KEY: str = Field(default="a-very-secret-key-that-should-be-in-env")
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "HopShop API"
    DESCRIPTION: str = "A frog-focused ecommerce API"
    VERSION: str = "1.0.0"
    BACKEND_CORS_ORIGINS: Union[List[str], str] = []

    
    @field_validator("BACKEND_CORS_ORIGINS")
    @classmethod
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
        if isinstance(v, str):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, list):
            return v
        return []
    
    class Config:
        """
        Configuration class for Settings.

        Attributes:
            case_sensitive (bool): Whether environment variable names are case sensitive.
            env_file (str): The path to the .env file.
        """
        case_sensitive = True
        env_file = ".env"
        extra = "allow"
        extra = "allow"

def get_settings() -> Settings:
    """
    Returns the settings for the application.

    Returns:
        Settings: The settings for the application.
    """
    os.getenv("SECRET_KEY", "a-very-secret-key-that-should-be-in-env")
    return Settings()

settings = get_settings()
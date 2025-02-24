from pydantic_settings import BaseSettings
from typing import List
from functools import lru_cache

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "HopShop API"
    DESCRIPTION: str = "A frog-focused ecommerce API"
    VERSION: str = "1.0.0"
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",  # Next.js frontend default
        "http://localhost:8000",  # Backend API default
        "http://localhost",
        "https://localhost",
    ]
    
    class Config:
        case_sensitive = True
        env_file = ".env"

@lru_cache()
def get_settings() -> Settings:
    return Settings()

settings = get_settings()
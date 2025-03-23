from datetime import datetime, timedelta

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from sqlmodel import select
from passlib.context import CryptContext
from jose import jwt

from backend.db.database import SessionDep
from backend.db.models.user import User
from backend.core.config import settings

# Password hashing settings
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT settings
SECRET_KEY = settings.SECRET_KEY  # Add this to your settings
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

router = APIRouter(prefix="/auth", tags=["auth"])

# Schema for login request
class LoginRequest(BaseModel):
    username: str
    password: str

# Schema for token response
class Token(BaseModel):
    access_token: str
    token_type: str
    user: dict

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(datetime.timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@router.post("/login", response_model=Token)
async def login(request: LoginRequest, session: SessionDep):
    # Find the user in the database
    user = session.exec(select(User).where(User.username == request.username)).first()
    
    # Check if user exists and password is correct
    if not user or not verify_password(request.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Generate access token
    access_token = create_access_token(
        data={"sub": str(user.id), "username": user.username}
    )
    
    # Return token and user data
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email
        }
    }
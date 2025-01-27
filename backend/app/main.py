from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from db import create_db_and_tables
from routers.neons import router as neon_router

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

# Setup async context manager
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    create_db_and_tables()
    yield
    # Shutdown (none atm)

# Setup API routes
app.include_router(neon_router)

# Test JSOn response
@app.get('/')
async def root():
    return { 'message': 'Hello World' }

# Test image response
@app.get('/pacman')
async def pacman():
    return FileResponse('backend/images/pacman.jpg')

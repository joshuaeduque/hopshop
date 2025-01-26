#!/usr/bin/env bash

# Define the virtual environment directory
VENV_DIR="./venv"

# Check if the virtual environment directory exists
if [ ! -d "$VENV_DIR" ]; then
    # If the virtual environment directory does not exist, create it
    python3 -m venv $VENV_DIR
    echo "Virtual environment created at $VENV_DIR"
fi

# Activate the virtual environment
source $VENV_DIR/bin/activate

# Check if the virtual environment is activated
if [[ "$VIRTUAL_ENV" != "" ]]; then
    # Install dependencies from requirements.txt
    echo "Installing dependencies..."
    pip install -r requirements.txt
    echo "Dependencies installed"
else
    echo "Failed to activate virtual environment"
    exit 1
fi

# Run the FastAPI development server
uvicorn backend.app.main:app --reload
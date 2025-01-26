#!/usr/bin/env bash

# Define the virtual environment directory
VENV_DIR="./.venv"

# Check if the virtual environment exists
if [ ! -d $VENV_DIR ]; then
    # If the virtual environment doesn't exist, create it
    echo "Python virtual environment not found, please run the installer script"
    exit 1
fi

# Activate the virtual environment
source $VENV_DIR/bin/activate

# Check if virtual environment is active
if [ ! -n "$VIRTUAL_ENV" ]; then
    echo "An error occured while activating the virtual environment"
    exit 1
fi

echo "Virtual environment activated"

# Execute the backend
fastapi dev ./backend/app/main.py
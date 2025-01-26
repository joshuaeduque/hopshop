#!/usr/bin/env bash

# Define the virtual environment directory
VENV_DIR="./.venv"

# Check if the virtual environment exists
if [ ! -d $VENV_DIR ]; then
    # If the virtual environment doesn't exist, create it
    echo "Virtual environment not found, creating one..."
    python3 -m venv $VENV_DIR
    echo "Virtual environment created at $VENV_DIR"
fi

echo "Virtual environment found at $VENV_DIR"

# Activate the virtual environment
source $VENV_DIR/bin/activate

# Check if virtual environment is active
if [ ! -n "$VIRTUAL_ENV" ]; then
    echo "An error occured while activating the virtual environment"
    exit 1
fi

echo "Virtual environment activated"

# Install python dependencies
pip install -r requirements.txt

echo "Python dependencies installed"

# Install node dependencies
(cd ./frontend && npm install)

echo "Node dependencies installed"

echo -e "\nInstaller finished!"
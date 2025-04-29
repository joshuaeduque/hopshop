# PowerShell 7 version of start_backend.sh
#Requires -Version 7.0

# Define the virtual environment directory
$VENV_DIR = ".\.venv"

# Check if the virtual environment exists
if (-not (Test-Path $VENV_DIR)) {
    # If the virtual environment doesn't exist, show error
    Write-Host "Python virtual environment not found, please run the installer script" -ForegroundColor Red
    exit 1
}

# Activate the virtual environment
& "$VENV_DIR\Scripts\Activate.ps1"

# Check if virtual environment is active
if (-not $env:VIRTUAL_ENV) {
    Write-Host "An error occurred while activating the virtual environment" -ForegroundColor Red
    exit 1
}

Write-Host "Virtual environment activated" -ForegroundColor Green

# Execute the backend


# Set environment variable to disable uvloop on Windows
$env:DISABLE_UVLOOP = "1"

# Run the FastAPI application with uvicorn
uvicorn backend.main:app --reload

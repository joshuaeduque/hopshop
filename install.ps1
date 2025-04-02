# Define the virtual environment directory
$VENV_DIR = ".\.venv"

# Check if the virtual environment exists
if (-not (Test-Path $VENV_DIR)) {
    # If the virtual environment doesn't exist, create it
    Write-Host "Virtual environment not found, creating one..."
    python -m venv $VENV_DIR
    Write-Host "Virtual environment created at $VENV_DIR"
}

Write-Host "Virtual environment found at $VENV_DIR"

# Activate the virtual environment
& "$VENV_DIR\Scripts\Activate.ps1"

# Check if virtual environment is active
if (-not $env:VIRTUAL_ENV) {
    Write-Host "ERROR: An error occurred while activating the virtual environment" -ForegroundColor Red
    exit 1
}

Write-Host "Virtual environment activated"

# Install python dependencies
pip install -r requirements.txt

Write-Host "Python dependencies installed"

# Navigate to the frontend directory
Set-Location -Path .\frontend

# Install node dependencies
# Check if pnpm is installed
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    pnpm install
}
# Check if npm is installed
elseif (Get-Command npm -ErrorAction SilentlyContinue) {
    npm install
}
else {
    Write-Host "ERROR: Neither pnpm or npm is installed, please install one of them to proceed" -ForegroundColor Red
    exit 1
}

Write-Host "Node dependencies installed"

Write-Host "`nInstaller finished!" -ForegroundColor Green

# Return to the original directory
Set-Location -Path ..

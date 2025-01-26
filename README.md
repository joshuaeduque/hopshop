# About HopShop

HopShop is a frog-focused ecommerce site developed for CS 4393 User Interfaces semester project.

## Built With

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Getting Started

### Prerequisites

HopShop requires Node.js and Python 3 as well as either npm or pnpm to be installed on your machine.

## Installation

1. Clone the repository

```bash
git clone https://github.com/joshuaeduque/hopshop hopshop
```

2. Navigate to the project directory `hopshop`

```bash
cd hopshop
```

3. Run the installer script
```bash
# Make sure the script is executable
chmod +x install.sh
./install.sh
```

This script checks for a Python virtual environment, creates one if it doesn't exist, and installs dependencies for both the backend and frontend servers.

## Usage

### Starting the backend

```bash
# Make sure the script is executable
chmod +x start_backend.sh
./start_backend.sh
```

This script checks for the existence of a Python virtual environment, activates it if it exists, and then executes the backend server.

### Starting the frontend

```bash
# Make sure the script is executable
chmod +x start_frontend.sh
./start_frontend.sh
```

This script disables Next.js telemetry and executes the frontend server.

## License

Distributed under the GNU General Public License v3.0. See

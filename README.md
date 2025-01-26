# About HopShop

HopShop is a frog-focused ecommerce site developed for CS 4393 User Interfaces semester project.

## Built With

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Getting Started

### Prerequisites

HopShop requires Node.js and Python 3 to be installed on your machine.

## Installation

1. Clone the repository

```bash
git clone https://github.com/joshuaeduque/hopshop hopshop
```

2. Navigate to the project directory `hopshop`

```bash
cd hopshop
```

3. Install the frontend dependencies:

```bash
(cd frontend && npm install)
```

4. Install the backend dependencies in the root of the project.

## Usage

### Starting the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Ensure the script is executable:

   ```bash
   chmod +x start_front_end_dev.sh
   ```

3. Launch the development server:

   ```bash
   ./start_front_end_dev.sh
   ```

This will disable Next.js telemetry, check for pnpm or npm, and start the Next.js dev server.

### Starting the Backend

1. Navigate to where `start_backend-api.sh` is located (project root or backend directory):

   ```bash
   cd backend
   ```

2. Ensure the script is executable:

   ```bash
   chmod +x start_backend-api.sh
   ```

3. Run the script:

   ```bash
   ./start_backend-api.sh
   ```

This will set up (or update) a Python virtual environment, install the required dependencies, and start the FastAPI server with uvicorn.

## Explanation of the Scripts

### `start_front_end_dev.sh`

1. Disables Next.js telemetry (using `npx next telemetry disable`).  
2. Checks for `pnpm`; if found, runs `pnpm run dev`.  
3. If `pnpm` is not found, checks for `npm`; if found, runs `npm run dev`.  
4. If neither is found, prints an error message and exits.

###

start_backend-api.sh

1. Checks for a virtual environment folder (

venv

). If it doesn’t exist, creates it with `python3 -m venv venv`.  
2. Activates the virtual environment.  
3. If activated, installs dependencies from

requirements.txt

 via `pip`.  
4. Launches the FastAPI app using `uvicorn src.main:app --reload`.

## License

Distributed under the GNU General Public License v3.0. See

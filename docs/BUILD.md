# Hopshop Build Documentation

## Prerequisites

- Node.js (v18.18.0)
- Python 3 (v3.11.4)
- npm or pnpm (v8.19.4)
- PostgreSQL Database (v16.1)

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

## Create Environment Variables

### Create backend .env file

```bash
cp .env.example .env
```

### Create frontend .env file

```bash
cp frontend/.env.example frontend/.env.local
```

### Backend (.env)

```env
PGUSER="production_db_user"
PGPASSWORD="secure_password"
PGHOST="your_db_host"
PGPORT="5432"
PGDATABASE="production_db"
PGSCHEMA="public"
SECRET_KEY="your_secure_secret_key"
```

### Frontend (frontend/.env.local)

```env
NEXT_PUBLIC_API_URL="https://api.yourdomain.com"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your_secure_nextauth_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
NEXT_PUBLIC_ALGOLIA_APP_ID="your_algolia_app_id"
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY="your_algolia_search_api_key"
ALGOLIA_API_KEY="your_algolia_api_key"
```

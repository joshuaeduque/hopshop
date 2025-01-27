#!/usr/bin/env bash

cd ./frontend

# Disable Next.js telemetry
npx next telemetry disable

# Execute the frontend server
# Check if pnpm is installed
if command -v pnpm &> /dev/null; then
    pnpm run dev
# Check if npm is installed
elif command -v npm &> /dev/null; then
    npm run dev
else
    echo "Neither pnpm or npm is installed, please install one of them to procede"
    exit 1
fi

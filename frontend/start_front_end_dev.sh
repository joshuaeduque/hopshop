#!/usr/bin/env bash

# Disable Next.js telemetry
npx next telemetry disable

# Check if pnpm is installed
if command -v pnpm &> /dev/null
then
    # If pnpm is installed, run the dev script using pnpm
    pnpm run dev
# If pnpm is not installed, check if npm is installed
elif command -v npm &> /dev/null
then
    # If npm is installed, run the dev script using npm
    npm run dev
else
    # If neither pnpm nor npm is installed, print an error message and exit with a non-zero status
    echo "Neither pnpm nor npm is installed. Please install one of them to proceed."
    exit 1
fi
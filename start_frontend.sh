#!/usr/bin/env bash

cd ./frontend || exit

# Kill any processes on development ports
for port in 3000 9229 9230; do
    pid=$(lsof -t -i:$port 2>/dev/null)
    if [ -n "$pid" ]; then
        echo "Killing process $pid on port $port"
        kill -9 "$pid" 2>/dev/null
    fi
done

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

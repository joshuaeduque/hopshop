# PowerShell 7 version of start_frontend.sh
#Requires -Version 7.0

# Navigate to the frontend directory
Set-Location -Path .\frontend -ErrorAction Stop

# Kill any processes on development ports
foreach ($port in @(3000, 9229, 9230)) {
    $netstatOutput = netstat -ano | Select-String ":$port " | Select-String "LISTENING"
    if ($netstatOutput) {
        $pidNameMatch = $netstatOutput -match '(\d+) '
        if ($pidNameMatch) {
            $pidName = $Matches[1]
            Write-Host "Killing process $pidName on port $port"
            Stop-Process -Id $pidName -Force -ErrorAction SilentlyContinue
        }
    }
}

# Disable Next.js telemetry
npx next telemetry disable

# Execute the frontend server
# Check if pnpm is installed
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    pnpm run dev
}
# Check if npm is installed
elseif (Get-Command npm -ErrorAction SilentlyContinue) {
    npm run dev
}
else {
    Write-Host "Neither pnpm or npm is installed, please install one of them to proceed" -ForegroundColor Red
    exit 1
}

# Database Connection Configuration

## Environment Variables

The following environment variables are required for database connection:

```env
PGUSER="postgres"         # Database user
PGPASSWORD="****"        # Database password
PGHOST="127.0.0.1"       # Database host
PGPORT="5432"            # PostgreSQL default port
PGDATABASE="postgres"     # Database name
PGSCHEMA="test_schema"   # Database schema
```

## Platform-Specific Considerations

### Windows Native

When running PostgreSQL directly on Windows:

- Use `localhost` or `127.0.0.1` for `PGHOST`
- Ensure PostgreSQL Windows Service is running:

  ```powershell
  # Check PostgreSQL service status
  Get-Service postgresql*
  
  # Start PostgreSQL service if needed
  Start-Service postgresql*
  ```

### WSL2

When running PostgreSQL in WSL2:

- From Windows connecting to WSL2:
  - Use `localhost` with port forwarding
  - Or use WSL2 IP address (run `wsl hostname -I` to find it)
- From WSL2 connecting to Windows:
  - Use `host.docker.internal` or Windows IP (`ipconfig` in CMD)
- From WSL2 to WSL2 PostgreSQL:
  - Use `localhost` or `127.0.0.1`

### Current Configuration

The project is currently configured to run on **Windows Native** with:

- PostgreSQL running as a Windows service
- Direct connection to `127.0.0.1`
- Default port `5432`

## Testing Connection

To test database connectivity:

1. Backend test:

```python
python -m backend.tests.test_db_connection
```

2. Frontend test:

```typescript
// From browser console or component
import { testDatabaseConnection } from '../utils/testDbConnection';
await testDatabaseConnection();
```

3. API endpoint:

```bash
curl http://localhost:8000/api/v1/test-db
```

## Troubleshooting

1. Verify PostgreSQL is running:
   - Windows: Check Services app or `Get-Service postgresql*`
   - WSL2: `sudo service postgresql status`

2. Check port availability:
   - Windows: `netstat -ano | findstr :5432`
   - WSL2: `sudo netstat -tulpn | grep 5432`

3. Test direct connection:

   ```bash
   psql -h localhost -U postgres -d postgres
   ```

4. Common issues:
   - Wrong host configuration for WSL2/Windows
   - PostgreSQL service not running
   - Incorrect credentials in .env
   - Firewall blocking connections
   - Port conflicts

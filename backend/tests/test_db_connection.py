from sqlmodel import Session, select

from backend.db.database import engine
from backend.db.models.user import User


def test_database_connection():
    """Test if we can connect to the database and perform a basic query"""
    try:
        # Try to create a session
        with Session(engine) as session:
            # Perform a simple query
            statement = select(User)
            result = session.exec(statement)
            # Just trying to get first result to test connection
            result.first()
            print("✅ Database connection successful!")
            return True
    except Exception as e:
        print(f"❌ Database connection failed: {str(e)}")
        return False

if __name__ == "__main__":
    test_database_connection()
import { apiFetch } from './api';

export async function testDatabaseConnection() {
  try {
    // We'll use the users endpoint as a test
    const response = await apiFetch('/api/v1/users');
    if (response.ok) {
      console.log('✅ Database connection successful!');
      return true;
    } else {
      console.error('❌ Database connection failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}
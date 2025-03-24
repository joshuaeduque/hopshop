import { getSession } from "next-auth/react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * Creates an authenticated fetch function for backend API calls
 */
export const apiFetch = async (
  endpoint: string, 
  options: RequestInit = {}
) => {
  // Get current session to include auth token
  const session = await getSession();
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  // Include auth token if user is logged in
  if (session?.accessToken) {
    headers['Authorization'] = `Bearer ${session.accessToken}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Handle unauthorized responses
  if (response.status === 401) {
    // Handle unauthorized access - could redirect to login
    console.error('Unauthorized access to API');
    // You might want to trigger a sign out or redirect to login here
  }

  // Parse JSON response if it exists
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.detail || 'API request failed');
    }
    
    return data;
  }

  if (!response.ok) {
    throw new Error('API request failed');
  }
  
  return response;
};
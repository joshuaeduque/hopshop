import { getSession } from "next-auth/react";

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const session = await getSession();
  
  const headers: Record<string, string> = {
    ...options.headers as Record<string, string>,
    "Content-Type": "application/json",
  };
  
  if (session?.accessToken) {
    headers["Authorization"] = `Bearer ${session.accessToken}`;
  }
  
  const response = await fetch(url, {
    ...options,
    headers,
  });
  
  return response;
}
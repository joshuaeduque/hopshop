import { UserRead } from "@/types/user";
import { fetchWithAuth } from "@/utils/api";

export async function getUsers(offset: number, limit: number): Promise<UserRead[]> {
    const response = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_API_URL}/users?offset=${offset}&limit=${limit}`
    );

    if (!response.ok) {
        throw new Error(`Error fetching users: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}
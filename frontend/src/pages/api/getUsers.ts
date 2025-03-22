import { UserRead } from "@/types/user";

/**
 * Fetches all users from the -*** Backend ***- API.
 * @param offset - The number of users to skip (for pagination).
 * @param limit - The maximum number of users to fetch.
 * @returns A promise that resolves to an array of UserRead objects.
 * @throws An error if the request fails.
 * @example
 * const users = await getUsers(0, 10);
 * console.log(users); // Logs the first 10 users
 */
export async function getUsers(offset: number, limit: number): Promise<UserRead[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users?offset=${offset}&limit=${limit}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            
        },
    });

    if (!response.ok) {
        throw new Error(`Error fetching users: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}
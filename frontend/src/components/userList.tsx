import React, { useEffect, useState } from "react";
import { getUsers } from "@/pages/api/getUsers";
import { UserRead } from "@/types/user";

const UserList = () => {
  const [users, setUsers] = useState<UserRead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers(0, 10); // Fetch all users with pagination
        setUsers(data);
        setError(null);
      } catch (err) {
        setError("Failed to load users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="user-list">
      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
              {!user.is_active && <span> - Inactive</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
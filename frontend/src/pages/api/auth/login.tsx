import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { callbackUrl } = router.query;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (result?.error) {
        setError("Invalid username or password");
      } else {
        router.push(callbackUrl ? String(callbackUrl) : "/");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="font-bold text-lg">Login to HopShop</h3>
          <form onSubmit={handleSubmit} className="py-4">
            {error && <div className="alert alert-error mb-4">{error}</div>}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full" 
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full" 
                required
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="btn btn-primary w-full">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaLock, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  
  // Redirect if already logged in
  if (status === "authenticated") {
    const callbackUrl = router.query.callbackUrl as string || "/";
    router.push(callbackUrl);
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (result?.error) {
        setError("Invalid username or password");
      } else if (result?.ok) {
        router.push(router.query.callbackUrl as string || "/");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="font-bold text-2xl text-center">Login to HopShop</h3>
          <form onSubmit={handleSubmit} className="py-4">
            {error && <div className="alert alert-error mb-4">{error}</div>}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <div className="input-group">
                <span className=" px-4 pb-4 flex items-center">
                  <FaUser className="w-4 h-4" />
                </span>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input input-bordered w-full" 
                  required
                />
              </div>
            </div>
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="input-group">
                <span className=" px-4 pb-4 flex items-center">
                  <FaLock className="w-4 h-4" />
                </span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full" 
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button 
                type="submit" 
                className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>Don't have an account?{' '}
              <Link href="/register" className="link link-primary">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
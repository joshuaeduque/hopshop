
import Footer from "@/components/layout/Footer";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function EmailRegister() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      // Call the backend API to create a new user
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
      }

      // Redirect to login page on success
      router.push("/auth/login?registered=true");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="font-bold text-2xl text-center">Create an Account</h3>
            <p className="text-center text-sm mt-2">
              Register with your email to join HopShop
            </p>
            
            <form onSubmit={handleSubmit} className="py-4">
              {error && <div className="alert alert-error mb-4">{error}</div>}
              
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaUser className="w-4 h-4" />
                    Username
                  </span>
                </label>
                <input 
                  type="text" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="input input-bordered w-full" 
                  required
                />
              </div>
              
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaEnvelope className="w-4 h-4" />
                    Email
                  </span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full" 
                  required
                />
              </div>
              
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaLock className="w-4 h-4" />
                    Password
                  </span>
                </label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input input-bordered w-full" 
                  required
                  minLength={8}
                />
              </div>
              
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaLock className="w-4 h-4" />
                    Confirm Password
                  </span>
                </label>
                <input 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input input-bordered w-full" 
                  required
                  minLength={8}
                />
              </div>
              
              <div className="mt-6">
                <button 
                  type="submit" 
                  className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </form>
            
            <div className="text-center mt-4">
              <p>Already have an account?{' '}
                <Link href="/auth/login" className="link link-primary">
                  Login
                </Link>
              </p>
            </div>
            
            <div className="text-center text-xs mt-6 text-gray-500">
              By signing up, you agree to our 
              <Link href="/terms" className="link link-secondary mx-1">Terms of Service</Link>
              and
              <Link href="/privacy" className="link link-secondary mx-1">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  
  // If user is already logged in, redirect to home page
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  
  return {
    props: {},
  };
};


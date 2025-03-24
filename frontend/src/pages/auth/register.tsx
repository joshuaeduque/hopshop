import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FaGoogle, FaGithub, FaUserPlus } from "react-icons/fa";
import Link from "next/link";
// Properly import individual components instead of using the barrel import
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function Register() {
  const router = useRouter();
  const { data: session, status } = useSession();
  
  // Redirect if already logged in
  if (status === "authenticated") {
    router.push("/profile");
    return null;
  }

  return (
    <>
      <Header />
      <Navigation />
      <main className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="font-bold text-2xl text-center">Create an Account</h3>
            <p className="text-center text-sm mt-2">
              Join HopShop to get exclusive deals and track your orders
            </p>
            
            {/* OAuth Provider Buttons */}
            <div className="py-6">
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => signIn("google", { callbackUrl: "/profile" })}
                  className="btn btn-outline gap-2"
                >
                  <FaGoogle className="w-5 h-5" />
                  Sign up with Google
                </button>
                <button 
                  onClick={() => signIn("github", { callbackUrl: "/profile" })}
                  className="btn btn-outline gap-2"
                >
                  <FaGithub className="w-5 h-5" />
                  Sign up with GitHub
                </button>
              </div>
            </div>
            
            <div className="divider">OR</div>
            
            {/* Email Registration Option */}
            <div className="py-2">
              <Link href="/auth/email-register" className="btn btn-primary w-full gap-2">
                <FaUserPlus className="w-5 h-5" />
                Register with Email
              </Link>
            </div>
            
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

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import LoginModal from "@/components/features/auth/loginModal";

export interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  
  return (
    <div className={`navbar bg-base-300 ${className}`}>
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          HopShop
        </Link>
      </div>

      <div className="navbar-center">
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-96"
          />
          <button className="btn btn-ghost btn-circle">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="navbar-end">
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <Link href="/profile">
                <FaUser className="w-6 h-6" />
              </Link>
            </div>
            {session && (
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><Link href="/profile">Profile</Link></li>
                <li><button onClick={() => signOut()}>Logout</button></li>
              </ul>
            )}
          </div>
          
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <FaShoppingCart className="w-6 h-6" />
              <div className="indicator">
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {!session && !loading ? (
            <>
              <button onClick={() => setIsLoginModalOpen(true)} className="btn btn-ghost">
                <span className="hidden md:inline">Login</span>
                <span className="md:hidden">Login</span>
              </button>
              <Link href="/register" className="btn btn-primary">
                <span className="hidden md:inline">Register</span>
                <span className="md:hidden">Register</span>
              </Link>
            </>
          ) : null}
        </div>
      </div>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}
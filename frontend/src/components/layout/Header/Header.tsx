import LoginModal from "@/components/features/auth/loginModal";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

export interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/search');
    }
  };
  
  return (
    <div className={`navbar bg-base-300 ${className}`}>
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          HopShop
        </Link>
      </div>

      <div className="navbar-center">
        <div className="flex gap-1">
          <form onSubmit={handleSearchSubmit} className="flex gap-1 w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered w-full md:w-96"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-ghost btn-circle">
              <FaSearch className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="navbar-end">
        <div className="flex gap-2">
          {!loading && (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <FaUser className="w-6 h-6" />
                </div>
                {session ? (
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li className="menu-title">
                      <span>Hi, {session.user.name?.split(' ')[0] || 'User'}</span>
                    </li>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/orders">My Orders</Link></li>
                    <li><button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button></li>
                  </ul>
                ) : (
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li><button onClick={() => setIsLoginModalOpen(true)}>Login</button></li>
                    <li><Link href="/auth/register">Register</Link></li>
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
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">0 Items</span>
                    <span className="text-info">Subtotal: $0.00</span>
                    <div className="card-actions">
                      <Link href="/cart" className="btn btn-primary btn-block">
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {!session && (
                <div className="hidden md:flex gap-2">
                  <button onClick={() => setIsLoginModalOpen(true)} className="btn btn-primary">
                    Login
                  </button>
                  <Link href="/auth/register" className="btn btn-outline btn-primary">
                    Register
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}

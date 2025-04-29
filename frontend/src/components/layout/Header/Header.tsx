import LoginModal from "@/components/features/auth/loginModal";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";

export interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const categories = [
    { name: 'Pet Frogs', href: '/category/frogs' },
    { name: 'Live Insects', href: '/category/insects' },
    { name: 'Heat & Lighting', href: '/category/heating' },
    { name: 'Water & Humidity', href: '/category/water' },
    { name: 'Decorations', href: '/category/decorations' },
    { name: 'Supplements', href: '/category/supplements' },
    { name: 'Apparel', href: '/category/apparel' },
    { name: 'Books', href: '/category/books' },
  ];
  
  return (
    <div className={`navbar bg-base-300 ${className}`}>
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown sm:block md:hidden">
          <label 
            tabIndex={0} 
            className="btn btn-square btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <FaBars className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <FaTimes className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </label>
          
          {/* Full-screen mobile menu */}
          <div 
            className={`
              fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-base-200
              transition-all duration-300 ease-in-out transform 
              ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
              ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
              z-40
            `}
          >
            <ul className="menu menu-sm p-4 w-full">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link 
                    href={category.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 text-lg hover:bg-base-300 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          HopShop
        </Link>
      </div>

      <div className="navbar-center">
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-96"
          />
          <button className="btn btn-ghost btn-circle">
            <FaSearch className="w-5 h-5" />
          </button>
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

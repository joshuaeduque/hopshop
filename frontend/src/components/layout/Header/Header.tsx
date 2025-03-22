import Link from "next/link";
import { PersonIcon } from "@radix-ui/react-icons";
import { FaShoppingCart } from "react-icons/fa";

export interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
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
          
          <Link href="/profile" >
            <PersonIcon className="w-6 h-6" />
          </Link>
        </div>
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
          <Link href="/login" className="btn btn-ghost">
            <span className="hidden md:inline">Login</span>
            <span className="md:hidden">Login</span>
          </Link>
          <Link href="/register" className="btn btn-primary">
            <span className="hidden md:inline">Register</span>
            <span className="md:hidden">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}



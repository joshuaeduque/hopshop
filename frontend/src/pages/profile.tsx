import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { FaUser, FaEnvelope, FaPencilAlt, FaSignOutAlt, FaBox, FaHeart, FaAddressCard } from "react-icons/fa";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { apiFetch } from "@/utils/api";

// Type for user order data
interface OrderSummary {
  id: string;
  date: string;
  status: string;
  total: number;
}

export default function Profile() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<OrderSummary[]>([]);
  const [activeTab, setActiveTab] = useState("profile");
  
  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      setIsLoading(false);
      // This would be replaced with actual API call when available
      // setOrders(fetchedOrders);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (status === "loading" || isLoading) {
    return (
      <>
        <Header />
        <Navigation />
        <main className="min-h-screen p-4 bg-base-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center h-96">
              <span className="loading loading-spinner loading-lg"></span>
              <p className="mt-4 text-lg">Loading profile data...</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Navigation />
      <main className="min-h-screen p-4 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">My Account</h1>
          
          {session ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Sidebar Navigation */}
              <div className="md:col-span-1">
                <div className="bg-base-100 shadow-md rounded-box overflow-hidden">
                  <div className="p-4 bg-primary text-primary-content">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          {session.user?.image ? (
                            <Image 
                              src={session.user.image}
                              alt={session.user.name || ""}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          ) : (
                            <div className="bg-primary-content flex items-center justify-center h-full">
                              <FaUser className="w-6 h-6 text-primary" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold">
                          {session.user?.name?.split(' ')[0] || 'User'}
                        </h3>
                        <p className="text-xs opacity-80">{session.user?.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="menu p-2 [&_li>*]:rounded-md">
                    <li>
                      <button 
                        onClick={() => setActiveTab("profile")}
                        className={activeTab === "profile" ? "active" : ""}
                      >
                        <FaUser /> My Profile
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab("orders")}
                        className={activeTab === "orders" ? "active" : ""}
                      >
                        <FaBox /> Orders
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab("wishlist")}
                        className={activeTab === "wishlist" ? "active" : ""}
                      >
                        <FaHeart /> Wishlist
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab("addresses")}
                        className={activeTab === "addresses" ? "active" : ""}
                      >
                        <FaAddressCard /> Addresses
                      </button>
                    </li>
                    <li>
                      <button onClick={() => signOut({ callbackUrl: '/' })}>
                        <FaSignOutAlt /> Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="md:col-span-3">
                <div className="bg-base-100 shadow-md rounded-box p-6">
                  {activeTab === "profile" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
                      <div className="flex flex-col gap-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Full Name</span>
                          </label>
                          <input
                            type="text"
                            value={session.user?.name || ""}
                            className="input input-bordered"
                            disabled
                          />
                        </div>
                        
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            value={session.user?.email || ""}
                            className="input input-bordered"
                            disabled
                          />
                        </div>
                        
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Account Type</span>
                          </label>
                          <input
                            type="text"
                            value={session.user?.email?.includes("gmail.com") ? "Google Account" : "GitHub Account"}
                            className="input input-bordered"
                            disabled
                          />
                        </div>
                        
                        <div className="mt-4">
                          <Link href="/profile/edit" className="btn btn-primary">
                            Edit Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "orders" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
                      {orders.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="table w-full">
                            <thead>
                              <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map(order => (
                                <tr key={order.id}>
                                  <td>#{order.id}</td>
                                  <td>{order.date}</td>
                                  <td>
                                    <span className="badge badge-success">{order.status}</span>
                                  </td>
                                  <td>${order.total.toFixed(2)}</td>
                                  <td>
                                    <Link href={`/orders/${order.id}`} className="btn btn-xs">
                                      View
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="py-8 text-center">
                          <p className="text-gray-500">You haven't placed any orders yet.</p>
                          <Link href="/shop" className="btn btn-primary mt-4">
                            Start Shopping
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === "wishlist" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
                      <div className="py-8 text-center">
                        <p className="text-gray-500">Your wishlist is empty.</p>
                        <Link href="/shop" className="btn btn-primary mt-4">
                          Discover Products
                        </Link>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "addresses" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">My Addresses</h2>
                      <div className="py-8 text-center">
                        <p className="text-gray-500">You haven't added any addresses yet.</p>
                        <button className="btn btn-primary mt-4">
                          Add New Address
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-base-100 p-8 rounded-box shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">You are not signed in</h2>
              <p className="mb-6">Please sign in to view your profile</p>
              <Link href="/auth/login?callbackUrl=/profile" className="btn btn-primary">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

// Server-side protection for the page
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login?callbackUrl=/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {}
  };
};
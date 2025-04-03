import { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

// Mock data for orders
const ORDERS = [
  {
    id: "ORD-12345",
    date: "2023-05-15",
    status: "Delivered",
    total: 7297,
    items: [
      {
        id: 1,
        name: "Green Tree Frog",
        price: 4999,
        quantity: 1,
        image: "/products/green-tree-frog.jpg"
      },
      {
        id: 4,
        name: "Frog Food Pellets",
        price: 999,
        quantity: 2,
        image: "/products/frog-food.jpg"
      }
    ]
  },
  {
    id: "ORD-12346",
    date: "2023-06-22",
    status: "Processing",
    total: 3798,
    items: [
      {
        id: 6,
        name: "Decorative Lily Pad",
        price: 1299,
        quantity: 1,
        image: "/products/lily-pad.jpg"
      },
      {
        id: 10,
        name: "Calcium Supplement",
        price: 899,
        quantity: 1,
        image: "/products/calcium-supplement.jpg"
      },
      {
        id: 11,
        name: "Live Crickets",
        price: 799,
        quantity: 2,
        image: "/products/crickets.jpg"
      }
    ]
  }
];

export default function Orders() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState(ORDERS);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Filter orders based on search query
    if (searchQuery.trim() === "") {
      setOrders(ORDERS);
    } else {
      const filtered = ORDERS.filter(order => 
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setOrders(filtered);
    }
  }, [searchQuery]);
  
  const getOrderDetails = (orderId: string) => {
    return ORDERS.find(order => order.id === orderId);
  };

  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">My Orders</h1>
          
          {isLoading ? (
            <div className="animate-pulse">
              <div className="bg-base-300 h-12 w-full max-w-md rounded mb-8"></div>
              <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="bg-base-200 p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                      <div className="bg-base-300 h-6 w-32 rounded"></div>
                      <div className="bg-base-300 h-6 w-24 rounded"></div>
                    </div>
                    <div className="bg-base-300 h-4 w-full rounded mb-4"></div>
                    <div className="bg-base-300 h-10 w-32 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedOrder ? (
            // Order details view
            <div>
              <button 
                className="btn btn-ghost btn-sm mb-6"
                onClick={() => setSelectedOrder(null)}
              >
                <FaArrowLeft className="mr-2" /> Back to Orders
              </button>
              
              {(() => {
                const order = getOrderDetails(selectedOrder);
                
                if (!order) {
                  return (
                    <div className="alert alert-error">
                      <div>
                        <span>Order not found.</span>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <div>
                    <div className="bg-base-200 p-6 rounded-lg mb-6">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                          <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className={`badge ${
                            order.status === "Delivered" ? "badge-success" : 
                            order.status === "Processing" ? "badge-warning" : 
                            "badge-info"
                          } badge-lg`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="divider"></div>
                      
                      <h3 className="font-semibold mb-4">Items in this order</h3>
                      
                      <div className="space-y-4">
                        {order.items.map(item => (
                          <div key={item.id} className="flex flex-col sm:flex-row bg-base-100 p-4 rounded-lg">
                            <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0">
                              <Image 
                                src={item.image} 
                                alt={item.name} 
                                width={96}
                                height={96}
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                            <div className="sm:ml-4 flex-grow">
                              <h4 className="font-semibold">{item.name}</h4>
                              <div className="flex justify-between mt-2">
                                <div>
                                  <p>Quantity: {item.quantity}</p>
                                  <p>Price: ${(item.price / 100).toFixed(2)}</p>
                                </div>
                                <p className="font-semibold">
                                  Subtotal: ${((item.price * item.quantity) / 100).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="divider"></div>
                      
                      <div className="flex flex-col items-end">
                        <div className="w-full max-w-xs">
                          <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span>${(order.total / 100).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span>Shipping:</span>
                            <span>$5.99</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span>Tax:</span>
                            <span>${((order.total * 0.08) / 100).toFixed(2)}</span>
                          </div>
                          <div className="divider my-2"></div>
                          <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>${((order.total + 599 + (order.total * 0.08)) / 100).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="btn btn-primary">Track Order</button>
                      <button className="btn btn-outline">Request Return</button>
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            // Orders list view
            <div>
              <div className="flex mb-6">
                <div className="form-control w-full max-w-md">
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Search orders..." 
                      className="input input-bordered w-full" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-square">
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>
              
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map(order => (
                    <div key={order.id} className="bg-base-200 p-6 rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                          <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className={`badge ${
                            order.status === "Delivered" ? "badge-success" : 
                            order.status === "Processing" ? "badge-warning" : 
                            "badge-info"
                          } badge-lg`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="mb-4">{order.items.length} items • Total: ${(order.total / 100).toFixed(2)}</p>
                      
                      <button 
                        className="btn btn-primary"
                        onClick={() => setSelectedOrder(order.id)}
                      >
                        View Order Details
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-base-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">No orders found</h3>
                  {searchQuery ? (
                    <p className="text-gray-600 mb-6">No orders match your search criteria.</p>
                  ) : (
                    <>
                      <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
                      <Link href="/shop" className="btn btn-primary">
                        Start Shopping
                      </Link>
                    </>
                  )}
                </div>
              )}
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
        destination: "/auth/login?callbackUrl=/orders",
        permanent: false,
      },
    };
  }

  return {
    props: {}
  };
};

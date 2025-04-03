import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaTrash, FaArrowRight } from "react-icons/fa";

// Mock data for cart items
const INITIAL_CART_ITEMS = [
  {
    id: 1,
    name: "Green Tree Frog",
    price: 4999,
    image: "/products/green-tree-frog.jpg",
    quantity: 1
  },
  {
    id: 4,
    name: "Frog Food Pellets",
    price: 999,
    image: "/products/frog-food.jpg",
    quantity: 2
  },
  {
    id: 6,
    name: "Decorative Lily Pad",
    price: 1299,
    image: "/products/lily-pad.jpg",
    quantity: 1
  }
];

export default function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const calculateTax = () => {
    return Math.round(calculateSubtotal() * 0.08); // 8% tax
  };
  
  const calculateShipping = () => {
    return cartItems.length > 0 ? 599 : 0; // $5.99 shipping
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
          
          {isLoading ? (
            <div className="animate-pulse">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex mb-6 bg-base-200 p-4 rounded-lg">
                      <div className="bg-base-300 h-24 w-24 rounded"></div>
                      <div className="ml-4 flex-grow">
                        <div className="bg-base-300 h-5 w-48 rounded mb-2"></div>
                        <div className="bg-base-300 h-4 w-24 rounded mb-4"></div>
                        <div className="flex justify-between">
                          <div className="bg-base-300 h-8 w-24 rounded"></div>
                          <div className="bg-base-300 h-8 w-16 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="md:w-1/3">
                  <div className="bg-base-200 p-6 rounded-lg">
                    <div className="bg-base-300 h-6 w-32 rounded mb-6"></div>
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex justify-between mb-4">
                        <div className="bg-base-300 h-4 w-24 rounded"></div>
                        <div className="bg-base-300 h-4 w-16 rounded"></div>
                      </div>
                    ))}
                    <div className="bg-base-300 h-10 w-full rounded mt-6"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : cartItems.length > 0 ? (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                {cartItems.map(item => (
                  <div key={item.id} className="flex flex-col sm:flex-row mb-6 bg-base-200 p-4 rounded-lg">
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
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-primary font-bold mb-4">${(item.price / 100).toFixed(2)}</p>
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center">
                          <button 
                            className="btn btn-sm btn-square"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button 
                            className="btn btn-sm btn-square"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className="btn btn-sm btn-error btn-outline"
                          onClick={() => removeItem(item.id)}
                        >
                          <FaTrash className="mr-2" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-8">
                  <Link href="/shop" className="btn btn-outline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-base-200 p-6 rounded-lg sticky top-4">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${(calculateSubtotal() / 100).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2">
                    <span>Tax</span>
                    <span>${(calculateTax() / 100).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>${(calculateShipping() / 100).toFixed(2)}</span>
                  </div>
                  
                  <div className="divider my-4"></div>
                  
                  <div className="flex justify-between mb-6">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${(calculateTotal() / 100).toFixed(2)}</span>
                  </div>
                  
                  <button className="btn btn-primary w-full">
                    Checkout <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link href="/shop" className="btn btn-primary btn-lg">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
}

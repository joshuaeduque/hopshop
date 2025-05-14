import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaHeart, FaLeaf, FaLock, FaShippingFast, FaShoppingCart, FaTimes, FaTrash } from "react-icons/fa";

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
    if (newQuantity < 1) {
      // Remove the item if quantity is less than 1
      removeItem(id);
      return;
    }

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

      <main className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-12">
        <div className="container mx-auto px-4">
          {/* Cart Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="bg-primary p-3 rounded-full mr-4">
                <FaShoppingCart className="text-primary-content text-xl" />
              </div>
              <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
            </div>
            <Link href="/shop" className="btn btn-ghost btn-sm gap-2">
              <FaArrowLeft /> Continue Shopping
            </Link>
          </div>

          {/* Progress Steps */}
          <div className="hidden md:flex justify-center mb-12">
            <ul className="steps steps-horizontal w-full max-w-3xl">
              <li className="step step-primary">Shopping Cart</li>
              <li className="step">Shipping Details</li>
              <li className="step">Payment</li>
              <li className="step">Confirmation</li>
            </ul>
          </div>

          {isLoading ? (
            <div className="animate-pulse">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <div className="card-body p-0">
                      <div className="bg-base-300 h-12 w-full"></div>
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex p-6 border-b border-base-200">
                          <div className="bg-base-300 h-24 w-24 rounded-lg"></div>
                          <div className="ml-6 flex-grow">
                            <div className="bg-base-300 h-6 w-48 rounded mb-3"></div>
                            <div className="bg-base-300 h-4 w-24 rounded mb-4"></div>
                            <div className="flex justify-between">
                              <div className="bg-base-300 h-10 w-32 rounded"></div>
                              <div className="bg-base-300 h-10 w-24 rounded"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <div className="bg-base-300 h-8 w-40 rounded mb-6"></div>
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex justify-between mb-4">
                          <div className="bg-base-300 h-5 w-32 rounded"></div>
                          <div className="bg-base-300 h-5 w-20 rounded"></div>
                        </div>
                      ))}
                      <div className="bg-base-300 h-12 w-full rounded mt-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="card bg-base-100 shadow-xl overflow-hidden">
                  <div className="card-body p-0">
                    {/* Table Header */}
                    <div className="bg-base-200 p-4 hidden md:grid grid-cols-12 gap-4 font-semibold">
                      <div className="col-span-6">Product</div>
                      <div className="col-span-2 text-center">Price</div>
                      <div className="col-span-4 text-center">Quantity</div>
                      
                    </div>

                    {/* Cart Items */}
                    {cartItems.map(item => (
                      <div key={item.id} className="border-b border-base-200 hover:bg-base-100 transition-colors">
                        <div className="p-4 md:p-6 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                          {/* Mobile View - Product Info */}
                          <div className="md:hidden flex mb-4">
                            <div className="w-24 h-24 rounded-xl overflow-hidden bg-base-200 mr-4">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="text-primary font-bold mt-1">${(item.price / 100).toFixed(2)}</p>
                            </div>
                            <button
                              className="ml-auto btn btn-circle btn-sm btn-ghost text-error"
                              onClick={() => removeItem(item.id)}
                            >
                              <FaTimes />
                            </button>
                          </div>

                          {/* Desktop View - Product */}
                          <div className="hidden md:flex md:col-span-6 items-center">
                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-base-200 mr-4 relative group">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  className="btn btn-circle btn-sm btn-ghost text-white"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold">{item.name}</h3>
                              <div className="flex mt-1 text-sm text-gray-500">
                                <button className="flex items-center hover:text-primary transition-colors">
                                  <FaHeart className="mr-1" /> Save for later
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Desktop View - Price */}
                          <div className="hidden md:block md:col-span-2 text-center">
                            <span className="font-medium">${(item.price / 100).toFixed(2)}</span>
                          </div>

                          {/* Quantity Controls */}
                          <div className="md:col-span-4 flex justify-center">
                            <div className="flex items-center border border-base-300 rounded-lg overflow-hidden">
                              <button
                                className="px-3 py-1 bg-base-200 hover:bg-base-300 transition-colors"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="px-4 py-1 font-medium">{item.quantity}</span>
                              <button
                                className="px-3 py-1 bg-base-200 hover:bg-base-300 transition-colors"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Desktop View - Total */}
                          <div className="hidden md:block md:col-span-2 text-center font-bold text-primary">
                            ${((item.price * item.quantity) / 100).toFixed(2)}
                          </div>

                          {/* Mobile View - Actions */}
                          <div className="md:hidden flex justify-between items-center mt-4">
                            <span className="font-bold">Total: ${((item.price * item.quantity) / 100).toFixed(2)}</span>
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

                    {/* Cart Actions */}
                    <div className="p-6 flex flex-wrap gap-4 justify-between items-center bg-base-100">
                      <div className="flex gap-2">
                        <Link href="/shop" className="btn btn-outline gap-2">
                          <FaArrowLeft /> Continue Shopping
                        </Link>
                      </div>
                      <button className="btn btn-ghost text-error gap-2" onClick={() => setCartItems([])}>
                        <FaTrash /> Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="card bg-base-100 shadow-xl sticky top-4">
                  <div className="card-body">
                    <h2 className="card-title text-xl mb-6">Order Summary</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                        <span>${(calculateSubtotal() / 100).toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (8%)</span>
                        <span>${(calculateTax() / 100).toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>${(calculateShipping() / 100).toFixed(2)}</span>
                      </div>

                      <div className="pt-4 border-t border-base-200">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-primary">${(calculateTotal() / 100).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-primary w-full btn-lg gap-2 mb-4">
                      Proceed to Checkout <FaArrowRight />
                    </button>

                    {/* Trust Badges */}
                    <div className="mt-6">
                      <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
                        <div className="flex flex-col items-center">
                          <FaLock className="text-xl mb-1" />
                          <span>Secure Payment</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <FaShippingFast className="text-xl mb-1" />
                          <span>Fast Delivery</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <FaLeaf className="text-xl mb-1" />
                          <span>Eco Packaging</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center py-16">
                <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mb-6">
                  <FaShoppingCart className="text-4xl text-base-content opacity-40" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                <p className="text-gray-500 max-w-md mb-8">Looks like you haven't added any items to your cart yet. Explore our products and find something you'll love!</p>
                <Link href="/shop" className="btn btn-primary btn-lg gap-2">
                  Continue Shopping <FaArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* Recommended Products */}
          {!isLoading && cartItems.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                    <figure className="px-4 pt-4">
                      <Image
                        src={`/products/recommended-${i+1}.jpg`}
                        alt={`Recommended product ${i+1}`}
                        width={200}
                        height={200}
                        className="rounded-xl h-48 w-full object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-base">Recommended Product {i+1}</h3>
                      <p className="text-primary font-bold">${((19.99 + i * 5) * 100 / 100).toFixed(2)}</p>
                      <div className="card-actions justify-end mt-2">
                        <button className="btn btn-primary btn-sm">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

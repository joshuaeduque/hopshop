import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaStar, FaShoppingCart } from "react-icons/fa";

// Mock product data - would come from an API in a real app
const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Green Tree Frog",
    price: 24.99,
    image: "/products/green-tree-frog.jpg", // Updated path
    rating: 4.5,
    category: "Featured"
  },
  {
    id: 2,
    name: "Poison Dart Frog",
    price: 19.99,
    image: "/products/poison-dart-frog.jpg", // Updated path
    rating: 4.8,
    category: "New"
  },
  {
    id: 3,
    name: "Bull Frog",
    price: 14.99,
    image: "/products/bull-frog.jpg", // Updated path
    rating: 4.2,
    category: "Popular"
  },
  {
    id: 4,
    name: "Glass Frog",
    price: 29.99,
    image: "/products/glass-frog.jpg", // Updated path
    rating: 4.7,
    category: "Featured"
  },
  {
    id: 5,
    name: "Tomato Frog",
    price: 22.99,
    image: "/products/tomato-frog.jpg", // Updated path
    rating: 4.4,
    category: "New"
  },
  {
    id: 6,
    name: "Red-Eyed Tree Frog",
    price: 27.99,
    image: "/products/red-eyed-tree-frog.jpg", // Updated path
    rating: 4.9,
    category: "Popular"
  }
];

const CATEGORIES = [
  { id: 1, name: "Tree Frogs", count: 25, image: "/categories/tree-frogs.jpg" }, // Updated path
  { id: 2, name: "Aquatic Frogs", count: 18, image: "/categories/aquatic-frogs.jpg" }, // Updated path
  { id: 3, name: "Dart Frogs", count: 12, image: "/categories/dart-frogs.jpg" }, // Updated path
  { id: 4, name: "Toads", count: 15, image: "/categories/toads.jpg" } // Updated path
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <section className="bg-primary text-primary-content py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to HopShop
              </h1>
              <p className="text-lg mb-8 opacity-90">
                Your premier destination for all things amphibian! Discover our wide selection of high-quality frog-themed products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/shop" className="btn btn-lg btn-secondary">
                  Shop Now
                </Link>
                <Link href="/category/featured" className="btn btn-lg btn-outline">
                  Featured Items
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/hero-frog.jpg"
                  alt="HopShop Banner" 
                  width={800}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Shop by Category</h2>
              <Link href="/categories" className="btn btn-sm btn-link flex items-center gap-1">
                View all <FaArrowRight />
              </Link>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-base-100 rounded-lg p-4 animate-pulse">
                    <div className="bg-base-300 h-32 w-full rounded-md mb-4"></div>
                    <div className="bg-base-300 h-5 w-24 rounded-md"></div>
                    <div className="bg-base-300 h-4 w-16 mt-2 rounded-md"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map(category => (
                  <Link href={`/category/${category.id}`} key={category.id}>
                    <div className="bg-base-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <Image 
                        src={category.image}  // Fixed: Use the category.image here instead of empty string
                        alt={category.name} 
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover" 
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.count} products</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Link href="/shop" className="btn btn-sm btn-link flex items-center gap-1">
                View all products <FaArrowRight />
              </Link>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card bg-base-100 shadow animate-pulse">
                    <div className="bg-base-300 h-48 w-full"></div>
                    <div className="card-body">
                      <div className="bg-base-300 h-5 w-32 rounded-md"></div>
                      <div className="bg-base-300 h-4 w-16 mt-2 rounded-md"></div>
                      <div className="bg-base-300 h-4 w-full mt-2 rounded-md"></div>
                      <div className="bg-base-300 h-10 w-full mt-4 rounded-md"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURED_PRODUCTS.map(product => (
                  <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                    <figure className="relative">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-2 right-2 badge badge-secondary">{product.category}</span>
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <div className="rating rating-sm">
                          {[...Array(5)].map((_, i) => (
                            <input 
                              key={i} 
                              type="radio" 
                              name={`rating-${product.id}`} 
                              className="mask mask-star-2 bg-orange-400" 
                              checked={Math.round(product.rating) === i + 1}
                              readOnly
                            />
                          ))}
                        </div>
                        <span className="text-sm">({product.rating})</span>
                      </div>
                      <div className="text-xl font-semibold my-2">${product.price.toFixed(2)}</div>
                      <div className="card-actions justify-end">
                        <Link href={`/product/${product.id}`} className="btn btn-outline btn-sm">
                          Details
                        </Link>
                        <button className="btn btn-primary btn-sm gap-2">
                          <FaShoppingCart /> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-neutral text-neutral-content">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-3">Join Our Newsletter</h2>
            <p className="mb-6">Stay updated with our latest products, special offers and frog care tips!</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="input input-bordered w-full sm:max-w-xs text-base-content" 
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
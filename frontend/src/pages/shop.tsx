import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaStar } from "react-icons/fa";

// Mock data for products
const PRODUCTS = [
  {
    id: 1,
    name: "Green Tree Frog",
    price: 4999,
    image: "/products/green-tree-frog.jpg",
    category: "Pet Frogs",
    rating: 4.5,
    description: "A beautiful and friendly amphibian pet.",
    inStock: true
  },
  {
    id: 2,
    name: "Terrarium Kit",
    price: 12999,
    image: "/products/terrarium.jpg",
    category: "Supplies",
    rating: 4.8,
    description: "Complete setup for your frog habitat.",
    inStock: true
  },
  {
    id: 3,
    name: "Cricket Feeder",
    price: 1499,
    image: "/products/cricket-feeder.jpg",
    category: "Accessories",
    rating: 4.2,
    description: "Convenient feeding solution for your amphibians.",
    inStock: true
  },
  {
    id: 4,
    name: "Frog Food Pellets",
    price: 999,
    image: "/products/frog-food.jpg",
    category: "Food",
    rating: 4.7,
    description: "Nutritionally complete diet for pet frogs.",
    inStock: true
  },
  {
    id: 5,
    name: "Humidity Controller",
    price: 3499,
    image: "/products/humidity-controller.jpg",
    category: "Supplies",
    rating: 4.6,
    description: "Maintain optimal humidity levels for your frog.",
    inStock: false
  },
  {
    id: 6,
    name: "Decorative Lily Pad",
    price: 1299,
    image: "/products/lily-pad.jpg",
    category: "Decorations",
    rating: 4.3,
    description: "Beautiful decoration for your frog's habitat.",
    inStock: true
  },
  {
    id: 7,
    name: "Frog Care Guide Book",
    price: 1999,
    image: "/products/frog-book.jpg",
    category: "Books",
    rating: 4.9,
    description: "Comprehensive guide to caring for pet frogs.",
    inStock: true
  },
  {
    id: 8,
    name: "Frog T-Shirt",
    price: 2499,
    image: "/products/frog-shirt.jpg",
    category: "Apparel",
    rating: 4.4,
    description: "Stylish t-shirt for frog enthusiasts.",
    inStock: true
  }
];

// Filter options
const CATEGORIES = [
  "All",
  "Pet Frogs",
  "Supplies",
  "Accessories",
  "Food",
  "Decorations",
  "Books",
  "Apparel"
];

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Filter products by category
    let filteredProducts = [...PRODUCTS];
    
    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        product => product.category === selectedCategory
      );
    }
    
    // Sort products
    switch (sortOption) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (featured)
        break;
    }
    
    setProducts(filteredProducts);
  }, [selectedCategory, sortOption]);

  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="md:w-1/4">
              <div className="bg-base-200 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(category => (
                    <button
                      key={category}
                      className={`btn btn-sm ${
                        selectedCategory === category
                          ? "btn-primary"
                          : "btn-ghost"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="divider"></div>
                
                <h2 className="text-xl font-semibold mb-4">Sort By</h2>
                <select
                  className="select select-bordered w-full"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
            
            {/* Products grid */}
            <div className="md:w-3/4">
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
                <>
                  <p className="mb-4">{products.length} products found</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
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
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-base-300 bg-opacity-70 flex items-center justify-center">
                              <span className="badge badge-error badge-lg">Out of Stock</span>
                            </div>
                          )}
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
                                  checked={i + 1 === Math.round(product.rating)}
                                  readOnly
                                />
                              ))}
                            </div>
                            <span className="text-sm">({product.rating})</span>
                          </div>
                          <p className="text-sm">{product.description}</p>
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold">${(product.price / 100).toFixed(2)}</span>
                            <button 
                              className="btn btn-primary btn-sm"
                              disabled={!product.inStock}
                            >
                              <FaShoppingCart className="mr-2" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

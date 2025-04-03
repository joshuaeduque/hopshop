import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

// Mock data for categories
const CATEGORIES = [
  {
    id: "frogs",
    name: "Pet Frogs",
    count: 12,
    image: "/categories/pet-frogs.jpg",
    description: "Live amphibians for your home or collection"
  },
  {
    id: "supplies",
    name: "Supplies",
    count: 24,
    image: "/categories/supplies.jpg",
    description: "Essential equipment for frog care"
  },
  {
    id: "accessories",
    name: "Accessories",
    count: 18,
    image: "/categories/accessories.jpg",
    description: "Additional items to enhance your frog habitat"
  },
  {
    id: "food",
    name: "Food & Diet",
    count: 15,
    image: "/categories/food.jpg",
    description: "Nutritional options for healthy amphibians"
  },
  {
    id: "insects",
    name: "Live Insects",
    count: 8,
    image: "/categories/insects.jpg",
    description: "Fresh food sources for your frogs"
  },
  {
    id: "heating",
    name: "Heat & Lighting",
    count: 14,
    image: "/categories/heating.jpg",
    description: "Temperature and lighting solutions"
  },
  {
    id: "water",
    name: "Water & Humidity",
    count: 10,
    image: "/categories/water.jpg",
    description: "Moisture management for optimal habitat"
  },
  {
    id: "decorations",
    name: "Decorations",
    count: 22,
    image: "/categories/decorations.jpg",
    description: "Beautify your frog's environment"
  },
  {
    id: "supplements",
    name: "Supplements",
    count: 9,
    image: "/categories/supplements.jpg",
    description: "Health boosters for your amphibians"
  },
  {
    id: "apparel",
    name: "Apparel",
    count: 16,
    image: "/categories/apparel.jpg",
    description: "Frog-themed clothing and accessories"
  },
  {
    id: "books",
    name: "Books",
    count: 7,
    image: "/categories/books.jpg",
    description: "Educational resources about amphibians"
  },
  {
    id: "featured",
    name: "Featured Items",
    count: 8,
    image: "/categories/featured.jpg",
    description: "Our most popular and recommended products"
  }
];

export default function Categories() {
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
      
      <main className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">All Categories</h1>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-base-200 rounded-lg shadow animate-pulse h-64">
                  <div className="bg-base-300 h-40 w-full rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="bg-base-300 h-5 w-32 rounded-md"></div>
                    <div className="bg-base-300 h-4 w-16 mt-2 rounded-md"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CATEGORIES.map(category => (
                <Link href={`/category/${category.id}`} key={category.id}>
                  <div className="bg-base-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <Image 
                      src={category.image}
                      alt={category.name} 
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover" 
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{category.count} products</p>
                      <p className="text-sm">{category.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
}

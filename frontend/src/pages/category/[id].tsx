import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaStar, FaArrowLeft } from "react-icons/fa";

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


export default function CategoryPage() {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    const loadProducts = async () => {
      if (!id || typeof id !== 'string') return;

      setIsLoading(true);

      const foundCategory = CATEGORIES.find(cat => cat.id === id);
      setCategory(foundCategory);

      try {
        const res = await fetch(`http://localhost:8000/api/v1/products/?category=${id}&offset=0&limit=100`);
        const data = await res.json();

        let filtered = data;

        // Apply sort
        switch (sortOption) {
          case "price-low":
            filtered.sort((a: any, b: any) => a.price - b.price);
            break;
          case "price-high":
            filtered.sort((a: any, b: any) => b.price - a.price);
            break;
          case "rating":
            filtered.sort((a: any, b: any) => b.rating - a.rating);
            break;
        }

        setProducts(filtered);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [id, sortOption]);

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Navigation />

      <main className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/categories" className="btn btn-ghost btn-sm mb-4">
              <FaArrowLeft className="mr-2" /> Back to Categories
            </Link>

            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-base-300 w-64 rounded mb-2"></div>
                <div className="h-4 bg-base-300 w-full max-w-md rounded"></div>
              </div>
            ) : category ? (
              <>
                <h1 className="text-3xl font-bold">{category.name}</h1>
                <p className="text-gray-600">{category.description}</p>
              </>
            ) : (
              <h1 className="text-3xl font-bold">Category Not Found</h1>
            )}
          </div>

          {!isLoading && category && (
            <div className="mb-6 flex justify-between items-center">
              <p>{products.length} products found</p>

              <div className="flex items-center gap-2">
                <span>Sort by:</span>
                <select
                  className="select select-bordered select-sm"
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
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
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
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                  <figure className="relative">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    {product.quantity < 1 && (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any products in this category.</p>
              <Link href="/shop" className="btn btn-primary">
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

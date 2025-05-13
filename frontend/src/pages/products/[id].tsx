import { useRouter } from 'next/router';
import Image from 'next/image'; import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header'; import Footer from '@/components/layout/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import { ALL_PRODUCTS } from '@/data/products';
// This should eventually come from your APIconst ALL_PRODUCTS = [
// ... other products];
export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {      // Simulate API call
        // const foundProduct = ALL_PRODUCTS.find(p => p.id.toString() === id); setProduct(foundProduct);

        try {
          const res = await fetch(`http://localhost:8000/api/v1/products/${id}`);
          const data = await res.json();

          setProduct(data);
        } catch (err) {
          console.error("Failed to fetch product", err);
          setProduct(null);
        } finally {
          setIsLoading(false);
        }
      };
    }

    loadProduct();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.image_url} alt={product.name}
              fill className="object-cover rounded-lg"
              priority />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                ${(product.price / 100).toFixed(2)}
              </span>
              {product.quantity > 0 ? (<span className="badge badge-success">In Stock</span>
              ) : (<span className="badge badge-error">Out of Stock</span>
              )}            </div>
            <button
              className="btn btn-primary mt-4" disabled={product.quantity < 1}
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}















































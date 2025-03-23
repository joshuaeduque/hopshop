import { Header, Navigation, Footer } from "@/components/layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="min-h-screen p-4">
        {/* Main content goes here */}


        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to HopShop</h1>
          <p className="mt-4">Your one-stop shop for everything!</p>
          <div className="mt-8">
            <Link href="/category/featured" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Example product cards */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={`https://via.placeholder.com/150?text=Product+${index + 1}`} alt={`Product ${index + 1}`} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product {index + 1}</h2>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
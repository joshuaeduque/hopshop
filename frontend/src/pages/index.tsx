import { Header, Navigation, Footer } from "@/components/layout";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="min-h-screen p-4">
        {/* Main content goes here */}


        <h1 className="text-4xl font-bold">Welcome to HopShop</h1>
      </main>
      <Footer />
    </>
  );
}
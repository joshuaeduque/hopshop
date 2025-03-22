import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import ProductCard from "@/components/ProductCard/ProductCard";
import SiteHeader from "@/components/SiteHeader/SiteHeader";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <CategoriesBar />

      <div className="p-4 flex flex-col gap-4 justify-self-center">
        <p className="font-bold">Featured Items</p>
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 4 }, (_, index) => (
            <ProductCard name={`Product ${index}`} />
          ))}
        </div>
        <p className="font-bold">Hot Items</p>
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 4 }, (_, index) => (
            <ProductCard name={`Product ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
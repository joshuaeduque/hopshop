import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import SiteHeader from "@/components/SiteHeader/SiteHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-w-max">
      <SiteHeader />
      <CategoriesBar />
    </div>
  );
}
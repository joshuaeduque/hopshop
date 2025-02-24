import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import SiteHeader from "@/components/SiteHeader/SiteHeader";

export default function Product() {
    return (
        <div>
            <SiteHeader />
            <CategoriesBar />
            <div className="mx-4">
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>Products</li>
                        <li>Product category</li>
                    </ul>
                </div>
                <div>
                    <p>breh</p>
                </div>
            </div>
        </div>
    );
}
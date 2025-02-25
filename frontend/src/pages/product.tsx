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
                        <li>product_category</li>
                    </ul>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <img className="aspect-square object-cover" src="/FROG_GANG.jpg" />
                    </div>
                    <div className="col-span-3">
                        <p className="text-3xl">product_name</p>
                        <p>product_rating</p>
                        <hr className="border-neutral" />
                        <p className="text-2xl">$product_price</p>
                        <div className="my-4">
                            <p className="font-bold">Product details</p>
                        </div>
                        <div>
                            <button className="btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
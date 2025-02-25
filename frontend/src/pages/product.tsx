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
                        <p className="text-2xl my-2">$product_price</p>
                        <p className="font-bold">Product details</p>
                        <p>product_details</p>
                        <div className="my-4">
                                <label className="label-text font-bold" htmlFor="quantity">QTY:</label>
                                <input defaultValue={0} min={0} className="input input-bordered mx-4 w-16" type="number" name="quantity" id="quantity" />
                                <button className="btn">Add to cart</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
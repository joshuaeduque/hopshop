import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import SiteHeader from "@/components/SiteHeader/SiteHeader";

export default function Product() {

    const product = {
        name: 'Crazy Cool Frog Thing',
        rating: 5,
        price: 99,
        details: 'This is a crazy cool frog thing, it can do absolutely anything.'
    };

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
                <div className="grid grid-cols-2 gap-4 m-2">
                    <div className="col-span-1 justify-self-center">
                        <img className="aspect-square object-cover h-96 rounded" src="/FROG_GANG.jpg" />
                    </div>
                    <div className="col-span-1 flex flex-col ">
                        <p className="text-4xl">{product.name}</p>
                        <p className="w-96">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis explicabo nulla quos quisquam enim, corrupti sapiente. Autem repellat, ex odio alias perspiciatis, minus cum, cumque sed quae quaerat eos nulla?</p>
                        <p className="text-xl">${product.price / 100}</p>
                        <div className="flex flex-row gap-4">
                            <label className="label-text font-bold content-center" htmlFor="quantity">QTY:</label>
                            <input defaultValue={0} min={0} className="input input-bordered input-sm w-16" type="number" name="quantity" id="quantity" />
                            <button className="btn btn-sm btn-wide">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
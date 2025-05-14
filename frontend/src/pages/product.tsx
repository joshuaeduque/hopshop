import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Product() {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const product = {
        id: 123, // Add an ID for the product
        name: 'Crazy Cool Frog Thing',
        category: 'Pet frogs',
        rating: 5,
        price: 9900, // Price in cents
        image: "/FROG_GANG.jpg", // Add image path
        details: 'This is a crazy cool frog thing, it can do absolutely anything.',
        inStock: true
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        }, quantity);
    };

    return (
        <div>
            <SiteHeader />
            <CategoriesBar />
            <div className="mx-4">
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>Products</li>
                        <li>{product.category}</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 m-2">
                    <div className="col-span-1 justify-self-center">
                        <img className="aspect-square object-cover h-96 rounded" src={product.image} />
                    </div>
                    <div className="col-span-1 flex flex-col ">
                        <p className="text-4xl">{product.name}</p>
                        <p className="w-96">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis explicabo nulla quos quisquam enim, corrupti sapiente. Autem repellat, ex odio alias perspiciatis, minus cum, cumque sed quae quaerat eos nulla?</p>
                        <p className="text-xl">${(product.price / 100).toFixed(2)}</p>
                        <div className="flex flex-row gap-4">
                            <label className="label-text font-bold content-center" htmlFor="quantity">QTY:</label>
                            <input 
                                value={quantity} 
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                min={1} 
                                className="input input-bordered input-sm w-16" 
                                type="number" 
                                name="quantity" 
                                id="quantity" 
                            />
                            <button 
                                className="btn btn-sm btn-wide btn-primary"
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                            >
                                <FaShoppingCart className="mr-2" /> Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Header from "@/components/Header/header";

export default function Checkout() {

    const products = [
        { name: 'Aquatic Frog', description: 'A cool crazy awesome aquatic frog that can do absolutely anything.', price: 999, count: 1 },
        { name: 'Glass Frog', description: 'Not gunna lie, this frog probably has depression.', price: 999, count: 1 }
    ];

    return (
        <>
            <Header />
            <div className="px-[10%] py-4">
                <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-[2fr_1fr] gap-4">
                    <div className="flex flex-col gap-4">
                        <p className="font-medium text-xl">Shopping Cart</p>
                        {products.map((product, i) => (
                            <div className="grid grid-cols-3">
                                <div>
                                    <img src="/next.svg" alt="Product" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-medium">{product.name}</p>
                                    <p>{product.description}</p>
                                    <p>${product.price}</p>
                                </div>
                                <div>
                                    <input className="input bg-base-200" defaultValue={1} type="number" name="" id="" />
                                </div>
                            </div>
                        ))}
                        <hr />
                        <p className="font-medium text-xl">Shipping Details</p>
                        <hr />
                        <p className="font-medium text-xl">Payment Details</p>
                    </div>
                    <div>
                        <p className="font-medium text-2xl">Order Summary</p>
                    </div>
                </div>
            </div>
        </>
    );
}
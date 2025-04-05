import Header from "@/components/Header/header";

export default function Checkout() {

    const products = [
        { name: 'Aquatic Frog', src: '/products/aquatic-frog.jpg', description: 'A cool crazy awesome aquatic frog that can do absolutely anything.', price: 999, count: 1 },
        { name: 'Glass Frog', src: '/products/glass-frog.jpg', description: 'Not gunna lie, this frog probably has depression.', price: 25, count: 1 },
        { name: 'Green Tree Frog', src: '/products/green-tree-frog.jpg', description: 'Not much to say about this one', price: 12, count: 1 }
    ];

    return (
        <>
            <Header />
            <div className="px-[10%] py-4">
                <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-[2fr_1fr] gap-4">
                    <div className="flex flex-col gap-4">
                        <p className="font-medium text-xl">Shopping Cart</p>
                        {products.map((product, i) => (
                            <div className="bg-base-200 rounded p-4 grid gap-4 items-center grid-rows-[1fr_auto] lg:grid-rows-none lg:grid-cols-2">
                                <div className="flex flex-row gap-4">
                                    <div className="w-32 h-32 aspect-square flex content-center justify-center">
                                        <img className="object-scale-down" src={product.src} alt="Product" />
                                    </div>
                                    <div className="grid grid-rows-3">
                                        <p className="self-end font-medium">{product.name}</p>
                                        <p className="text-sm">{product.description}</p>
                                        <p className="self-end">${product.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 items-center justify-self-end">
                                    <p>Quantity:</p>
                                    <input className="input w-32" min={1} defaultValue={1} type="number" name="" id="" />
                                    <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
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
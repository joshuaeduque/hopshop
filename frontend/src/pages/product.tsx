import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

export default function Product() {

    return (
        <>
            <Header />
            <div className="px-[10%] py-8">
                <div className="grid grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-2 gap-16">
                    <div className="border flex justify-center aspect-square overflow-hidden">
                        <img className="w-full object-cover" src="/FROG_GANG.jpg" alt="Product" />
                    </div>
                    <div className="flex flex-col gap-8 justify-center">
                        <p className="text-3xl font-medium">Product title</p>
                        <div className="flex gap-4">
                            <div className="rating rating-half">
                                <input type="radio" name="rating-11" className="rating-hidden" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="0.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="1.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="2.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="3.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="4.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                            <p>4 Reviews</p>
                        </div>
                        <hr />
                        <p className="text-3xl font-medium">$ 999.00</p>
                        <hr />
                        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas sed dignissimos facilis? Ducimus exercitationem quas vitae magni quo totam ullam quos dolore reprehenderit alias esse, minima dicta perferendis molestiae.</p>
                        <div className="flex gap-4">
                            <button className="btn w-48">Add To Cart</button>
                            <button className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </>
    );
}
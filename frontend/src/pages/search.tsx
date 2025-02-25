import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import SiteHeader from "@/components/SiteHeader/SiteHeader";

export default function Search() {

    const products = [
        { name: 'Pacman frog', price: 99 },
        { name: 'Budget frog', price: 199 },
        { name: 'Tree frog', price: 299 },
        { name: 'Basic frog', price: 99 },
        { name: 'Rare frog', price: 599 },
        { name: 'Legendary frog', price: 999 },
        { name: 'Epic frog', price: 9999 },
        { name: 'Golden frog', price: 1499 },
        { name: 'Mystic frog', price: 2499 },
        { name: 'Shadow frog', price: 3999 },
        { name: 'Albino frog', price: 799 },
        { name: 'Giant frog', price: 1299 },
        { name: 'Tiny frog', price: 49 },
        { name: 'Electric frog', price: 1999 },
        { name: 'Fire frog', price: 2999 },
        { name: 'Water frog', price: 2799 },
        { name: 'Poison dart frog', price: 1899 },
        { name: 'Celestial frog', price: 4999 },
        { name: 'Ancient frog', price: 8999 }
    ];

    return (
        <div>
            <SiteHeader />
            <CategoriesBar />
            <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
                {products.map((product) => {
                    return (
                        <div className="card bg-base-100 h-60 w-60 shadow-xl">
                            <figure>
                                <img src="/FROG_GANG.jpg" />
                            </figure>
                            <div className="card-body">
                                <p className="card-title">{product.name}</p>
                                <p>${product.price / 100}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center">
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>
            </div>
        </div>
    );
}
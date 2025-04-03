import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Search() {

    const products = [
        { name: 'Aquatic Frog', src: '/products/aquatic-frog.jpg' },
        { name: 'Bull Frog', src: '/products/bull-frog.jpg' },
        { name: 'Glass Frog', src: '/products/glass-frog.jpg' },
        { name: 'Green Frog', src: '/products/green-frog.jpg' },
        { name: 'Green Tree Frog', src: '/products/green-tree-frog.jpg' },
        { name: 'Poison Dart Frog', src: '/products/poison-dart-frog.jpg' },
        { name: 'Red Eyed Tree Frog', src: '/products/red-eyed-tree-frog.jpg' },
        { name: 'Tomato Frog', src: '/products/tomato-frog.jpg' }
    ];

    return (
        <>
            <Header />
            <div className="px-[10%] py-4">
                <div className="flex flex-col gap-4">
                    <p className="font-bold">Search Results</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.map((product, i) => (
                            <ProductCard id={i.toString()} key={i} name={product.name} imageSrc={product.src} imageAlt={product.name} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-[10%] py-4 flex justify-center">
                <div className="join">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">Page 1</button>
                    <button className="join-item btn">»</button>
                </div>
            </div>
            <hr />
            <Footer />
        </>
    );
}
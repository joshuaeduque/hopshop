interface ProductCardProps {
    imageSrc?: string,
    name?: string,
    price?: string
}

export default function ProductCard({imageSrc, name, price} : ProductCardProps) {
    return (
        <div className="card bg-base-100 h-60 w-60 shadow-xl">
            <figure>
                <img src={imageSrc ? imageSrc : "/FROG_GANG.jpg"} />
            </figure>
            <div className="card-body">
                <p className="card-title">{name ? name : 'Product name'}</p>
                <p>{price ? price : '$999'}</p>
            </div>
        </div>
    );
}

export type { ProductCardProps };
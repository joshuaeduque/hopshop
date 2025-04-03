interface ProductCardProps {
    imageSrc?: string,
    imageAlt?: string,
    name?: string,
    price?: number,
    id?: string
}

export default function ProductCard({ imageSrc, imageAlt, name, price, id }: ProductCardProps) {
    return (
        <div className="card bg-base-200 h-80 shadow-sm">
            <figure>
                <img src={imageSrc ? imageSrc : '/next.svg'} alt={imageAlt ? imageAlt : 'NextJS logo'} />
            </figure>
            <div className="card-body">
                <p className="card-title">{name}</p>
                <div className="rating rating-sm rating-half">
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="0.5 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="1.5 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="2 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="2.5 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="3.5 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="4.5 star" />
                    <input type="radio" name={`rating-${id ? id : '0'}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="5 star" defaultChecked />
                </div>
                <p>${price ? price : '999'}</p>
            </div>
        </div>
    );
}

export type { ProductCardProps };
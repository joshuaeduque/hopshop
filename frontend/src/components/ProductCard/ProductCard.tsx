import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage/FallbackImage';

interface ProductCardProps {
    id: string,
    imageSrc: string,
    name: string,
    price: number
}

export default function ProductCard({id, imageSrc, name, price}: ProductCardProps) {
    return (
        <Link href={`/products/${id}`} className="card bg-base-100 shadow-xl">
            <figure className="relative h-48">
                <FallbackImage
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover"
                    fallbackQuery={name}
                />
            </figure>
            <div className="card-body">
                <p className="card-title">{name}</p>
                <p>${price.toFixed(2)}</p>
            </div>
        </Link>
    );
}

export type { ProductCardProps };

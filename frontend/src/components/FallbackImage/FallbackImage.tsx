import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface FallbackImageProps extends Omit<ImageProps, 'onError'> {
  fallbackQuery?: string;
}

export default function FallbackImage({ 
  src, 
  alt, 
  fallbackQuery,
  ...props 
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    const query = fallbackQuery || alt.split(' ').join('-');
    setImgSrc(`https://placehold.co/400x300/gray/white?text=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}

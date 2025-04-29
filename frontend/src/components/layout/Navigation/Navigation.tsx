/** @format */

import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const categories = [
    { name: 'Pet Frogs', href: '/category/frogs' },
    { name: 'Live Insects', href: '/category/insects' },
    { name: 'Heat & Lighting', href: '/category/heating' },
    { name: 'Water & Humidity', href: '/category/water' },
    { name: 'Decorations', href: '/category/decorations' },
    { name: 'Supplements', href: '/category/supplements' },
    { name: 'Apparel', href: '/category/apparel' },
    { name: 'Books', href: '/category/books' },
  ];

  return (
    <div className={`navbar bg-base-300 ${className}`}>

      {/* Desktop Navigation - visible from md breakpoint and up */}
      <div className="hidden md:flex overflow-x-auto items-center gap-2">
        {categories.map((category) => (
          <Link 
            key={category.href}
            href={category.href}
            className='btn btn-ghost btn-sm whitespace-nowrap'
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

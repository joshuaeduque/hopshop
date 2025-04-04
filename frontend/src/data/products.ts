export const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Green Tree Frog",
    price: 4999,
    image: "/products/green-tree-frog.jpg",
    category: "frogs",
    rating: 4.5,
    description: "A beautiful and friendly amphibian pet.",
    inStock: true
  },
  {
    id: 2,
    name: "Terrarium Kit",
    price: 12999,
    image: "/products/terrarium-kit.jpg",
    category: "supplies",
    rating: 4.8,
    description: "Complete setup for your frog habitat.",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Cricket Feeder",
    price: 1499,
    image: "/products/cricket-feeder.jpg",
    category: "accessories",
    rating: 4.2,
    description: "Convenient feeding solution for your amphibians.",
    inStock: true
  }
];

export async function getProductImages() {
  return ALL_PRODUCTS;
}



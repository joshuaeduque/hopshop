#!/usr/bin/env python
"""
Script to generate a CSV file with 50 products for Algolia import.
"""

import csv
import os
import random
from pathlib import Path

# Categories from the frontend code
CATEGORIES = ["frogs", "supplies", "accessories", "food", "insects", "supplements"]

# Product name components for generating varied product names
FROG_TYPES = [
    "Green Tree",
    "Poison Dart",
    "Bull",
    "Glass",
    "Tomato",
    "Red-Eyed Tree",
    "Pacman",
    "African Dwarf",
    "White's Tree",
    "Amazon Milk",
    "Budgett's",
    "Pixie",
    "Waxy Monkey",
    "Clown",
    "Horned",
    "Mossy",
    "Blue Poison Dart",
    "Golden Poison",
    "Strawberry Poison",
    "Yellow-Banded Poison",
]

SUPPLY_TYPES = ["Terrarium", "Aquarium", "Habitat", "Tank", "Enclosure", "Vivarium"]

ACCESSORY_TYPES = [
    "Feeder",
    "Thermometer",
    "Hygrometer",
    "Mister",
    "Fogger",
    "Heater",
    "Light",
    "UVB Lamp",
    "Hide",
    "Climbing Branch",
    "Water Dish",
    "Substrate",
    "Moss",
    "Decoration",
    "Plant",
    "Lily Pad",
    "Rock",
    "Log",
]

FOOD_TYPES = ["Pellets", "Flakes", "Sticks", "Tablets", "Powder", "Gel"]

INSECT_TYPES = [
    "Crickets",
    "Mealworms",
    "Waxworms",
    "Fruit Flies",
    "Dubia Roaches",
    "Grasshoppers",
    "Locusts",
    "Black Soldier Fly Larvae",
]

SUPPLEMENT_TYPES = [
    "Calcium",
    "Vitamin D3",
    "Multivitamin",
    "Mineral",
    "Probiotic",
    "Electrolyte",
]


def generate_product_name(category):
    """Generate a product name based on category."""
    if category == "frogs":
        return f"{random.choice(FROG_TYPES)} Frog"
    elif category == "supplies":
        return f"{random.choice(SUPPLY_TYPES)} Kit"
    elif category == "accessories":
        return f"{random.choice(ACCESSORY_TYPES)}"
    elif category == "food":
        return f"Frog {random.choice(FOOD_TYPES)}"
    elif category == "insects":
        return f"Live {random.choice(INSECT_TYPES)}"
    elif category == "supplements":
        return f"{random.choice(SUPPLEMENT_TYPES)} Supplement"
    return "Generic Product"


def generate_description(name, category):
    """Generate a product description based on name and category."""
    if category == "frogs":
        return f"A beautiful {name} for your collection. Includes care guide."
    elif category == "supplies":
        return f"Complete {name.lower()} for creating the perfect frog habitat."
    elif category == "accessories":
        return f"Essential {name.lower()} for maintaining your frog's environment."
    elif category == "food":
        return f"Premium quality {name.lower()} for optimal frog nutrition."
    elif category == "insects":
        return f"Fresh {name.lower()} - perfect food source for your frogs."
    elif category == "supplements":
        return f"Essential {name.lower()} for maintaining frog health."
    return "A quality product for your amphibian needs."


def generate_products_csv(filename="products.csv", count=50):
    """Generate a CSV file with random products."""
    # Ensure the directory exists
    output_dir = Path(__file__).parent.parent / "data"
    output_dir.mkdir(exist_ok=True)

    filepath = output_dir / filename

    with open(filepath, "w", newline="") as csvfile:
        fieldnames = [
            "objectID",
            "name",
            "price",
            "image",
            "category",
            "rating",
            "description",
            "inStock",
            "featured",
        ]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        for i in range(1, count + 1):
            category = random.choice(CATEGORIES)
            name = generate_product_name(category)
            price = random.randint(499, 29999)  # Price in cents ($4.99 - $299.99)
            rating = round(random.uniform(3.0, 5.0), 1)
            in_stock = random.random() > 0.2  # 80% chance of being in stock
            featured = random.random() > 0.8  # 20% chance of being featured

            writer.writerow(
                {
                    "objectID": i,
                    "name": name,
                    "price": price,
                    "image": f"/products/{category}/{name.lower().replace(' ', '-')}.jpg",
                    "category": category,
                    "rating": rating,
                    "description": generate_description(name, category),
                    "inStock": in_stock,
                    "featured": featured,
                }
            )

    print(f"Generated {count} products in {filepath}")
    return filepath


if __name__ == "__main__":
    filepath = generate_products_csv()
    print(f"CSV file created at: {filepath}")

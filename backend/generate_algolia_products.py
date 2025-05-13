#!/usr/bin/env python
"""
Script to generate Algolia products CSV file.
"""

from scripts.generate_products_csv import generate_products_csv

if __name__ == "__main__":
    filepath = generate_products_csv("algolia_products.csv", 50)
    print(f"Algolia products CSV file created at: {filepath}")
    print("You can now import this file to Algolia.")

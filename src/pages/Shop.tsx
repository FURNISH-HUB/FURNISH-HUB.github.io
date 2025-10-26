import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productChair from "@/assets/product-chair.jpg";
import productTable from "@/assets/product-table.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productShelf from "@/assets/product-shelf.jpg";
import productAccentChair from "@/assets/product-accent-chair.jpg";

const allProducts = [
  // Seating
  { id: 1, name: "Modern Armchair", price: 599, image: productChair, category: "Seating" },
  { id: 3, name: "Contemporary Sofa", price: 1899, image: productSofa, category: "Seating" },
  { id: 6, name: "Velvet Accent Chair", price: 699, image: productAccentChair, category: "Seating" },
  { id: 7, name: "Scandinavian Armchair", price: 549, image: productChair, category: "Seating" },
  { id: 11, name: "Leather Sofa", price: 2299, image: productSofa, category: "Seating" },
  { id: 12, name: "Lounge Chair", price: 849, image: productAccentChair, category: "Seating" },
  { id: 13, name: "Reading Chair", price: 479, image: productChair, category: "Seating" },
  { id: 14, name: "L-Shaped Sofa", price: 2599, image: productSofa, category: "Seating" },
  
  // Tables
  { id: 2, name: "Dining Table", price: 1299, image: productTable, category: "Tables" },
  { id: 8, name: "Coffee Table", price: 499, image: productTable, category: "Tables" },
  { id: 15, name: "Console Table", price: 649, image: productTable, category: "Tables" },
  { id: 16, name: "Side Table", price: 249, image: productTable, category: "Tables" },
  { id: 17, name: "Oak Dining Table", price: 1599, image: productTable, category: "Tables" },
  { id: 18, name: "Marble Coffee Table", price: 899, image: productTable, category: "Tables" },
  { id: 19, name: "Nesting Tables Set", price: 399, image: productTable, category: "Tables" },
  
  // Lighting
  { id: 4, name: "Table Lamp", price: 189, image: productLamp, category: "Lighting" },
  { id: 20, name: "Floor Lamp", price: 299, image: productLamp, category: "Lighting" },
  { id: 21, name: "Desk Lamp", price: 149, image: productLamp, category: "Lighting" },
  { id: 22, name: "Arc Floor Lamp", price: 449, image: productLamp, category: "Lighting" },
  { id: 23, name: "Bedside Lamp", price: 129, image: productLamp, category: "Lighting" },
  { id: 24, name: "Modern Table Lamp", price: 219, image: productLamp, category: "Lighting" },
  
  // Storage
  { id: 5, name: "Wooden Bookshelf", price: 799, image: productShelf, category: "Storage" },
  { id: 25, name: "Display Cabinet", price: 1099, image: productShelf, category: "Storage" },
  { id: 26, name: "Floating Shelves Set", price: 199, image: productShelf, category: "Storage" },
  { id: 27, name: "Tall Bookcase", price: 899, image: productShelf, category: "Storage" },
  { id: 28, name: "Storage Unit", price: 649, image: productShelf, category: "Storage" },
  { id: 29, name: "Media Console", price: 749, image: productShelf, category: "Storage" },
  
  // Bedroom
  { id: 30, name: "Upholstered Bed Frame", price: 1299, image: productSofa, category: "Bedroom" },
  { id: 31, name: "Nightstand", price: 299, image: productTable, category: "Bedroom" },
  { id: 32, name: "Dresser", price: 899, image: productShelf, category: "Bedroom" },
  { id: 33, name: "Wardrobe", price: 1599, image: productShelf, category: "Bedroom" },
  { id: 34, name: "Bedroom Bench", price: 399, image: productAccentChair, category: "Bedroom" },
  { id: 35, name: "Vanity Table", price: 699, image: productTable, category: "Bedroom" },
  
  // Decor
  { id: 36, name: "Decorative Mirror", price: 249, image: productShelf, category: "Decor" },
  { id: 37, name: "Wall Art Set", price: 179, image: productShelf, category: "Decor" },
  { id: 38, name: "Ceramic Vase", price: 89, image: productLamp, category: "Decor" },
  { id: 39, name: "Table Clock", price: 129, image: productLamp, category: "Decor" },
  { id: 40, name: "Decorative Bowl", price: 69, image: productTable, category: "Decor" },
  
  // Office
  { id: 41, name: "Office Desk", price: 899, image: productTable, category: "Office" },
  { id: 42, name: "Ergonomic Chair", price: 599, image: productChair, category: "Office" },
  { id: 43, name: "Filing Cabinet", price: 449, image: productShelf, category: "Office" },
  { id: 44, name: "Desk Organizer", price: 79, image: productShelf, category: "Office" },
];

const categories = ["All", "Seating", "Tables", "Lighting", "Storage", "Bedroom", "Decor", "Office"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All</h1>
          <p className="text-muted-foreground">Discover our complete collection</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-accent hover:bg-accent/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;

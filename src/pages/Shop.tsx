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
  { id: 1, name: "Modern Armchair", price: 599, image: productChair, category: "Seating" },
  { id: 2, name: "Dining Table", price: 1299, image: productTable, category: "Tables" },
  { id: 3, name: "Contemporary Sofa", price: 1899, image: productSofa, category: "Seating" },
  { id: 4, name: "Table Lamp", price: 189, image: productLamp, category: "Lighting" },
  { id: 5, name: "Wooden Bookshelf", price: 799, image: productShelf, category: "Storage" },
  { id: 6, name: "Velvet Accent Chair", price: 699, image: productAccentChair, category: "Seating" },
  { id: 7, name: "Modern Armchair II", price: 549, image: productChair, category: "Seating" },
  { id: 8, name: "Coffee Table", price: 499, image: productTable, category: "Tables" },
];

const categories = ["All", "Seating", "Tables", "Lighting", "Storage"];

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

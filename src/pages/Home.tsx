import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-image.jpg";
import productChair from "@/assets/product-chair.jpg";
import productTable from "@/assets/product-table.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productLamp from "@/assets/product-lamp.jpg";

const featuredProducts = [
  { id: 1, name: "Modern Armchair", price: 599, image: productChair, category: "Seating" },
  { id: 2, name: "Dining Table", price: 1299, image: productTable, category: "Tables" },
  { id: 3, name: "Contemporary Sofa", price: 1899, image: productSofa, category: "Seating" },
  { id: 4, name: "Table Lamp", price: 189, image: productLamp, category: "Lighting" },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern Living Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/20" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Crafting Timeless Spaces
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover furniture that transforms your house into a home. 
              Elegant designs, exceptional quality.
            </p>
            <Link to="/shop">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white shadow-lg"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that blend form and function beautifully
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Living Room", "Bedroom", "Dining Room"].map((category) => (
              <Link
                key={category}
                to="/shop"
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-secondary group-hover:scale-105 transition-transform duration-500" />
                <div className="relative h-full flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-foreground">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our design team for personalized recommendations
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

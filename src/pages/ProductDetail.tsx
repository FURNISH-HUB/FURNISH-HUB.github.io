import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import productChair from "@/assets/product-chair.jpg";
import productTable from "@/assets/product-table.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productShelf from "@/assets/product-shelf.jpg";
import productAccentChair from "@/assets/product-accent-chair.jpg";

const products = [
  {
    id: 1,
    name: "Modern Armchair",
    price: 599,
    image: productChair,
    category: "Seating",
    description: "This contemporary armchair features clean lines and comfortable padding. Perfect for modern living spaces, it combines style with functionality.",
    dimensions: '32" W x 34" D x 30" H',
    material: "Upholstered fabric with metal legs"
  },
  {
    id: 2,
    name: "Dining Table",
    price: 1299,
    image: productTable,
    category: "Tables",
    description: "A beautiful wooden dining table that seats 6-8 people comfortably. Crafted from sustainable hardwood with a natural finish.",
    dimensions: '72" W x 40" D x 30" H',
    material: "Solid oak wood"
  },
  {
    id: 3,
    name: "Contemporary Sofa",
    price: 1899,
    image: productSofa,
    category: "Seating",
    description: "Spacious three-seater sofa with plush cushions and a timeless design. Built for comfort and durability.",
    dimensions: '84" W x 36" D x 32" H',
    material: "Premium fabric upholstery, solid wood frame"
  },
  {
    id: 4,
    name: "Table Lamp",
    price: 189,
    image: productLamp,
    category: "Lighting",
    description: "Elegant table lamp with brass finish. Provides warm ambient lighting for any room.",
    dimensions: '12" W x 24" H',
    material: "Brass and steel"
  },
  {
    id: 5,
    name: "Wooden Bookshelf",
    price: 799,
    image: productShelf,
    category: "Storage",
    description: "Versatile bookshelf with multiple compartments. Perfect for displaying books and decorative items.",
    dimensions: '48" W x 16" D x 72" H',
    material: "Oak wood with natural finish"
  },
  {
    id: 6,
    name: "Velvet Accent Chair",
    price: 699,
    image: productAccentChair,
    category: "Seating",
    description: "Luxurious velvet accent chair in sage green. Adds a pop of color and comfort to any space.",
    dimensions: '30" W x 32" D x 28" H',
    material: "Velvet upholstery, wooden legs"
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/shop">
            <Button variant="outline">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-accent mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-8 space-y-2">
              <div className="flex">
                <span className="font-semibold w-32">Dimensions:</span>
                <span className="text-muted-foreground">{product.dimensions}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Material:</span>
                <span className="text-muted-foreground">{product.material}</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produk Tidak Ditemukan</h2>
          <Link to="/shop">
            <Button variant="outline">Kembali ke Toko</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Ditambahkan ke keranjang!", {
      description: `${product.name} telah ditambahkan ke keranjang Anda.`
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Toko
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
              <h3 className="font-semibold mb-2">Deskripsi</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-8 space-y-2">
              <div className="flex">
                <span className="font-semibold w-32">Dimensi:</span>
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
              Tambah ke Keranjang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

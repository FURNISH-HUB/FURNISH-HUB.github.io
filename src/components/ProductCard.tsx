import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300">
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {category}
          </p>
          <h3 className="font-semibold text-foreground mb-2">{name}</h3>
          <p className="text-accent font-bold">${price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;

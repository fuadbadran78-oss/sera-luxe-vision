import { Button } from "./ui/button";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
}

const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover-lift">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--sera-black))] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button variant="luxury" size="sm" className="flex-1">
              <ShoppingCart className="w-4 h-4" />
              أضف للسلة
            </Button>
            <Button variant="outline_luxury" size="sm">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--sera-red))] to-[hsl(var(--sera-pink))] text-white text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-smooth">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-gradient-gold">{price}</p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-accent"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

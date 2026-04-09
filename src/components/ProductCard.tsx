import { motion } from 'motion/react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream mb-4">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <button className="flex-1 bg-white/90 backdrop-blur-md text-black py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Add to Bag
          </button>
          <button className="w-12 bg-white/90 backdrop-blur-md text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/10 backdrop-blur-md text-black px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium tracking-tight group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-black/50 mt-1 font-light italic">
            {product.category}
          </p>
        </div>
        <span className="text-sm font-medium">${product.price}</span>
      </div>
    </div>
  );
}

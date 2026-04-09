import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Category } from '../types';

const categories: Category[] = ['All', 'Dresses', 'Outerwear', 'Accessories', 'Evening Wear'];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            Curated Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight">
            Our Collection
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          {/* Category Filter */}
          <div className="flex items-center gap-6 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs uppercase tracking-widest font-medium transition-all relative pb-1 whitespace-nowrap ${
                  activeCategory === category ? 'text-black' : 'text-black/40 hover:text-black'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-black"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Search Toggle */}
          <div className="flex items-center gap-4 ml-auto">
            <AnimatePresence mode="wait">
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="relative flex items-center"
                >
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-b border-black/20 py-1 text-sm focus:outline-none focus:border-black transition-colors pr-8"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-0 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </AnimatePresence>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-32 text-center">
          <p className="text-lg font-serif italic text-black/40">
            No pieces found matching your criteria.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 text-xs uppercase tracking-widest font-bold border-b border-black pb-1"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
}

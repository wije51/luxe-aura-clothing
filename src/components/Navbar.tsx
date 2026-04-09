import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Evening Wear', href: '#' },
    { name: 'Outerwear', href: '#' },
    { name: 'Accessories', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-[10px] font-medium tracking-widest uppercase transition-all hover:opacity-60 whitespace-nowrap',
                isScrolled ? 'text-black' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle (Visible only on mobile/tablet) */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className={cn('w-6 h-6', isScrolled ? 'text-black' : 'text-white')} />
          </button>
        </div>

        {/* Logo (Centered) */}
        <div className="flex justify-center">
          <a
            href="/"
            className={cn(
              'text-xl md:text-3xl font-serif tracking-tighter transition-all whitespace-nowrap',
              isScrolled ? 'text-black' : 'text-white'
            )}
          >
            LUXE AURA
          </a>
        </div>

        {/* Icons (Right aligned) */}
        <div className="flex items-center justify-end gap-2 md:gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search className={cn('w-4 h-4 md:w-5 h-5', isScrolled ? 'text-black' : 'text-white')} />
          </button>
          <button className="hidden md:block p-2 hover:bg-black/5 rounded-full transition-colors">
            <User className={cn('w-5 h-5', isScrolled ? 'text-black' : 'text-white')} />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <ShoppingBag className={cn('w-4 h-4 md:w-5 h-5', isScrolled ? 'text-black' : 'text-white')} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-gold rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-brand-cream z-50 p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-serif tracking-tighter">LUXE AURA</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium tracking-widest uppercase hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto pt-8 border-top border-black/10">
                <a href="#" className="flex items-center gap-3 text-sm uppercase tracking-widest font-medium">
                  <User className="w-5 h-5" /> My Account
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

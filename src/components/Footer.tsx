import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif tracking-tighter mb-6">LUXE AURA</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              Crafting timeless elegance for the modern woman. Our pieces are designed to inspire confidence and grace in every moment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Shop</h4>
            <ul className="flex flex-col gap-4">
              {['New Arrivals', 'Collections', 'Bestsellers', 'Gift Cards', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-brand-gold transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Sustainability', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-brand-gold transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Newsletter</h4>
            <p className="text-sm text-white/50 mb-6">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button className="text-xs uppercase tracking-widest font-bold text-left hover:text-brand-gold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © 2026 LUXE AURA. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Collections Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden aspect-[4/5] rounded-2xl shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200"
                alt="Summer Collection"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center">
                <span className="uppercase tracking-[0.4em] text-xs mb-4">New Season</span>
                <h3 className="text-4xl md:text-5xl font-serif mb-6">Summer Soirée</h3>
                <button className="text-xs uppercase tracking-widest font-bold border-b border-white pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
                  Explore Collection
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden aspect-[4/5] md:mt-24 rounded-2xl shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1200"
                alt="Evening Collection"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center">
                <span className="uppercase tracking-[0.4em] text-xs mb-4">Limited Edition</span>
                <h3 className="text-4xl md:text-5xl font-serif mb-6">Midnight Muse</h3>
                <button className="text-xs uppercase tracking-widest font-bold border-b border-white pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
                  Explore Collection
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <ProductGrid />

        {/* Brand Philosophy Section */}
        <section className="py-32 bg-white px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-[1px] bg-brand-gold mb-12" />
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                "Fashion is the armor to survive the reality of everyday life."
              </h2>
              <p className="text-black/60 text-lg font-light max-w-2xl leading-relaxed italic">
                At Luxe Aura, we believe that true elegance comes from within. Our collections are designed to empower women, celebrating their unique strength and beauty through timeless design and exceptional craftsmanship.
              </p>
              <div className="mt-12 flex items-center gap-4 mb-16">
                <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center">
                  <span className="text-[10px] font-bold">LA</span>
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Our Philosophy</span>
              </div>

              {/* Added Video Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl relative group"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-a-white-dress-walking-in-a-field-34406-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-a-white-dress-walking-in-a-field-34406-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white/80 uppercase tracking-[0.3em] text-[10px] md:text-sm font-medium mb-4 block">
            Spring / Summer 2026
          </span>
          <h1 className="text-white text-5xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[0.9] tracking-tighter text-balance">
            Elegance <br /> <span className="italic">Redefined</span>
          </h1>
          <p className="text-white/70 text-base md:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Discover our curated collection of timeless pieces designed for the modern woman who values sophistication and grace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-full font-medium tracking-widest uppercase text-[10px] transition-colors hover:bg-brand-gold hover:text-white flex items-center gap-2"
            >
              Shop Collection <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-medium tracking-widest uppercase text-[10px] backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              View Lookbook
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 uppercase tracking-widest text-[8px] font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

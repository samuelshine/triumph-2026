import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen md:h-[100dvh] flex flex-col bg-rush-black border-b border-white/10 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute min-w-full min-h-full object-cover scale-105">
          <source src="/CITY-HARVEST-WORSHIP-BANNER.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-rush-black/60" />
      </div>

      <div className="relative z-10 w-full h-full px-6 md:px-12 flex flex-col">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-center py-6 md:py-8 border-b border-white/10"
        >
          <a href="https://cityharvestag.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            <img src="/ch-logo-white.png" alt="City Harvest" className="h-10 md:h-12 w-auto opacity-90 brightness-110" />
          </a>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center min-h-0 py-2 md:py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full max-w-7xl flex items-center justify-center p-0"
          >
            {/* Screen Reader & AI Search Content */}
            <div className="sr-only">
              <h1>Triumph 2026: Night of Worship</h1>
              <p>Presented by City Harvest AG Church. A Call for True Worshipers. Join us for a powerful evening of praise and worship during Passion Week.</p>
            </div>
            
            <img 
              src="/triumph-text.png" 
              alt="Triumph: Night of Worship - A Call for True Worshipers" 
              className="max-w-[100vw] max-h-[80vh] md:max-h-[90vh] object-contain brightness-125 drop-shadow-[0_0_60px_rgba(218,131,7,0.3)]"
            />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full flex flex-col-reverse md:flex-row items-center md:items-end justify-between pt-6 pb-12 md:pb-12 border-t border-white/5 gap-8 md:gap-0"
        >
          {/* Left: CTA */}
          <a
            href="#invite"
            className="w-full md:w-auto flex items-center justify-center gap-6 bg-rush-red text-white font-montserrat font-black uppercase tracking-[0.2em] px-8 md:px-12 py-5 md:py-6 hover:bg-white hover:text-rush-black transition-all duration-500 group shadow-[0_20px_50px_rgba(218,131,7,0.3)] text-xs md:text-sm whitespace-nowrap"
          >
            <span>Get Your Invite</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>

          {/* Right: Info */}
          <div className="flex gap-12 md:gap-16 text-white uppercase text-base md:text-sm font-montserrat font-black tracking-[0.2em] text-center md:text-right">
            <div>
              <span className="block text-white/30 text-[10px] md:text-[11px] font-montserrat font-bold mb-1">Date</span>
              <span className="text-white">Mar 29</span>
            </div>
            <div>
              <span className="block text-white/30 text-[10px] md:text-[11px] font-montserrat font-bold mb-1">Time</span>
              <span className="text-white">6:00 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

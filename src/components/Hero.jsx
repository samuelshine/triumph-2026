import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-8 md:pt-20 pb-12 overflow-hidden bg-rush-black border-b border-white/10">
      {/* Video Background with Heavy Black/Grayscale Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover grayscale mix-blend-luminosity scale-105"
        >
          <source src="/CITY-HARVEST-WORSHIP-BANNER.mp4" type="video/mp4" />
        </video>
        {/* Stark darkening overlay */}
        <div className="absolute inset-0 bg-rush-black/80" />
      </div>

      <div className="relative z-10 w-full flex-1 px-4 md:px-12 flex flex-col justify-between">

        {/* Top Meta Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-center uppercase text-white/70 text-xs md:text-sm font-bold tracking-widest border-b border-white/20 pb-6"
        >
          <div className="flex items-center gap-3">
            <a href="https://cityharvestag.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <img src="/ch-logo-white.png" alt="City Harvest" className="h-7 md:h-9 w-auto opacity-60 brightness-75" />
            </a>
            <span className="md:hidden">City Harvest<br />Presents</span>
            <span className="hidden md:inline">City Harvest Presents</span>
          </div>
          <p className="text-right">A Call For<br />True Worshipers</p>
        </motion.div>

        {/* Massive Typography */}
        <div className="w-full mt-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-rush-red text-[16vw] leading-[0.8] tracking-tighter uppercase mb-4"
          >
            TRIUMPH
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-white text-3xl md:text-6xl font-black uppercase tracking-tight"
          >
            Night of Worship
          </motion.h2>
        </div>

        {/* CTA and Info Grid Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12"
        >
          <a
            href="#invite"
            className="flex items-center gap-4 bg-rush-red text-white font-bold uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-rush-black transition-colors duration-300 group"
          >
            <span>Get Your Invite</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>

          <div className="flex gap-12 text-white/80 uppercase text-xs md:text-sm font-semibold tracking-widest">
            <div>
              <span className="block text-white/50 mb-1">Date</span>
              <span className="text-white">Mar 29, 2026</span>
            </div>
            <div>
              <span className="block text-white/50 mb-1">Time</span>
              <span className="text-white">6:00 PM</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector('section'); // First section = Hero
      const formEl = document.getElementById('invite');

      if (!heroEl || !formEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const formTop = formEl.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Show after scrolling past Hero, hide when Form is visible
      const pastHero = heroBottom < 0;
      const formInView = formTop < windowHeight;

      setVisible(pastHero && !formInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#invite"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 bg-rush-red text-white font-bold uppercase tracking-widest text-xs md:text-sm px-6 py-4 md:px-8 md:py-5 shadow-2xl shadow-rush-red/30 hover:bg-white hover:text-rush-black transition-colors duration-300 flex items-center gap-3 group"
        >
          <span>Get Your Invite</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

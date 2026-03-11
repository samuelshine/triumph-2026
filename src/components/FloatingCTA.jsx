import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Map section backgrounds to contrasting button styles
const SECTION_STYLES = {
  red:   { bg: 'bg-white',     text: 'text-rush-black', shadow: 'shadow-white/20',     hover: 'hover:bg-rush-black hover:text-white' },
  white: { bg: 'bg-rush-black', text: 'text-white',      shadow: 'shadow-rush-black/20', hover: 'hover:bg-rush-red hover:text-white' },
  dark:  { bg: 'bg-rush-red',   text: 'text-white',      shadow: 'shadow-rush-red/30',   hover: 'hover:bg-white hover:text-rush-black' },
};

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState(SECTION_STYLES.dark);

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

      // Detect which section is behind the button (bottom-right corner)
      const buttonY = window.innerHeight - 40; // Approx vertical center of FAB
      const buttonX = window.innerWidth - 60;
      const elBehind = document.elementFromPoint(buttonX, buttonY);

      if (elBehind) {
        const section = elBehind.closest('section');
        if (section) {
          const classes = section.className;
          if (classes.includes('bg-rush-red')) {
            setStyle(SECTION_STYLES.red);
          } else if (classes.includes('bg-white')) {
            setStyle(SECTION_STYLES.white);
          } else {
            setStyle(SECTION_STYLES.dark);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

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
          className={`fixed bottom-6 right-6 z-50 font-bold uppercase tracking-widest text-xs md:text-sm px-6 py-4 md:px-8 md:py-5 shadow-2xl transition-colors duration-300 flex items-center gap-3 group ${style.bg} ${style.text} ${style.shadow} ${style.hover}`}
        >
          <span>Get Your Invite</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

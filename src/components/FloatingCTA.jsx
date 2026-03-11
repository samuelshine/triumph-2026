import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Map section background types to contrasting button styles
const STYLES = {
  red:   'bg-white text-rush-black shadow-white/20 hover:bg-rush-black hover:text-white',
  white: 'bg-rush-black text-white shadow-rush-black/20 hover:bg-rush-red hover:text-white',
  dark:  'bg-rush-red text-white shadow-rush-red/30 hover:bg-white hover:text-rush-black',
};

// Maps each section's Tailwind bg class to a style key
function getStyleForSection(sectionEl) {
  if (!sectionEl) return 'dark';
  const cls = sectionEl.className || '';
  if (cls.includes('bg-rush-red')) return 'red';
  if (cls.includes('bg-white')) return 'white';
  return 'dark';
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [styleKey, setStyleKey] = useState('dark');
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector('section');
      const formEl = document.getElementById('invite');
      if (!heroEl || !formEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const formTop = formEl.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const pastHero = heroBottom < 0;
      const formInView = formTop < windowHeight;
      setVisible(pastHero && !formInView);

      // Determine which section the FAB overlaps by checking bounding rects
      const buttonY = windowHeight - 40; // approximate center-y of the FAB
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= buttonY && rect.bottom >= buttonY) {
          setStyleKey(getStyleForSection(section));
          break;
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
          ref={ref}
          href="#invite"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className={`fixed bottom-6 right-6 z-50 font-bold uppercase tracking-widest text-xs md:text-sm px-6 py-4 md:px-8 md:py-5 shadow-2xl transition-all duration-300 flex items-center gap-3 group ${STYLES[styleKey]}`}
        >
          <span>Get Your Invite</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'framer-motion';

export default function VideoShowcase() {
  return (
    <section className="py-24 md:py-32 px-4 bg-rush-dark relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-rush-red text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            ── Relive the Moment
          </p>
          <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tighter text-white mb-4">
            Last Year's<br />Worship
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl font-medium leading-relaxed">
            A glimpse of what God did when His people gathered in one accord. This year, we go even deeper.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative border-2 border-white/10 bg-rush-black">
          {/* Decorative corner accents */}
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-rush-red" />
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-rush-red" />
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-rush-red" />
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-rush-red" />

          {/* 16:9 Responsive iframe wrapper */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/gYaKPLG0EcM?si=yti5_rKFSimCA5Hp&rel=0&modestbranding=1"
              title="Triumph - Night of Worship Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-between items-center"
        >
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
            Triumph 2025 Highlights
          </p>
          <a
            href="#invite"
            className="text-rush-red text-xs uppercase tracking-widest font-bold hover:text-white transition-colors duration-300 group flex items-center gap-2"
          >
            <span>Be Part of 2026</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function EventDetails() {
  return (
    <section className="relative w-full bg-rush-red text-white py-16 md:py-32 border-b border-rush-black/20">
      <div className="w-full px-4 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start"
        >
          {/* Section Title */}
          <div className="md:col-span-1">
            <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter">
              Event<br />Details
            </h2>
          </div>

          {/* Details Grid */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">

            {/* Date Block */}
            <div className="flex flex-col border-t-2 border-white/20 pt-6">
              <div className="flex items-center justify-between mb-8 text-white/70">
                <span className="uppercase text-xs font-montserrat font-bold tracking-widest">Date</span>
                <Calendar className="w-5 h-5" />
              </div>
              <div className="font-montserrat font-black text-4xl uppercase tracking-tight">
                March 29
              </div>
              <div className="font-montserrat font-medium text-lg text-white/80 mt-2">
                Sunday, 2026
              </div>
            </div>

            {/* Time Block */}
            <div className="flex flex-col border-t-2 border-white/20 pt-6">
              <div className="flex items-center justify-between mb-8 text-white/70">
                <span className="uppercase text-xs font-montserrat font-bold tracking-widest">Time</span>
                <Clock className="w-5 h-5" />
              </div>
              <div className="font-montserrat font-black text-4xl uppercase tracking-tight">
                6:00 PM
              </div>
              <div className="font-montserrat font-medium text-lg text-white/80 mt-2">
                Doors open 5:30 PM
              </div>
            </div>

            {/* Location Block */}
            <div className="flex flex-col border-t-2 border-white/20 pt-6">
              <div className="flex items-center justify-between mb-8 text-white/70">
                <span className="uppercase text-xs font-montserrat font-bold tracking-widest">Location</span>
                <MapPin className="w-5 h-5" />
              </div>
              <div className="font-montserrat font-black text-3xl uppercase tracking-tight leading-none mb-4">
                City Harvest<br />Kothanur
              </div>
              <a
                href="https://maps.app.goo.gl/Zy6RzbDeM3D4pyv6A"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 uppercase text-xs font-bold tracking-widest text-rush-black bg-white px-4 py-3 w-fit hover:bg-rush-black hover:text-white transition-colors"
              >
                <span>Google Maps</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

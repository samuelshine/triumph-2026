import { motion } from 'framer-motion';

export default function Narrative() {
  return (
    <section className="py-24 md:py-40 px-4 bg-white text-rush-black border-b border-rush-black/10 bg-[url('/white-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="max-w-4xl mx-auto flex flex-col items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-rush-red font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-rush-red block"></span>
            The Narrative
          </div>
          <h3 className="font-heading text-4xl md:text-6xl mb-12 uppercase leading-[0.9] tracking-tighter">
            From Sacrifice <br/>To Victory
          </h3>
          <div className="space-y-8 text-xl md:text-3xl font-black uppercase tracking-tight leading-snug">
            <p>
              The journey of Passion Week is one of profound sorrow giving way to unimaginable joy. 
              From the heavy silence of Good Friday to the earth-shattering reality of the empty tomb—we are 
              called to remember the price paid for our freedom.
            </p>
            <p className="text-rush-black/50">
              Triumph is not merely an event; it is a gathering of hearts declaring the victory of the 
              Resurrection. It is a night designed for true worshipers to lift their voices in unity.
            </p>
            <p className="text-rush-red">
              Come, let us bow down in reverence, and rise up in Triumph.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

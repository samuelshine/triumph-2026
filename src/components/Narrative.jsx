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
            From Sacrifice <br />To Victory
          </h3>
          <div className="space-y-8 text-xl md:text-3xl font-montserrat font-normal normal-case tracking-tight leading-snug">
            <p>
              City Harvest AG Church presents Triumph—a night of praise and worship, exhortation, and Christ-centered fellowship. Led by City Harvest Worship—a dynamic and Spirit-filled worship team of City Harvest AG Church, Triumph is aimed at transforming lives and touching the heart of Jesus through worship music.
            </p>
            <p className="text-rush-black/50">
              Let us come together as a family for a powerful and meaningful evening of worship, prayer, and total surrender to our God. Come and celebrate the victory of our Lord Almighty during this Passion Week.
            </p>
            <p className="text-rush-red">
              Come with an expectant heart and bring your friends and family to experience the fullness of God’s presence and glory. Be a part of the Triumph experience at City Harvest AG Church, Bangalore.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function TheExperience() {
  const experiences = [
    {
      number: "01",
      title: "Dynamic Worship",
      description: "Intimacy. Relationship. Revival.\nExperience the touch of God like never before through our soul-stirring praise & worship session led by the City Harvest Worship team.",
    },
    {
      number: "02",
      title: "Timeless Hymns",
      description: "Listen. Tune In. Connect.\nDraw closer to the heart of God through the power of sacred song. Let the profound lyrics of ages past lead you into a deeper understanding of His character.",
    },
    {
      number: "03",
      title: "Community of Believers",
      description: "Believe. Become. Belong.\nFind a prayerful, supportive, and inspiring community of believers at City Harvest AG Church. One big family rooted in God’s love.",
    }
  ];

  return (
    <section className="py-24 px-4 bg-rush-black border-b border-white/10 relative overflow-hidden">
      {/* Decorative dashed line background crossing */}
      <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-white/5 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end border-b border-white/20 pb-6"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-tighter leading-none">
            What To<br />Expect
          </h2>
          <span className="hidden md:block text-rush-red font-bold tracking-widest uppercase text-sm">
            [ The Experience ]
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-rush-dark">
          {experiences.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-10 flex flex-col justify-between min-h-[320px] relative group hover:bg-white transition-colors duration-500 border-b md:border-b-0 border-white/10 ${index !== 2 ? 'md:border-r' : ''}`}
              >
                {/* Background Number */}
                <div className="absolute top-4 right-6 font-heading text-[6rem] leading-none text-white/5 group-hover:text-rush-black/5 transition-colors duration-500 pointer-events-none select-none">
                  {item.number}
                </div>

                <div className="relative z-10">
                  <div className="text-rush-red font-montserrat font-bold text-sm tracking-widest mb-8">
                    {item.number} // 03
                  </div>
                  <h3 className="text-2xl font-montserrat font-black text-white group-hover:text-rush-black uppercase tracking-tight mb-4 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <div className="text-white/60 group-hover:text-rush-black/70 leading-relaxed font-montserrat font-normal transition-colors duration-500 whitespace-pre-line">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function InviteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="invite" className="py-24 md:py-32 px-4 bg-rush-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-full border-t-[20px] border-rush-red" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl mx-auto"
      >
        <div className="border border-white/20 bg-rush-dark p-8 md:p-16 relative">
          
          <div className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              Claim Your Seat
            </h2>
            <div className="w-full h-[1px] bg-white/20 mb-4" />
            <p className="text-white/60 text-sm font-bold tracking-widest uppercase">
              Reserve your spot for Triumph
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-rush-black border-2 border-white/10 focus:border-rush-red text-white px-6 py-5 outline-none transition-colors duration-300 font-medium"
                  placeholder="JOHN DOE"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-rush-black border-2 border-white/10 focus:border-rush-red text-white px-6 py-5 outline-none transition-colors duration-300 font-medium"
                  placeholder="JOHN@EXAMPLE.COM"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-rush-black border-2 border-white/10 focus:border-rush-red text-white px-6 py-5 outline-none transition-colors duration-300 font-medium"
                  placeholder="+91 98765 43210"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-rush-red text-white font-black tracking-widest uppercase py-6 text-lg hover:bg-white hover:text-rush-black transition-colors duration-300 mt-8 flex justify-between items-center px-8 group"
              >
                <span>Confirm Attendance</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 border-2 border-dashed border-white/20 bg-rush-black"
            >
              <h3 className="font-heading text-3xl md:text-4xl text-white mb-4 uppercase text-rush-red">Seat Claimed</h3>
              <p className="text-white/70 leading-relaxed font-medium uppercase tracking-widest text-sm">
                Thank you for reserving your spot.<br/>
                We look forward to worshiping with you.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

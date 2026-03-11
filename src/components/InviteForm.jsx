import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz-Gpeqtsth3PfyjRy_s7Yhd56jEFOjjNJpbUZGYWIibemhReP6ktuEpXrG-zz1V8G-Ag/exec';

export default function InviteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [channel, setChannel] = useState('direct');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source') || params.get('channel') || 'direct';
    setChannel(source);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email || ''); // Email is optional
      payload.append('phone', formData.phone);
      payload.append('channel', channel);
      payload.append('submittedAt', new Date().toISOString());

      // If generic placeholder is used, simulate submission for frontend preview
      if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
        setTimeout(() => {
          setSubmitted(true);
          setLoading(false);
        }, 800);
        return;
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: payload,
        mode: 'no-cors',
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fail gracefully on no-cors errors
      setSubmitted(true); 
    } finally {
      setLoading(false);
    }
  };

  const downloadICS = () => {
    const icsString = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Triumph//Night of Worship//EN\nBEGIN:VEVENT\nDTSTART:20260329T123000Z\nDTEND:20260329T153000Z\nSUMMARY:Triumph - Night of Worship\nDESCRIPTION:A Call For True Worshipers\\n\\nCity Harvest Kothanur\nLOCATION:City Harvest\\, Kothanur Campus\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsString], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'triumph-worship.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Triumph+-+Night+of+Worship&dates=20260329T123000Z/20260329T153000Z&details=A+Call+For+True+Worshipers&location=City+Harvest,+Kothanur`;

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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-rush-black border-2 border-white/10 focus:border-rush-red text-white placeholder:text-white/30 px-6 py-5 outline-none transition-colors duration-300 font-medium"
                  placeholder="JOHN DOE"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-rush-black border-2 border-white/10 focus:border-rush-red text-white placeholder:text-white/30 px-6 py-5 outline-none transition-colors duration-300 font-medium"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Email Address (Optional)</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-rush-black border-2 border-white/10 focus:border-rush-red text-white placeholder:text-white/30 px-6 py-5 outline-none transition-colors duration-300 font-medium"
                  placeholder="JOHN@EXAMPLE.COM"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-rush-red text-white font-black tracking-widest uppercase py-6 text-lg hover:bg-white hover:text-rush-black transition-colors duration-300 mt-8 flex justify-between items-center px-8 group disabled:opacity-50"
              >
                <span>{loading ? 'Processing...' : 'Confirm Attendance'}</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 md:py-16 border-2 border-dashed border-white/20 bg-rush-black"
            >
              <h3 className="font-heading text-3xl md:text-4xl text-white mb-4 uppercase text-rush-red">Seat Claimed</h3>
              <p className="text-white/70 leading-relaxed font-medium uppercase tracking-widest text-sm mb-12">
                Thank you for reserving your spot.<br/>
                We look forward to worshiping with you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <a 
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-rush-black px-6 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white/90 transition-colors"
                >
                  + Google Calendar
                </a>
                <button 
                  onClick={downloadICS}
                  className="w-full sm:w-auto border-2 border-white/20 text-white px-6 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-colors"
                >
                  + Apple / Outlook
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

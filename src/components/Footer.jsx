export default function Footer() {
  return (
    <footer className="bg-rush-black py-12 px-4 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <a href="https://cityharvestag.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            <img src="/ch-logo-white.png" alt="City Harvest" className="h-8 w-auto opacity-60" />
          </a>
          <div>
            <h2 className="font-heading font-bold text-3xl text-rush-red uppercase tracking-tighter mb-2 [-webkit-text-stroke:1px_#FF2E00]">Triumph</h2>
            <p className="text-white/50 text-xs tracking-widest uppercase font-bold">Night of Worship 2026</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end text-xs font-bold tracking-widest text-white/50 uppercase space-y-2">
          <p>City Harvest, Kothanur Campus</p>
          <a href="https://cityharvestag.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white">
            CITYHARVESTAG.COM
          </a>
          <p className="pt-4 text-white/30">&copy; {new Date().getFullYear()} City Harvest. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

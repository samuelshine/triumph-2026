export default function Footer() {
  return (
    <footer className="bg-rush-black py-12 px-4 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-0">
            <div className="overflow-hidden h-20 md:h-32 flex items-center">
              <img 
                src="/triumph-footer-logo.png" 
                alt="Triumph" 
                className="h-32 md:h-48 w-auto opacity-100 brightness-110 scale-y-110 object-contain" 
              />
            </div>
            <p className="text-white/50 text-[11px] md:text-sm tracking-[0.4em] uppercase font-black">Night of Worship 2026</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end text-xs font-bold tracking-widest text-white/50 uppercase space-y-4">
          <a href="https://cityharvestag.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            <img src="/ch-logo-white.png" alt="City Harvest" className="h-10 md:h-14 w-auto opacity-80 brightness-110" />
          </a>
          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-white/30">&copy; {new Date().getFullYear()} City Harvest. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

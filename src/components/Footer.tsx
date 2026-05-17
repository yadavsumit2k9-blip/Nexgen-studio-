import { motion } from 'motion/react';
import Magnetic from './Magnetic';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 relative bg-transparent border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
               <Logo />
            </div>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-4 max-w-sm font-medium">
              Architecting the systems of tomorrow with specialized AI engineering 
              and premium digital craftsmanship for leading companies.
            </p>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-100 mb-8">Operations</h4>
             <ul className="space-y-4 text-zinc-600 font-bold uppercase tracking-[0.1em] text-[10px]">
                <li><a href="#services" className="hover:text-primary transition-colors">Core Systems</a></li>
                <li><a href="#work" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#process" className="hover:text-primary transition-colors">The Pipeline</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-100 mb-8">Company</h4>
             <ul className="space-y-4 text-zinc-600 font-bold uppercase tracking-[0.1em] text-[10px]">
                <li><a href="#about" className="hover:text-primary transition-colors">About Mission</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Global Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Agreements</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-100 mb-8">Inquiries</h4>
             <a 
               href="mailto:buildwithnexgen@gmail.com" 
               className="text-zinc-600 font-bold uppercase tracking-[0.15em] text-[10px] hover:text-primary transition-colors block break-all"
             >
               buildwithnexgen@gmail.com
             </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-[9px] text-zinc-800 font-black tracking-[0.4em] md:tracking-[0.6em] uppercase">
              &copy; {currentYear} NexGen Studio • Global Cognitive Sovereignty
           </p>
           
           <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                 <span className="text-[9px] text-zinc-800 font-black tracking-[0.2em] uppercase">Systems_Online</span>
              </div>
              <div className="text-[9px] text-zinc-800 font-black tracking-[0.2em] uppercase">UTC: {new Date().getHours()}:00</div>
           </div>
        </div>
      </div>
    </footer>
  );
}

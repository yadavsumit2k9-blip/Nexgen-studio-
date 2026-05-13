import { motion } from 'motion/react';
import { Mail, MessageCircle, Send, Cpu, ArrowRight } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import AnimatedHeading from '../components/AnimatedHeading';

export default function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      {/* Refined Atmospheric Lighting */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_60%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center glass-dark border border-white/5 rounded-[4rem] p-16 md:p-32 relative overflow-hidden shadow-3xl group">
          <div className="absolute top-0 right-0 p-12 rotate-45 opacity-[0.02] select-none group-hover:opacity-[0.05] transition-opacity duration-1000">
             <Cpu className="w-96 h-96 text-white" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-black tracking-[0.4em] uppercase text-white/40 mb-12"
          >
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
            <span>Strategic Onboarding Active</span>
          </motion.div>

          <AnimatedHeading
            text="Let's build the future and beyond"
            highlightedWords={["beyond"]}
            className="text-2xl md:text-5xl font-display font-black mb-8 leading-[1.1] tracking-tighter justify-center uppercase"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="text-base md:text-lg text-zinc-500 mb-12 max-w-xl mx-auto leading-relaxed font-medium"
          >
            Join the elite circle of forward-thinking enterprises leveraging 
            high-fidelity AI ecosystems and proprietary software craftsmanship.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Magnetic strength={0.1}>
              <motion.button 
                onClick={onOpenModal}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-7 bg-primary text-black rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center shadow-3xl overflow-hidden hover:bg-white duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-[-30deg]" />
                <span className="relative z-10 flex items-center">
                   Secure Deployment <Send className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-700 fill-black/20" />
                </span>
              </motion.button>
            </Magnetic>
            
            <Magnetic strength={0.1}>
              <motion.button 
                onClick={onOpenModal}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-7 bg-zinc-950/40 glass-dark border border-white/10 text-white/60 hover:text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center shadow-3xl overflow-hidden hover:border-white/30 duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-[-30deg]" />
                <span className="relative z-10 flex items-center">
                   Request Elite Audit <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-700" />
                </span>
              </motion.button>
            </Magnetic>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-32 flex flex-col items-center space-y-6"
          >
            <div className="text-[9px] font-black tracking-[0.5em] uppercase text-zinc-800">
              GLOBAL COGNITIVE OPERATIONS • EST. 2024 • NEXGEN STUDIO
            </div>
            <a 
              href="mailto:buildwithnexgen@gmail.com"
              className="text-primary/40 hover:text-primary transition-all text-xs font-black tracking-[0.4em] uppercase"
            >
              buildwithnexgen@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

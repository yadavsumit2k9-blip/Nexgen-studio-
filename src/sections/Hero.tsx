import { motion } from 'motion/react';
import { ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import Magnetic from '../components/Magnetic';
import AnimatedHeading from '../components/AnimatedHeading';
import HeroVisual from '../components/HeroVisual';
import { useMobile } from '../hooks/useMobile';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const isMobile = useMobile();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Top Glow - Optimized intensity */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none" />
        
        {/* Ambient Moving Lights - Slowed and simplified */}
        {!isMobile && (
          <>
            <motion.div 
              animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 blur-[120px] rounded-full pointer-events-none opacity-40" 
            />
            <motion.div 
              animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/3 blur-[120px] rounded-full pointer-events-none opacity-40" 
            />
          </>
        )}
        
        {/* Atmospheric Dust/Particles */}
        <FloatingParticles />
        
        {/* Submerged Grid with Perspective */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none">
           <div className="absolute inset-0 grid-pattern opacity-20 bg-[size:80px_80px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-white/[0.02] backdrop-blur-md sm:backdrop-blur-xl mb-12 shadow-2xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-[9px] md:text-xs font-black tracking-[0.4em] uppercase text-zinc-500">
              Future of Enterprise Automation
            </span>
          </motion.div>

          <AnimatedHeading
            as="h1"
            text="The New Standard for Intelligent Systems"
            highlightedWords={["Intelligent"]}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.05] md:leading-[1] tracking-tighter mb-8 max-w-5xl mx-auto py-2 gpu-optim uppercase"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-zinc-400 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-medium px-4 tracking-tight"
          >
            Engineering the future of enterprise automation with 
            <span className="text-white"> neural-grade AI architecture</span> and precision-crafted luxury interfaces.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-20 md:mb-24 relative z-10 w-full max-w-2xl mx-auto px-6">
            <Magnetic strength={0.05}>
              <motion.button 
                onClick={onOpenModal}
                className="w-full sm:w-auto relative px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-xl md:rounded-2xl font-black text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all flex items-center justify-center group overflow-hidden shadow-xl hover:bg-primary transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <MessageCircle className="mr-3 w-4 h-4 fill-black group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10">Book Consultation</span> <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500 relative z-10" />
              </motion.button>
            </Magnetic>
            <Magnetic strength={0.05}>
              <motion.a 
                href="#services"
                className="w-full sm:w-auto relative px-8 md:px-10 py-4 md:py-5 bg-white/[0.03] rounded-xl md:rounded-2xl font-black text-[9px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center group hover:bg-white/[0.05] hover:text-white transition-all duration-500 shadow-xl"
              >
                Explore Solution <div className="ml-3 w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_#06b6d4] opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </Magnetic>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

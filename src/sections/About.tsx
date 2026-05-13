import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';

function AboutVisual() {
  return (
    <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5">
       <img 
         src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
         alt="Futuristic AI Workspace"
         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
         referrerPolicy="no-referrer"
       />
       
       {/* Cinematic Overlays */}
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
       <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
       
       {/* Data Overlay Elements */}
       <div className="absolute top-8 right-8 flex flex-col items-end space-y-2">
          <div className="glass-premium px-3 py-1 rounded-lg text-[8px] font-bold tracking-[0.2em] text-primary uppercase border border-primary/20">
             Neural_Link: Established
          </div>
          <div className="glass-premium px-3 py-1 rounded-lg text-[8px] font-bold tracking-[0.2em] text-white/40 uppercase border border-white/10">
             Node_04 // Active
          </div>
       </div>

       <div className="absolute bottom-8 left-8 right-8">
          <div className="glass-premium p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-white/10 backdrop-blur-2xl">
             <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                   <span className="text-xs font-bold text-white uppercase tracking-widest">Reality_Sync</span>
                </div>
                <Zap className="w-3 h-3 text-primary" />
             </div>
             <div className="space-y-2">
                <motion.div 
                   initial={{ width: "30%" }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 2, delay: 0.5 }}
                   className="h-1 bg-white/10 rounded-full overflow-hidden"
                >
                   <div className="h-full bg-primary" />
                </motion.div>
                <div className="flex justify-between">
                   <p className="text-[8px] text-white/30 font-mono">CORE_ENGINE_v4.0.2</p>
                   <p className="text-[8px] text-primary font-mono">99.9% UPTIME</p>
                </div>
             </div>
          </div>
       </div>

       {/* Scanner Effect */}
       <motion.div 
         animate={{ top: ["-10%", "110%"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-20 z-20 pointer-events-none"
       />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full"
          >
            <AboutVisual />
          </motion.div>

          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="w-10 h-[1px] bg-primary/30" />
              <span className="text-zinc-500 font-bold text-xs tracking-[0.5em] uppercase">VisionARY MISSION</span>
            </motion.div>
            <AnimatedHeading
              text="Architecting the next epoch of intelligence"
              highlightedWords={["epoch"]}
              className="text-2xl md:text-5xl font-display font-black mb-8 leading-[1.1] tracking-tighter"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1.2 }}
              className="text-base md:text-lg text-zinc-500 leading-relaxed mb-8 font-medium"
            >
              NexGen Studio operates at the intersection of high-fidelity engineering and cognitive logic. 
              We don't just build software; we engineer intelligent ecosystems that adapt, evolve, and redefine human capability.
            </motion.p>
             <div className="grid grid-cols-2 gap-6 md:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                   <h4 className="text-lg font-display font-black text-white mb-3 tracking-tight uppercase">SaaS Scale</h4>
                   <div className="h-px w-6 bg-primary/30 mb-4" />
                   <p className="text-sm text-zinc-600 font-medium leading-[1.6]">Clean, enterprise-grade architectures built for global mission-critical throughput.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                   <h4 className="text-lg font-display font-black text-white mb-3 tracking-tight uppercase">Neural Core</h4>
                   <div className="h-px w-6 bg-purple-500/30 mb-4" />
                   <p className="text-sm text-zinc-600 font-medium leading-[1.6]">Proprietary AI ecosystems serving high-growth startups and global enterprises.</p>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useMemo } from 'react';
import { motion } from 'motion/react';
import AnimatedHeading from '../components/AnimatedHeading';
import { useMobile } from '../hooks/useMobile';
import { 
  Check, 
  Zap, 
  MessageCircle, 
  Layout, 
  Network,
  Cpu,
  Send
} from 'lucide-react';

const automationFeatures = [
  { title: 'Workflow Orchestration', icon: Network },
  { title: 'Smart Chat Logic', icon: MessageCircle },
  { title: 'Database Sync', icon: Layout },
  { title: 'Instant Execution', icon: Zap },
];

export default function AutomationShowcase() {
  const isMobile = useMobile();

  return (
    <section className="py-24 relative bg-zinc-950 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-30">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <AnimatedHeading
              text="The Next Era of Automation"
              highlightedWords={["Next", "Era", "Automation"]}
              className="text-3xl md:text-6xl font-display font-bold mb-8"
            />
            <p className="text-base text-white/50 mb-10 leading-relaxed max-w-xl">
              We build end-to-end pipelines that connect your favorite tools like 
              Slack, Shopify, and WhatsApp to custom AI brains that work while you sleep.
            </p>

            <div className="space-y-5">
              {automationFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                     <feat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-base font-medium text-white/80">{feat.title}</span>
                  <Check className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full">
            {/* Visual Logic Flow representation */}
            <motion.div 
              initial={{ opacity: 0, rotateY: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative p-7 md:p-10 rounded-[2.5rem] bg-zinc-950/20 backdrop-blur-md sm:backdrop-blur-xl overflow-hidden will-change-transform shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/5 group/card"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* background with better depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
              
              {/* Dynamic Aura - More Functional & Optimized */}
              <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[80px] pointer-events-none opacity-50" />
              
              <div className="relative z-10">
                <div className="flex justify-between mb-12">
                   <div className="flex items-center space-x-3 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#06b6d4]" />
                      <span className="text-[9px] font-black tracking-[0.2em] text-white/40 uppercase font-mono">AUTOMATION_ACTIVE</span>
                   </div>
                   <div className="flex space-x-1.5">
                      {[1, 2, 3].map(i => (
                        <div 
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full bg-primary/40 ${i === 1 ? 'animate-pulse' : ''}`} 
                        />
                      ))}
                   </div>
                </div>
  
                <div className="space-y-10 relative">
                   {/* Animated Glowing Connection Path */}
                   <svg className="absolute left-[31px] top-6 bottom-6 w-8 pointer-events-none opacity-50">
                      <motion.path
                        d="M 1,0 V 260"
                        stroke="url(#automation-line-grad)"
                        strokeWidth="1.5"
                        strokeDasharray="4 8"
                        initial={{ pathOffset: 0 }}
                        animate={{ pathOffset: -1 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <defs>
                        <linearGradient id="automation-line-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="50%" stopColor="#9333ea" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                   </svg>
                   
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="flex items-center space-x-4 md:space-x-6 relative z-10"
                   >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-zinc-900 border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                         <MessageCircle className="text-primary w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="glass-dark p-3.5 md:p-5 rounded-xl md:rounded-2xl border border-white/10 flex-1 group hover:border-primary/40 transition-all">
                         <div className="flex justify-between items-start mb-2">
                            <p className="text-[10px] font-mono text-primary uppercase tracking-widest">Ingestion</p>
                            <span className="text-[8px] text-white/20">9ms</span>
                         </div>
                         <p className="text-xs md:text-sm font-bold text-white/90">Customer Inquiry Pipeline</p>
                         <div className="mt-3 flex space-x-1">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="h-0.5 flex-1 bg-primary/10 rounded-full" />
                            ))}
                         </div>
                      </div>
                   </motion.div>
    
                   <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-4 md:space-x-6 relative z-10 translate-x-3 md:translate-x-10"
                   >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                         <Cpu className="text-black w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div className="glass p-3.5 md:p-5 rounded-xl md:rounded-2xl border border-primary/20 flex-1 shadow-2xl relative overflow-hidden">
                         <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                         <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1.5 relative z-10">Neural Analysis</p>
                         <p className="text-xs md:text-sm font-bold text-white relative z-10 truncate">GPT-4o Reasoning Engine</p>
                         <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden relative z-10">
                            <motion.div 
                               animate={{ x: [-200, 200] }}
                               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                               className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent" 
                            />
                         </div>
                      </div>
                   </motion.div>
    
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="flex items-center space-x-4 md:space-x-6 relative z-10"
                   >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                         <Send className="text-white w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="glass-dark p-3.5 md:p-5 rounded-xl md:rounded-2xl border border-white/10 flex-1 group hover:border-emerald-500/40 transition-all">
                         <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1">Execution</p>
                         <p className="text-xs md:text-sm font-bold text-white/90">Automated CRM & WhatsApp Reply</p>
                         <div className="mt-3 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping opacity-50" />
                            <div className="h-0.5 w-20 bg-emerald-500/20 rounded-full" />
                         </div>
                      </div>
                   </motion.div>
                </div>
              </div>

              {/* Floating Data Particles */}
              {[...Array(isMobile ? 3 : 5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
                  animate={{
                    y: [-20, -100],
                    x: [0, (i - 2) * 20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: '10%',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


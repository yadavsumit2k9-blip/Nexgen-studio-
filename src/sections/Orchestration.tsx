import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Zap, Network, Database, MessageSquare, ShieldCheck, Share2 } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';
import { useMobile } from '../hooks/useMobile';

const nodes = [
  { id: 'input', icon: MessageSquare, label: 'Omni-Channel Feed', color: 'text-blue-400', desktopPos: { x: 10, y: 50 }, mobilePos: { x: 50, y: 12 } },
  { id: 'brain', icon: Cpu, label: 'Neural Core', color: 'text-primary', desktopPos: { x: 50, y: 50 }, mobilePos: { x: 50, y: 50 } },
  { id: 'data', icon: Database, label: 'Knowledge Base', color: 'text-purple-400', desktopPos: { x: 50, y: 20 }, mobilePos: { x: 30, y: 32 } },
  { id: 'security', icon: ShieldCheck, label: 'Neural Guard', color: 'text-emerald-400', desktopPos: { x: 50, y: 80 }, mobilePos: { x: 70, y: 68 } },
  { id: 'output', icon: Share2, label: 'Autonomous Action', color: 'text-white', desktopPos: { x: 90, y: 50 }, mobilePos: { x: 50, y: 88 } },
];

export default function Orchestration() {
  const isMobile = useMobile(1024);

  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      x: [0, i % 2 === 0 ? 5 : -5, 0],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
           <AnimatedHeading
             as="h2"
             text="Intelligent Orchestration"
             highlightedWords={["Orchestration"]}
             className="text-3xl md:text-6xl font-display font-bold tracking-tight mb-6"
           />
           <p className="text-sm md:text-base text-white/40 max-w-xl mx-auto leading-relaxed">
             Witness the seamless transition from raw data to autonomous execution thru our high-fidelity AI infrastructure.
           </p>
        </div>

        <div className="relative min-h-[500px] lg:min-h-0 lg:aspect-[21/9] w-full bg-white/[0.01] rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 overflow-hidden group will-change-transform shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
           <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-xl pointer-events-none" />
           {/* Connection Lines (Desktop) */}
           <AnimatePresence>
             {!isMobile && (
               <motion.svg 
                 key="desktop-svg"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 w-full h-full pointer-events-none opacity-10" 
                 viewBox="0 0 1000 450" 
                 preserveAspectRatio="none"
               >
                  <path
                    d="M 100,225 L 500,225"
                    stroke="url(#flow-grad)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                  />
                  <path d="M 500,225 L 900,225" stroke="#fff" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
                  <path d="M 500,90 L 500,225" stroke="#9333ea" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
                  <path d="M 500,360 L 500,225" stroke="#10b981" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
                  <defs>
                    <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
               </motion.svg>
             )}

             {/* Mobile Lines */}
             {isMobile && (
               <motion.svg 
                 key="mobile-svg"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 0.2 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 w-full h-full pointer-events-none"
                 viewBox="0 0 100 100"
                 preserveAspectRatio="none"
               >
                  <motion.path
                     d="M 50,10 L 50,90"
                     stroke="rgba(6,182,212,0.5)"
                     strokeWidth="0.5"
                     strokeDasharray="2 2"
                     initial={{ pathOffset: 0 }}
                     animate={{ pathOffset: -1 }}
                     transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path d="M 50,50 L 15,35" stroke="rgba(147,51,234,0.4)" strokeWidth="0.3" strokeDasharray="1 1" />
                  <motion.path d="M 50,50 L 85,65" stroke="rgba(16,185,129,0.4)" strokeWidth="0.3" strokeDasharray="1 1" />
               </motion.svg>
             )}
           </AnimatePresence>

           {/* Nodes */}
           {nodes.map((node, i) => {
             const pos = isMobile ? node.mobilePos : node.desktopPos;
             return (
               <motion.div
                 key={node.id}
                 custom={i}
                 variants={floatingVariants}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 animate="animate"
                 viewport={{ once: true }}
                 className="absolute glass-dark border border-white/10 rounded-xl md:rounded-2xl p-2.5 lg:p-3.5 flex flex-row items-center space-x-3 lg:space-x-4 shadow-[0_0_30px_rgba(0,0,0,0.3)] z-10 group/node hover:border-primary/50 transition-colors cursor-crosshair w-[150px] lg:w-auto min-w-[140px] lg:min-w-0"
                 style={{ 
                   left: `${pos.x}%`, 
                   top: `${pos.y}%`,
                   translateX: '-50%',
                   translateY: '-50%'
                 }}
               >
                  <div className={`w-8 h-8 lg:w-11 lg:h-11 rounded-lg lg:rounded-xl bg-white/5 flex items-center justify-center ${node.color} group-hover/node:bg-white/10 transition-colors flex-shrink-0`}>
                     <node.icon className="w-4 h-4 lg:w-5.5 lg:h-5.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                     <p className="text-[9px] font-mono opacity-40 uppercase tracking-widest leading-none mb-1 truncate">{node.id}</p>
                     <p className="text-[10px] lg:text-xs font-bold text-white truncate">{node.label}</p>
                  </div>
                  
                  {/* Visual pulse - Reduced complexity for mobile */}
                  {!isMobile && (
                    <div className="absolute inset-0 rounded-2xl border border-primary/20 animate-ping opacity-0 group-hover/node:opacity-100" />
                  )}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover/node:ring-primary/40 transition-all duration-500" />
               </motion.div>
             );
           })}

           {/* Animated Data Packets (Performance optimized) */}
           {!isMobile && [...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ x: '10%', y: '50%', opacity: 0 }}
               animate={{ 
                 x: ['10%', '50%', '50%', '90%'],
                 y: ['50%', '50%', i % 2 === 0 ? '20%' : '80%', '50%'],
                 opacity: [0, 0.8, 0.8, 0]
               }}
               transition={{ 
                 duration: 5, 
                 repeat: Infinity, 
                 delay: i * 2,
                 ease: "linear"
               }}
               className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#06b6d4] z-0 will-change-transform"
             />
           ))}

           {/* Neural Background Particles */}
           <div className="absolute inset-0 pointer-events-none opacity-20">
              {[...Array(isMobile ? 10 : 20)].map((_, i) => (
                <motion.div
                  key={`p-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.2, 1],
                    x: [0, Math.random() * 20 - 10],
                    y: [0, Math.random() * 20 - 10]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity, 
                    delay: Math.random() * 5 
                  }}
                  className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                  style={{ 
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%` 
                  }}
                />
              ))}
           </div>

           {/* Background UI Decorations */}
           <div className="absolute top-8 right-8 text-[8px] font-mono text-white/10 leading-tight hidden md:block">
              &gt; SYNC_STATE: STABLE<br />
              &gt; OPS_PER_SEC: 12.4k<br />
              &gt; LATENCY: 14ms
           </div>
        </div>
      </div>
    </section>
  );
}


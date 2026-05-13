import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { 
  Activity, 
  Bot, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Zap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export default function HeroVisual() {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothX, [-300, 300], [-5, 5]);

  const glowX = useTransform(smoothX, (x) => x + 500);
  const glowY = useTransform(smoothY, (y) => y + 250);

  const chartX = useTransform(smoothX, [-500, 500], [-10, 10]);
  const chartY = useTransform(smoothY, [-300, 300], [-10, 10]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16 px-4 sm:px-6">
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-zinc-950/20 backdrop-blur-xl border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.7)] group gpu-optim"
      >
        {/* Cinematic Light Reflection Sweep - Optimized for performance */}
        {!isMobile && (
          <motion.div 
            animate={{ x: ['100%', '-100%'], opacity: [0, 0.15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] z-10 pointer-events-none"
          />
        )}

        {/* Mouse Follow Glow - Desktop Only - Reduced Opacity */}
        {!isMobile && (
          <motion.div
            style={{
              left: glowX,
              top: glowY,
            }}
            className="absolute w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
          />
        )}

        {/* Ambient Grid - Simplified */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />
        
        {/* Floating Background Particles - Optimized count and speed */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(isMobile ? 5 : 12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/10 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{ 
                y: [null, "-10%", "110%"],
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: 20 + Math.random() * 20, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>
        
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
        </div>

        {/* Realistic Dashboard Mockup Content */}
        <div className="relative z-10 w-full h-full p-6 md:p-12 flex flex-col justify-between">
          {/* Connection Lines removed as per user request */}

          {/* Header Row */}
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center space-x-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 shadow-2xl backdrop-blur-md"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping absolute opacity-40" />
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#06b6d4]" />
                </div>
                <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-white uppercase font-display">Automation Active</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex items-center space-x-2 pl-1"
              >
                <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent mr-2" />
                <div className="flex flex-col">
                  <h4 className="text-white/20 text-[9px] font-mono tracking-[0.4em] uppercase leading-none mb-1">
                    Systems Online // Node_048
                  </h4>
                  <div className="flex items-center space-x-3">
                    <span className="text-[8px] font-mono text-zinc-600">LATENCY: 12ms</span>
                    <span className="text-[8px] font-mono text-zinc-600">LOAD: 14.2%</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex space-x-2 p-1.5 rounded-full bg-white/[0.02] border border-white/5">
               {[1, 2, 3].map((i) => (
                 <motion.div 
                   key={i} 
                   animate={{ opacity: [0.2, 1, 0.2] }}
                   transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                   className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-primary' : 'bg-white/10'}`} 
                 />
               ))}
            </div>
          </div>

          {/* Center Visual: Graph and Nodes */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 flex items-center justify-center pointer-events-none">
             {/* Functional Neural Core Pulse - Simplified for mobile */}
             <div className="relative flex items-center justify-center">
                <motion.div 
                  animate={isMobile ? { opacity: [0.1, 0.15, 0.1] } : { scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`${isMobile ? 'w-64 h-64 blur-[60px]' : 'w-[400px] h-[400px] blur-[100px]'} absolute bg-primary/20 rounded-full`}
                />
                {!isMobile && (
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0, 0.1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-[200px] h-[200px] border border-primary/20 rounded-full"
                  />
                )}
             </div>

             {/* Pulsing Light Nodes - Reduced count for performance */}
             {[...Array(isMobile ? 3 : 6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full blur-[1px]"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                />
             ))}
             <svg width="100%" height="200" viewBox="0 0 1000 200" fill="none" className="opacity-40">
                <motion.path
                  d="M0 150 Q 150 150 250 100 T 450 120 T 650 40 T 850 80 T 1000 20"
                  stroke="url(#gradient-line)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
                />
                {!isMobile && (
                  <>
                    <motion.path
                      d="M0 100 Q 200 80 300 120 T 500 60 T 700 140 T 900 100 T 1000 80"
                      stroke="rgba(6,182,212,0.2)"
                      strokeWidth="1"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 1],
                        pathOffset: [0, 0, 1],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: 2,
                        ease: "linear"
                      }}
                    />
                    <motion.path
                      d="M0 50 Q 100 150 400 100 T 600 150 T 800 50 T 1000 120"
                      stroke="rgba(147, 51, 234, 0.2)"
                      strokeWidth="1"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 1],
                        pathOffset: [0, 0, 1],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        delay: 1,
                        ease: "linear"
                      }}
                    />
                  </>
                )}
                <defs>
                  <linearGradient id="gradient-line" x1="0" y1="0" x2="1000" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
             </svg>
             
             {/* Animated Node Connections */}
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                   {[0, 120, 240].map((angle, i) => (
                     <div key={i}>
                       <motion.div
                         className="absolute w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                         style={{
                           transform: `rotate(${angle}deg) translateX(${isMobile ? 80 : 140}px)`,
                         }}
                         animate={{ 
                           opacity: [0.3, 0.8, 0.3],
                           scale: [1, 1.2, 1],
                         }}
                         transition={{
                           duration: 3 + i,
                           repeat: Infinity,
                         }}
                       />
                       {!isMobile && (
                         <motion.div
                           className="absolute h-px bg-gradient-to-r from-primary/20 to-transparent"
                           style={{
                             width: '80px',
                             transform: `rotate(${angle}deg) translateX(${140}px)`,
                             transformOrigin: 'left center',
                           }}
                           animate={{
                             opacity: [0, 0.2, 0],
                             scaleX: [0, 1, 0],
                           }}
                           transition={{
                             duration: 4 + i,
                             repeat: Infinity,
                             ease: "easeInOut",
                           }}
                         />
                       )}
                     </div>
                   ))}
                </motion.div>
             </div>
          </div>

          {/* Bottom Floating Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 relative z-20">
            {[
              { label: 'Growth', val: '+240%', icon: TrendingUp, color: 'text-emerald-400' },
              { label: 'Automation', val: '98%', icon: Zap, color: 'text-primary' },
              { label: 'Support', val: '24/7', icon: Bot, color: 'text-purple-400' },
              { label: 'Security', val: 'Active', icon: ShieldCheck, color: 'text-blue-400' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.04)" }}
                className="bg-white/[0.015] backdrop-blur-xl p-4 rounded-xl flex flex-col items-center md:items-start text-center md:text-left border border-white/5 transition-all duration-500 shadow-2xl"
              >
                <div className={`p-2 rounded-lg bg-white/5 mb-3 ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="text-xl md:text-2xl font-display font-black text-white mb-0.5 tracking-tight">{item.val}</div>
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Chart Window */}
        <motion.div
          style={{
            x: chartX,
            y: chartY,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-44 bg-transparent rounded-3xl border border-white/10 p-5 shadow-2xl backdrop-blur-2xl z-20 hidden md:block group/chart overflow-hidden"
        >
          {/* Animated Glow Border */}
          <div className="absolute inset-0 rounded-3xl p-[1px] -z-10 overflow-hidden">
             {/* Roaming line removed as per user request */}
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Real-time Load</span>
            </div>
            <TrendingUp className="w-3 h-3 text-primary transition-transform group-hover/chart:scale-110" />
          </div>
          
          <div className="flex items-end justify-between space-x-1.5 h-20">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-full bg-gradient-to-t from-primary/10 to-primary/40 rounded-t-sm"
                initial={{ height: "40%" }}
                animate={{ height: [`${30 + Math.random() * 20}%`, `${50 + Math.random() * 20}%`, `${30 + Math.random() * 20}%`] }}
                transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-[8px] text-white/30 font-mono uppercase tracking-tighter">00:00:01ms speed</p>
            <p className="text-xs font-bold text-primary">OPT-04</p>
          </div>
        </motion.div>

        {/* Floating Holographic Elements */}
        
        {/* Chatbot Popup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute top-12 right-12 w-48 md:w-64 glass-dark rounded-2xl border border-white/10 p-4 shadow-2xl hidden md:block"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">AI Assistant</p>
              <p className="text-[8px] text-white/40">Response generated in 0.2s</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-white/10 rounded-full w-full" />
            <div className="h-2 bg-white/10 rounded-full w-[90%]" />
            <div className="h-2 bg-white/5 rounded-full w-[40%]" />
          </div>
        </motion.div>

        {/* Data Stream Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="absolute bottom-32 left-12 w-40 md:w-56 glass rounded-2xl border border-white/10 p-5 shadow-2xl hidden md:block"
        >
           <div className="flex items-center justify-between mb-4">
              <Activity className="w-4 h-4 text-primary" />
              <div className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[8px] font-bold">LIVE</div>
           </div>
           <div className="space-y-3">
              {[0, 1, 2].map(i => (
                <div key={i} className="flex justify-between items-center">
                   <div className="h-1 bg-white/10 rounded-full w-12" />
                   <div className="h-1.5 bg-white/20 rounded-full w-8" />
                </div>
              ))}
           </div>
        </motion.div>

        {/* Overlay Cinematic Grain & Scanlines */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
        
        {/* Animated Scanning Line */}
        <motion.div 
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent via-primary/5 to-transparent z-20 pointer-events-none"
        />
      </motion.div>
    </div>
  );
}


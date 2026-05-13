import { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Activity, Zap, Cpu, BarChart3, Globe2 } from 'lucide-react';

const stats = [
  { label: 'Strategic Deployments', value: 80, suffix: '+', icon: Activity, color: 'primary' },
  { label: 'System Integrity', value: 99.9, suffix: '%', icon: Globe2, color: 'emerald' },
  { label: 'Neural Latency', value: 24, suffix: 'ms', icon: Zap, color: 'amber' },
  { label: 'Cognitive Agents', value: 15, suffix: 'k+', icon: Cpu, color: 'secondary' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    setIsCounting(true);
    let startTime: number | null = null;
    const duration = 2000;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Power 2 Out easing
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = startValue + easeProgress * (value - startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsCounting(false);
      }
    };

    requestAnimationFrame(animate);
  }, [value, isInView]);

  return (
    <span 
      ref={ref} 
      className={`gpu-optim transition-all duration-700 ${isCounting ? 'text-primary scale-105' : ''}`}
    >
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Cinematic Pulse Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1, 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative p-10 rounded-[2.5rem] bg-zinc-950/0 hover:bg-zinc-950/20 transition-all duration-1000 overflow-hidden"
            >
              {/* Subtle background layer */}
              <div className="absolute inset-0 bg-white/[0.015] group-hover:bg-transparent transition-colors duration-1000" />
              {/* Refined Signal Indicators */}
              <div className="absolute top-8 right-8 flex items-center space-x-2">
                <motion.div 
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
                />
                <div className="w-[30px] h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
              </div>

              {/* Icon Cluster */}
              <div className="flex items-start justify-between mb-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000 group-hover:border-primary/20 shadow-2xl">
                  <stat.icon className="w-6 h-6 text-zinc-600 group-hover:text-primary transition-colors duration-700" />
                </div>
              </div>

              {/* Core Metrics */}
              <div className="md:text-left relative z-10">
                <div className="text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter mb-4 text-white group-hover:tracking-tight transition-all duration-1000 gpu-optim">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-4 bg-primary/20 group-hover:bg-primary transition-colors duration-1000 rounded-full" />
                  <p className="text-[11px] font-black tracking-[0.4em] uppercase text-zinc-600 group-hover:text-zinc-300 transition-colors duration-1000 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              </div>

              {/* Surface Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Bottom scanline */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

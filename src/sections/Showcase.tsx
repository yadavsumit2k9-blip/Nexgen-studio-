import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Activity, Cpu, LineChart, Globe, Zap, Network, ShieldCheck } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import AnimatedHeading from '../components/AnimatedHeading';

const projects = [
  {
    title: 'NeuralOps Elite',
    category: 'Enterprise AI Ecosystem',
    tags: ['Architecture', 'LLM Ops'],
    type: 'infrastructure',
    color: 'text-primary'
  },
  {
    title: 'Vanguard Core',
    category: 'Autonomous OS Framework',
    tags: ['Neural Engine', 'Real-time'],
    type: 'os',
    color: 'text-purple-400'
  },
  {
    title: 'Titan Intelligence',
    category: 'Predictive Market Synthesis',
    tags: ['Quant Model', 'FinTech'],
    type: 'finance',
    color: 'text-emerald-400'
  },
  {
    title: 'Horizon Vision',
    category: 'Strategic Insight Platform',
    tags: ['Next-Gen Cloud', 'UX Framework'],
    type: 'analytics',
    color: 'text-blue-400'
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'infrastructure') {
    return (
      <div className="absolute inset-0 bg-zinc-950 overflow-hidden group/infra">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
        
        {/* Abstract Infrastructure Visual - Optimized */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-72 h-72">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className={`absolute inset-0 border border-white/5 rounded-[3rem] ${i === 0 ? 'animate-pulse' : ''}`}
                  style={{ scale: 0.8 + i * 0.2, opacity: 0.2 - i * 0.05 }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-[2rem] bg-zinc-900 border border-white/5 flex items-center justify-center shadow-2xl">
                    <Cpu className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors duration-1000" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  if (type === 'os') {
    return (
      <div className="absolute inset-0 bg-zinc-950 p-10 flex flex-col font-mono text-xs overflow-hidden group/os">
        <div className="flex justify-between items-center mb-10 opacity-30">
          <span className="text-white font-black tracking-[0.2em] uppercase">V_CORE_SYS_01</span>
          <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-primary">STABLE</div>
        </div>
        <div className="flex-1 glass-dark rounded-[3rem] border border-white/5 p-8 relative overflow-hidden group-hover:border-purple-500/20 transition-all duration-1000 gpu-optim">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           <div className="space-y-6">
              {[...Array(isMobile ? 3 : 5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500/30" />
                   <div className="flex-1 h-[1px] bg-white/[0.03]" />
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }

  if (type === 'finance') {
    return (
      <div className="absolute inset-0 bg-zinc-950 p-10 overflow-hidden group/finance">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
        <div className="h-full glass-dark rounded-[3rem] border border-white/5 p-10 flex flex-col justify-end relative overflow-hidden gpu-optim">
           <div className="mb-8">
              <div className="text-[10px] font-black text-emerald-500 tracking-[0.3em] uppercase mb-2">Alpha_Synthetic_Feed</div>
              <div className="text-3xl md:text-4xl font-display font-black text-white">$42,00.41</div>
           </div>
           <div className="h-24 flex items-end justify-between space-x-1.5">
              {[...Array(isMobile ? 12 : 20)].map((_, i) => (
                <div
                  key={i}
                  className="w-full bg-emerald-500/[0.08] rounded-t-full group-hover:bg-emerald-500/[0.15] transition-colors"
                  style={{ height: `${20 + Math.random() * 80}%` }}
                />
              ))}
           </div>
        </div>
      </div>
    );
  }

  if (type === 'analytics') {
    return (
      <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center p-12 group/analytics">
        <div className="relative w-full h-full glass-dark rounded-[3rem] border border-white/5 flex items-center justify-center overflow-hidden gpu-optim">
           <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
           <div className="w-56 h-56 border border-white/[0.03] rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 border-t border-blue-500/20 rounded-full" />
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-[1.5rem] bg-zinc-950 border border-white/5 flex items-center justify-center shadow-xl">
                 <Zap className="w-8 h-8 text-blue-500/40 group-hover:text-blue-500 transition-colors duration-1000" />
              </div>
           </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function Showcase({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="w-8 h-[1px] bg-primary/30" />
                <span className="text-zinc-500 font-bold text-[10px] tracking-[0.4em] uppercase">Showcase</span>
              </motion.div>
              <AnimatedHeading
                text="Elite Cognitive Deployments"
                highlightedWords={["Deployments"]}
                className="text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter"
              />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Magnetic strength={0.1}>
              <button 
                onClick={onOpenModal}
                className="px-12 py-5 rounded-full glass border border-white/10 hover:border-primary/30 transition-all font-black text-xs tracking-[0.3em] uppercase text-white/60 hover:text-white inline-block bg-zinc-950/20"
              >
                Archive Access
              </button>
            </Magnetic>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              onClick={onOpenModal}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[16/11] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden mb-8 transition-all duration-1000 group-hover:shadow-[0_40px_100px_rgba(6,182,212,0.08)]">
                <ProjectVisual type={project.type} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-1000" />
                
                <div className="absolute inset-x-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-6 group-hover:translate-y-0 scale-90 group-hover:scale-100 z-20">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-3xl group-hover:scale-110 transition-transform duration-700 gpu-optim">
                        <ArrowRight className="w-8 h-8 md:w-10 md:h-10 -rotate-45" />
                    </div>
                </div>

                <div className="absolute top-8 left-8 z-10 glass-dark px-5 py-2.5 rounded-xl text-[8px] font-black tracking-[0.4em] text-white/20 group-hover:text-primary transition-all uppercase">
                  DEPLOYMENT_{i + 1}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                 <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-2 group-hover:text-primary transition-colors tracking-tighter text-white uppercase gpu-optim">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 font-bold text-sm md:text-base tracking-tight">{project.category}</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500 border border-white/5 px-4 py-1.5 rounded-full bg-white/[0.02] shadow-sm">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

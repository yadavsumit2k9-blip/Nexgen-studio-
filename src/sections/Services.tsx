import { motion } from 'motion/react';
import { 
  Bot, 
  Code2, 
  Layout, 
  Settings2, 
  Zap,
  Globe,
  ArrowUpRight,
  Activity,
  Layers
} from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';

const services = [
  {
    title: 'Enterprise AI Ecosystems',
    desc: 'Deep neural orchestration for large-scale automation and strategic decision intelligence.',
    icon: Zap,
    color: 'from-cyan-500/10 to-blue-500/10',
    className: 'md:col-span-4 md:row-span-2',
    visual: 'pipeline'
  },
  {
    title: 'Autonomous Agents',
    desc: 'Self-evolving agents engineered for complex workflow management.',
    icon: Bot,
    color: 'from-purple-500/10 to-pink-500/10',
    className: 'md:col-span-2 md:row-span-1',
    visual: 'agent'
  },
  {
    title: 'Immersive Interfaces',
    desc: 'Luxury digital experiences built with high-fidelity React architectures.',
    icon: Code2,
    color: 'from-blue-500/10 to-cyan-500/10',
    className: 'md:col-span-2 md:row-span-1',
    visual: 'code'
  },
  {
    title: 'Intelligence Hubs',
    desc: 'Advanced data visualizations for mission-critical oversight.',
    icon: Layout,
    color: 'from-emerald-500/10 to-cyan-500/10',
    className: 'md:col-span-3 md:row-span-1',
    visual: 'dashboard'
  },
  {
    title: 'Neural Integration',
    desc: 'Seamless architectural synergy across your entire digital infrastructure.',
    icon: Settings2,
    color: 'from-orange-500/10 to-red-500/10',
    className: 'md:col-span-3 md:row-span-1',
    visual: 'integration'
  },
];

function CardVisual({ type }: { type: string }) {
  if (type === 'pipeline') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-full flex items-center justify-center space-x-8 px-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.3 }}
              className="relative w-24 h-24 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center shadow-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <Activity className="w-6 h-6 text-primary/40" />
              <motion.div 
                 animate={{ opacity: [0.1, 0.3, 0.1] }}
                 transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                 className="absolute inset-0 grid-pattern rounded-3xl" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'agent') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full"
        />
        <div className="absolute bottom-8 right-8 space-y-3">
          {[0, 1].map(i => (
            <motion.div
              key={i}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="h-[1px] w-24 md:w-32 rounded-full bg-gradient-to-r from-transparent to-white/10"
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'code') {
    return (
      <div className="absolute bottom-0 right-0 left-0 h-1/2 p-6 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
        <div className="w-full h-full bg-zinc-950 rounded-t-3xl border-t border-x border-white/10 p-6 font-mono text-xs text-zinc-600 overflow-hidden shadow-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
          </div>
          <div className="space-y-2">
            <p className="text-primary italic">class Architecture &#123;</p>
            <p className="pl-4 opacity-50">static async initialize() &#123;</p>
            <p className="pl-8 text-cyan-500">await renderLuxApp();</p>
            <p className="pl-4 opacity-50">&#125;</p>
            <p className="text-primary">&#125;</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="absolute inset-0 p-8 flex items-end justify-center pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-full h-24 flex items-end justify-between space-x-1.5">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${20 + (i * 7) % 80}%` }}
              transition={{ delay: i * 0.05, duration: 1.2, ease: "easeOut" }}
              className="w-full bg-white/10 rounded-t-full"
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'integration') {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="relative w-32 h-32">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-white/10 rounded-full"
              style={{ scale: 0.5 + i * 0.2 }}
            />
          ))}
          <Layers className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white/20" />
        </div>
      </div>
    );
  }

  return null;
}

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden section-visibility">
      {/* Premium Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-8"
          >
            <div className="w-10 h-[1px] bg-primary/30" />
            <span className="text-zinc-500 font-bold text-xs tracking-[0.5em] uppercase">Architecture</span>
          </motion.div>
          <AnimatedHeading
            text="Forging the intelligence architecture of tomorrow"
            highlightedWords={["intelligence"]}
            className="text-2xl md:text-5xl font-display font-black mb-8 leading-[1.1] tracking-tighter"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Deploying specialized AI ecosystems and high-fidelity interfaces 
            that redefine operational scale and user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:auto-rows-[240px]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`${service.className} group relative bg-zinc-950/0 hover:bg-zinc-950/40 p-8 sm:p-10 rounded-[2.5rem] overflow-hidden flex flex-col justify-between transition-all duration-1000 cursor-default`}
            >
              <div className="absolute inset-0 bg-white/[0.02] sm:border sm:border-white/5 group-hover:bg-transparent group-hover:border-transparent transition-all duration-1000" />
              <CardVisual type={service.visual || ''} />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center mb-6 transition-transform duration-700 group-hover:scale-110">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-black mb-3 tracking-tighter text-white group-hover:text-primary transition-colors duration-700 uppercase">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-700 max-w-[280px] font-medium">
                  {service.desc}
                </p>
              </div>

              <div className="relative z-10 flex justify-end">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:bg-primary group-hover:text-black transition-all duration-700 shadow-2xl"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Surface Reflection */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
          
          {/* Decorative Strategy Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 rounded-[2rem] bg-zinc-950/20 glass border border-white/5 p-8 flex flex-col justify-center items-center text-center group cursor-pointer hover:border-primary/20 transition-all duration-1000 relative overflow-hidden"
          >
             <Globe className="w-10 h-10 text-zinc-800 group-hover:text-primary transition-colors duration-1000 mb-6" />
             <h4 className="text-xl font-display font-black mb-3 tracking-tight text-white uppercase tracking-[0.1em]">Global Reach</h4>
             <p className="text-xs text-zinc-500 font-medium group-hover:text-zinc-400 transition-colors max-w-xs">High-fidelity deployment across all global economic nodes.</p>
             
             <div className="absolute bottom-0 inset-x-0 h-1 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

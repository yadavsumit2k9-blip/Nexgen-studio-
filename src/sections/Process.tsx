import { motion } from 'motion/react';
import Magnetic from '../components/Magnetic';
import AnimatedHeading from '../components/AnimatedHeading';
import { 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Bot,
  Layers,
  Search,
  Check
} from 'lucide-react';

const steps = [
  {
    title: 'Intelligence Audit',
    desc: 'Deep logic synthesis to identify high-impact cognitive automation opportunities within your ecosystem.',
    icon: Search,
  },
  {
    title: 'Architectural Design',
    desc: 'High-fidelity design systems balancing aesthetic elegance with mission-critical functionality.',
    icon: Layers,
  },
  {
    title: 'Deployment Engineering',
    desc: 'Bespoke integration of neural networks and custom models to power your unique architecture.',
    icon: Bot,
  },
  {
    title: 'Infinite Optimization',
    desc: 'Continuous systemic refinement ensuring your automation stays at the frontier of intelligence.',
    icon: Zap,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative bg-transparent overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-8"
          >
            <div className="w-10 h-[1px] bg-primary/30" />
            <span className="text-zinc-500 font-bold text-xs tracking-[0.5em] uppercase">The Pipeline</span>
          </motion.div>
          <AnimatedHeading
            text="Forging systems of absolute intelligence"
            highlightedWords={["intelligence"]}
            className="text-2xl md:text-5xl font-display font-black mb-8 leading-[1.1] tracking-tighter"
          />
        </div>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute top-0 left-8 md:left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/[0.05]">
            <motion.div 
               animate={{ top: ["-300px", "100%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute w-full h-[300px] bg-gradient-to-b from-transparent via-primary to-transparent" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32 gap-x-20 lg:gap-x-40 relative z-10 pl-16 md:pl-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex items-start md:items-center space-x-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:space-x-reverse'}`}
              >
                <div className="flex-shrink-0 relative group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-zinc-950 border border-white/5 flex items-center justify-center group-hover:border-primary/40 transition-all duration-1000 shadow-3xl relative overflow-hidden gpu-optim">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <step.icon className="w-7 h-7 text-white/20 group-hover:text-primary transition-all duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-black tracking-tighter text-white/40 shadow-3xl">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className={`flex-1 ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl md:text-3xl font-display font-black mb-3 tracking-tighter text-white uppercase group-hover:text-primary transition-colors duration-700">{step.title}</h3>
                  <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-sm ml-0 mr-auto md:ml-auto md:mr-0 font-medium group-hover:text-zinc-400 transition-colors duration-700">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2 }}
           className="mt-32 p-10 md:p-14 rounded-[2.5rem] glass-dark border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group/cta"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000" />
          
          <div className="flex items-center space-x-8 relative z-10">
             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 animate-pulse">
                <CheckCircle2 className="w-8 h-8 text-primary" />
             </div>
             <div>
                <h4 className="text-3xl md:text-4xl font-display font-black tracking-tighter text-white mb-1">Ready for deployment?</h4>
                <p className="text-zinc-500 text-base font-medium">Initialize your strategic cognitive transition today.</p>
             </div>
          </div>
          
          <Magnetic strength={0.05}>
            <motion.a 
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="group/btn relative px-12 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.3em] flex items-center hover:bg-primary hover:text-white transition-all shadow-xl z-10"
            >
               Secure Audit <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-700" />
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

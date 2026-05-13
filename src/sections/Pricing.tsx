import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import AnimatedHeading from '../components/AnimatedHeading';

const plans = [
  {
    name: 'Starter',
    price: '60',
    desc: 'Bespoke AI-powered environments and essential cognitive automation for emergent startups.',
    features: ['AI Strategic Landing Page', 'Core Automation Logic', 'Executive UX/UI Design', 'Neural SEO Optimization', 'Global WhatsApp Gateway'],
  },
  {
    name: 'Growth',
    price: '100',
    desc: 'Comprehensive AI intelligence ecosystem engineered for high-growth enterprise scale.',
    features: ['Full Spectrum Web Platform', 'Advanced Neural Automation', 'Enterprise CRM Synergy', 'Cognitive Chatbot Integration', 'Premium High-Fidelity Design', 'Priority Executive Support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    desc: 'Custom-engineered digital infrastructure for global-scale mission-critical operations.',
    features: ['Custom SaaS Development', 'Enterprise Grade AI Infra', 'Proprietary Dashboards', 'Infinite Scale Automation', 'Dedicated Intelligence Team', 'Neural System Integrations'],
  },
];

export default function Pricing({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="pricing" className="py-32 relative bg-zinc-950/20 overflow-hidden">
      {/* Decorative Light Elements - Optimized */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-purple-500/5 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-30" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs font-black tracking-[0.3em] text-white/40 uppercase mb-8"
          >
            Investment Tiers
          </motion.div>
          <AnimatedHeading
            text="Global Strategic Investment"
            highlightedWords={["Investment"]}
            className="text-2xl md:text-3xl font-display font-black mb-8 justify-center tracking-tighter"
          />
          <p className="text-zinc-500 text-sm md:text-base font-medium max-w-2xl mx-auto">Selecting the appropriate cognitive architecture for your business trajectory.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: i * 0.15, 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-1000 overflow-hidden group flex flex-col ${
                p.popular 
                ? 'bg-zinc-950/40 backdrop-blur-xl border-primary/20 shadow-[0_40px_100px_rgba(0,0,0,0.6)] md:scale-105 z-10' 
                : 'bg-white/[0.01] border-white/5 hover:border-white/10'
              }`}
            >
              {p.popular && (
                <div className="absolute top-8 right-8 flex items-center space-x-2 px-4 py-2 bg-primary rounded-full text-black font-black text-[9px] uppercase tracking-widest shadow-2xl">
                   <div className="w-1 h-1 rounded-full bg-black animate-pulse" />
                   <span>Most Popular</span>
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-lg font-black font-display mb-4 text-zinc-500 group-hover:text-primary transition-colors uppercase tracking-[0.2em]">{p.name}</h3>
                <div className="h-[2px] w-8 bg-primary/20 mb-6 group-hover:w-12 transition-all duration-1000" />
                <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed group-hover:text-zinc-300 transition-colors duration-700">{p.desc}</p>
              </div>
              
              <div className="flex items-baseline mb-10">
                 <span className="text-[10px] font-black text-primary/40 mr-2 uppercase tracking-widest">
                   {p.name === 'Enterprise' ? 'Contact' : 'Investment'}
                 </span>
                 <span className="text-4xl md:text-5xl lg:text-3xl font-display font-black tracking-tighter text-white">
                   {p.name === 'Enterprise' ? p.price : `$${p.price}`}
                 </span>
                 {p.name !== 'Enterprise' && <span className="text-zinc-700 ml-3 font-black uppercase text-[10px] tracking-widest">/ Engine</span>}
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {p.features.map(f => (
                  <div key={f} className="flex items-start space-x-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mt-0.5">
                       <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-xs md:text-sm text-zinc-400 font-medium leading-tight">{f}</span>
                  </div>
                ))}
              </div>

              <Magnetic strength={0.05}>
                <button 
                  onClick={onOpenModal}
                  className={`relative w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] transition-all overflow-hidden group/btn ${
                    p.popular 
                    ? 'bg-primary text-black hover:bg-white transition-colors duration-700' 
                    : 'glass-dark border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-700'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/50 to-primary/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000 skew-x-[-30deg]" />
                  <span className="relative z-10">
                    {p.name === 'Enterprise' ? 'Request Elite Audit' : 'Secure Deployment'}
                  </span>
                </button>
              </Magnetic>

              {/* Floor Shadow for popularity */}
              {p.popular && (
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10 opacity-50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

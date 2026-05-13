import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Typically, a full-scale AI-powered web project takes 4-8 weeks, depending on the complexity of the integrations and specific requirements.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer specialized AI automation, custom web development, UI/UX design, WhatsApp automation, and end-to-end business workflow transformation.',
  },
  {
    q: 'Do you provide AI automation?',
    a: 'Yes, AI automation is our core specialty. We build custom agents that handle data, customer interactions, and internal operations.',
  },
  {
    q: 'Is the website mobile responsive?',
    a: 'Every project we build is mobile-first, ensuring a seamless experience across all devices including smartphones, tablets, and desktops.',
  },
  {
    q: 'Can businesses request custom solutions?',
    a: 'Absolutely. We specialize in tailoring our AI and web services to meet the specific unique challenges of your business ecosystem.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-primary/30" />
              <span className="text-zinc-500 font-bold text-[10px] tracking-[0.4em] uppercase">Intelligence BASE</span>
            </motion.div>
            <AnimatedHeading
              text="Resolving systemic inquiries"
              highlightedWords={["inquiries"]}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-8 leading-[1.1] tracking-tighter"
            />
            <p className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-sm">
              A synthesis of common logic fragments regarding our operations, engineering, and visionary pipeline.
            </p>
          </div>

          <div className="space-y-4 md:space-y-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border-white/0 bg-zinc-950/0 hover:bg-zinc-950/20 transition-all duration-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left transition-colors group"
                >
                  <span className="text-lg md:text-xl font-black font-display tracking-tight text-white/60 group-hover:text-white transition-colors duration-500">{faq.q}</span>
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500">
                    {openIndex === i ? <Minus className="text-primary w-3 h-3" /> : <Plus className="text-zinc-600 w-3 h-3 group-hover:text-primary" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-500 text-sm md:text-base leading-relaxed border-white/5 pt-0 font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

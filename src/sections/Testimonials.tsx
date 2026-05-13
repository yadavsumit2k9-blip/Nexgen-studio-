import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, InnovateX',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    text: 'NexGen Studio completely transformed our operational efficiency. Their AI integration saved us over 40 hours of manual work every single week.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director, Quantum Labs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    text: 'The most forward-thinking agency we have ever worked with. Their design is world-class and their engineering is flawless.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, EcoFlow',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    text: 'They don\'t just deliver projects; they deliver value. Our conversion rates increased by 150% after the new landing page launch.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-40 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-8"
          >
            <div className="w-10 h-[1px] bg-primary/30" />
            <span className="text-zinc-500 font-bold text-xs tracking-[0.5em] uppercase">Global Verification</span>
          </motion.div>
          <AnimatedHeading
            text="Endorsed by the avant-garde"
            highlightedWords={["avant-garde"]}
            className="text-5xl md:text-[80px] font-display font-black mb-12 leading-[0.95] tracking-tighter"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative group transition-all duration-1000"
            >
              {/* Invisible touch target and subtle hover scale */}
              <div className="absolute -inset-8 bg-zinc-950/0 group-hover:bg-zinc-950/20 rounded-[3rem] backdrop-blur-0 group-hover:backdrop-blur-xl transition-all duration-1000 pointer-events-none" />
              
              <Quote className="absolute -top-6 -right-6 text-white/[0.03] w-24 h-24 pointer-events-none group-hover:text-primary/[0.05] transition-all duration-1000 rotate-12" />
              
              <div className="relative z-10">
                <div className="flex space-x-1.5 mb-10 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-zinc-500 leading-[1.6] mb-12 font-medium group-hover:text-zinc-200 transition-all duration-700 font-display italic tracking-tight">
                  "{t.text}"
                </p>

                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />
                    <img 
                      src={t.image} 
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 relative z-10"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-white text-lg tracking-tight uppercase">{t.name}</h4>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

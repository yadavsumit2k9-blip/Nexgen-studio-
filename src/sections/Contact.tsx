import { motion } from 'motion/react';
import { MessageCircle, Mail, Send, Clock, Sparkles } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import AnimatedHeading from '../components/AnimatedHeading';

export default function Contact({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="contact-us" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Connect with us</span>
            </motion.div>
            
            <AnimatedHeading
              text="Let's build something extraordinary"
              highlightedWords={["extraordinary"]}
              className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
            >
              Ready to automate your workflow or build a world-class application? 
              Pick your preferred way to reach out.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2.5rem] bg-zinc-950/50 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-[0_0_80px_rgba(6,182,212,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online Now
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">Chat With Us On WhatsApp</h3>
                <p className="text-zinc-400 mb-8 font-medium">Real-time collaboration and instant support for your next project.</p>

                <div className="flex items-center space-x-2 text-zinc-500 text-xs mb-8">
                   <Clock className="w-4 h-4" />
                   <span>Usually replies within 1 hour</span>
                </div>

                <Magnetic strength={0.1}>
                  <button 
                    onClick={onOpenModal}
                    className="flex items-center justify-center w-full py-4 px-6 bg-transparent text-white rounded-2xl font-bold text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:bg-primary/5 transition-all group/btn border border-white/5 hover:border-primary/40"
                  >
                    <MessageCircle className="mr-2 w-4 h-4 fill-primary" />
                    Open WhatsApp Uplink
                  </button>
                </Magnetic>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2.5rem] bg-zinc-950/50 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-[0_0_80px_rgba(6,182,212,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
                    <Mail className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">Contact via Email</h3>
                <p className="text-zinc-400 mb-8 font-medium">Detailed project briefs and partnerships discussed with our core team.</p>

                <div className="flex items-center space-x-2 text-zinc-500 text-xs mb-8">
                   <Send className="w-4 h-4" />
                   <span>Direct response to your inbox</span>
                </div>

                <Magnetic strength={0.1}>
                  <a 
                    href="mailto:buildwithnexgen@gmail.com?subject=Project Inquiry - NexGenStudio&body=Hi NexGenStudio,%0A%0AI would like to discuss a project regarding AI automation, website development, or digital systems."
                    className="flex items-center justify-center w-full py-4 px-6 bg-white/[0.03] text-white border border-white/10 rounded-2xl font-bold text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-primary hover:text-black transition-all duration-500 group/btn overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                    <Mail className="mr-2 w-4 h-4 transition-transform group-hover/btn:scale-110" />
                    Launch Email Session
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm text-center flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">
               Direct Connection: buildwithnexgen@gmail.com • Operational Hub: India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

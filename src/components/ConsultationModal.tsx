import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, CheckCircle2, Sparkles, ShieldCheck, Mail } from 'lucide-react';
import Magnetic from './Magnetic';

interface FormState {
  name: string;
  business: string;
  email: string;
  whatsapp: string;
  budget: string;
  type: string;
  details: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  business: '',
  email: '',
  whatsapp: '',
  budget: '',
  type: '',
  details: ''
};

export default function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format inquiry details for Email and WhatsApp
    const message = `*Project Inquiry - NexGenStudio*%0A
*Name:* ${form.name}%0A
*Business:* ${form.business}%0A
*Email:* ${form.email}%0A
*WhatsApp:* ${form.whatsapp}%0A
*Budget:* ${form.budget}%0A
*Project Type:* ${form.type}%0A
*Details:* ${form.details}`;

    const whatsappUrl = `https://wa.me/918700783650?text=Hi%20NexGenStudio%2C%20I%20want%20to%20discuss%20a%20project.%0A%0A${message}`;

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Small delay before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl"
          />
          
          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/5 rounded-[4rem] overflow-hidden shadow-3xl"
            >
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
            
            <button 
              onClick={onClose}
              className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all z-20 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
            </button>

            {!isSuccess ? (
              <div className="p-12 md:p-24 relative z-10">
                <div className="mb-16">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-black tracking-[0.4em] uppercase text-white/40 mb-10"
                  >
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span>Neural Intake Active</span>
                  </motion.div>
                  <h2 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tighter leading-[0.95] uppercase">Initialize Deployment</h2>
                  <p className="text-xl text-zinc-500 max-w-2xl font-medium">Bespoke systemic engineering begins with a single logic thread. Define your vision below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 ml-6">Full Identity</label>
                      <input 
                        required
                        type="text" 
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        placeholder="ALEXANDER VANCE"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-primary/30 transition-all placeholder:text-zinc-800 text-white font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 ml-6">ENTITY Name</label>
                      <input 
                        required
                        type="text" 
                        value={form.business}
                        onChange={e => setForm({...form, business: e.target.value})}
                        placeholder="QUANTUM CORE SYSTEMS"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-primary/30 transition-all placeholder:text-zinc-800 text-white font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 ml-6">Digital Address</label>
                      <input 
                        required
                        type="email" 
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        placeholder="LOGIC@ECOSYSTEM.IO"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-primary/30 transition-all placeholder:text-zinc-800 text-white font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 ml-6">Direct Protocol (WHATSAPP)</label>
                      <input 
                        required
                        type="tel" 
                        value={form.whatsapp}
                        onChange={e => setForm({...form, whatsapp: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-primary/30 transition-all placeholder:text-zinc-800 text-white font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 ml-6">Strategic Allocation</label>
                      <select 
                        required
                        value={form.budget}
                        onChange={e => setForm({...form, budget: e.target.value})}
                        className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-primary/30 transition-all text-zinc-500 font-medium appearance-none"
                      >
                        <option value="" disabled>SELECT ALLOCATION</option>
                        <option value="$1k - $5k">$1k - $5k</option>
                        <option value="$5k - $20k">$5k - $20k</option>
                        <option value="$20k - $100k">$20k - $100k</option>
                        <option value="$100k+">$100k+</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 ml-6">Deployment CLASS</label>
                      <select 
                        required
                        value={form.type}
                        onChange={e => setForm({...form, type: e.target.value})}
                        className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-primary/30 transition-all text-zinc-500 font-medium appearance-none"
                      >
                        <option value="" disabled>SELECT CLASS</option>
                        <option value="Neural Automation">Neural Automation</option>
                        <option value="SaaS Architecture">SaaS Architecture</option>
                        <option value="Enterprise OS">Enterprise OS</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 ml-6">Vision SYNTHESIS</label>
                    <textarea 
                      required
                      value={form.details}
                      onChange={e => setForm({...form, details: e.target.value})}
                      placeholder="Describe the desired cognitive transition..."
                      rows={4}
                      className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-primary/30 transition-all resize-none placeholder:text-zinc-800 text-white font-medium"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-8">
                    <div className="flex items-center space-x-4 text-zinc-700 text-xs font-black tracking-[0.2em] uppercase">
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                      <span>End-to-End Cryptography Active</span>
                    </div>
                    
                    <Magnetic strength={0.1}>
                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="relative px-16 py-7 bg-primary text-black rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center group shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden hover:bg-white duration-700"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-[-30deg]" />
                        <span className="relative z-10 flex items-center">
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-4" />
                              Synthesizing...
                            </>
                          ) : (
                            <>
                              Commit Inquiry <Send className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-700" />
                            </>
                          )}
                        </span>
                      </button>
                    </Magnetic>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-16 md:p-32 text-center relative z-10"
              >
                <div className="w-32 h-32 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-12 shadow-[0_0_80px_rgba(6,182,212,0.2)] animate-pulse">
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-[0.95] tracking-tighter uppercase text-white">Inquiry Committed</h2>
                <p className="text-xl text-zinc-500 mb-16 max-w-lg mx-auto font-medium leading-relaxed">
                  Your logic thread has been successfully integrated. We are initializing an instant cognitive sync via WhatsApp.
                </p>
                <div className="flex flex-col items-center space-y-8">
                   <div className="flex flex-col items-center space-y-4">
                     <div className="text-xs font-black tracking-[0.5em] uppercase text-zinc-800">Redirecting to Secure Uplink</div>
                     <div className="w-64 h-1 bg-white/[0.03] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-primary shadow-[0_0_20px_#06b6d4]"
                        />
                     </div>
                   </div>

                   <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                     <Magnetic strength={0.1}>
                       <a 
                         href={`mailto:buildwithnexgen@gmail.com?subject=Project Inquiry - NexGenStudio&body=Hi NexGenStudio,%0A%0AI would like to discuss a project regarding AI automation, website development, or digital systems.%0A%0A---%0A*Name:* ${form.name}%0A*Business:* ${form.business}%0A*Email:* ${form.email}%0A*WhatsApp:* ${form.whatsapp}%0A*Budget:* ${form.budget}%0A*Project Type:* ${form.type}%0A*Details:* ${form.details}`}
                         className="group relative px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center space-x-3 hover:bg-primary hover:text-black transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
                       >
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
                         <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                         <span className="text-[11px] font-black uppercase tracking-[0.2em] relative z-10">Deploy via Email</span>
                       </a>
                     </Magnetic>
                     
                     <div className="text-[9px] font-black tracking-[0.4em] text-zinc-800 uppercase px-6">
                       Direct Channel: buildwithnexgen@gmail.com
                     </div>
                   </div>
                </div>
              </motion.div>
            )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

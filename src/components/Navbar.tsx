import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Command } from 'lucide-react';
import Magnetic from './Magnetic';
import Logo from './Logo';
import { useGlobalSearch } from './GlobalSearch';

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { trigger: openSearch } = useGlobalSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Active Section Detection
    const sections = ['services', 'about', 'process', 'work', 'pricing'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Services', href: 'services' },
    { name: 'About', href: 'about' },
    { name: 'Process', href: 'process' },
    { name: 'Work', href: 'work' },
    { name: 'Pricing', href: 'pricing' },
  ];

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20, filter: 'blur(0px)' }, // Removed blur for mobile performance
    open: { opacity: 1, x: 0, filter: 'blur(0px)' }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled ? 'py-4 translate-y-0 bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo />
        </motion.div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-1 transition-all ${isScrolled ? 'glass-dark border border-white/5 p-1 rounded-2xl shadow-2xl' : 'px-4'}`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black transition-all uppercase tracking-[0.2em] relative group ${
                activeSection === link.href ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection === link.href && (
                <motion.div 
                  layoutId="active-nav-bg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute inset-0 bg-white/[0.03] rounded-xl -z-10"
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Magnetic strength={0.1}>
            <button
              onClick={openSearch}
              className="group flex items-center space-x-3 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-full hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-500"
            >
              <Search className="w-4 h-4 text-zinc-500 group-hover:text-primary transition-colors" />
              <div className="flex items-center space-x-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                <Command className="w-2.5 h-2.5 text-zinc-500" />
                <span className="text-[10px] font-black text-zinc-500">K</span>
              </div>
            </button>
          </Magnetic>

          <Magnetic strength={0.1}>
            <a 
              href="https://www.instagram.com/buildwithnexgen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500 group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:scale-110 transition-transform">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </Magnetic>
          <Magnetic strength={0.1}>
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-7 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="relative z-10">Start Project</span>
            </motion.button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden fixed inset-x-0 top-0 h-screen bg-zinc-950/98 backdrop-blur-xl z-[-1] overflow-hidden"
          >
            <div className="container mx-auto px-6 pt-32 pb-12 flex flex-col h-full">
              <div className="flex flex-col space-y-10 flex-1">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    variants={itemVariants}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection(link.href), 500);
                    }}
                    className={`text-5xl font-display font-bold text-left flex items-center group transition-all duration-500 ${
                      activeSection === link.href ? 'text-primary' : 'text-zinc-700'
                    }`}
                  >
                    <span className="mr-6 text-xs font-mono opacity-20 group-hover:opacity-100 transition-opacity">0{navLinks.indexOf(link) + 1}</span>
                    <span className="group-hover:translate-x-4 transition-transform duration-500">{link.name}</span>
                    {activeSection === link.href && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#06b6d4]"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.div 
                variants={itemVariants}
                className="pt-12 mt-auto border-t border-white/5 space-y-4"
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(openSearch, 500);
                  }}
                  className="w-full py-4 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center space-x-3 text-zinc-400 hover:text-primary transition-all duration-300"
                >
                  <Search className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">Search Nexus</span>
                </button>

                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="w-full py-6 bg-primary text-black rounded-2xl text-2xl font-bold transition-all relative overflow-hidden group shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-[0_0_70px_rgba(6,182,212,0.5)]"
                >
                  <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] skew-x-[-20deg]" />
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Project
                  </span>
                </button>
              </motion.div>
              
              <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] gap-4">
                 <div className="flex flex-col items-center md:items-start gap-2">
                   <span>NexGenStudio 2024</span>
                   <a href="mailto:buildwithnexgen@gmail.com" className="text-zinc-500 hover:text-primary transition-colors tracking-[0.2em] lowercase font-sans font-medium text-xs">buildwithnexgen@gmail.com</a>
                 </div>
                 <div className="flex flex-col items-center gap-3">
                    <span className="text-[8px] opacity-40">Follow our journey</span>
                    <div className="flex items-center space-x-4">
                       <a 
                         href="https://www.instagram.com/buildwithnexgen" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500"
                       >
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                         </svg>
                       </a>
                    </div>
                 </div>
                 <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-emerald-500/60">System Ready</span>
                 </div>
              </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

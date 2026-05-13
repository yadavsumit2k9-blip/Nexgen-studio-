import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Command, ArrowRight, Zap, Target, Cpu, Layout, Workflow } from 'lucide-react';
import Magnetic from './Magnetic';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  icon: any;
  section: string;
}

const SEARCH_DATA: SearchResult[] = [
  { id: '1', title: 'Neural Automation', category: 'Service', icon: Cpu, section: 'services' },
  { id: '2', title: 'Immersive Interfaces', category: 'Service', icon: Layout, section: 'services' },
  { id: '3', title: 'Cognitive Architecture', category: 'Service', icon: Workflow, section: 'services' },
  { id: '4', title: 'Discovery Phase', category: 'Process', icon: Search, section: 'process' },
  { id: '5', title: 'System Architecture', category: 'Process', icon: Target, section: 'process' },
  { id: '6', title: 'Deployment', category: 'Process', icon: Zap, section: 'process' },
  { id: '7', title: 'Cortex AI', category: 'Case Study', icon: ArrowRight, section: 'work' },
  { id: '8', title: 'NeoBank UI', category: 'Case Study', icon: ArrowRight, section: 'work' },
  { id: '9', title: 'Aura Logistics', category: 'Case Study', icon: ArrowRight, section: 'work' },
];

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = useCallback(() => {
    setIsOpen(prev => !prev);
    setQuery('');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSearch]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const filtered = SEARCH_DATA.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const navigateTo = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      navigateTo(results[selectedIndex].section);
    }
  };

  return (
    <>
      {/* Search Trigger Button (Floating or Integrated) will be moved to Navbar later */}
      
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-20 md:pt-40 px-4 md:px-0">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-zinc-950/80 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] glass-premium gpu-optim"
            >
              <div className="p-6 border-b border-white/5 flex items-center space-x-4">
                <Search className="w-6 h-6 text-primary animate-pulse" />
                <input 
                  ref={inputRef}
                  type="text"
                  placeholder="Ask Cortex... (Services, Process, Portfolios)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-none outline-none text-xl text-white w-full placeholder:text-zinc-700 font-display font-medium tracking-tight"
                />
                <div className="flex items-center space-x-2 bg-white/[0.03] px-2 py-1 rounded-lg border border-white/5">
                  <Command className="w-3 h-3 text-zinc-500" />
                  <span className="text-[10px] font-black text-zinc-500">K</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-zinc-500" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                {query.length > 0 && results.length === 0 && (
                  <div className="p-12 text-center">
                    <p className="text-zinc-600 font-medium tracking-tight">No convergence found for "{query}"</p>
                  </div>
                )}

                {query.length === 0 && (
                  <div className="p-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-6 px-4">Suggested Operations</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {SEARCH_DATA.slice(0, 4).map((item) => (
                        <button
                          key={item.id}
                          onClick={() => navigateTo(item.section)}
                          className="flex items-center space-x-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.05] border border-white/[0.03] hover:border-primary/20 transition-all text-left group"
                        >
                          <div className="p-3 rounded-xl bg-zinc-950 text-zinc-500 group-hover:text-primary transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{item.title}</div>
                            <div className="text-[9px] font-black uppercase text-zinc-600 tracking-widest">{item.category}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {results.length > 0 && (
                  <div className="space-y-2">
                    {results.map((result, idx) => (
                      <motion.button
                        key={result.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigateTo(result.section)}
                        className={`flex items-center justify-between w-full p-4 rounded-2xl transition-all group ${
                          selectedIndex === idx ? 'bg-primary text-black' : 'hover:bg-white/5 text-zinc-400'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl ${selectedIndex === idx ? 'bg-black/10' : 'bg-black/40'} transition-colors`}>
                            <result.icon className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <div className={`text-base font-bold tracking-tight ${selectedIndex === idx ? 'text-black' : 'text-zinc-200'}`}>
                              {result.title}
                            </div>
                            <div className={`text-[10px] font-black uppercase tracking-widest ${selectedIndex === idx ? 'text-black/60' : 'text-zinc-600'}`}>
                              {result.category}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${selectedIndex === idx ? 'text-black' : 'text-zinc-800'}`} />
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/5 flex items-center justify-between px-8 bg-zinc-950/40">
                 <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                       <div className="p-1 bg-white/[0.05] rounded-md border border-white/10">
                          <ArrowRight className="w-2.5 h-2.5 text-zinc-500 rotate-90" />
                       </div>
                       <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Select</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="px-1.5 py-0.5 bg-white/[0.05] rounded-md border border-white/10 text-[9px] font-bold text-zinc-500">ESC</div>
                       <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Close</span>
                    </div>
                 </div>
                 <div className="text-[9px] font-black text-primary animate-pulse tracking-widest uppercase">System Active</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

// Add a hook for global search triggering to expose to other components
export function useGlobalSearch() {
  const trigger = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      ctrlKey: true,
      bubbles: true
    });
    window.dispatchEvent(event);
  };
  return { trigger };
}

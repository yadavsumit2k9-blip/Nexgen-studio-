import { motion } from 'motion/react';

export default function Logo() {
  return (
    <div className="group flex items-center space-x-3 select-none">
      {/* Refined Minimalist Icon */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Geometric Emblem */}
        <svg 
          viewBox="0 0 40 40" 
          className="w-full h-full text-white fill-none"
        >
          {/* Inner Core */}
          <motion.circle 
            cx="20" cy="20" r="4" 
            className="fill-primary"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Outer Orbital / Neural Path */}
          <motion.path 
            d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Accent Nodes */}
          <motion.circle 
            cx="35" cy="20" r="2.5" 
            className="fill-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          />
          
          {/* Dynamic Inner Geometry */}
          <motion.path 
            d="M12 20H8M32 20H28M20 12V8M20 32V28"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-40"
          />
        </svg>

        {/* Scan line - very subtle */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-full h-[1px] bg-primary/30"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-lg md:text-xl font-display font-black tracking-tight leading-none flex items-center">
          <span className="text-white">NEXGEN</span>
          <span className="text-primary ml-1.5 transition-colors duration-500">STUDIO</span>
        </h1>
        <div className="flex items-center space-x-2 mt-1 opacity-40">
           <div className="w-1 h-1 rounded-full bg-primary" />
           <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-[0.3em] font-medium transition-all group-hover:text-zinc-200">
              Cognitive Infrastructure
           </span>
        </div>
      </div>
    </div>
  );
}

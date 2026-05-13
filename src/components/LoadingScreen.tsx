import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="1" />
            <motion.path 
              d="M50 20L75.9808 35V65L50 80L24.0192 65V35L50 20Z" 
              stroke="white" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.circle 
              cx="50" cy="50" r="10" 
              fill="#06b6d4" 
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>
        
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <h2 className="text-xl font-display font-bold tracking-[0.4em] uppercase text-white/90">
           NEXGEN <span className="text-white/40">STUDIO</span>
        </h2>
        <motion.p 
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-xs font-mono text-white/20 tracking-[0.5em] uppercase"
        >
           Syncing with the future
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

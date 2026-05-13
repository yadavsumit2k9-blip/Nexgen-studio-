import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function FloatingParticles() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const particlesCount = isMobile ? 15 : 40;
  const particles = Array.from({ length: particlesCount });
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[1px] will-change-transform ${
            i % 3 === 0 ? 'bg-primary/20' : i % 3 === 1 ? 'bg-secondary/20' : 'bg-white/10'
          }`}
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
          }}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            x: [null, (Math.random() - 0.5) * 150 + "px"],
            y: [null, (Math.random() - 0.5) * 150 - 50 + "px"],
            opacity: [null, 0],
            scale: [1, Math.random() * 1.2 + 0.8],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}

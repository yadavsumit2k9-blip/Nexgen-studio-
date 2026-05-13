import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';

export default function FloatingParticles() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  // Optimized particle count and properties memoization
  const particles = useMemo(() => {
    const count = isMobile ? 12 : 30;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: (Math.random() * 100).toFixed(2) + "%",
      y: (Math.random() * 100).toFixed(2) + "%",
      size: (Math.random() * 2 + 1).toFixed(1) + "px",
      duration: (Math.random() * 10 + 20).toFixed(1),
      delay: (Math.random() * 5).toFixed(1),
      color: i % 3 === 0 ? 'rgba(6, 182, 212, 0.15)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.15)' : 'rgba(255, 255, 255, 0.08)',
      moveX: (Math.random() - 0.5) * 100 + "px",
      moveY: (Math.random() - 0.5) * 100 + "px",
    }));
  }, [isMobile]);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            left: p.x,
            top: p.y,
            willChange: 'transform, opacity',
            transform: 'translate3d(0,0,0)',
          }}
          animate={{
            x: [0, p.moveX],
            y: [0, p.moveY],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: parseFloat(p.duration),
            repeat: Infinity,
            ease: "linear",
            delay: parseFloat(p.delay),
          }}
        />
      ))}
    </div>
  );
}

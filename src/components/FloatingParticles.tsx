import { useMemo } from 'react';
import { motion } from 'motion/react';
import { useMobile } from '../hooks/useMobile';

export default function FloatingParticles() {
  const isMobile = useMobile();

  // Optimized particle count and properties memoization
  const particles = useMemo(() => {
    const count = isMobile ? 8 : 25; // Further reduced count
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: (Math.random() * 100).toFixed(2) + "%",
      y: (Math.random() * 100).toFixed(2) + "%",
      size: (Math.random() * 2 + 1).toFixed(1) + "px",
      duration: (Math.random() * 15 + 25).toFixed(1), // Slower duration
      delay: (Math.random() * 10).toFixed(1),
      color: i % 2 === 0 ? 'rgba(6, 182, 212, 0.1)' : 'rgba(147, 51, 234, 0.1)',
      moveX: (Math.random() - 0.5) * 50 + "px",
      moveY: (Math.random() - 0.5) * 50 + "px",
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
          }}
          animate={{
            x: [0, p.moveX],
            y: [0, p.moveY],
            opacity: [0.1, 0.3, 0.1], // Lower opacity
            scale: [1, 1.1, 1],
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

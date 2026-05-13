import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useMobile } from '../hooks/useMobile';

export default function CursorGlow() {
  const isMobile = useMobile(1024); // Disable on mobile/tablet
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px] translate-x-[-50%] translate-y-[-50%] gpu-optim"
      style={{ 
        left: smoothX, 
        top: smoothY,
      }}
    />
  );
}

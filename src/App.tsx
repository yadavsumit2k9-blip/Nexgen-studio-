/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import Lenis from 'lenis';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import GlobalSearch from './components/GlobalSearch';
import CursorGlow from './components/CursorGlow';

// Sections
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import About from './sections/About';
import Process from './sections/Process';
import Showcase from './sections/Showcase';
import AutomationShowcase from './sections/Automation';
import Orchestration from './sections/Orchestration';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Initialize Lenis for buttery smooth scrolling
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    lenisRef.current = new Lenis({
      duration: isTouch ? 0.8 : 1.2, // Faster duration on touch
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isTouch, // Disable smooth wheel if touch is detected
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // Reduced from 2 for better control
      infinite: false,
    });

    let frameId: number;
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    }
  }, [isModalOpen]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate premium loading experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black text-white selection:bg-primary selection:text-black">
      {/* Noise Texture Overlay - Reduced opacity for performance, hidden on very small screens */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.015] sm:opacity-[0.03] contrast-125 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Global Cinematic Background Blobs - Optimized for performance */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] bg-primary/3 blur-[60px] sm:blur-[100px] rounded-full" />
         <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] sm:w-[35vw] sm:h-[35vw] bg-secondary/2 blur-[60px] sm:blur-[100px] rounded-full" />
      </div>

      <GlobalSearch />
      
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <CursorGlow />
      <Navbar onOpenModal={openModal} />
      
      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-primary z-[100] origin-left shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        style={{ scaleX }}
      />
      
      <div className="relative z-10">
        <Hero onOpenModal={openModal} />
        <Stats />
        <div className="section-visibility">
          <Services />
        </div>
        <div className="section-visibility">
          <About />
        </div>
        <div className="section-visibility">
          <AutomationShowcase />
        </div>
        <div className="section-visibility">
          <Orchestration />
        </div>
        <div className="section-visibility">
          <Process />
        </div>
        <div className="section-visibility">
          <Showcase onOpenModal={openModal} />
        </div>
        <div className="section-visibility">
          <Testimonials />
        </div>
        <div className="section-visibility">
          <Pricing onOpenModal={openModal} />
        </div>
        <div className="section-visibility">
          <FAQ />
        </div>
        <div className="section-visibility">
          <CTA onOpenModal={openModal} />
        </div>
        <Footer />
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Global Background Visuals - Bottom optimized */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/3 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/3 blur-[100px] rounded-full" />
      </div>
    </main>
  );
}

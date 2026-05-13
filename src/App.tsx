/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';

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
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
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
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] contrast-150 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Global Cinematic Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full animate-pulse-soft" />
         <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <GlobalSearch />
      
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <CursorGlow />
      <Navbar onOpenModal={openModal} />
      
      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left shadow-[0_0_10px_#06b6d4]"
        style={{ scaleX }}
      />
      
      <div className="relative z-10">
        <Hero onOpenModal={openModal} />
        <Stats />
        <Services />
        <About />
        <AutomationShowcase />
        <Orchestration />
        <Process />
        <Showcase onOpenModal={openModal} />
        <Testimonials />
        <Pricing onOpenModal={openModal} />
        <FAQ />
        <CTA onOpenModal={openModal} />
        <Footer />
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Global Background Visuals */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  highlightedWords?: string[];
}

export default function AnimatedHeading({ 
  text, 
  className = "", 
  as: Tag = 'h2', 
  highlightedWords = [] 
}: AnimatedHeadingProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Tag className={`${className} overflow-visible`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`flex flex-wrap gap-x-[0.14em] md:gap-x-[0.2em] gap-y-1 ${className.includes('justify-center') ? 'justify-center' : ''}`}
      >
        {words.map((word, index) => {
          const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
          const isHighlighted = highlightedWords.includes(cleanWord);
          return (
            <motion.span
              variants={child}
              key={index}
              className={`inline-block relative overflow-visible ${isHighlighted ? "z-10" : ""}`}
            >
              <span
                data-text={word}
                className={`inline-block py-1 tracking-tight ${
                  isHighlighted 
                    ? "text-gradient cinematic-bloom" 
                    : "text-zinc-200"
                }`}
              >
                {word}
              </span>
            </motion.span>
          );
        })}
      </motion.div>
    </Tag>
  );
}

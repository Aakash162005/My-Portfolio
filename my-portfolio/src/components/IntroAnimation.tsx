import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const name = 'AAKASH PATIL';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const leaveDelay = reduceMotion ? 80 : 1650;
    const exitDuration = reduceMotion ? 240 : 620;
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), leaveDelay);
    const completeTimer = window.setTimeout(onComplete, leaveDelay + exitDuration);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete, reduceMotion]);

  return (
    <motion.div
      className="intro-animation"
      aria-hidden="true"
      initial={false}
      animate={isLeaving ? { y: '-100%', opacity: 0 } : { y: '0%', opacity: 1 }}
      transition={{ duration: reduceMotion ? 0.24 : 0.62, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="intro-atmosphere" />
      <div className="intro-content">
        <motion.p
          className="intro-welcome"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 1.05 }}
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>
        <motion.h1
          className="intro-name"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.045 },
            },
          }}
        >
          {Array.from(name, (letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {letter === ' ' ? '\u00a0' : letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.span
          className="intro-rule"
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.52, delay: reduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="intro-role"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.76 }}
        >
          FULL STACK DEVELOPER
        </motion.p>
      </div>
    </motion.div>
  );
}

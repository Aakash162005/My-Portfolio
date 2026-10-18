import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const leaveDelay = reduceMotion ? 80 : 2200;
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
          initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: reduceMotion ? 0 : 1.3, delay: reduceMotion ? 0 : 0.25, ease: [0.65, 0, 0.35, 1] }}
        >
          Aakash Patil
        </motion.h1>
        <svg className="intro-signature-line" viewBox="0 0 420 24" fill="none" aria-hidden="true">
          <motion.path
            d="M8 13C92 7 150 7 222 12C278 16 336 16 393 10C401 9 408 7 414 4"
            pathLength={1}
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 1.36, ease: [0.22, 1, 0.36, 1] }}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
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

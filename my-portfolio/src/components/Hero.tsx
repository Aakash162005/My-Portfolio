import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';

const roles = [
  'Full Stack Developer',
  'Computer Engineering Student',
];

const availabilityLabel = 'Available for new opportunities';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Aakash162005', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aakashpatil1605', icon: 'linkedin' },
  { label: 'Email Aakash', href: 'mailto:aakashpatil93700@gmail.com', icon: 'email' },
] as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]['icon'] }) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.72 1.15 1.72 1.15 1 1.72 2.61 1.22 3.24.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.29-2.61 5.23-5.1 5.5.4.35.76 1.02.76 2.06v3.13c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.98V9.38h2.95v9.52ZM6.45 8.08a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.47 10.82h-2.94v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.71H9.72V9.38h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.98 0 3.56 1.96 3.56 4.51v5.24Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Hero() {
  const [role, setRole] = useState(roles[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    let roleIndex = 0;
    const interval = window.setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      setRole(roles[roleIndex]);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsDropdownOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: 0.12 } },
            }}
          >
            <motion.p
              className="hero-eyebrow"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              HI, I'M AAKASH
            </motion.p>
            <h1 className="hero-title" aria-label="I build digital experiences">
              <span className="hero-line" aria-hidden="true">
                <motion.span className="hero-word" variants={headlineVariants}>I build</motion.span>{' '}
                <motion.span className="hero-word" variants={headlineVariants}>digital</motion.span>
              </span>
              <span className="hero-line" aria-hidden="true">
                <motion.span className="hero-word gradient-text" variants={headlineVariants}>experiences</motion.span>
              </span>
            </h1>
            <motion.p
              className="typewriter-container"
              aria-live="off"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              {role}
            </motion.p>
            <motion.p
              className="hero-desc"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              Motivated Computer Engineering student with strong skills in backend development and growing expertise in
              full-stack and AI-based applications.
            </motion.p>
            <motion.div
              className="cta-buttons"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              <a href="#projects" className="btn btn-primary">
                View projects <span className="btn-arrow" aria-hidden="true">↘</span>
              </a>
              <div className="dropdown-container" ref={dropdownRef}>
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => setIsDropdownOpen((open) => !open)}
                  aria-expanded={isDropdownOpen}
                  aria-controls="resume-options"
                >
                  Download resume <span className="btn-arrow" aria-hidden="true">↓</span>
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu" id="resume-options">
                    <a href="/Aakash_Patil-Java_Developer-resume.pdf" download onClick={() => setIsDropdownOpen(false)}>
                      Java Developer
                    </a>
                    <a href="/Aakash-Marn-Resume.pdf" download onClick={() => setIsDropdownOpen(false)}>
                      MERN Developer
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="hero-socials"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              aria-label="Social and contact links"
            >
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  className="hero-social-link"
                  href={href}
                  key={label}
                  aria-label={label}
                  target={href.startsWith('https://') ? '_blank' : undefined}
                  rel={href.startsWith('https://') ? 'noreferrer' : undefined}
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-image-wrapper"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="image-glow" aria-hidden="true" />
            <img src="/Aakash Profile pick.png" alt="Aakash Patil" className="hero-image" />
            <motion.div
              className="hero-code-card"
              role="group"
              aria-label="A quick developer profile"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.62 }}
            >
              <span className="hero-code-title">
                <span className="hero-code-controls" aria-hidden="true"><i /><i /><i /></span>
                developer.ts
              </span>
              <code>
                <span className="hero-code-muted">const</span> developer = {'{'}<br />
                &nbsp; name: <span className="hero-code-string">'Aakash Patil'</span>,<br />
                &nbsp; role: <span className="hero-code-string">'Full Stack Developer'</span>,<br />
                &nbsp; focus: <span className="hero-code-string">'Building digital products'</span><br />
                {'}'};
              </code>
            </motion.div>
            <span className="hero-vertical-label" aria-hidden="true">FULL STACK DEVELOPER</span>
            <motion.span
              className="hero-status"
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.78 }}
            >
              <span className="badge-dot" aria-hidden="true" />
              {availabilityLabel}
            </motion.span>
          </motion.div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About Me">
        <span />
      </a>
    </section>
  );
}

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

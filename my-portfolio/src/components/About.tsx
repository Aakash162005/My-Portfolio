import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'motion/react';
import { projects, stacks } from './portfolioData';
import Reveal from './Reveal';

const terminalText = [
  '$ whoami',
  'Aakash Patil',
  '',
  '$ role',
  'Computer Engineering student',
  '',
  '$ technologies',
  'Java · Spring Boot · React · PostgreSQL · Docker',
  '',
  '$ focus',
  'Building useful digital products',
  '',
  '$ status',
  'Always learning and improving',
];

const completedProjects = projects.filter((project) => project.completed).length;
const exploredTechnologies = new Set(stacks.flatMap((stack) => stack.tags)).size;

const statistics = [
  { icon: 'graduation', value: completedProjects, label: 'Projects Completed', numeric: true },
  { icon: 'laptop', value: exploredTechnologies, label: 'Technologies Explored', numeric: true },
  { icon: 'star', value: '100%', label: 'Passion for Coding', numeric: false },
  { icon: 'rocket', value: '∞', label: 'Growth Mindset', numeric: false },
] as const;

function StatisticIcon({ name }: { name: (typeof statistics)[number]['icon'] }) {
  const paths = {
    graduation: (
      <>
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12v5c3.3 2.7 8.7 2.7 12 0v-5M22 10v6" />
      </>
    ),
    laptop: (
      <>
        <rect x="5" y="4" width="14" height="12" rx="1.5" />
        <path d="M2.5 20h19l-1.5-4H4l-1.5 4Z" />
      </>
    ),
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    rocket: (
      <>
        <path d="M14 5c2.1-2.1 5.2-2.5 7-2-0.3 2.5-1 5-3 7l-5 5-5-5 6-5Z" />
        <path d="m8 10-4 1-2 4 6-1m4 1-1 5 3-2 2-4M7 17l-3 3" />
        <circle cx="16" cy="8" r="1" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Terminal() {
  const terminalRef = useRef<HTMLElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);
  const [visibleLength, setVisibleLength] = useState(0);
  const isInView = useInView(terminalRef, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const content = terminalText.join('\n');

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    if (reduceMotion) return;

    let position = 0;
    const timer = window.setInterval(() => {
      position += 1;
      setVisibleLength(position);
      if (position >= content.length) window.clearInterval(timer);
    }, 22);

    return () => window.clearInterval(timer);
  }, [content.length, isInView, reduceMotion]);

  const displayedLength = reduceMotion && isInView ? content.length : visibleLength;
  const displayedContent = content.slice(0, displayedLength);
  const lines = displayedContent.split('\n');
  const isComplete = displayedLength >= content.length;

  useEffect(() => {
    const terminalBody = terminalBodyRef.current;
    if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;
  }, [isComplete, lines.length]);

  return (
    <motion.aside
      className="about-terminal"
      ref={terminalRef}
      aria-label="Developer profile terminal"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="terminal-header">
        <div className="terminal-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="terminal-title">aakash@portfolio:~</span>
        <span className="terminal-header-mark" aria-hidden="true">●</span>
      </div>
      <div className="terminal-body" ref={terminalBodyRef} aria-hidden="true">
        <pre className="terminal-code">
          {lines.map((line, index) => (
            <span className={line.startsWith('$') ? 'terminal-line terminal-command' : 'terminal-line'} key={index}>
              {line || '\u00a0'}
              {index === lines.length - 1 && !isComplete && <span className="terminal-cursor" />}
            </span>
          ))}
          {isComplete && <span className="terminal-line terminal-prompt">$ <span className="terminal-cursor" /></span>}
        </pre>
      </div>
      <pre className="visually-hidden">{content}</pre>
    </motion.aside>
  );
}

function CountUp({ value }: { value: number }) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.8 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: reduceMotion ? 0 : 1.1,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [count, isInView, reduceMotion, value]);

  return <motion.span ref={counterRef}>{rounded}</motion.span>;
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-intro">
            <span className="section-label about-eyebrow">A QUICK LOOK</span>
            <h2 className="about-title">About <span>Me</span></h2>
            <p className="about-description">
              I’m Aakash, a Computer Engineering student at R. C. Patel Institute of Technology. I enjoy building
              thoughtful digital products, from secure Java and Spring Boot backends to full-stack experiences with
              React. I’m always learning, refining my craft, and looking for ways to make the next build better.
            </p>
            <p className="about-signature">Code <span>→</span> Build <span>→</span> Improve</p>
          </Reveal>

          <Terminal />
        </div>

        <motion.div
          className="about-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
          }}
        >
          {statistics.map((stat) => (
            <motion.article
              className="about-stat-card"
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
            >
              <span className="about-stat-icon">
                <StatisticIcon name={stat.icon} />
              </span>
              <span className="about-stat-value">
                {stat.numeric ? <CountUp value={stat.value} /> : stat.value}
              </span>
              <span className="about-stat-label">{stat.label}</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

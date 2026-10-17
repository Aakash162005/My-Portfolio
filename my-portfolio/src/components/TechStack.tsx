import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
  type MotionValue,
} from 'motion/react';
import {
  siApachekafka,
  siApachemaven,
  siC,
  siCss,
  siDocker,
  siGit,
  siGithub,
  siHibernate,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siLinux,
  siMongodb,
  siMysql,
  siNodedotjs,
  siNextdotjs,
  siOpenjdk,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';
import { technologyGroups } from './portfolioData';

const icons: Record<string, SimpleIcon> = {
  'Apache Kafka': siApachekafka,
  Kafka: siApachekafka,
  'Apache Maven': siApachemaven,
  Maven: siApachemaven,
  C: siC,
  CSS3: siCss,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  Hibernate: siHibernate,
  HTML5: siHtml5,
  JavaScript: siJavascript,
  JWT: siJsonwebtokens,
  Linux: siLinux,
  MongoDB: siMongodb,
  MySQL: siMysql,
  'Node.js': siNodedotjs,
  'Next.js': siNextdotjs,
  Java: siOpenjdk,
  PostgreSQL: siPostgresql,
  'Prisma ORM': siPrisma,
  Python: siPython,
  'React.js': siReact,
  'Spring Boot': siSpringboot,
  'Spring Cloud': siSpring,
  'Spring Security': siSpringsecurity,
  'Tailwind CSS': siTailwindcss,
  TypeScript: siTypescript,
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const groupReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.04 } },
};

function BrandMark({ name }: { name: string }) {
  const icon = icons[name.replace(' (Basic)', '')];

  if (!icon) {
    return <span className="arsenal-mark-fallback" aria-hidden="true">{name.slice(0, 2)}</span>;
  }

  const color = icon.hex === '000000' || icon.hex === '181717' ? '#F5F5F5' : `#${icon.hex}`;

  return (
    <svg
      className="arsenal-brand-mark"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ color }}
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

function TechnologyGroup({
  title,
  technologies,
  reduceMotion,
  index,
}: {
  title: string;
  technologies: { name: string }[];
  reduceMotion: boolean;
  index: number;
}) {
  return (
    <motion.section
      className="arsenal-group"
      aria-labelledby={`arsenal-group-${index}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={reduceMotion ? { duration: 0 } : undefined}
    >
      <motion.h3
        className="arsenal-group-title"
        id={`arsenal-group-${index}`}
        initial={reduceMotion ? false : { opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h3>
      <motion.ul
        className="arsenal-tech-list"
        variants={groupReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {technologies.map(({ name }) => (
          <motion.li
            className="arsenal-tech-card"
            key={name}
            variants={reduceMotion ? undefined : reveal}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <BrandMark name={name} />
            <span className="arsenal-tech-name">{name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

function OrbitingLogo({
  name,
  progress,
  phase,
  reduceMotion,
}: {
  name: string;
  progress: MotionValue<number>;
  phase: number;
  reduceMotion: boolean;
}) {
  const offsetDistance = useTransform(progress, (value) => `${(value * 100 + phase) % 100}%`);

  return (
    <motion.div
      className="arsenal-orbit-item"
      style={{
        offsetPath: 'ellipse(54% 54% at 50% 50%)',
        offsetDistance: reduceMotion ? `${phase}%` : offsetDistance,
        offsetRotate: '0deg',
      }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.82 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.16 + phase / 500 }}
      aria-hidden="true"
    >
      <span className="arsenal-orbit-mark"><BrandMark name={name} /></span>
    </motion.div>
  );
}

function OrbitingBubble({
  progress,
  phase,
  size,
  reduceMotion,
}: {
  progress: MotionValue<number>;
  phase: number;
  size: 'small' | 'large';
  reduceMotion: boolean;
}) {
  const offsetDistance = useTransform(progress, (value) => `${(value * 100 + phase) % 100}%`);

  return (
    <motion.span
      className={`arsenal-orbit-bubble arsenal-orbit-bubble-${size}`}
      style={{
        offsetPath: 'ellipse(54% 54% at 50% 50%)',
        offsetDistance: reduceMotion ? `${phase}%` : offsetDistance,
        offsetRotate: '0deg',
      }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 0.8, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.28 + phase / 700 }}
      aria-hidden="true"
    />
  );
}

function TerminalIllustration({
  reduceMotion,
  illustrationY,
  scrollProgress,
  cursorScale,
}: {
  reduceMotion: boolean;
  illustrationY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
  cursorScale: MotionValue<number>;
}) {
  return (
    <div className="arsenal-visual">
      <motion.div
        className="arsenal-terminal-wrap"
        style={{ y: reduceMotion ? 0 : illustrationY }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.975 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="arsenal-terminal" role="group" aria-label="A summary of technologies in Aakash's portfolio">
          <div className="arsenal-terminal-topbar">
            <span className="arsenal-window-dot" />
            <span className="arsenal-window-dot" />
            <span className="arsenal-window-dot" />
            <span className="arsenal-terminal-title">aakash@portfolio:~</span>
          </div>
          <div className="arsenal-terminal-content" aria-label="Languages, frameworks, databases and tools">
            <div><span className="terminal-prompt">$</span> stack --list</div>
            <div className="terminal-output"><span>languages</span> Java · TypeScript · JavaScript · C</div>
            <div className="terminal-output"><span>frameworks</span> Spring Boot · React · Next.js</div>
            <div className="terminal-output"><span>data</span> PostgreSQL · MySQL · MongoDB</div>
            <div className="terminal-output"><span>tools</span> Docker · Git · Maven</div>
            <div className="terminal-ready">
              <span>✓</span> all systems ready
              <motion.span
                className="arsenal-cursor"
                style={{ scaleY: reduceMotion ? 1 : cursorScale }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="arsenal-orbit" aria-hidden="true">
        <OrbitingLogo name="React.js" progress={scrollProgress} phase={0} reduceMotion={reduceMotion} />
        <OrbitingLogo name="Java" progress={scrollProgress} phase={25} reduceMotion={reduceMotion} />
        <OrbitingLogo name="Docker" progress={scrollProgress} phase={50} reduceMotion={reduceMotion} />
        <OrbitingLogo name="GitHub" progress={scrollProgress} phase={75} reduceMotion={reduceMotion} />
        <OrbitingBubble progress={scrollProgress} phase={12} size="small" reduceMotion={reduceMotion} />
        <OrbitingBubble progress={scrollProgress} phase={38} size="large" reduceMotion={reduceMotion} />
        <OrbitingBubble progress={scrollProgress} phase={64} size="small" reduceMotion={reduceMotion} />
        <OrbitingBubble progress={scrollProgress} phase={88} size="large" reduceMotion={reduceMotion} />
      </div>
      <span className="arsenal-connector arsenal-connector-a" aria-hidden="true" />
      <span className="arsenal-connector arsenal-connector-b" aria-hidden="true" />
      <span className="arsenal-visual-caption"><i /> BUILT WITH INTENTION</span>
    </div>
  );
}

export default function TechStack() {
  const reduceMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const illustrationY = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const cursorScale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.82, 1.15, 0.82, 1.15, 0.82]);

  return (
    <section id="tech" className="tech-section" ref={sectionRef}>
      <div className="arsenal-grid-bg" aria-hidden="true" />
      <div className="arsenal-ambient" aria-hidden="true" />
      <div className="container arsenal-container">
        <div className="arsenal-hero">
          <motion.div
            className="arsenal-intro"
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.11 } },
            }}
          >
            <motion.span className="arsenal-eyebrow" variants={reveal}>
              <span /> 04&nbsp; / &nbsp;SKILLS &amp; TECHNOLOGIES
            </motion.span>
            <motion.h2 className="arsenal-title" variants={reveal}>
              Tools &amp;
              <br />
              <span>Technologies</span>
            </motion.h2>
            <motion.p className="arsenal-description" variants={reveal}>
              The technologies and tools I use to bring ideas to life, from
              development through to deployment.
            </motion.p>
            <motion.div className="arsenal-signature" variants={reveal}>
              <span className="arsenal-signature-rule" />
              <span>Code <b>→</b> Build <b>→</b> Improve</span>
            </motion.div>
          </motion.div>
          <TerminalIllustration
            reduceMotion={reduceMotion}
            illustrationY={illustrationY}
            scrollProgress={scrollYProgress}
            cursorScale={cursorScale}
          />
        </div>

        <div className="arsenal-groups">
          {technologyGroups.map((group, index) => (
            <TechnologyGroup
              key={group.title}
              title={group.title}
              technologies={group.technologies}
              reduceMotion={reduceMotion}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="arsenal-footer"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <div className="arsenal-footer-copy"><span /> TOOLS + CODE = BETTER SOLUTIONS</div>
          <svg className="arsenal-footer-trace" viewBox="0 0 180 18" fill="none" aria-hidden="true">
            <motion.path
              d="M1 9H163L171 1M163 9l8 8"
              pathLength={1}
              stroke="currentColor"
              strokeWidth="1"
              initial={reduceMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.15 }}
            />
            <circle cx="174" cy="9" r="2.5" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

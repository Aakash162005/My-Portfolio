import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { MotionValue } from 'motion/react';
import { projects } from './portfolioData';
import type { Project } from './portfolioData';

interface ProjectCardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  animate: boolean;
}

function ProjectCard({ project, index, progress, animate }: ProjectCardProps) {
  const center = projects.length === 1 ? 0 : index / (projects.length - 1);
  const opacity = useTransform(progress, (value) => 0.72 + 0.28 * Math.max(0, 1 - Math.abs(value - center) / 0.3));
  const scale = useTransform(progress, (value) => 0.975 + 0.025 * Math.max(0, 1 - Math.abs(value - center) / 0.3));

  return (
    <motion.article
      className="project-card"
      style={animate ? { opacity, scale } : undefined}
    >
      <div className="project-image-placeholder">
        {project.image ? (
          <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
        ) : (
          <div className="project-preview-art" aria-label={`${project.title} preview`}>
            <div className="preview-topbar" aria-hidden="true">
              <span />
              <span />
              <span />
              <span className="preview-window-title">{project.title}</span>
            </div>
            <div className="preview-content">
              <span className="preview-emoji" aria-hidden="true">{project.emoji}</span>
              <span className="preview-title">{project.title}</span>
              <span className="preview-caption">{project.tags.slice(0, 3).join(' · ')}</span>
              <span className="preview-rule" />
              <span className="preview-rule preview-rule-short" />
            </div>
          </div>
        )}
        {project.status && (
          <span className="project-status-badge">
            <span className="status-mark" />
            {project.status}
          </span>
        )}
      </div>
      <div className="project-info">
        <div className="project-heading">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags" aria-label="Technologies">
          {project.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-action">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-action project-action-live">
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 900px)').matches);
  const [travel, setTravel] = useState(0);
  const reduceMotion = useReducedMotion();
  const useScrollGallery = isDesktop && !reduceMotion;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 900px)');
    const updateLayout = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateLayout);
    return () => mediaQuery.removeEventListener('change', updateLayout);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || !isDesktop || reduceMotion) {
      setTravel(0);
      return;
    }

    const measure = () => setTravel(Math.max(0, track.scrollWidth - viewport.clientWidth));
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, [isDesktop, reduceMotion]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects-section${isDesktop ? ' projects-desktop' : ''}${reduceMotion ? ' reduced-gallery' : ''}`}
      style={useScrollGallery ? { height: `calc(100vh + ${travel}px)` } : undefined}
    >
      <div className="projects-sticky">
        <div className="container projects-heading">
          <div>
            <span className="section-label">// selected work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <p className="projects-instruction">
            {useScrollGallery ? 'Scroll to explore' : isDesktop ? 'A selection of recent work' : 'Swipe to explore'}
            <span aria-hidden="true">{useScrollGallery ? ' ↓' : isDesktop ? '' : ' →'}</span>
          </p>
        </div>

        <div className="projects-viewport" ref={viewportRef} aria-label="Featured project gallery">
          <motion.div className="projects-track" ref={trackRef} style={{ x: useScrollGallery ? x : 0 }}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                progress={scrollYProgress}
                animate={useScrollGallery}
              />
            ))}
          </motion.div>
        </div>

        {useScrollGallery && (
          <div className="projects-progress" aria-hidden="true">
            <motion.span style={{ scaleX: scrollYProgress }} />
          </div>
        )}
      </div>
    </section>
  );
}

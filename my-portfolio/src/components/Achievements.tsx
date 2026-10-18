import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { achievements, type Achievement, type AchievementCategory } from './achievementData';
import './Achievements.css';

const categoryOrder: AchievementCategory[] = [
  'Hackathons',
  'Certifications',
  'Competitions',
  'Coding',
  'Workshops & Events',
];

const easing = [0.22, 1, 0.36, 1] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 12.5 12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AchievementCard({
  achievement,
  reduceMotion,
  onOpenCertificate,
}: {
  achievement: Achievement;
  reduceMotion: boolean | null;
  onOpenCertificate: (item: Achievement) => void;
}) {
  const hasCertificate = achievement.category === 'Certifications' && Boolean(achievement.image);
  const proofUrl = achievement.credentialUrl ?? achievement.eventUrl ?? achievement.proofUrl;
  const linkLabel = achievement.credentialUrl ? 'View credential' : achievement.eventUrl ? 'View event' : 'View profile';

  return (
    <motion.article
      className={`achievement-card${achievement.featured ? ' achievement-card-featured' : ''}`}
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: easing, layout: { duration: 0.3, ease: easing } }}
    >
      {hasCertificate && achievement.image ? (
        <button
          className="achievement-image-button"
          type="button"
          onClick={() => onOpenCertificate(achievement)}
          aria-label={`Open certificate preview: ${achievement.title}`}
        >
          <img src={achievement.image} alt={`${achievement.title} certificate`} loading="lazy" />
          <span className="certificate-preview-label">Certificate preview</span>
        </button>
      ) : (
        <div className="achievement-mark" aria-hidden="true">
          <span className="achievement-mark-index">{achievement.category === 'Coding' ? 'DEV' : 'PROOF'}</span>
          <span className="achievement-mark-symbol">{achievement.category === 'Coding' ? '</>' : '✳'}</span>
          <span className="achievement-mark-rule" />
        </div>
      )}

      <div className="achievement-card-content">
        <div className="achievement-card-meta">
          <span className="achievement-category">{achievement.category}</span>
          {achievement.date && <span className="achievement-date">{achievement.date}</span>}
        </div>
        <div className="achievement-title-row">
          <h2>{achievement.title}</h2>
          {achievement.status && <span className="achievement-status">{achievement.status}</span>}
        </div>
        {achievement.organizer && achievement.organizer !== achievement.title && (
          <p className="achievement-organizer">Issued by {achievement.organizer}</p>
        )}
        <p className="achievement-description">{achievement.description}</p>
        {achievement.result && <p className="achievement-result">{achievement.result}</p>}
        {achievement.stats && (
          <dl className="achievement-stats">
            {achievement.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {achievement.technologies && achievement.technologies.length > 0 && (
          <ul className="achievement-technologies" aria-label="Technologies">
            {achievement.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        <div className="achievement-card-actions">
          {hasCertificate && <button type="button" onClick={() => onOpenCertificate(achievement)}>View certificate</button>}
          {proofUrl && (
            <a href={proofUrl} target="_blank" rel="noreferrer">
              {linkLabel}<ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Achievements() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeCategory, setActiveCategory] = useState<'All Achievements' | AchievementCategory>('All Achievements');
  const [selectedCertificate, setSelectedCertificate] = useState<Achievement | null>(null);
  const categories = useMemo(
    () => categoryOrder.filter((category) => achievements.some((item) => item.category === category)),
    [],
  );
  const filters = ['All Achievements', ...categories] as const;
  const filteredAchievements = activeCategory === 'All Achievements'
    ? achievements
    : achievements.filter((item) => item.category === activeCategory);
  const hasCertificateImages = achievements.some((item) => item.category === 'Certifications' && item.image);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, mass: 0.35 });
  const compositionY = useTransform(springProgress, [0, 1], [0, 16]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !selectedCertificate) return;
    if (!dialog.open) dialog.showModal();
    closeButtonRef.current?.focus();
  }, [selectedCertificate]);

  const closeCertificate = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setSelectedCertificate(null);
  };

  return (
    <main className="achievements-page">
      <section className="achievements-hero" ref={heroRef}>
        <div className="achievements-grid-texture" aria-hidden="true" />
        <div className="achievements-container achievements-hero-layout">
          <motion.div
            className="achievements-hero-copy"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.12 } },
            }}
          >
            <motion.p className="achievements-eyebrow" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: easing }}>
              <span /> ACHIEVEMENTS / VERIFIED MILESTONES
            </motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7, ease: easing }}>
              Achievements that<br /><span>SPEAK FOR THEMSELVES.</span>
            </motion.h1>
            <motion.p className="achievements-intro" variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: easing }}>
              A collection of certifications, hackathon participation, technical competitions, and milestones that reflect my commitment to engineering and continuous improvement.
            </motion.p>
            <motion.a className="achievements-hero-link" href="#achievement-collection" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.5, ease: easing }}>
              Explore the collection <span aria-hidden="true">↓</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="achievements-hero-visual"
            style={reduceMotion ? undefined : { y: compositionY }}
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.28, ease: easing }}
            aria-label="Coding profile proof markers"
          >
            <span className="hero-visual-coordinate">PROOF / 01—02</span>
            <div className="hero-visual-orbit hero-visual-orbit-outer" aria-hidden="true" />
            <div className="hero-visual-orbit hero-visual-orbit-inner" aria-hidden="true" />
            <div className="hero-proof-stack">
              {achievements.slice(0, 2).map((achievement, index) => (
                <div className={`hero-proof-card hero-proof-card-${index + 1}`} key={achievement.id}>
                  <span className="hero-proof-label">{achievement.category} / PROFILE</span>
                  <strong>{achievement.title}</strong>
                  <span className="hero-proof-mark">{index === 0 ? '01' : '02'}</span>
                </div>
              ))}
            </div>
            <div className="hero-visual-footer"><span /> PUBLIC PROFILES <span>↗</span></div>
          </motion.div>
        </div>
        <div className="achievements-hero-bottom-line" aria-hidden="true"><span>AK / PORTFOLIO</span><span>INDEPENDENTLY VERIFIABLE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="achievement-collection" id="achievement-collection" aria-labelledby="collection-title">
        <div className="achievements-container">
          <div className="collection-heading">
            <div>
              <p className="achievements-eyebrow"><span /> SELECTED RECORD</p>
              <h2 id="collection-title">Proof, not promises.</h2>
            </div>
            <p className="collection-count"><strong>{filteredAchievements.length.toString().padStart(2, '0')}</strong> {filteredAchievements.length === 1 ? 'record' : 'records'}</p>
          </div>

          <div className="achievement-filters" role="group" aria-label="Filter achievements by category">
            {filters.map((category) => {
              const count = category === 'All Achievements'
                ? achievements.length
                : achievements.filter((item) => item.category === category).length;
              const isActive = activeCategory === category;
              return (
                <button
                  type="button"
                  key={category}
                  className={isActive ? 'active' : ''}
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}<span>{count.toString().padStart(2, '0')}</span>
                </button>
              );
            })}
          </div>

          <div className="achievement-grid" aria-live="polite" aria-relevant="additions removals">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  reduceMotion={reduceMotion}
                  onOpenCertificate={setSelectedCertificate}
                />
              ))}
            </AnimatePresence>
          </div>
          {!hasCertificateImages && (
            <aside className="certificate-empty-state" aria-label="Certificate archive status">
              <span className="certificate-empty-mark" aria-hidden="true">00 / CERT</span>
              <div>
                <h3>Certificate archive</h3>
                <p>No certificate images or public credential links are available in the portfolio yet.</p>
              </div>
            </aside>
          )}
        </div>
      </section>

      <dialog
        className="certificate-dialog"
        ref={dialogRef}
        aria-label={selectedCertificate ? `${selectedCertificate.title} certificate preview` : 'Certificate preview'}
        onCancel={(event) => { event.preventDefault(); closeCertificate(); }}
        onClose={() => setSelectedCertificate(null)}
        onClick={(event) => { if (event.target === event.currentTarget) closeCertificate(); }}
      >
        {selectedCertificate?.image && (
          <div className="certificate-dialog-content">
            <div className="certificate-dialog-header">
              <div><span className="achievements-eyebrow"><span /> CERTIFICATE / PREVIEW</span><h2>{selectedCertificate.title}</h2></div>
              <button ref={closeButtonRef} type="button" className="certificate-dialog-close" onClick={closeCertificate} aria-label="Close certificate preview">×</button>
            </div>
            <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} />
            <div className="certificate-dialog-footer">
              <div><span>{selectedCertificate.organizer}</span>{selectedCertificate.date && <span>{selectedCertificate.date}</span>}</div>
              {selectedCertificate.credentialUrl && <a href={selectedCertificate.credentialUrl} target="_blank" rel="noreferrer">Verify credential <ArrowIcon /></a>}
            </div>
          </div>
        )}
      </dialog>
    </main>
  );
}

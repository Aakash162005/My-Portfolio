import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { missingAchievementAssets, recognitionAchievements, type RecognitionAchievement, type RecognitionCategory } from './achievementData';
import './Achievements.css';

const filters: Array<'All' | RecognitionCategory> = [
  'All',
  'Coding Achievements',
  'Hackathons & Events',
  'Certifications',
];

const easing = [0.22, 1, 0.36, 1] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 12.5 12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodingCard({ item, reduceMotion }: { item: RecognitionAchievement; reduceMotion: boolean | null }) {
  return (
    <motion.article
      className="recognition-coding-card"
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: easing, layout: { duration: 0.3, ease: easing } }}
    >
      <motion.div
        className="recognition-badge-stage"
        animate={reduceMotion || !item.imagePath ? undefined : { y: [0, -4, 0] }}
        transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {item.imagePath ? (
          <img className="recognition-badge-image" src={item.imagePath} alt={`${item.title} CodeChef badge`} />
        ) : (
          <div className="recognition-badge-missing">
            <b>CC</b>
            <span>CodeChef badge artwork unavailable</span>
          </div>
        )}
      </motion.div>
      <div className="recognition-coding-copy">
        <span className="recognition-card-label">CODING ACHIEVEMENT / {item.organization}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span className="recognition-status">{item.status}</span>
        {!item.imagePath && <p className="recognition-asset-note">Badge artwork was not found in the project assets.</p>}
      </div>
    </motion.article>
  );
}

function EventCard({ item, reduceMotion }: { item: RecognitionAchievement; reduceMotion: boolean | null }) {
  return (
    <motion.article
      className="recognition-event-card"
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: easing, layout: { duration: 0.28, ease: easing } }}
    >
      <div className="recognition-event-top">
        <span className="recognition-card-label">{item.category === 'Hackathons & Events' ? 'TECHNICAL PARTICIPATION' : item.category}</span>
        {item.date && <span className="recognition-event-year">{item.date}</span>}
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span className="recognition-status">{item.status}</span>
    </motion.article>
  );
}

function CertificateCard({
  item,
  reduceMotion,
  onOpen,
}: {
  item: RecognitionAchievement;
  reduceMotion: boolean | null;
  onOpen: (certificate: RecognitionAchievement) => void;
}) {
  return (
    <motion.article
      className="recognition-certificate-card"
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: easing, layout: { duration: 0.28, ease: easing } }}
    >
      <div className="recognition-certificate-preview">
        {item.pdfPath ? (
          <iframe src={`${item.pdfPath}#page=1&toolbar=0&navpanes=0`} title={`${item.title} certificate preview`} loading="lazy" />
        ) : (
          <div className="recognition-certificate-placeholder">
            <b>PDF PREVIEW UNAVAILABLE</b>
            <span>Original document not found in project assets</span>
          </div>
        )}
      </div>
      <div className="recognition-certificate-info">
        <span className="recognition-card-label">CERTIFICATION / PARTICIPATION</span>
        <h3>{item.title}</h3>
        {item.organization && <p>{item.organization}</p>}
        {item.hostOrganization && <p>Hosted by {item.hostOrganization}</p>}
        {item.date && <p>{item.date}</p>}
        {item.sourceFilename && <span className="recognition-certificate-file">Expected file: {item.sourceFilename}</span>}
        {!item.sourceFilename && <p>{item.description}</p>}
        <button className="recognition-certificate-action" type="button" onClick={() => onOpen(item)}>
          View Certificate <ArrowIcon />
        </button>
        {item.pdfPath && (
          <a className="recognition-certificate-action" href={item.pdfPath} target="_blank" rel="noreferrer">
            Open original PDF <ArrowIcon />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function AchievementsPage() {
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | RecognitionCategory>('All');
  const [selectedCertificate, setSelectedCertificate] = useState<RecognitionAchievement | null>(null);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Achievements & Recognition | Aakash Patil';
    return () => { document.title = originalTitle; };
  }, []);

  const visibleItems = activeFilter === 'All'
    ? recognitionAchievements
    : recognitionAchievements.filter((item) => item.category === activeFilter);
  const codingItems = visibleItems.filter((item) => item.category === 'Coding Achievements');
  const eventItems = visibleItems.filter((item) => item.category === 'Hackathons & Events');
  const certificateItems = visibleItems.filter((item) => item.category === 'Certifications');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !selectedCertificate) return;
    if (!dialog.open) dialog.showModal();
    closeButtonRef.current?.focus();
  }, [selectedCertificate]);

  useEffect(() => {
    if (!selectedCertificate) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      if (dialogRef.current?.open) dialogRef.current.close();
      else setSelectedCertificate(null);
    };
    window.addEventListener('keydown', closeOnEscape, true);
    return () => window.removeEventListener('keydown', closeOnEscape, true);
  }, [selectedCertificate]);

  const closePreview = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    else setSelectedCertificate(null);
  };

  return (
    <main className="recognition-page">
      <section className="recognition-hero">
        <div className="recognition-container recognition-hero-grid">
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.1 } } }}
          >
            <motion.p className="recognition-eyebrow" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.45, ease: easing }}>
              ACHIEVEMENTS &amp; RECOGNITION
            </motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.65, ease: easing }}>
              Proof of<br /><span>Progress.</span>
            </motion.h1>
            <motion.p className="recognition-subtitle" variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: easing }}>
              Every badge, certification, and technical event represents a step forward in my engineering practice.
            </motion.p>
          </motion.div>

          <motion.div
            className="recognition-hero-side"
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.2, ease: easing }}
            aria-label="Featured CodeChef achievement markers"
          >
            <div className="recognition-hero-proof">
              <span><small>CODECHEF / STREAK</small>100 DAYS</span>
              <span><small>CODECHEF / PRACTICE</small>1000 SOLVED</span>
            </div>
          </motion.div>
        </div>
        <div className="recognition-container recognition-hero-footer" aria-hidden="true">
          <span>SELECTED RECORDS / {recognitionAchievements.length.toString().padStart(2, '0')}</span>
          <span>PARTICIPATION, PRACTICE, PROOF</span>
        </div>
      </section>

      <div className="recognition-container">
        <div className="recognition-filters" role="group" aria-label="Filter achievements by category">
          {filters.map((filter) => {
            const count = filter === 'All'
              ? recognitionAchievements.length
              : recognitionAchievements.filter((item) => item.category === filter).length;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}<span>{count.toString().padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={activeFilter}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.2, ease: easing }}
      >
        {codingItems.length > 0 && (
          <motion.section className="recognition-content-section" aria-labelledby="coding-achievements-title">
            <div className="recognition-container">
              <header>
                <div>
                  <p className="recognition-eyebrow">01 / CODECHEF MILESTONES</p>
                  <h2 className="recognition-section-title" id="coding-achievements-title">Featured Coding Achievements</h2>
                </div>
                <p className="recognition-section-count"><strong>{codingItems.length.toString().padStart(2, '0')}</strong> records</p>
              </header>
              <div className="recognition-coding-grid">
                {codingItems.map((item) => <CodingCard key={item.id} item={item} reduceMotion={reduceMotion} />)}
              </div>
              {!codingItems.some((item) => item.imagePath) && (
                <p className="recognition-missing-assets">Badge files not found: {missingAchievementAssets.slice(0, 2).join(' / ')}</p>
              )}
            </div>
          </motion.section>
        )}

        {eventItems.length > 0 && (
          <motion.section className="recognition-content-section" aria-labelledby="events-title">
            <div className="recognition-container">
              <header>
                <div>
                  <p className="recognition-eyebrow">02 / PARTICIPATION</p>
                  <h2 className="recognition-section-title" id="events-title">Hackathons &amp; Technical Events</h2>
                </div>
                <p className="recognition-section-count"><strong>{eventItems.length.toString().padStart(2, '0')}</strong> entries</p>
              </header>
              <div className="recognition-event-grid">
                {eventItems.map((item) => <EventCard key={item.id} item={item} reduceMotion={reduceMotion} />)}
              </div>
            </div>
          </motion.section>
        )}

        {certificateItems.length > 0 && (
          <motion.section className="recognition-content-section" aria-labelledby="certificates-title">
            <div className="recognition-container">
              <header>
                <div>
                  <p className="recognition-eyebrow">03 / DOCUMENTS</p>
                  <h2 className="recognition-section-title" id="certificates-title">Certifications &amp; Technical Learning</h2>
                </div>
                <p className="recognition-section-count"><strong>{certificateItems.length.toString().padStart(2, '0')}</strong> records</p>
              </header>
              <div className="recognition-certificate-grid">
                {certificateItems.map((item) => (
                  <CertificateCard key={item.id} item={item} reduceMotion={reduceMotion} onOpen={setSelectedCertificate} />
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </motion.div>

      <dialog
        className="recognition-dialog"
        ref={dialogRef}
        aria-label={selectedCertificate ? `${selectedCertificate.title} certificate` : 'Certificate preview'}
        onCancel={() => setSelectedCertificate(null)}
        onClose={() => setSelectedCertificate(null)}
        onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}
      >
        {selectedCertificate && (
          <motion.div
            className="recognition-dialog-content"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: easing }}
          >
            <div className="recognition-dialog-head">
              <div><p className="recognition-eyebrow">CERTIFICATE / PREVIEW</p><h2>{selectedCertificate.title}</h2></div>
              <button ref={closeButtonRef} className="recognition-dialog-close" type="button" onClick={closePreview} aria-label="Close certificate preview">×</button>
            </div>
            {selectedCertificate.pdfPath ? (
              <iframe className="recognition-dialog-preview" src={selectedCertificate.pdfPath} title={`${selectedCertificate.title} PDF`} />
            ) : (
              <div className="recognition-dialog-missing">
                <span>PREVIEW UNAVAILABLE</span>
                <p>The original certificate PDF is not available in this workspace.</p>
                {selectedCertificate.sourceFilename && <small>Expected file: {selectedCertificate.sourceFilename}</small>}
              </div>
            )}
            <div className="recognition-dialog-footer">
              {selectedCertificate.pdfPath && (
                <a className="recognition-certificate-action" href={selectedCertificate.pdfPath} target="_blank" rel="noreferrer">
                  Open original PDF <ArrowIcon />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </dialog>
    </main>
  );
}

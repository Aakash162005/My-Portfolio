import { useEffect, useState } from 'react';

const navigation = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Stack', href: '#tech', id: 'tech' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Coding', href: '#coding', id: 'coding' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav id="navbar" className={`${isScrolled ? 'scrolled' : ''}${isMenuOpen ? ' menu-open' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={closeMenu} aria-label="Aakash Patil, home">
        <img src="/LOGO OF AK.png" alt="" />
      </a>

      <button
        className="mobile-menu-toggle"
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        <span className={`hamburger${isMenuOpen ? ' active' : ''}`} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
          id="primary-navigation"
          className={`nav-links${isMenuOpen ? ' active' : ''}`}
        >
          {navigation.map(({ label, href, id }) => (
            <a
              href={href}
              key={id}
              className={activeSection === id ? 'active' : ''}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary mobile-only" onClick={closeMenu}>
            Hire me
          </a>
      </div>

      <a href="#contact" className="btn btn-primary desktop-only">
        Hire me <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}

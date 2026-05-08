import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className={isMenuOpen ? 'menu-open' : ''}>
      <a href="#" className="nav-logo">
        <img src="/LOGO OF AK.png" alt="AK Logo" style={{ height: '60px', objectFit: 'contain' }} />
      </a>

      {/* Hamburger Menu Icon */}
      <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#tech" onClick={() => setIsMenuOpen(false)}>Stack</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
        <a href="#coding" onClick={() => setIsMenuOpen(false)}>Coding</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        <a href="#contact" className="btn btn-primary mobile-only" onClick={() => setIsMenuOpen(false)}>Hire Me</a>
      </div>

      <a href="#contact" className="btn btn-primary desktop-only" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Hire Me</a>
    </nav>
  );
}


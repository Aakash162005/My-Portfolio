import { useEffect } from 'react';

export default function Navbar() {
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

  return (
    <nav id="navbar">
      <a href="#" className="nav-logo">
        <img src="/LOGO OF AK.png" alt="AK Logo" style={{ height: '60px', objectFit: 'contain' }} />
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#tech">Stack</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#coding">Coding</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Hire Me</a>
    </nav>
  );
}

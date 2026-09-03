import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  useEffect(() => {
    const typewriter = document.getElementById('typewriter');
    let timeoutId: number;
    if (typewriter) {
      const texts = [
        "Full Stack Developer",
        "Systems Engineer",
        "Problem Solver",
        "Open Source Contributor"
      ];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const type = () => {
        if (!typewriter) return;
        const currentText = texts[textIndex];
        if (isDeleting) {
          typewriter.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typewriter.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
          typeSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          typeSpeed = 500;
        }

        timeoutId = window.setTimeout(type, typeSpeed);
      };
      type();
    }
    return () => clearTimeout(timeoutId);
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge">
              <div className="badge-dot"></div>
              Available for new opportunities
            </div>
            <h1 className="hero-title">
              Building <span className="gradient-text">scalable </span><br />digital experiences
            </h1>
            <div className="typewriter-container" id="typewriter"></div>
            <p className="hero-desc">
              Motivated Computer Engineering student with strong skills in backend development and growing expertise in
              full-stack and AI-based applications.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">⚡ View Projects</a>
              <div className="dropdown-container" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  📄 Download Resume
                </button>
                {isDropdownOpen && (
                  <div 
                    className="dropdown-menu" 
                    style={{ 
                      position: 'absolute', 
                      top: '100%', 
                      left: 0, 
                      marginTop: '0.5rem',
                      background: 'rgba(15, 23, 42, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      borderRadius: '0.5rem',
                      padding: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      zIndex: 50,
                      minWidth: '200px'
                    }}
                  >
                    <a 
                      href="Aakash_Patil-Java_Developer-resume.pdf" 
                      className="btn btn-outline" 
                      style={{ width: '100%', justifyContent: 'flex-start', padding: '0.5rem 1rem' }} 
                      download
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      📄 Java Developer
                    </a>
                    <a 
                      href="Aakash-Marn-Resume.pdf" 
                      className="btn btn-outline" 
                      style={{ width: '100%', justifyContent: 'flex-start', padding: '0.5rem 1rem' }} 
                      download
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      📄 MERN Developer
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="image-glow"></div>
            <img src="/Aakash Profile pick.png" alt="Aakash Patil" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

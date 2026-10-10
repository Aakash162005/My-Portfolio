import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Coding from './components/Coding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      return;
    }

    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursorDot || !cursorRing) {
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const setCursorPosition = (x: number, y: number) => {
      cursorDot.style.setProperty('--cursor-x', `${x}px`);
      cursorDot.style.setProperty('--cursor-y', `${y}px`);
      cursorRing.style.setProperty('--cursor-x', `${x}px`);
      cursorRing.style.setProperty('--cursor-y', `${y}px`);
    };

    const setHoverScale = (scale: number) => {
      cursorDot.style.setProperty('--cursor-scale', `${scale}`);
      cursorRing.style.setProperty('--cursor-scale', `${scale}`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      setCursorPosition(event.clientX, event.clientY);
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
    };

    const handlePointerLeave = () => {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    };

    const handlePointerDown = () => setHoverScale(1.8);
    const handlePointerUp = () => setHoverScale(1);
    const handleHoverEnter = () => setHoverScale(1.8);
    const handleHoverLeave = () => setHoverScale(1);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, .project-card, .tech-card, .contact-card, .nav-links a'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('pointerenter', handleHoverEnter);
      element.addEventListener('pointerleave', handleHoverLeave);
    });

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointerup', handlePointerUp);

    setCursorPosition(window.innerWidth / 2, window.innerHeight / 2);

    // Intersection Observer for Reveal Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .tech-card, .project-card, .timeline-item, .contact-wrapper').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      document.body.classList.remove('has-custom-cursor');
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      interactiveElements.forEach((element) => {
        element.removeEventListener('pointerenter', handleHoverEnter);
        element.removeEventListener('pointerleave', handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor cursor-dot" ref={cursorDotRef} aria-hidden="true" />
      <div className="cursor cursor-ring" ref={cursorRingRef} aria-hidden="true" />

      <div className="bg-blobs">
        <div className="blob"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Coding />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

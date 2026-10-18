import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroAnimation from './components/IntroAnimation';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Coding from './components/Coding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/AchievementsPage';
import './App.css';

function App() {
  const isAchievementsPage = window.location.pathname.replace(/\/$/, '') === '/achievements';
  const [showIntro, setShowIntro] = useState(true);
  const dismissIntro = useCallback(() => setShowIntro(false), []);

  if (isAchievementsPage) {
    return (
      <>
        <div className="site-ambient" aria-hidden="true" />
        <Navbar />
        <Achievements />
        <Footer />
      </>
    );
  }

  return (
    <>
      {showIntro && <IntroAnimation onComplete={dismissIntro} />}
      <div className="site-ambient" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Coding />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

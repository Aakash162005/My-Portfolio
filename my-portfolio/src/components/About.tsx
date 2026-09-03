import { useEffect, useRef } from 'react';
import DevIllustration from './DevIllustration';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    const animatedEls = section.querySelectorAll('.about-reveal');
    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header about-reveal" style={{ '--reveal-delay': '0s' } as React.CSSProperties}>
          <span className="section-label">// know me better</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-image-container about-reveal" style={{ '--reveal-delay': '0.15s' } as React.CSSProperties}>
            <DevIllustration />
          </div>
          <div className="about-content">
            <p className="hero-desc about-reveal" style={{ textAlign: 'justify', '--reveal-delay': '0.25s' } as React.CSSProperties}>
              I am a <strong>4th-year</strong> Computer Engineering student at <strong>R. C. Patel Institute of Technology</strong> with a strong passion for Full Stack Java Development and scalable software engineering. I enjoy designing secure backend systems, developing REST APIs, and building production-ready applications using modern technologies.
            </p>
            <p className="hero-desc about-reveal" style={{ marginTop: '20px', textAlign: 'justify', '--reveal-delay': '0.4s' } as React.CSSProperties}>
              My technical expertise includes Java, Spring Boot, Spring Security, Microservices, PostgreSQL, Hibernate, and REST APIs. I am currently strengthening my frontend skills with React while exploring Docker, Apache Kafka, and cloud-native application development to build end-to-end scalable solutions.
            </p>
            <p className="hero-desc about-reveal" style={{ marginTop: '20px', textAlign: 'justify', '--reveal-delay': '0.55s' } as React.CSSProperties}>
              I have developed projects such as <strong>AgroConnect</strong>, a production-style microservices-based agriculture e-commerce platform, <strong>KisanMate</strong>, a smart farming solution, and <strong>SkillBridge</strong>, an AI-powered career development platform. Along with software development, I actively practice Data Structures &amp; Algorithms to improve my problem-solving skills. My goal is to build impactful, scalable applications and contribute as a <strong>Full Stack Java Developer</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

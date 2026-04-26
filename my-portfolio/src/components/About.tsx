export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// know me better</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-image-wrapper reveal">
            <div className="image-glow"></div>
            <img src="/about_me_dev_illustration_1777185035197.png" alt="Development Illustration" className="hero-image" />
          </div>
          <div className="about-content reveal">
            <p className="hero-desc" style={{ maxWidth: '100%', textAlign: 'left' }}>
              I am a 3rd-year Computer Engineering student at R C Patel Institute of Technology, passionate about building
              intelligent applications and solving real-world problems. With a solid foundation in Java, Spring Boot, and
              database systems, I'm currently expanding my horizons into React, Docker, and AI integration.
            </p>
            <p className="hero-desc" style={{ maxWidth: '100%', marginTop: '20px', textAlign: 'left' }}>
              My journey in software development is driven by a curiosity to understand how complex systems work and a
              desire to create software that makes a meaningful impact—like <strong>KisanMate</strong> for farmers and{' '}
              <strong>SkillBridge</strong> for aspiring professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

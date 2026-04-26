export default function TechStack() {
  return (
    <section id="tech">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// technical arsenal</span>
          <h2 className="section-title">Tools & Technologies</h2>
        </div>
        <div className="tech-grid">
          <div className="tech-card reveal">
            <div className="tech-icon">⚛</div>
            <h3 className="heading" style={{ marginBottom: '16px' }}>Frontend Development</h3>
            <div className="tech-list">
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React (Learning)</span>
            </div>
          </div>
          <div className="tech-card reveal" style={{ animationDelay: '0.2s' }}>
            <div className="tech-icon">🛠</div>
            <h3 className="heading" style={{ marginBottom: '16px' }}>Backend & Frameworks</h3>
            <div className="tech-list">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">C</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">Hibernate</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
          <div className="tech-card reveal" style={{ animationDelay: '0.4s' }}>
            <div className="tech-icon">☁</div>
            <h3 className="heading" style={{ marginBottom: '16px' }}>DevOps & Cloud</h3>
            <div className="tech-list">
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">CI/CD</span>
              <span className="tech-tag">Linux</span>
              <span className="tech-tag">Nginx</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

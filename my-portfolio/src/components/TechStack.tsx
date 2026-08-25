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
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </div>
          <div className="tech-card reveal" style={{ animationDelay: '0.1s' }}>
            <div className="tech-icon">☕</div>
            <h3 className="heading" style={{ marginBottom: '16px' }}>Java Backend</h3>
            <div className="tech-list">
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">Spring Cloud</span>
              <span className="tech-tag">Spring Security</span>
              <span className="tech-tag">JWT</span>
              <span className="tech-tag">API Gateway</span>
              <span className="tech-tag">Eureka</span>
              <span className="tech-tag">Hibernate</span>
              <span className="tech-tag">Maven</span>
              <span className="tech-tag">MySQL</span>
            </div>
          </div>
          <div className="tech-card reveal" style={{ animationDelay: '0.2s' }}>
            <div className="tech-icon">⚡</div>
            <h3 className="heading" style={{ marginBottom: '16px' }}>Backend & Databases</h3>
            <div className="tech-list">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Prisma ORM</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
          <div className="tech-card reveal" style={{ animationDelay: '0.3s' }}>
            <div className="tech-icon">💻</div>
            <h3 className="heading" style={{ marginBottom: '16px' }}>Programming Languages</h3>
            <div className="tech-list">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Python (Basic)</span>
              <span className="tech-tag">C</span>
            </div>
          </div>
          <div className="tech-card reveal" style={{ animationDelay: '0.4s' }}>
            <div className="tech-icon">☁</div>
            <h3 className="heading" style={{ marginBottom: '16px' }}>DevOps & Cloud</h3>
            <div className="tech-list">
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kafka (Basic)</span>
              <span className="tech-tag">CI/CD</span>
              <span className="tech-tag">Linux (Basic)</span>
            </div>
          </div>
          <div className="tech-card reveal" style={{ animationDelay: '0.5s' }}>
            <div className="tech-icon">🧠</div>
            <h3 className="heading" style={{ marginBottom: '16px' }}>Tools & AI Workflows</h3>
            <div className="tech-list">
              <span className="tech-tag">Git</span>
              <span className="tech-tag">GitHub</span>
              <span className="tech-tag">AI Tools</span>
              <span className="tech-tag">Prompt Engineering</span>
              <span className="tech-tag">AI-Assisted Coding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

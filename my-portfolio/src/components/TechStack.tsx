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
            <h3 className="heading" style={{ marginBottom: '20px' }}>Frontend Development</h3>
            <div className="skill-item">
              <div className="skill-info"><span>HTML/CSS</span><span>90%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '90%' } as any}></div></div>
            </div>
            <div className="skill-item">
              <div className="skill-info"><span>JavaScript</span><span>85%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '85%' } as any}></div></div>
            </div>
            <div className="skill-item">
              <div className="skill-info"><span>React</span><span>65%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '65%' } as any}></div></div>
            </div>
            <div className="level-badge">Intermediate</div>
          </div>

          <div className="tech-card reveal" style={{ animationDelay: '0.2s' }}>
            <div className="tech-icon">🛠</div>
            <h3 className="heading" style={{ marginBottom: '20px' }}>Backend & Languages</h3>
            <div className="skill-item">
              <div className="skill-info"><span>Java</span><span>90%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '90%' } as any}></div></div>
            </div>
            <div className="skill-item">
              <div className="skill-info"><span>Spring Boot</span><span>80%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '80%' } as any}></div></div>
            </div>
            <div className="skill-item">
              <div className="skill-info"><span>Python</span><span>75%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '75%' } as any}></div></div>
            </div>
            <div className="level-badge">Advanced</div>
          </div>

          <div className="tech-card reveal" style={{ animationDelay: '0.4s' }}>
            <div className="tech-icon">☁</div>
            <h3 className="heading" style={{ marginBottom: '20px' }}>DevOps & Databases</h3>
            <div className="skill-item">
              <div className="skill-info"><span>MySQL / MongoDB</span><span>85%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '85%' } as any}></div></div>
            </div>
            <div className="skill-item">
              <div className="skill-info"><span>Docker / Linux</span><span>70%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '70%' } as any}></div></div>
            </div>
            <div className="skill-item">
              <div className="skill-info"><span>AWS</span><span>55%</span></div>
              <div className="skill-bar-container"><div className="skill-bar-fill" style={{ '--progress': '55%' } as any}></div></div>
            </div>
            <div className="level-badge">Practitioner</div>
          </div>
        </div>

      </div>
    </section>
  );
}

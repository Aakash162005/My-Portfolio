export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// showcase</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card reveal">
            <div className="project-image-placeholder">🌾</div>
            <div className="project-info">
              <h3 className="project-title">KisanMate</h3>
              <p className="project-desc">A farmer-centric platform providing tools, weather info, seeds, and fertilizer info
                with a user-friendly dashboard.</p>
              <div className="project-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spring MVC</span>
                <span className="tech-tag">SQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Aakash162005" target="_blank" rel="noreferrer" className="project-link">⌥</a>
                <a href="#" className="project-link">↗</a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="project-card reveal" style={{ animationDelay: '0.2s' }}>
            <div className="project-image-placeholder">🛒</div>
            <div className="project-info">
              <h3 className="project-title">OfferBazaar</h3>
              <p className="project-desc">Local vendor offers platform aggregating deals to increase visibility and sales for
                local businesses.</p>
              <div className="project-tags">
                <span className="tech-tag">Advanced Java</span>
                <span className="tech-tag">Servlet</span>
                <span className="tech-tag">SQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Aakash162005" target="_blank" rel="noreferrer" className="project-link">⌥</a>
                <a href="#" className="project-link">↗</a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="project-card reveal" style={{ animationDelay: '0.4s' }}>
            <div className="project-image-placeholder">🌉</div>
            <div className="project-info">
              <h3 className="project-title">SkillBridge</h3>
              <p className="project-desc">Skill development platform featuring AI-based resume analysis and personalized
                feedback for job seekers.</p>
              <div className="project-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">AI APIs</span>
                <span className="tech-tag">MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Aakash162005" target="_blank" rel="noreferrer" className="project-link">⌥</a>
                <a href="#" className="project-link">↗</a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="project-card reveal">
            <div className="project-image-placeholder">🏦</div>
            <div className="project-info">
              <h3 className="project-title">Bank Application</h3>
              <p className="project-desc">A web-based banking application supporting secure money transfers, deposits, and
                withdrawals.</p>
              <div className="project-tags">
                <span className="tech-tag">Servlet</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">HTML/CSS/JS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Aakash162005" target="_blank" rel="noreferrer" className="project-link">⌥</a>
                <a href="#" className="project-link">↗</a>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="project-card reveal" style={{ animationDelay: '0.2s' }}>
            <div className="project-image-placeholder">🎓</div>
            <div className="project-info">
              <h3 className="project-title">Alumni Network</h3>
              <p className="project-desc">A networking platform connecting current students with alumni for guidance and
                community engagement.</p>
              <div className="project-tags">
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Web Tech</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Aakash162005" target="_blank" rel="noreferrer" className="project-link">⌥</a>
                <a href="#" className="project-link">↗</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

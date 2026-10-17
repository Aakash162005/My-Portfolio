import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">// professional journey</span>
          <h2 className="section-title">Experience & Education</h2>
        </Reveal>
        <div className="timeline">
          <Reveal className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">FEB 2026 - MAY 2026 (3 Month)</div>
            <h3 className="timeline-role">Full Stack Developer Intern</h3>
            <div className="timeline-company">CodexConquer</div>
            <p className="project-desc">Working on frontend and backend development for full-stack applications. Collaborating
              in API development and database handling.</p>
          </Reveal>
          <Reveal className="timeline-item" delay={0.08}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025 (1 Month)</div>
            <h3 className="timeline-role">Java Developer Training</h3>
            <div className="timeline-company">R3 Systems India Private Limited</div>
            <p className="project-desc">Developed dynamic web applications using Core/Advanced Java, Spring MVC, Hibernate,
              Jsp, Servlet and MySQL.</p>
          </Reveal>
          <Reveal className="timeline-item" delay={0.16}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023 - 2027</div>
            <h3 className="timeline-role">B.Tech in Computer Engineering</h3>
            <div className="timeline-company">R C Patel Institute of Technology, Shirpur</div>
            <p className="project-desc">Currently CGPA: 7.65/10.</p>
          </Reveal>
          <Reveal className="timeline-item" delay={0.24}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">Completed 2023</div>
            <h3 className="timeline-role">Higher Secondary Certificate (HSC)</h3>
            <div className="timeline-company">P. O. Nahata College, Bhusawal</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

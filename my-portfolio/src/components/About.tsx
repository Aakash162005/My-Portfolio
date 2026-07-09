import aboutImg from '../assets/about.png';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// know me better</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-image-container reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="about-image-wrapper">
              <div className="image-glow"></div>
              <img src={aboutImg} alt="About Me" className="about-image" />
            </div>
          </div>
          <div className="about-content reveal" style={{ transitionDelay: '0.4s' }}>
            <p className="hero-desc" style={{ textAlign: 'justify' }}>
              I am a <strong>4th-year</strong> Computer Engineering student at <strong>R. C. Patel Institute of Technology</strong> with a strong passion for Full Stack Java Development and scalable software engineering. I enjoy designing secure backend systems, developing REST APIs, and building production-ready applications using modern technologies.
            </p>
            <p className="hero-desc" style={{ marginTop: '20px', textAlign: 'justify' }}>
              My technical expertise includes Java, Spring Boot, Spring Security, Microservices, PostgreSQL, Hibernate, and REST APIs. I am currently strengthening my frontend skills with React while exploring Docker, Apache Kafka, and cloud-native application development to build end-to-end scalable solutions.
            </p>
            <p className="hero-desc" style={{ marginTop: '20px', textAlign: 'justify' }}>
              I have developed projects such as <strong>AgroConnect</strong>, a production-style microservices-based agriculture e-commerce platform, <strong>KisanMate</strong>, a smart farming solution, and <strong>SkillBridge</strong>, an AI-powered career development platform. Along with software development, I actively practice Data Structures & Algorithms to improve my problem-solving skills. My goal is to build impactful, scalable applications and contribute as a <strong>Full Stack Java Developer</strong>.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import gramsetuImage from '../assets/Gramsetu.png';

interface ProjectCardProps {
  emoji?: string;
  image?: string;
  title: string;
  desc: string;
  tags: string[];
  github: string;
  demo?: string;
  statusBadge?: string;
  deployed?: boolean;
  delay?: string;
}

function ProjectCard({ emoji, image, title, desc, tags, github, demo, statusBadge, deployed, delay }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;
  const isLengthy = desc.length > maxLength;

  const displayText = isExpanded ? desc : (isLengthy ? `${desc.slice(0, maxLength)}...` : desc);

  return (
    <div className="project-card reveal" style={delay ? { animationDelay: delay } : undefined}>
      <div className="project-image-placeholder">
        {image ? (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          emoji
        )}
        {statusBadge && (
          <div className="project-status-badge">
            <span className="badge-dot" style={{ backgroundColor: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }}></span>
            {statusBadge}
          </div>
        )}
        {deployed && (
          <div className="project-status-badge" style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <span className="badge-dot" style={{ backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981', animation: 'pulse-green 2s infinite' }}></span>
            🚀 Live
          </div>
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">
          {displayText}
          {isLengthy && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="read-more-btn"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary)',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.85rem',
                marginLeft: '6px',
                padding: 0,
                textDecoration: 'underline'
              }}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </p>
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tech-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">⌥</a>
          {deployed && demo ? (
            <a href={demo} target="_blank" rel="noreferrer" className="project-link deployed-link" title="Live Demo">
              🚀
            </a>
          ) : (
            <a href={demo || "#"} className="project-link" title="Demo">↗</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projectsData: ProjectCardProps[] = [
    {
      image: gramsetuImage,
      emoji: "🌿",
      title: "GramSetu",
      desc: "A comprehensive Digital Panchayat platform bridging the gap between village administration and citizens. Features a secure citizen dashboard, complaint management, real-time news feed, schemes directory, and a robust admin moderation panel.",
      tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Prisma", "Lucide React"],
      github: "https://github.com/Aakash162005/GramSetu",
      demo: "https://gramsetu-ap.vercel.app/",
      deployed: true,
      statusBadge: "New"
    },
    {
      emoji: "🌾",
      title: "AgroConnect",
      desc: "A production-ready microservices based agriculture e-commerce platform connecting farmers, customers, and shopkeepers. Built using Spring Boot Microservices with JWT Authentication, API Gateway, Eureka Service Discovery, PostgreSQL, and Role-Based Access Control. The project is currently under active development with upcoming features including Cart, Payment Gateway, Notifications, and a React frontend.",
      tags: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "JWT", "API Gateway", "Eureka", "PostgreSQL", "Hibernate", "Maven"],
      github: "https://github.com/Aakash162005/Agro-Connect",
      statusBadge: "Active Development"
    },
    {
      emoji: "🌾",
      title: "KisanMate",
      desc: "A farmer-centric platform providing tools, weather info, seeds, and fertilizer info with a user-friendly dashboard.",
      tags: ["Java", "Spring MVC", "SQL"],
      github: "https://github.com/Aakash162005",
      delay: "0.2s"
    },
    {
      emoji: "🛒",
      title: "OfferBazaar",
      desc: "Local vendor offers platform aggregating deals to increase visibility and sales for local businesses.",
      tags: ["Advanced Java", "Servlet", "SQL"],
      github: "https://github.com/Aakash162005",
      delay: "0.4s"
    },
    {
      emoji: "🌉",
      title: "SkillBridge",
      desc: "Skill development platform featuring AI-based resume analysis and personalized feedback for job seekers.",
      tags: ["React", "Spring Boot", "AI APIs", "MySQL"],
      github: "https://github.com/Aakash162005"
    },
    {
      emoji: "🏦",
      title: "Bank Application",
      desc: "A web-based banking application supporting secure money transfers, deposits, and withdrawals.",
      tags: ["Servlet", "MySQL", "HTML/CSS/JS"],
      github: "https://github.com/Aakash162005",
      delay: "0.2s"
    },
    {
      emoji: "🎓",
      title: "Alumni Network",
      desc: "A networking platform connecting current students with alumni for guidance and community engagement.",
      tags: ["Spring Boot", "Java", "Web Tech"],
      github: "https://github.com/Aakash162005",
      demo: "https://alumni-network-platform-1.onrender.com/",
      deployed: true,
      delay: "0.4s"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// showcase</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

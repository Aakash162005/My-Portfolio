export interface Project {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
  emoji: string;
  status?: string;
  completed: boolean;
}

export const projects: Project[] = [
  {
    emoji: '🌿',
    title: 'GramSetu',
    desc: 'A comprehensive Digital Panchayat platform bridging the gap between village administration and citizens. Features a secure citizen dashboard, complaint management, real-time news feed, schemes directory, and a robust admin moderation panel.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Lucide React'],
    github: 'https://github.com/Aakash162005/GramSetu',
    demo: 'https://gramsetu-ap.vercel.app/',
    status: 'New',
    completed: true,
  },
  {
    emoji: '🎓',
    title: 'Alumni Network',
    desc: 'A networking platform connecting current students with alumni for guidance and community engagement.',
    tags: ['Spring Boot', 'Java', 'Web Tech'],
    github: 'https://github.com/Aakash162005',
    demo: 'https://alumni-network-platform-1.onrender.com/',
    status: 'Live',
    completed: true,
  },
  {
    emoji: '🌾',
    title: 'AgroConnect',
    desc: 'A production-ready microservices based agriculture e-commerce platform connecting farmers, customers, and shopkeepers. Built using Spring Boot Microservices with JWT Authentication, API Gateway, Eureka Service Discovery, PostgreSQL, and Role-Based Access Control. The project is currently under active development with upcoming features including Cart, Payment Gateway, Notifications, and a React frontend.',
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'JWT', 'API Gateway', 'Eureka', 'PostgreSQL', 'Hibernate', 'Maven'],
    github: 'https://github.com/Aakash162005/Agro-Connect',
    status: 'Active development',
    completed: false,
  },
  {
    emoji: '🌾',
    title: 'KisanMate',
    desc: 'A farmer-centric platform providing tools, weather info, seeds, and fertilizer info with a user-friendly dashboard.',
    tags: ['Java', 'Spring MVC', 'SQL'],
    github: 'https://github.com/Aakash162005',
    completed: true,
  },
  {
    emoji: '🛒',
    title: 'OfferBazaar',
    desc: 'Local vendor offers platform aggregating deals to increase visibility and sales for local businesses.',
    tags: ['Advanced Java', 'Servlet', 'SQL'],
    github: 'https://github.com/Aakash162005',
    completed: true,
  },
  {
    emoji: '🌉',
    title: 'SkillBridge',
    desc: 'Skill development platform featuring AI-based resume analysis and personalized feedback for job seekers.',
    tags: ['React', 'Spring Boot', 'AI APIs', 'MySQL'],
    github: 'https://github.com/Aakash162005',
    completed: true,
  },
  {
    emoji: '🏦',
    title: 'Bank Application',
    desc: 'A web-based banking application supporting secure money transfers, deposits, and withdrawals.',
    tags: ['Servlet', 'MySQL', 'HTML/CSS/JS'],
    github: 'https://github.com/Aakash162005',
    completed: true,
  },
];

export const stacks = [
  {
    icon: 'frontend',
    title: 'Frontend Development',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: 'java',
    title: 'Java Backend',
    tags: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'JWT', 'API Gateway', 'Eureka', 'Hibernate', 'Maven'],
  },
  {
    icon: 'database',
    title: 'Backend & Databases',
    tags: ['Node.js', 'Next.js', 'Prisma ORM', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    icon: 'code',
    title: 'Programming Languages',
    tags: ['Java', 'Python (Basic)', 'C'],
  },
  {
    icon: 'cloud',
    title: 'DevOps & Cloud',
    tags: ['Docker', 'Kafka (Basic)', 'CI/CD', 'Linux (Basic)'],
  },
  {
    icon: 'terminal',
    title: 'Tools & AI Workflows',
    tags: ['Git', 'GitHub', 'AI Tools', 'Prompt Engineering', 'AI-Assisted Coding'],
  },
];

export const technologyGroups = [
  {
    title: 'Languages & Frameworks',
    technologies: [
      { name: 'Java' },
      { name: 'Python (Basic)' },
      { name: 'C' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Spring Boot' },
      { name: 'Spring Cloud' },
      { name: 'Spring Security' },
    ],
  },
  {
    title: 'Databases & Backend',
    technologies: [
      { name: 'Node.js' },
      { name: 'Prisma ORM' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'JWT' },
      { name: 'API Gateway' },
      { name: 'Eureka' },
      { name: 'Hibernate' },
    ],
  },
  {
    title: 'DevOps & Tools',
    technologies: [
      { name: 'Docker' },
      { name: 'Kafka (Basic)' },
      { name: 'CI/CD' },
      { name: 'Linux (Basic)' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Maven' },
    ],
  },
  {
    title: 'Others',
    technologies: [
      { name: 'AI Tools' },
      { name: 'Prompt Engineering' },
      { name: 'AI-Assisted Coding' },
    ],
  },
];

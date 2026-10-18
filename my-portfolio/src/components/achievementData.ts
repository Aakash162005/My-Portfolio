export type AchievementCategory =
  | 'Hackathons'
  | 'Certifications'
  | 'Competitions'
  | 'Coding'
  | 'Workshops & Events';

export type AchievementStatus = 'Participant' | 'Finalist' | 'Winner' | 'Runner-up' | 'Completed' | 'Profile';

export interface Achievement {
  id: string;
  title: string;
  category: AchievementCategory;
  organizer?: string;
  date?: string;
  status?: AchievementStatus;
  result?: string;
  description: string;
  technologies?: string[];
  image?: string;
  credentialUrl?: string;
  eventUrl?: string;
  proofUrl?: string;
  credentialId?: string;
  featured?: boolean;
  stats?: Array<{ label: string; value: string }>;
}

export const achievements: Achievement[] = [
  {
    id: 'codechef-profile',
    title: 'CodeChef',
    category: 'Coding',
    organizer: 'CodeChef',
    status: 'Profile',
    description: 'Competitive programming profile and publicly listed practice milestones.',
    proofUrl: 'https://www.codechef.com/users/sky_1605',
    stats: [
      { label: 'Highest rating', value: '1128' },
      { label: 'Contests', value: '40+' },
      { label: 'Practice streak', value: '250+ days' },
    ],
    featured: true,
  },
  {
    id: 'leetcode-profile',
    title: 'LeetCode',
    category: 'Coding',
    organizer: 'LeetCode',
    status: 'Profile',
    description: 'Problem-solving profile with the statistics currently published on the portfolio.',
    proofUrl: 'https://leetcode.com/u/aakash1605/',
    stats: [
      { label: 'Problems solved', value: '27' },
      { label: 'Global rank', value: '~5,00,000' },
      { label: 'Listed expertise', value: 'Java (100%)' },
    ],
    featured: true,
  },
];

export type RecognitionCategory = 'Coding Achievements' | 'Hackathons & Events' | 'Certifications';

export interface RecognitionAchievement {
  id: string;
  title: string;
  category: RecognitionCategory;
  organization?: string;
  hostOrganization?: string;
  date?: string;
  status: string;
  description: string;
  imagePath?: string;
  pdfPath?: string;
  sourceFilename?: string;
}

export const recognitionAchievements: RecognitionAchievement[] = [
  {
    id: 'codechef-streak-100',
    title: '100 Days Coding Streak',
    category: 'Coding Achievements',
    organization: 'CodeChef',
    status: '100-day coding streak',
    description: 'A CodeChef milestone recognizing 100 consecutive days of coding practice.',
  },
  {
    id: 'codechef-problem-solver-1000',
    title: '1000 Problems Solved',
    category: 'Coding Achievements',
    organization: 'CodeChef',
    status: '1,000 problems solved',
    description: 'A CodeChef problem-solving milestone.',
  },
  {
    id: 'converges-2026',
    title: 'Converges 2026',
    category: 'Hackathons & Events',
    date: '2026',
    status: 'Participant',
    description: 'Actively engaged in technical events and gained exposure to innovative ideas and collaborative problem-solving.',
  },
  {
    id: 'national-hackathon-nashik-2026',
    title: 'National Level Hackathon 2026 — Nashik',
    category: 'Hackathons & Events',
    date: '2026',
    status: 'Participant',
    description: 'Participated in a national-level hackathon, engaging with technical challenges and collaborative problem-solving.',
  },
  {
    id: 'certificate-cyber',
    title: 'Certificate details unavailable',
    category: 'Certifications',
    status: 'Document not available',
    description: 'The certificate PDF is not present in the workspace, so its exact title, issuer, and date cannot be verified.',
    sourceFilename: 'cyber Certificate Aakash.pdf',
  },
  {
    id: 'certificate-dsa-bootcamp',
    title: 'International Level Bootcamp on DSA for DeepTech',
    category: 'Certifications',
    organization: 'Brainovision Solutions India Pvt. Ltd., in association with AICTE',
    hostOrganization: 'R. C. Patel Institute of Technology, Shirpur',
    date: '1 May 2026 - 30 May 2026',
    status: 'Participation certificate',
    description: 'Participation in the International Level Bootcamp on DSA for DeepTech.',
    sourceFilename: 'DSA BOOTCAMP PARTICIPATION CERTIFICATE 2026.pdf',
  },
  {
    id: 'certificate-git',
    title: 'Certificate details unavailable',
    category: 'Certifications',
    status: 'Document not available',
    description: 'The certificate PDF is not present in the workspace, so its exact title, issuer, and date cannot be verified.',
    sourceFilename: 'Git certifiacte.pdf',
  },
  {
    id: 'certificate-github',
    title: 'Certificate details unavailable',
    category: 'Certifications',
    status: 'Document not available',
    description: 'The certificate PDF is not present in the workspace, so its exact title, issuer, and date cannot be verified.',
    sourceFilename: 'GitHub certificate.pdf',
  },
  {
    id: 'certificate-react',
    title: 'Certificate details unavailable',
    category: 'Certifications',
    status: 'Document not available',
    description: 'The certificate PDF is not present in the workspace, so its exact title, issuer, and date cannot be verified.',
    sourceFilename: 'react certificate.pdf',
  },
  {
    id: 'certificate-nodevember',
    title: 'Certificate details unavailable',
    category: 'Certifications',
    status: 'Document not available',
    description: 'The certificate PDF is not present in the workspace, so its exact title, issuer, and date cannot be verified.',
    sourceFilename: 'Nodevember 3.o.pdf',
  },
];

export const missingAchievementAssets = [
  'CodeChefBadge (4).png',
  'CodeChefBadge (5).png',
  'cyber Certificate Aakash.pdf',
  'DSA BOOTCAMP PARTICIPATION CERTIFICATE 2026.pdf',
  'Git certifiacte.pdf',
  'GitHub certificate.pdf',
  'react certificate.pdf',
  'Nodevember 3.o.pdf',
] as const;

import Reveal from './Reveal';

const profiles = [
  {
    icon: '👨‍🍳',
    name: 'CodeChef',
    href: 'https://www.codechef.com/users/sky_1605',
    stats: [
      ['Highest Rating', '1128'],
      ['Contests', '40+'],
      ['Streak maintained', '250+ Days'],
    ],
  },
  {
    icon: '🚀',
    name: 'LeetCode',
    href: 'https://leetcode.com/u/aakash1605/',
    stats: [
      ['Problems Solved', '27'],
      ['Global Rank', '~5,00,000'],
      ['Expertise', 'Java (100%)'],
    ],
  },
];

export default function Coding() {
  return (
    <section id="coding">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">// competitive programming</span>
          <h2 className="section-title">Coding Achievements</h2>
        </Reveal>
        <div className="coding-grid">
          {profiles.map((profile, index) => (
            <Reveal className="tech-card coding-card" delay={index * 0.12} key={profile.name}>
              <div className="coding-profile-icon" aria-hidden="true">{profile.icon}</div>
              <h3 className="heading coding-profile-name">{profile.name}</h3>
              <div className="coding-stats">
                {profile.stats.map(([label, value]) => (
                  <div className="coding-stat" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <a href={profile.href} target="_blank" rel="noreferrer" className="btn btn-outline coding-profile-link">
                View profile <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Coding() {
  return (
    <section id="coding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// competitive programming</span>
          <h2 className="section-title">Coding Achievements</h2>
        </div>
        <div className="coding-grid">
          {/* CodeChef Card */}
          <div className="tech-card reveal coding-card"
            style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(17, 24, 39, 0.7) 100%)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👨‍🍳</div>
            <h3 className="heading" style={{ marginBottom: '10px' }}>CodeChef</h3>
            <div className="level-badge" style={{ marginBottom: '20px', background: 'linear-gradient(to right, #8b4513, #d2691e)' }}>1 Star Coder</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Highest Rating</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#f4c542' }} className="count-up">1128</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Contests</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--primary)' }} className="count-up">40+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Daily Streak</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ff6b6b' }} className="count-up">250+</span>
              </div>
            </div>
            <a href="https://www.codechef.com/users/sky_1605" target="_blank" rel="noreferrer" className="btn btn-outline"
              style={{ marginTop: '30px', width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>View Profile</a>
          </div>

          {/* LeetCode Card */}
          <div className="tech-card reveal coding-card"
            style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(255, 161, 22, 0.1) 0%, rgba(17, 24, 39, 0.7) 100%)', transitionDelay: '0.2s' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
            <h3 className="heading" style={{ marginBottom: '10px' }}>LeetCode</h3>
            <div className="level-badge" style={{ marginBottom: '20px', background: 'linear-gradient(to right, #ffa116, #ff6b16)' }}>Active Solver</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Problems Solved</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ffa116' }} className="count-up">400+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Global Rank</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--secondary)' }} className="count-up">500k+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Main Language</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)' }}>Java</span>
              </div>
            </div>
            <a href="https://leetcode.com/u/aakash1605/" target="_blank" rel="noreferrer" className="btn btn-outline"
              style={{ marginTop: '30px', width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>View Profile</a>
          </div>
        </div>

      </div>
    </section>
  );
}

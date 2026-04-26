export default function Coding() {
  return (
    <section id="coding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// competitive programming</span>
          <h2 className="section-title">Coding Achievements</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* CodeChef Card */}
          <div className="tech-card reveal"
            style={{ padding: '40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(17, 24, 39, 0.7) 100%)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👨‍🍳</div>
            <h3 className="heading" style={{ marginBottom: '10px' }}>CodeChef</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Highest Rating</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#f4c542' }}>1128</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Contests</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--primary)' }}>40+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Streak maintained</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ff6b6b' }}>250+ Days</span>
              </div>
            </div>
            <a href="https://www.codechef.com/users/sky_1605" target="_blank" rel="noreferrer" className="btn btn-outline"
              style={{ marginTop: '30px', width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>View Profile</a>
          </div>

          {/* LeetCode Card */}
          <div className="tech-card reveal"
            style={{ padding: '40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255, 161, 22, 0.1) 0%, rgba(17, 24, 39, 0.7) 100%)', transitionDelay: '0.2s' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
            <h3 className="heading" style={{ marginBottom: '10px' }}>LeetCode</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Problems Solved</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ffa116' }}>4</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Global Rank</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--secondary)' }}>~5,00,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Expertise</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)' }}>Java (100%)</span>
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

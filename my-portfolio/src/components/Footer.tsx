export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <a href="https://github.com/Aakash162005" target="_blank" rel="noreferrer"
            style={{ color: 'var(--text-dim)', transition: 'var(--transition)' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>GitHub</a>
          <a href="https://www.linkedin.com/in/aakashpatil1605" target="_blank" rel="noreferrer"
            style={{ color: 'var(--text-dim)', transition: 'var(--transition)' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', transition: 'var(--transition)' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>Instagram</a>
        </div>
        <p>© 2025 Aakash Patil. Built with passion & precision.</p>
      </div>
    </footer>
  );
}

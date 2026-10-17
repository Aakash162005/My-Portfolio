import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import Reveal from './Reveal';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-wrapper">
          <div>
            <h2 className="section-title">Let's connect</h2>

            <p className="hero-desc">I'm always open to discussing new projects, creative ideas or opportunities to be part of
              your visions.</p>
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                <span style={{ fontSize: '1.2rem' }}>📧</span>
                <a href="mailto:aakashpatil93700@gmail.com"
                  style={{ color: 'inherit', textDecoration: 'none', transition: 'var(--transition)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>aakashpatil93700@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                <span style={{ fontSize: '1.2rem' }}>📞</span>
                <a href="tel:+919370089763"
                  style={{ color: 'inherit', textDecoration: 'none', transition: 'var(--transition)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>+91 93700 89763</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span> Maharashtra, India
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '16px' }}>
                <a href="https://github.com/Aakash162005" target="_blank" rel="noreferrer" title="GitHub"
                  style={{ width: '44px', height: '44px', background: 'var(--bg)', border: '1px solid var(--surface-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', textDecoration: 'none', transition: 'var(--transition)' }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--surface-border)'; e.currentTarget.style.transform = 'none'; }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/aakashpatil1605" target="_blank" rel="noreferrer" title="LinkedIn"
                  style={{ width: '44px', height: '44px', background: 'var(--bg)', border: '1px solid var(--surface-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', textDecoration: 'none', transition: 'var(--transition)' }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--surface-border)'; e.currentTarget.style.transform = 'none'; }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="user_name" className="form-control" placeholder="Aakash Patil" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="user_email" className="form-control" placeholder="aakash@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" className="form-control" rows={4} placeholder="How can I help you?" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p role="status" style={{ color: 'var(--accent)', marginTop: '10px', fontSize: '0.9rem' }}>
                ✅ Message sent successfully! Auto-reply has been triggered.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" style={{ color: '#ff6b6b', marginTop: '10px', fontSize: '0.9rem' }}>
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

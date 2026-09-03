import { useEffect, useRef, useState, useCallback } from 'react';
import './DevIllustration.css';

/* ═══════════════════════════════════════════════════════ */
/*  TECH LOGO DATA — Organized by Depth Layer             */
/* ═══════════════════════════════════════════════════════ */
const techLogos = [
  // ── Foreground: larger, slower float, strong parallax ──
  { id: 'java',   label: 'Java',       icon: '☕', color: '#f89820', layer: 'fg',  x: -36, y: -22, size: 54, floatDur: 6,   floatDelay: 0   },
  { id: 'react',  label: 'React',      icon: '⚛', color: '#61dafb', layer: 'fg',  x:  38, y: -18, size: 50, floatDur: 7,   floatDelay: 1   },
  { id: 'spring', label: 'Spring',     icon: '🍃', color: '#6db33f', layer: 'fg',  x: -34, y:  28, size: 50, floatDur: 5.5, floatDelay: 0.5 },

  // ── Middle: normal size, smooth orbital drift ──
  { id: 'docker',   label: 'Docker',     icon: '🐳', color: '#2496ed', layer: 'mid', x:  42, y:  30, size: 44, floatDur: 8,   floatDelay: 2   },
  { id: 'postgres', label: 'PostgreSQL', icon: '🐘', color: '#336791', layer: 'mid', x: -44, y:   2, size: 42, floatDur: 7.5, floatDelay: 1.5 },
  { id: 'git',      label: 'Git',        icon: '⎇', color: '#f05032', layer: 'mid', x:  44, y:  -2, size: 42, floatDur: 9,   floatDelay: 3   },

  // ── Background: smaller, blurred, gentle parallax ──
  { id: 'code',  label: '</>',   icon: '</>', color: '#a855f7', layer: 'bg', x: -28, y: -38, size: 34, floatDur: 10,   floatDelay: 0.8 },
  { id: 'api',   label: 'API',   icon: '⟨⟩', color: '#10b981', layer: 'bg', x:  30, y: -36, size: 32, floatDur: 11,   floatDelay: 2.5 },
  { id: 'sql',   label: 'SQL',   icon: '⊞',  color: '#e48900', layer: 'bg', x: -22, y:  38, size: 34, floatDur: 12,   floatDelay: 1.2 },
  { id: 'cloud', label: 'Cloud', icon: '☁',  color: '#4285f4', layer: 'bg', x:  24, y:  40, size: 32, floatDur: 10.5, floatDelay: 3.5 },
];

/* ═══════════════════════════════════════════════════════ */
/*  PARTICLE DATA                                         */
/* ═══════════════════════════════════════════════════════ */
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2.5,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 10,
  opacity: 0.12 + Math.random() * 0.28,
}));

/* ═══════════════════════════════════════════════════════ */
/*  COMPONENT                                             */
/* ═══════════════════════════════════════════════════════ */
export default function DevIllustration() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  /* ─── Smooth lerp animation loop ─── */
  const tick = useCallback(() => {
    const lerp = 0.06;
    mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * lerp;
    mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * lerp;

    const el = sceneRef.current;
    if (el) {
      const mx = mouseCurrent.current.x;
      const my = mouseCurrent.current.y;
      el.style.setProperty('--rx', `${my * 10}deg`);
      el.style.setProperty('--ry', `${mx * -10}deg`);
      el.style.setProperty('--mx', `${mx}`);
      el.style.setProperty('--my', `${my}`);
    }
    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mouseTarget.current.x = ((e.clientX - r.left) / r.width  - 0.5) * 2;
      mouseTarget.current.y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      mouseTarget.current.x = 0;
      mouseTarget.current.y = 0;
    };

    if (!prefersReduced) {
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      rafId.current = requestAnimationFrame(tick);
    }

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [tick]);

  /* ─── Parallax multiplier per layer ─── */
  const pMul = (layer: string) => layer === 'fg' ? 1.6 : layer === 'mid' ? 1 : 0.35;

  return (
    <div className="d3-scene" ref={sceneRef}>

      {/* ── Ambient Background Orbs ── */}
      <div className="d3-ambient">
        <div className="d3-orb d3-orb-1"></div>
        <div className="d3-orb d3-orb-2"></div>
        <div className="d3-orb d3-orb-3"></div>
      </div>

      {/* ── Background Grid ── */}
      <div className="d3-grid"></div>

      {/* ── 3D Perspective Wrapper ── */}
      <div className="d3-persp">
        <div className="d3-rotate-layer">

          {/* ═══════════ ORBITING LAYER ═══════════ */}
          <div className="d3-orbit-layer">
            {/* ── Connection Lines ── */}
            <svg className="d3-connections" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="rgba(99,102,241,0.35)" />
                  <stop offset="100%" stopColor="rgba(168,85,247,0.1)"  />
                </linearGradient>
              </defs>
              {techLogos.filter(l => l.layer !== 'bg').map((l) => (
                <g key={`conn-${l.id}`}>
                  <line
                    x1="0" y1="6" x2={l.x * 0.9} y2={l.y * 0.9}
                    stroke={`${l.color}30`}
                    strokeWidth="0.25"
                    className="d3-conn-line"
                    style={{ animationDuration: `${3 + Math.random() * 2}s` }}
                  />
                  <circle r="0.7" fill={l.color} opacity="0.8" className="d3-data-dot">
                    <animateMotion
                      dur={`${2.5 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                      path={`M0,6 L${l.x * 0.9},${l.y * 0.9}`}
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {/* ═══════════ TECH LOGOS ═══════════ */}
            {techLogos.map((logo) => (
              <div
                key={logo.id}
                className={`d3-logo d3-logo-${logo.layer}${hoveredLogo === logo.id ? ' d3-logo-hover' : ''}`}
                style={{
                  '--lx': `${logo.x}%`,
                  '--ly': `${logo.y}%`,
                  '--lsize': `${logo.size}px`,
                  '--lcolor': logo.color,
                  '--lfloat': `${logo.floatDur}s`,
                  '--ldelay': `${logo.floatDelay}s`,
                  '--lparallax': pMul(logo.layer),
                } as React.CSSProperties}
                onMouseEnter={() => setHoveredLogo(logo.id)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div className="d3-logo-body">
                  <span className="d3-logo-icon">{logo.icon}</span>
                  <span className="d3-logo-label">{logo.label}</span>
                </div>
                <div className="d3-logo-ring"></div>
                <div className="d3-logo-tooltip">{logo.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Floating Particles ── */}
      <div className="d3-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="d3-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          ></div>
        ))}
      </div>

      {/* ── Ambient Light Beams ── */}
      <div className="d3-beam d3-beam-1"></div>
      <div className="d3-beam d3-beam-2"></div>
    </div>
  );
}

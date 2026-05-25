'use client';
import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    video: '/Banner_hero_03.mp4',
    image: null,
    lines: ['We scale', 'Brands', 'For real.'],
    lineColors: ['#e0f8ff', '#7DCDE8', '#e0f8ff'],
    srv: { title: 'Shopify & Ecommerce', num: '01', desc: 'We build and optimize stores that actually sell', href: '/en/build' }
  },
  {
    video: null,
    image: '/hero-banner-02.jpg',
    lines: ['We grow', 'Your revenue', 'With data.'],
    lineColors: ['#e0f8ff', '#7DCDE8', '#e0f8ff'],
    srv: { title: 'Growth Marketing', num: '02', desc: 'Meta Ads, Google Ads and email that convert', href: '/en/growth' }
  },
  {
    video: null,
    image: '/hero-banner-03.jpg',
    lines: ['Diagnose.', 'Strategize.', 'Scale.'],
    lineColors: ['#e0f8ff', '#7DCDE8', '#e0f8ff'],
    srv: { title: 'Our Process', num: '03', desc: 'From zero to scale in 90 days', href: '/en/#contacto' }
  },
];

const DURATION = 7000;

export default function HeroSliderEN() {
  const [current, setCurrent] = useState(0);
  const [titleKey, setTitleKey] = useState(0);
  const timerRef = useRef(null);

  function goToSlide(idx) {
    setCurrent(idx);
    setTitleKey(k => k + 1);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => goToSlide((idx + 1) % slides.length), DURATION);
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => goToSlide(1), DURATION);
    return () => clearTimeout(timerRef.current);
  }, []);

  const slide = slides[current];

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#1e4a5a' }}>

      {slides.map((s, i) => (
        s.video ? (
          <video key={i} src={s.video} autoPlay muted loop playsInline
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: i === current ? 1 : 0, transition: 'none' }}
          />
        ) : (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
            transition: 'none',
          }} />
        )
      ))}

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(5,15,20,.88) 0%, rgba(5,15,20,.6) 45%, rgba(5,15,20,.3) 100%)', zIndex: 1 }} />

      <CursorNext onNext={() => goToSlide((current + 1) % slides.length)} />

      <div style={{ position: 'absolute', top: 0, left: 60, right: '50%', bottom: 0, zIndex: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 key={titleKey} style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: .95, margin: 0 }}>
          {slide.lines.map((line, i) => (
            <div key={i} style={{ color: slide.lineColors[i] }}>{line}</div>
          ))}
        </h1>
        <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
          <a href="/en/#contacto" style={{ background: '#7de0f0', color: '#0d2030', padding: '12px 24px', borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Let's talk →
          </a>
          <a href="/en/#work" style={{ background: 'rgba(255,255,255,.12)', color: '#fff', padding: '12px 24px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
            See results
          </a>
        </div>
      </div>

      <a href={slide.srv.href} style={{ position: 'absolute', bottom: 40, right: 40, zIndex: 4, background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 4, padding: '20px 24px', minWidth: 260, textDecoration: 'none', color: '#fff' }} className="hero-srv-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 18 }}>{slide.srv.title}</div>
          <div style={{ fontSize: 12, opacity: .4 }}>{slide.srv.num}</div>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', marginBottom: 14 }}>{slide.srv.desc}</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.7)' }}>→</div>
      </a>

      <div style={{ position: 'absolute', bottom: 20, left: '10%', right: '10%', zIndex: 4, display: 'flex', gap: 6 }}>
        {slides.map((_, i) => (
          <div key={i} onClick={() => goToSlide(i)} style={{ flex: 1, height: 2, background: 'rgba(255,255,255,.25)', borderRadius: 2, cursor: 'pointer', overflow: 'hidden' }}>
            <div key={`bar-${current}-${i}`} style={{ height: '100%', background: '#fff', borderRadius: 2, width: i < current ? '100%' : '0%', animation: i === current ? `fillBar ${DURATION}ms linear forwards` : 'none' }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fillBar { from { width: 0% } to { width: 100% } }
        @media (max-width: 960px) { .hero-srv-card { display: none !important; } }
      `}</style>
    </section>
  );
}

function CursorNext({ onNext }) {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        onClick={onNext}
        onTouchEnd={e => { e.preventDefault(); onNext(); }}
        onMouseMove={e => {
          setPos({ x: e.clientX, y: e.clientY });
          const el = document.elementFromPoint(e.clientX, e.clientY);
          const isClickable = el && (
            el.closest('a') ||
            el.closest('button') ||
            el.closest('.hero-srv-card') ||
            el.closest('.hero-progress-bar')
          );
          if (isClickable) {
            setVisible(false);
            e.currentTarget.style.cursor = 'pointer';
          } else {
            setVisible(true);
            e.currentTarget.style.cursor = 'none';
          }
        }}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ position: 'absolute', inset: 0, zIndex: 3, cursor: 'none' }}
        className="hero-click-area"
      />
      <div style={{
        position: 'fixed', left: pos.x, top: pos.y,
        width: 100, height: 100,
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none', zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: 'opacity .3s',
      }}>
        <svg viewBox="0 0 100 100" width="100" height="100"
          style={{ position: 'absolute', inset: 0, animation: 'rotateCursor 8s linear infinite' }}>
          <defs><path id="cpEN" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/></defs>
          <text fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif" letterSpacing="3.2">
            <textPath href="#cpEN">NEXT · NEXT · NEXT · NEXT · NEXT · NEXT ·</textPath>
          </text>
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </div>
      </div>
      <style>{`@keyframes rotateCursor { to { transform: rotate(360deg); } } @media(max-width:960px){.hero-click-area{display:none}}`}</style>
    </>
  );
}
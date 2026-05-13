'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/FooterEN';

const areas = [
  { id: 'ux', title: 'UX & Design', desc: 'We identify the friction points in your store that are costing you sales. Every element has one purpose: convert.', items: ['Heatmaps and session recordings', 'Checkout flow analysis', 'Visual hierarchy and CTAs', 'Mobile UX optimization'], stat: '+38%', statLabel: 'Mobile conversion' },
  { id: 'checkout', title: 'Checkout Optimization', desc: 'Checkout is where you win or lose. We reduce abandonment with a frictionless payment process.', items: ['One-page checkout', 'Optimized payment methods', 'Trust signals and guarantees', 'Abandonment recovery'], stat: '+52%', statLabel: 'Less checkout abandonment' },
  { id: 'copy', title: 'Copy & Persuasion', desc: 'The right words at the right moment. Copy based on consumer psychology and behavioral data.', items: ['Headlines that convert', 'Optimized product descriptions', 'Strategic social proof', 'Urgency and scarcity'], stat: '+29%', statLabel: 'CTR on product pages' },
  { id: 'testing', title: 'A/B Testing', desc: 'Without testing, everything is opinion. We design and run experiments that generate real insights and measurable improvements.', items: ['Hypothesis prioritization', 'Technical test setup', 'Statistical analysis', 'Winner implementation'], stat: '12', statLabel: 'Max simultaneous tests' },
];

export default function CroENPage() {
  const [active, setActive] = useState('ux');
  const activeArea = areas.find(a => a.id === active);

  return (
    <main style={{ background: '#fff' }}>
      <section style={{ minHeight: '100vh', background: '#0d2030', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 100% 100%, rgba(125,224,240,.06) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Conversion Rate Optimization
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          More sales.<br />Same <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>traffic.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, lineHeight: 1.8 }}>You already have the traffic. CRO is about converting more of the visitors who are already there — without spending more on ads.</p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[{ n: '+38%', l: 'Conversion' }, { n: '-52%', l: 'Checkout abandonment' }, { n: '90d', l: 'To see results' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#fff', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            Every friction point<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>eliminated.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(13,30,42,.06)' }} className="cro-grid">
            <div style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
              {areas.map(a => (
                <div key={a.id} onClick={() => setActive(a.id)} style={{ padding: '24px 32px', cursor: 'pointer', borderBottom: '1px solid rgba(13,30,42,.06)', background: active === a.id ? '#f0f8fc' : '#fff', borderLeft: active === a.id ? '3px solid #2a5f72' : '3px solid transparent', transition: 'all .2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: active === a.id ? '#0d2030' : '#6b8a96' }}>{a.title}</div>
                  {active === a.id && <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#2a5f72' }}>{a.stat}</div>}
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, fontWeight: 400, color: '#0d2030', marginBottom: 16 }}>{activeArea.title}</h3>
              <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>{activeArea.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {activeArea.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#0d2030' }}>
                    <span style={{ display: 'block', width: 16, height: 1, background: '#2a5f72', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ paddingTop: 32, borderTop: '1px solid rgba(13,30,42,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 48, color: '#2a5f72', lineHeight: 1 }}>{activeArea.stat}</div>
                  <div style={{ fontSize: 12, color: '#6b8a96', marginTop: 4 }}>{activeArea.statLabel}</div>
                </div>
                <Link href="/en/#contacto" style={{ background: '#0d2030', color: '#fff', padding: '12px 24px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Get started →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#1e4a5a', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Where are you<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>losing sales?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>We do a free CRO audit of your store. We tell you exactly where the problems are.</p>
          <Link href="/en/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Free audit →
          </Link>
        </div>
      </section>
      <Footer />
      <style>{`@media(max-width:960px){.cro-grid{grid-template-columns:1fr!important}}@media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}`}</style>
    </main>
  );
}
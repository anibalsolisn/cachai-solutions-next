'use client';
import { useState } from 'react';

export default function ContactoEN() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" style={{ background: '#0a1a22', padding: '120px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(125,224,240,.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="contacto-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', position: 'relative' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 28 }}>
            Ready to scale<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>for real?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', lineHeight: 1.8, marginBottom: 32 }}>
            Let's schedule a 30-minute call. We'll show you exactly what we'd do with your brand and what results you can expect.
          </p>
          {['No cost or commitment', 'Prior analysis of your situation', 'Response in less than 24h'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,.65)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7de0f0', flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
        <div>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 24, color: '#fff', marginBottom: 8 }}>Got it!</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,.45)' }}>We'll reach out within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input type="text" placeholder="Your name" required style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 4, padding: '14px 18px', color: '#fff', fontSize: 14, fontFamily: 'var(--font-onest)', outline: 'none', width: '100%' }} />
              <input type="email" placeholder="you@company.com" required style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 4, padding: '14px 18px', color: '#fff', fontSize: 14, fontFamily: 'var(--font-onest)', outline: 'none', width: '100%' }} />
              <input type="url" placeholder="Your store URL (optional)" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 4, padding: '14px 18px', color: '#fff', fontSize: 14, fontFamily: 'var(--font-onest)', outline: 'none', width: '100%' }} />
              <select style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 4, padding: '14px 18px', color: 'rgba(255,255,255,.5)', fontSize: 14, fontFamily: 'var(--font-onest)', outline: 'none', width: '100%' }}>
                <option value="">What do you need?</option>
                <option>Shopify Development</option>
                <option>Shopify Migration</option>
                <option>Growth Marketing</option>
                <option>Email Marketing</option>
                <option>SEO & GEO</option>
                <option>Other</option>
              </select>
              <button type="submit" style={{ background: '#7de0f0', color: '#0d2030', border: 'none', borderRadius: 4, padding: 16, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-onest)', letterSpacing: '.04em', width: '100%' }}>
                Let's talk →
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`@media(max-width:960px){#contacto{padding:72px 24px!important}.contacto-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}
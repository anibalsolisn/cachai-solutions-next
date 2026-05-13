'use client';
import { useState } from 'react';

const faqs = [
  { q: 'How much does it cost to work with Cachai?', a: 'It depends on the project and your goals. We schedule a 30-minute call, analyze your situation and give you a concrete proposal. No cost, no commitment.' },
  { q: 'How long until I see results?', a: 'For development projects, your store is ready in 4-8 weeks. For growth marketing, first data comes in 30 days and consolidated results in 90.' },
  { q: 'Do you only work with Shopify?', a: 'For ecommerce we specialize in Shopify because it\'s the best platform on the market. For marketing and growth we work with any platform.' },
  { q: 'What countries do you operate in?', a: 'We work with brands in Canada, USA, Latin America and Spain. We operate in English and Spanish.' },
  { q: 'What makes Cachai different from other agencies?', a: 'We have skin in the game. Your success is ours — we don\'t charge for meeting hours or pretty reports. We execute, measure and don\'t stop until the numbers speak.' },
  { q: 'How do we get started?', a: 'We schedule a free diagnosis call. In 30 minutes we tell you exactly what we\'d do with your brand and what results you can expect.' },
];

export default function FAQEN() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ background: '#ffffff', padding: '120px 80px', borderTop: '1px solid rgba(13,30,42,.08)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
          FAQ
        </div>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
          Common<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>questions.</em>
        </h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(13,30,42,.08)' }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
              <span style={{ fontSize: 16, fontWeight: 400, color: '#0d2030', fontFamily: 'var(--font-onest)' }}>{f.q}</span>
              <span style={{ fontSize: 20, color: '#2a5f72', transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .3s', flexShrink: 0, marginLeft: 16 }}>+</span>
            </button>
            <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height .4s ease' }}>
              <p style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.8, paddingBottom: 24 }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:960px){#faq{padding:72px 24px!important}}`}</style>
    </section>
  );
}
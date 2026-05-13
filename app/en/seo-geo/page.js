'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/FooterEN';

export default function SeoGeoENPage() {
  const [active, setActive] = useState('seo');

  return (
    <main style={{ background: '#fff' }}>
      <section style={{ minHeight: '100vh', background: '#0a1a22', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 100% 20%, rgba(125,224,240,.07) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          SEO & GEO
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          Rank on Google.<br />Show up in <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>ChatGPT.</em><br />Be everywhere.
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 520, lineHeight: 1.8 }}>SEO to dominate Google. GEO to exist in the new AI search era. Because 50% of searches will be generative by 2028 — and most of your competitors don't know it yet.</p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[{ n: '900M', l: 'ChatGPT weekly users' }, { n: '+520%', l: 'AI traffic to retail' }, { n: '47%', l: 'Brands with no GEO strategy' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, color: '#fff', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4, maxWidth: 100 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 48, lineHeight: 1.15, maxWidth: 700 }}>
            People don't just<br />search on Google anymore.<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>They ask AI.</em>
          </h2>
          <div style={{ display: 'flex', gap: 0, marginBottom: 48, borderBottom: '1px solid rgba(13,30,42,.1)' }}>
            {[{ id: 'seo', label: 'SEO' }, { id: 'geo', label: 'GEO' }].map(t => (
              <button key={t.id} onClick={() => setActive(t.id)} style={{ padding: '16px 40px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-onest)', color: active === t.id ? '#0d2030' : '#6b8a96', borderBottom: active === t.id ? '2px solid #2a5f72' : '2px solid transparent', marginBottom: -1, transition: 'all .2s' }}>{t.label}</button>
            ))}
          </div>

          {active === 'seo' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="tab-grid">
              <div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, fontWeight: 400, color: '#0d2030', marginBottom: 20 }}>SEO — Still the king</h3>
                <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>Google still sends 345x more traffic than ChatGPT, Gemini and Perplexity combined. SEO didn't die — it evolved. And brands that master it have a huge advantage.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[{ title: 'Technical SEO', desc: 'Core Web Vitals, speed, structure and crawlability. The foundation everything else needs.' }, { title: 'Content & Keywords', desc: 'Category pages, product listings and editorial content optimized for purchase intent.' }, { title: 'Link Building', desc: 'Domain authority built with quality mentions from media and authority sites.' }, { title: 'International SEO', desc: 'Presence in multiple markets with localized strategy by country and language.' }].map(item => (
                    <div key={item.title} style={{ padding: '20px 0', borderBottom: '1px solid rgba(13,30,42,.08)' }}>
                      <div style={{ fontSize: 15, fontWeight: 500, color: '#0d2030', marginBottom: 6 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: '#6b8a96', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#f7fbfc', padding: '40px', borderRadius: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 24 }}>Why SEO is still critical</div>
                {[{ stat: '345x', desc: 'More traffic from Google than from all AI platforms combined (2025)' }, { stat: '99%', desc: 'Of AI Overviews cite Google\'s top 10 — without SEO, there\'s no GEO' }, { stat: '76%', desc: 'Of AI Overview citations also rank in Google\'s top 10' }].map(item => (
                  <div key={item.stat} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(13,30,42,.06)' }}>
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#2a5f72', lineHeight: 1, flexShrink: 0, minWidth: 80 }}>{item.stat}</div>
                    <div style={{ fontSize: 13, color: '#6b8a96', lineHeight: 1.6, paddingTop: 4 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === 'geo' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="tab-grid">
              <div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, fontWeight: 400, color: '#0d2030', marginBottom: 20 }}>GEO — The new frontier</h3>
                <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>Generative Engine Optimization is the practice of optimizing your content to appear in AI-generated answers from ChatGPT, Perplexity, Gemini and Google AI Overviews. 47% of brands have no GEO strategy yet. The first-mover advantage is real — and it's closing fast.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[{ title: 'ChatGPT & Perplexity Optimization', desc: 'We structure your content to be cited in responses from the leading AI engines.' }, { title: 'Google AI Overviews', desc: 'Appear in the summaries Google generates before the results — where 60% of users stop.' }, { title: 'E-E-A-T & Brand Authority', desc: 'AIs cite trustworthy sources. We build your authority so you become that source.' }, { title: 'Advanced Schema Markup', desc: 'Structured data that AI models interpret and cite 30-40% more frequently.' }].map(item => (
                    <div key={item.title} style={{ padding: '20px 0', borderBottom: '1px solid rgba(13,30,42,.08)' }}>
                      <div style={{ fontSize: 15, fontWeight: 500, color: '#0d2030', marginBottom: 6 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: '#6b8a96', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#0a1a22', padding: '40px', borderRadius: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 24 }}>The numbers that change everything</div>
                {[{ stat: '900M', desc: 'Weekly ChatGPT users in 2025 — doubled in 8 months' }, { stat: '+520%', desc: 'Growth of AI-driven traffic to retail between 2024 and 2025' }, { stat: '4.4x', desc: 'More qualified visitors arriving from AI vs traditional search' }, { stat: '25%', desc: 'Of traditional searches will disappear by end of 2026 (Gartner)' }].map(item => (
                  <div key={item.stat} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#7de0f0', lineHeight: 1, flexShrink: 0, minWidth: 80 }}>{item.stat}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.6, paddingTop: 4 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <style>{`@media(max-width:960px){.tab-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Does your brand show up<br />when someone asks<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>ChatGPT about your category?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>We do a free SEO + GEO visibility audit. You'll know exactly where you stand on Google and in the main AI engines.</p>
          <Link href="/en/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Free audit →
          </Link>
        </div>
      </section>
      <Footer />
      <style>{`@media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}`}</style>
    </main>
  );
}
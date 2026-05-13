'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/FooterEN';
import { siMeta, siGoogleads, siTiktok } from 'simple-icons';

function BrandIcon({ icon, color, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || `#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  );
}

const RetargetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7de0f0" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="#7de0f0"/>
  </svg>
);

const StrategyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a5f72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17l4-8 4 4 4-6 4 5"/><path d="M21 17H3"/>
  </svg>
);

const results = [
  { metric: '4.2x', label: 'Average ROAS', desc: 'On Meta Ads campaigns for fashion ecommerce' },
  { metric: '+68%', label: 'CPA reduction', desc: 'On Google Shopping after audit and restructuring' },
  { metric: '3.1x', label: 'Revenue in 90 days', desc: 'For supplements store with $5K/month budget' },
  { metric: '+43%', label: 'Cart recovery', desc: 'With multi-channel retargeting sequence' },
];

export default function GrowthENPage() {
  const [active, setActive] = useState('meta');

  const services = [
    { id: 'meta', icon: <BrandIcon icon={siMeta} color="#1877f2" />, title: 'Meta Ads', subtitle: 'Facebook & Instagram', desc: 'Campaigns that convert cold and retargeting audiences. Creatives that stop the scroll and campaign structures optimized for maximum ROAS.', items: ['Full-funnel campaign strategy', 'Creatives and copywriting', 'Audiences and segmentation', 'Continuous ROAS optimization'], stat: '4.2x', statLabel: 'Average ROAS', color: '#1877f2' },
    { id: 'google', icon: <BrandIcon icon={siGoogleads} color="#4285f4" />, title: 'Google Ads', subtitle: 'Search, Shopping & Display', desc: 'We capture purchase intent. Search, Shopping and Performance Max optimized so every dollar invested brings back several more.', items: ['Google Shopping and PMax', 'High-intent Search campaigns', 'Dynamic remarketing', 'Quality Score optimization'], stat: '+68%', statLabel: 'CPA reduction', color: '#4285f4' },
    { id: 'tiktok', icon: <BrandIcon icon={siTiktok} color="#ff0050" />, title: 'TikTok Ads', subtitle: 'The fastest growing platform', desc: 'The channel with the lowest CAC on the market when done right. Native creatives that don\'t look like ads — and generate real sales.', items: ['Native content strategy', 'Spark Ads and TopView', 'Lookalike audiences', 'Creative testing'], stat: '2.8x', statLabel: 'Cheaper than Meta', color: '#ff0050' },
    { id: 'retargeting', icon: <RetargetIcon />, title: 'Retargeting', subtitle: 'Recover the ones who almost bought', desc: '97% of visitors don\'t buy on their first visit. With smart retargeting we bring them back and convert them.', items: ['Retargeting sequences', 'Dynamic Product Ads', 'Cart abandonment', 'Cross-sell and upsell'], stat: '+43%', statLabel: 'Cart recovery rate', color: '#7de0f0' },
    { id: 'strategy', icon: <StrategyIcon />, title: 'Acquisition Strategy', subtitle: 'The plan behind everything', desc: 'Without strategy, ads burn money. We design the full funnel — from first touch to purchase — with clear goals and metrics.', items: ['Current channel audit', 'KPI and goal definition', 'Monthly media plan', 'Reporting and optimization'], stat: '90 days', statLabel: 'To see real results', color: '#2a5f72' },
  ];

  const activeService = services.find(s => s.id === active);

  return (
    <main style={{ background: '#ffffff' }}>
      <section style={{ minHeight: '100vh', background: '#0a1a22', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(125,224,240,.07) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Growth Marketing
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          More sales.<br />Better <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>ROAS.</em><br />No magic.
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, lineHeight: 1.8 }}>Meta Ads, Google Ads, TikTok and retargeting. With strategy, data and creatives that actually convert.</p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[{ n: '4.2x', l: 'ROAS' }, { n: '+68%', l: 'Less CPA' }, { n: '90d', l: 'Results' }].map(s => (
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
            Every channel,<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>owned.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(13,30,42,.06)' }} className="services-grid">
            <div style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
              {services.map(s => (
                <div key={s.id} onClick={() => setActive(s.id)} style={{ padding: '24px 32px', cursor: 'pointer', borderBottom: '1px solid rgba(13,30,42,.06)', background: active === s.id ? '#f0f8fc' : '#fff', borderLeft: active === s.id ? `3px solid ${s.color}` : '3px solid transparent', transition: 'all .2s', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ opacity: active === s.id ? 1 : .4, transition: 'opacity .2s', flexShrink: 0 }}>{s.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 500, color: active === s.id ? '#0d2030' : '#6b8a96' }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: '#6b8a96', marginTop: 2 }}>{s.subtitle}</div>
                  </div>
                  {active === s.id && <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: s.color, fontWeight: 400, flexShrink: 0 }}>{s.stat}</div>}
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                {activeService.icon}
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: activeService.color }}>{activeService.subtitle}</div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, fontWeight: 400, color: '#0d2030', marginBottom: 20, lineHeight: 1.1 }}>{activeService.title}</h3>
              <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>{activeService.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
                {activeService.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#0d2030' }}>
                    <span style={{ width: 20, height: 1, background: activeService.color, flexShrink: 0, display: 'block' }} />
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(13,30,42,.08)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 48, color: activeService.color, lineHeight: 1 }}>{activeService.stat}</div>
                  <div style={{ fontSize: 12, color: '#6b8a96', marginTop: 4 }}>{activeService.statLabel}</div>
                </div>
                <Link href="/en/#contacto" style={{ marginLeft: 'auto', background: '#0d2030', color: '#fff', padding: '12px 24px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Get started →</Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){.services-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#fff', marginBottom: 64, lineHeight: 1.15 }}>
            Numbers that<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>speak for themselves.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'rgba(255,255,255,.06)' }} className="results-grid">
            {results.map(r => (
              <div key={r.metric} style={{ background: '#0a1a22', padding: '40px 32px', borderBottom: '2px solid rgba(125,224,240,.15)' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 52, fontWeight: 400, color: '#7de0f0', lineHeight: 1, marginBottom: 8 }}>{r.metric}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:960px){.results-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){.results-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background: '#1e4a5a', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Ready to scale<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>your revenue?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>We audit your current campaigns for free. We tell you exactly what's not working and how we'd fix it.</p>
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
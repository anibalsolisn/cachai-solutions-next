import Link from 'next/link';
import Footer from '../../components/FooterEN';

export default function AnalyticsENPage() {
  return (
    <main style={{ background: '#fff' }}>
      <section style={{ minHeight: '100vh', background: '#0a1a22', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(125,224,240,.07) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Analytics & Data
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          Decisions backed<br />by <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>data,</em><br />not guesses.
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 520, lineHeight: 1.8 }}>If you can't measure it, you can't improve it. We set up your complete analytics stack so every business decision is backed by real data.</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            Everything that matters,<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>measured correctly.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { num: '01', title: 'Analytics Setup', desc: 'GA4, Meta Pixel, TikTok Pixel and Klaviyo correctly configured. No duplicate data, no lost conversions.', items: ['GA4 with ecommerce tracking', 'Meta & TikTok Pixel', 'Klaviyo events', 'Complete GTM setup'] },
              { num: '02', title: 'Dashboards & Reports', desc: 'Full visibility of your business in real time. A dashboard that shows what matters, without the noise.', items: ['Real-time revenue dashboard', 'Automatic weekly reports', 'Cohort analysis', 'Multi-touch attribution'] },
              { num: '03', title: 'Customer Data Platform', desc: 'We unify data from all your channels to understand the complete customer journey.', items: ['Data source integration', 'Advanced segmentation', 'LTV prediction', 'Churn prevention'] },
              { num: '04', title: 'Insights & Action', desc: 'Data without action is worthless. We deliver actionable insights with concrete recommendations every week.', items: ['Weekly performance analysis', 'Opportunity identification', 'Data-driven test suggestions', 'Optimization roadmap'] },
            ].map(s => (
              <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', padding: '48px 0', borderBottom: '1px solid rgba(13,30,42,.08)' }} className="analytics-row">
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96' }}>{s.num}</div>
                <div style={{ paddingRight: 48 }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 28, fontWeight: 400, color: '#0d2030', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.8 }}>{s.desc}</p>
                </div>
                <div style={{ paddingLeft: 48, borderLeft: '1px solid rgba(13,30,42,.08)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#0d2030' }}>
                      <span style={{ display: 'block', width: 16, height: 1, background: '#2a5f72', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#1e4a5a', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Are you making decisions<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>in the dark?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>We audit your analytics setup and show you what data you're missing.</p>
          <Link href="/en/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Free audit →
          </Link>
        </div>
      </section>
      <Footer />
      <style>{`
        @media(max-width:960px){.analytics-row{grid-template-columns:40px 1fr!important}.analytics-row>div:last-child{grid-column:2;padding-left:0!important;border-left:none!important;border-top:1px solid rgba(13,30,42,.08);padding-top:20px;margin-top:20px}}
        @media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </main>
  );
}
import Link from 'next/link';
import Footer from '../../components/FooterEN';

export default function SalesENPage() {
  return (
    <main style={{ background: '#fff' }}>
      <section style={{ minHeight: '100vh', background: '#1e4a5a', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 0% 60%, rgba(125,224,240,.08) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Sales Strategy
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          A sales strategy<br />that actually<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>scales.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: 40, position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', maxWidth: 520, lineHeight: 1.8 }}>Traffic without a sales strategy is just noise. We design the full system — from acquisition to upsell — to maximize revenue per customer.</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            From first click<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>to repeat customer.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(13,30,42,.06)' }} className="sales-grid">
            {[
              { num: '01', title: 'Sales Funnel', desc: 'We design the complete customer journey from first contact to conversion and beyond.', items: ['Customer journey mapping', 'Touchpoint optimization', 'Friction reduction', 'Upsell and cross-sell'] },
              { num: '02', title: 'Pricing & Offers', desc: 'Pricing strategy and offer structure that maximizes AOV without sacrificing conversion.', items: ['Price elasticity analysis', 'Strategic bundles and kits', 'Promotions and urgency', 'Loyalty program'] },
              { num: '03', title: 'Retention & LTV', desc: 'The best customer is the one you already have. Strategies to increase purchase frequency and lifetime value.', items: ['Value-based segmentation', 'Subscription programs', 'Inactive customer reactivation', 'NPS and feedback loops'] },
            ].map(s => (
              <div key={s.num} style={{ background: '#fff', padding: '40px 36px' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96', marginBottom: 20 }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#0d2030', marginBottom: 12 }}>{s.title}</div>
                <p style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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

      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="sales-cta-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#fff', lineHeight: 1.15, marginBottom: 24 }}>
              How much is each<br />customer really<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>worth to you?</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, marginBottom: 32 }}>Most brands underestimate their customer LTV — and that's why they don't invest enough in acquisition or retention. We help you understand the real numbers.</p>
            <Link href="/en/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 32px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Let's talk →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'rgba(255,255,255,.04)' }}>
            {[{ metric: '+45%', label: 'AOV with well-designed bundles' }, { metric: '3.2x', label: 'LTV with retention program' }, { metric: '+28%', label: 'Conversion with optimized funnel' }, { metric: '60%', label: 'Revenue from repeat customers' }].map(item => (
              <div key={item.metric} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '24px 32px', background: 'rgba(255,255,255,.02)' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#7de0f0', lineHeight: 1, minWidth: 80, flexShrink: 0 }}>{item.metric}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,.5)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <style>{`
        @media(max-width:960px){.sales-grid,.sales-cta-grid{grid-template-columns:1fr!important}}
        @media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </main>
  );
}
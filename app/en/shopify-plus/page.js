import Footer from '../../components/FooterEN';

export const metadata = {
  title: 'Shopify Plus — Cachai Solutions',
};

export default function ShopifyPlusENPage() {
  return (
    <main style={{ background: '#fff' }}>
      <section style={{ minHeight: '100vh', background: '#0a1a22', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(125,224,240,.1) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Shopify Plus
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          For the brands<br />that have already <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>grown.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 520, lineHeight: 1.8 }}>
            Shopify Plus is Shopify's enterprise plan. Customizable checkout, advanced automations, multi-market and priority support. For brands processing over $1M a year — or those who simply can't afford limitations.
          </p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[{ n: '$500B+', l: 'Processed on Shopify Plus' }, { n: '10x', l: 'Capacity vs Shopify' }, { n: '99.99%', l: 'Guaranteed uptime' }].map(s => (
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
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            More than a platform.<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>Enterprise infrastructure.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(13,30,42,.06)' }} className="compare-grid">
            <div style={{ background: '#fff', padding: '48px 40px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6b8a96', marginBottom: 28 }}>Shopify Standard</div>
              {[
                { feat: 'Checkout', val: 'Limited' },
                { feat: 'Automations', val: 'Basic' },
                { feat: 'Stores per account', val: '1' },
                { feat: 'Checkout scripts', val: '✗ Not available' },
                { feat: 'API calls/min', val: '2 per second' },
                { feat: 'Support', val: 'Chat and email' },
                { feat: 'Launchpad', val: '✗ Not available' },
                { feat: 'Native B2B', val: '✗ Not available' },
              ].map(r => (
                <div key={r.feat} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(13,30,42,.06)', fontSize: 14 }}>
                  <span style={{ color: '#6b8a96' }}>{r.feat}</span>
                  <span style={{ color: r.val.includes('✗') ? '#ccc' : '#0d2030', fontWeight: r.val.includes('✗') ? 400 : 500 }}>{r.val}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#0a1a22', padding: '48px 40px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28 }}>Shopify Plus</div>
              {[
                { feat: 'Checkout', val: '100% customizable' },
                { feat: 'Automations', val: 'Advanced Shopify Flow' },
                { feat: 'Stores per account', val: 'Up to 9 expansions' },
                { feat: 'Checkout scripts', val: '✓ Checkout Extensions' },
                { feat: 'API calls/min', val: '20 per second' },
                { feat: 'Support', val: 'Merchant Success Manager' },
                { feat: 'Launchpad', val: '✓ Automated campaigns' },
                { feat: 'Native B2B', val: '✓ Wholesale portal' },
              ].map(r => (
                <div key={r.feat} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.06)', fontSize: 14 }}>
                  <span style={{ color: 'rgba(255,255,255,.5)' }}>{r.feat}</span>
                  <span style={{ color: r.val.includes('✓') ? '#7de0f0' : '#fff', fontWeight: 500 }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){.compare-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Is Shopify Plus<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>right for you?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>We analyze your current operation and tell you honestly whether Plus makes sense for you now — or if it's better to grow first.</p>
          <a href="/en/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Let's talk Plus →
          </a>
        </div>
      </section>
      <Footer />
      <style>{`@media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}`}</style>
    </main>
  );
}
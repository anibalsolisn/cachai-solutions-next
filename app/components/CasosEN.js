'use client';

export default function CasosEN() {
  const cases = [
    { num: '01', name: 'StyleHouse', tag: 'Shopify Development', result: '+180%', metric: 'Revenue', desc: 'Migrated from WooCommerce and rebuilt the checkout from scratch.' },
    { num: '02', name: 'TechNova', tag: 'Growth Marketing', result: '3.8x', metric: 'ROAS', desc: 'Built their Meta Ads and email marketing strategy from zero.' },
    { num: '03', name: 'Glow Natural', tag: 'Ecommerce & SEO', result: '+62%', metric: 'Conversion', desc: 'Store optimization and organic search positioning.' },
  ];

  return (
    <section id="work" style={{ background: '#ffffff', padding: '120px 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
          Case studies
        </div>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
          Real results,<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>no excuses.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: 'rgba(13,30,42,.08)' }}>
          {cases.map(c => (
            <div key={c.num} style={{ background: '#fff', padding: '48px 40px', transition: 'background .2s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f7fbfc'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
              <div style={{ fontSize: 11, color: '#6b8a96', letterSpacing: '.1em', marginBottom: 24 }}>{c.num}</div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 28, color: '#0d2030', marginBottom: 8 }}>{c.name}</div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 24 }}>{c.tag}</div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 48, fontWeight: 400, color: '#2a5f72', lineHeight: 1, marginBottom: 4 }}>{c.result}</div>
              <div style={{ fontSize: 12, color: '#6b8a96', marginBottom: 16 }}>{c.metric}</div>
              <div style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.7 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:960px){#work{padding:72px 24px!important}#work>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
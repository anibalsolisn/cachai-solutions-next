'use client';

export default function Casos() {
  const casos = [
    {
      num: '01',
      name: 'StyleHouse',
      tag: 'Shopify Development',
      result: '+180%',
      metric: 'Revenue',
      desc: 'Migramos desde WooCommerce y rediseñamos el checkout completo.',
    },
    {
      num: '02',
      name: 'TechNova',
      tag: 'Growth Marketing',
      result: '3.8x',
      metric: 'ROAS',
      desc: 'Estrategia de Meta Ads y email marketing desde cero.',
    },
    {
      num: '03',
      name: 'Glow Natural',
      tag: 'Ecommerce & SEO',
      result: '+62%',
      metric: 'Conversión',
      desc: 'Optimización de tienda y posicionamiento orgánico.',
    },
  ];

  return (
    <section id="casos" style={{ background: '#ffffff', padding: '120px 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
          Casos de éxito
        </div>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
          Resultados reales,<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>sin excusas</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: 'rgba(13,30,42,.08)' }}>
          {casos.map(c => (
            <div key={c.num}
              style={{ background: '#fff', padding: '48px 40px', cursor: 'default', transition: 'background .2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f7fbfc'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
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
      <style>{`
        @media (max-width: 960px) {
          #casos { padding: 72px 24px !important; }
          #casos > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
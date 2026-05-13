export default function PorQueNosotrosEN() {
  const reasons = [
    { num: '01', title: 'Skin in the game', desc: 'Your success is our success. We don\'t charge for hours — we charge for results.' },
    { num: '02', title: 'No excuses', desc: 'We execute, measure and scale. No pretty reports that say nothing.' },
    { num: '03', title: 'Pure ecommerce', desc: 'We\'re not a full-service agency. We\'re specialists in making stores sell.' },
    { num: '04', title: 'Real speed', desc: 'From diagnosis to results in 90 days. Not in 6 months.' },
  ];

  return (
    <section id="why" style={{ background: '#ffffff', padding: '120px 80px', borderTop: '1px solid rgba(13,30,42,.08)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
          Why Cachai
        </div>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15, maxWidth: 600 }}>
          Not just another agency.<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>Your team.</em>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {reasons.map(r => (
            <div key={r.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 0, padding: '36px 0', borderBottom: '1px solid rgba(13,30,42,.08)' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96' }}>{r.num}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 28, color: '#0d2030', marginBottom: 8 }}>{r.title}</div>
                <div style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.7 }}>{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:960px){#why{padding:72px 24px!important}}`}</style>
    </section>
  );
}
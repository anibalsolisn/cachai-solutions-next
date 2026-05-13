export default function PorQueNosotros() {
  const razones = [
    { num: '01', title: 'Piel en el juego', desc: 'Tu éxito es el nuestro. No cobramos por horas — cobramos por resultados.' },
    { num: '02', title: 'Sin excusas', desc: 'Ejecutamos, medimos y escalamos. Sin reportes bonitos que no dicen nada.' },
    { num: '03', title: 'Ecommerce puro', desc: 'No somos una agencia de todo. Somos especialistas en hacer que las tiendas vendan.' },
    { num: '04', title: 'Velocidad real', desc: 'De diagnóstico a resultados en 90 días. No en 6 meses.' },
  ];

  return (
    <section id="nosotros" style={{ background: '#ffffff', padding: '120px 80px', borderTop: '1px solid rgba(13,30,42,.08)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
          Por qué Cachai
        </div>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15, maxWidth: 600 }}>
          No somos una agencia más.<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>Somos tu equipo.</em>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {razones.map(r => (
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
      <style>{`
        @media (max-width: 960px) {
          #nosotros { padding: 72px 24px !important; }
        }
      `}</style>
    </section>
  );
}
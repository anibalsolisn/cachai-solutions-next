import Footer from '../../components/Footer';

export const metadata = {
  title: 'Ecommerce & Shopify Services — Cachai Solutions',
  description: 'Construimos tiendas que realmente venden.',
};

export default function BuildPage() {
  return (
    <main style={{ background: '#ffffff', paddingTop: 0 }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', background: '#1e4a5a', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(125,224,240,.1) 0%, transparent 70%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Servicios Shopify
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 800, marginBottom: 48, position: 'relative' }}>
          Construimos tiendas que<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>realmente venden</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', maxWidth: 480, lineHeight: 1.8 }}>
            Desarrollo técnico en Shopify con obsesión por la conversión. Cada decisión está tomada para que tu tienda venda más.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Shopify Dev', 'UX/UI Design', 'Shopify Plus', 'Integraciones', 'Performance', 'Migraciones'].map(tag => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.1)', padding: '6px 14px', borderRadius: 100 }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ background: '#ffffff' }}>
        {[
          { num: '01', title: 'Shopify Development', italic: 'Development', tagline: 'No construimos tiendas. Construimos máquinas de revenue.', desc: 'Desarrollo custom en Shopify desde cero — temas a medida, integraciones y arquitectura técnica construida para escalar.', items: ['Desarrollo de temas custom en Liquid', 'Integraciones con apps y APIs de terceros', 'Optimización de velocidad y rendimiento', 'Mobile-first desde el primer día'] },
          { num: '02', title: 'UX/UI Design', italic: 'Design', tagline: 'Tu tienda tiene 3 segundos para convencer.', desc: 'Experiencias de compra que guían al usuario de forma intuitiva desde el primer clic hasta el checkout.', items: ['Investigación y auditoría UX', 'Wireframes y prototipos interactivos', 'Diseño de checkout y flujos de conversión', 'Pruebas A/B de elementos clave'] },
          { num: '03', title: 'Shopify Plus', italic: 'Plus', tagline: 'Para las marcas que ya crecieron y necesitan más.', desc: 'Implementación enterprise con flujos automatizados, checkout personalizado y arquitectura multi-mercado.', items: ['Checkout extensible y personalizado', 'Automatizaciones con Shopify Flow', 'Multi-moneda y multi-idioma', 'Planificación de campañas y lanzamientos'] },
          { num: '04', title: 'Integraciones y Apps', italic: 'Apps', tagline: 'Tu stack funcionando en perfecta armonía.', desc: 'Conectamos tu tienda con Klaviyo, Gorgias, Recharge y cualquier herramienta de tu ecosistema.', items: ['Sistemas de gestión y ERP', 'Email marketing y CRM', 'Pagos, suscripciones y fidelización', 'APIs personalizadas'] },
          { num: '05', title: 'Optimización de Rendimiento', italic: 'Rendimiento', tagline: 'Una tienda lenta pierde ventas. Así de simple.', desc: 'Auditamos y optimizamos la velocidad y el SEO técnico de tu tienda para maximizar la conversión.', items: ['Auditoría técnica completa', 'Optimización de imágenes y recursos', 'Mejoras de velocidad de carga', 'SEO técnico en página'] },
          { num: '06', title: 'Migraciones a Shopify', italic: 'Shopify', tagline: 'Cambiar de plataforma no tiene que ser un caos.', desc: 'Migramos tu tienda desde cualquier plataforma sin perder datos, posicionamiento ni ventas.', href: '/migrations', cta: 'Ver página de Migraciones →', items: ['Migración de productos y clientes', 'Preservación del SEO y URLs', 'Cero downtime garantizado', 'Auditoría post-migración'] },
        ].map((s, idx) => (
          <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', padding: '64px 80px', borderBottom: '1px solid rgba(13,30,42,.08)', background: '#fff' }}
            className="service-row">
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96' }}>{s.num}</div>
            <div style={{ paddingRight: 60 }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 400, color: '#0d2030', lineHeight: 1.1, marginBottom: 16 }}>{s.title}</h3>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 14, fontStyle: 'italic', color: '#2a5f72', marginBottom: 20 }}>"{s.tagline}"</div>
              <p style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.8 }}>{s.desc}</p>
              {s.cta && (
                <a href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24, background: '#0d2030', color: '#fff', padding: '12px 24px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{s.cta}</a>
              )}
            </div>
            <div style={{ paddingLeft: 60, borderLeft: '1px solid rgba(13,30,42,.08)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6b8a96', marginBottom: 20 }}>Incluye</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {s.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#0d2030' }}>
                    <span style={{ display: 'block', width: 20, height: 1, background: '#2a5f72', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            ¿Listo para construir algo<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>que venda de verdad?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>Sin costo ni compromiso. Analizamos tu tienda y te decimos exactamente qué haríamos.</p>
          <a href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Probemos juntos →
          </a>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 960px) {
          .service-row { grid-template-columns: 40px 1fr !important; padding: 48px 24px !important; }
          .service-row > div:last-child { grid-column: 2; padding-left: 0 !important; border-left: none !important; border-top: 1px solid rgba(13,30,42,.08); padding-top: 24px; margin-top: 24px; }
        }
      `}</style>
    </main>
  );
}
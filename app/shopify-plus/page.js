import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Shopify Plus — Cachai Solutions',
  description: 'Implementación enterprise de Shopify Plus para marcas que ya crecieron.',
};

export default function ShopifyPlusPage() {
  return (
    <main style={{ background: '#fff' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', background: '#0a1a22', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(125,224,240,.1) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(125,224,240,.04)', animation: 'pulse 6s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '18%', right: '10%', width: 350, height: 350, borderRadius: '50%', border: '1px solid rgba(125,224,240,.08)', animation: 'pulse 6s ease-in-out infinite 1s' }} />

        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Shopify Plus
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          Para las marcas<br />que ya <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>crecieron.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 520, lineHeight: 1.8 }}>
            Shopify Plus es el plan enterprise de Shopify. Checkout personalizable, automatizaciones avanzadas, multi-mercado y soporte prioritario. Para marcas que procesan más de $1M al año o que simplemente no pueden permitirse limitaciones.
          </p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[{ n: '$500B+', l: 'Procesados en Shopify Plus' }, { n: '10x', l: 'Capacidad vs Shopify' }, { n: '99.99%', l: 'Uptime garantizado' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, color: '#fff', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4, maxWidth: 100 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes pulse { 0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.03);opacity:1} }`}</style>
      </section>

      {/* PLUS VS STANDARD */}
      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            ¿Por qué Plus?
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            Más que una plataforma.<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>Infraestructura enterprise.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(13,30,42,.06)' }} className="compare-grid">
            <div style={{ background: '#fff', padding: '48px 40px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6b8a96', marginBottom: 28 }}>Shopify Standard</div>
              {[
                { feat: 'Checkout', val: 'Limitado' },
                { feat: 'Automatizaciones', val: 'Básicas' },
                { feat: 'Tiendas por cuenta', val: '1' },
                { feat: 'Scripts de checkout', val: '✗ No disponible' },
                { feat: 'API calls/min', val: '2 por segundo' },
                { feat: 'Soporte', val: 'Chat y email' },
                { feat: 'Launchpad', val: '✗ No disponible' },
                { feat: 'B2B nativo', val: '✗ No disponible' },
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
                { feat: 'Checkout', val: '100% personalizable' },
                { feat: 'Automatizaciones', val: 'Shopify Flow avanzado' },
                { feat: 'Tiendas por cuenta', val: 'Hasta 9 expansiones' },
                { feat: 'Scripts de checkout', val: '✓ Checkout Extensions' },
                { feat: 'API calls/min', val: '20 por segundo' },
                { feat: 'Soporte', val: 'Merchant Success Manager' },
                { feat: 'Launchpad', val: '✓ Campañas automatizadas' },
                { feat: 'B2B nativo', val: '✓ Portal mayorista' },
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

      {/* SERVICIOS */}
      <section style={{ background: '#ffffff', padding: '120px 80px', borderTop: '1px solid rgba(13,30,42,.08)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Qué implementamos
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            Todo el poder de Plus,<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>sin la curva de aprendizaje.</em>
          </h2>
          {[
            { num: '01', title: 'Checkout Extensible', badge: 'Plus exclusivo', desc: 'Checkout 100% personalizado con Checkout Extensions y Checkout UI Components. Upsells, campos custom, lógica de negocio y diseño que refleja tu marca.', items: ['Checkout UI customizado', 'Post-purchase upsells', 'Campos y validaciones custom', 'Integraciones en el checkout'] },
            { num: '02', title: 'Shopify Flow', badge: 'Automatización enterprise', desc: 'Automatizamos los procesos que hoy hacen manualmente. Desde la gestión de inventario hasta la segmentación de clientes — todo en piloto automático.', items: ['Flujos de gestión de órdenes', 'Automatización de marketing', 'Gestión de inventario', 'Workflows de B2B'] },
            { num: '03', title: 'Multi-mercado & Multi-moneda', badge: 'Expansión global', desc: 'Una sola tienda, múltiples mercados. Precios locales, idiomas, monedas y métodos de pago adaptados a cada región.', items: ['Shopify Markets configuración', 'Precios y monedas por región', 'Idiomas y contenido localizado', 'Métodos de pago locales'] },
            { num: '04', title: 'B2B & Wholesale', badge: 'Canal mayorista', desc: 'Portal B2B nativo en Plus para gestionar clientes mayoristas con precios personalizados, términos de pago y catálogos específicos.', items: ['Portal de clientes B2B', 'Catálogos y precios custom', 'Net terms y órdenes al por mayor', 'Gestión de representantes'] },
            { num: '05', title: 'Launchpad & Campañas', badge: 'Lanzamientos sin estrés', desc: 'Programa y automatiza lanzamientos de productos, ventas flash y campañas estacionales con Launchpad — sin tocar código el día del lanzamiento.', items: ['Programación de campañas', 'Cambios de precio automáticos', 'Activación de themes', 'Rollback automático'] },
          ].map(s => (
            <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', padding: '56px 0', borderBottom: '1px solid rgba(13,30,42,.08)' }} className="step-row">
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96' }}>{s.num}</div>
              <div style={{ paddingRight: 48 }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: '#0d2030', lineHeight: 1.1, marginBottom: 12 }}>{s.title}</h3>
                <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#2a5f72', background: 'rgba(42,95,114,.08)', padding: '4px 12px', borderRadius: 100 }}>{s.badge}</div>
              </div>
              <div style={{ paddingLeft: 48, borderLeft: '1px solid rgba(13,30,42,.08)' }}>
                <p style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.8, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#0d2030' }}>
                      <span style={{ display: 'block', width: 18, height: 1, background: '#2a5f72', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARCAS */}
      <section style={{ background: '#1e4a5a', padding: '100px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,.35)', marginBottom: 48 }}>Marcas que confían en Shopify Plus</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'center', alignItems: 'center', marginBottom: 64 }}>
            {['Gymshark', 'Allbirds', 'Kylie Cosmetics', 'Victoria\'s Secret', 'Netflix Shop', 'Heinz', 'FTX', 'Staples'].map(brand => (
              <div key={brand} style={{ fontSize: 18, fontFamily: 'var(--font-playfair)', color: 'rgba(255,255,255,.25)', fontWeight: 400 }}>{brand}</div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.3)', fontStyle: 'italic' }}>Y miles de marcas más en más de 175 países</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            ¿Es Shopify Plus<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>lo que necesitas?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>
            Analizamos tu operación actual y te decimos honestamente si Plus vale la pena para ti ahora — o si es mejor esperar y crecer primero.
          </p>
          <Link href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Hablemos de Plus →
          </Link>
        </div>
      </section>

      <Footer />
      <style>{`
        @media(max-width:960px){
          .step-row{grid-template-columns:40px 1fr!important;padding:40px 0!important}
          .step-row>div:last-child{grid-column:2;padding-left:0!important;border-left:none!important;border-top:1px solid rgba(13,30,42,.08);padding-top:20px;margin-top:20px}
        }
        @media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </main>
  );
}
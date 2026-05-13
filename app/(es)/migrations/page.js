import Footer from '../../components/Footer';

export const metadata = {
  title: 'Migraciones a Shopify — Cachai Solutions',
  description: 'Migra tu tienda a Shopify sin perder datos, SEO ni ventas.',
};

export default function MigrationsPage() {
  return (
    <main style={{ background: '#ffffff' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', background: '#1e4a5a', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 80% at 100% 0%, rgba(125,224,240,.12) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(125,224,240,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(125,224,240,.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Migraciones a Shopify
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 800, marginBottom: 48, position: 'relative' }}>
          Tu próxima<br />plataforma.<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>Sin perder nada.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', maxWidth: 480, lineHeight: 1.8 }}>
            Cambiar de plataforma da miedo. Datos perdidos, SEO destruido, downtime que cuesta ventas. Nosotros hemos hecho esto decenas de veces.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['WooCommerce', 'Magento', 'Adobe Commerce', 'PrestaShop', 'BigCommerce', 'Wix', 'Personalizadas'].map(tag => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.1)', padding: '6px 14px', borderRadius: 100 }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ SHOPIFY */}
      <section style={{ background: '#ffffff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Por qué Shopify
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            El mundo ya <em style={{ fontStyle: 'italic', color: '#2a5f72' }}>decidió.</em><br />¿Y tú?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(13,30,42,.08)' }} className="why-grid">
            {[
              { num: '$14.6B', label: 'En ventas en un solo Black Friday', desc: 'Los merchants de Shopify generaron $14.6 billones en el Black Friday 2024 — un aumento del 27% respecto al año anterior.' },
              { num: '36%', label: 'Menor costo de operación', desc: 'Shopify tiene un costo total de propiedad hasta 36% menor que sus competidores — 29% mejor que Adobe Commerce.' },
              { num: '16+', label: 'Lanzamientos enterprise en un trimestre', desc: 'Solo en Q3 2024, marcas como On, Victoria\'s Secret y Off-White migraron a Shopify.' },
            ].map(c => (
              <div key={c.num} style={{ background: '#fff', padding: '48px 40px' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 52, color: '#7de0f0', lineHeight: 1, marginBottom: 16 }}>{c.num}</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: '#0d2030', marginBottom: 10 }}>{c.label}</div>
                <div style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.7 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL MIEDO ES REAL */}
      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="fear-grid">
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'block', width: 28, height: 1, background: '#7de0f0' }} />
              El miedo es real
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#fff', lineHeight: 1.15, marginBottom: 28 }}>
              Sabemos exactamente<br />qué puede salir <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>mal.</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.8 }}>
              Gymshark perdió ventas cuando su Magento colapsó durante un peak de tráfico. Newcastle United necesitaba procesar miles de órdenes en la primera hora. Club Brugge quería convertir el 72% de su tráfico móvil en ventas reales.
              <br /><br />
              <strong style={{ color: 'rgba(255,255,255,.8)', fontWeight: 500 }}>Todos migraron a Shopify. Nosotros sabemos cómo hacerlo sin el caos.</strong>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Pérdida de datos', desc: 'Productos, clientes, historial de pedidos. Lo migramos todo con verificación doble antes del go-live.' },
              { title: 'SEO destruido', desc: 'Redirecciones 301, URLs preservadas, meta tags y autoridad de dominio intactos.' },
              { title: 'Downtime que cuesta ventas', desc: 'La migración ocurre en paralelo. Tu tienda sigue vendiendo hasta el último segundo.' },
              { title: 'Integraciones rotas', desc: 'Reconectamos todas tus apps, ERPs y herramientas. Sin fricción ni datos perdidos.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, padding: '20px 24px', border: '1px solid rgba(255,255,255,.06)', borderRadius: 4, background: 'rgba(255,255,255,.02)' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7de0f0', flexShrink: 0, marginTop: 6 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 PASOS */}
      <section style={{ background: '#ffffff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Nuestro proceso
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 72, lineHeight: 1.15 }}>
            6 pasos para migrar<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>sin sorpresas</em>
          </h2>
          {[
            { num: '01', title: 'Migración de datos', badge: 'Sin perder nada', desc: 'Productos, clientes, pedidos e historial completo. Cada dato verificado antes y después.', items: ['Catálogo completo de productos', 'Base de datos de clientes', 'Historial de órdenes', 'Reviews y contenido generado'] },
            { num: '02', title: 'Preservación de SEO', badge: 'Posicionamiento intacto', desc: 'Tu autoridad de dominio y posicionamiento orgánico son activos reales. Los protegemos.', items: ['Redirecciones 301 completas', 'URLs y estructura preservadas', 'Meta tags y datos estructurados', 'Monitoreo post-migración'] },
            { num: '03', title: 'Diseño y UX', badge: 'Mejor que antes', desc: 'Tu nueva tienda no solo funciona mejor — también se ve mejor.', items: ['Tema custom en Liquid', 'Mobile-first desde el primer día', 'Checkout optimizado', 'Velocidad de carga mejorada'] },
            { num: '04', title: 'Integraciones y apps', badge: 'Ecosistema completo', desc: 'Reconectamos todas tus herramientas al nuevo ecosistema Shopify.', items: ['ERP y sistemas de gestión', 'Email marketing y CRM', 'Pagos y suscripciones', 'Apps custom si es necesario'] },
            { num: '05', title: 'Cero downtime', badge: 'Siempre vendiendo', desc: 'La migración ocurre en paralelo. No pierdes ni un minuto de ventas.', items: ['Desarrollo en entorno paralelo', 'Switch instantáneo de DNS', 'Rollback plan si es necesario', 'Monitoreo en tiempo real'] },
            { num: '06', title: 'QA y lanzamiento', badge: 'Sin sorpresas', desc: 'Revisión exhaustiva de cada página y flujo antes del go-live.', items: ['Testing en múltiples dispositivos', 'Verificación de pagos y checkout', 'Prueba de carga y velocidad', 'Soporte post-lanzamiento'] },
          ].map(s => (
            <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', padding: '56px 0', borderBottom: '1px solid rgba(13,30,42,.08)' }} className="step-row">
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96' }}>{s.num}</div>
              <div style={{ paddingRight: 48 }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 400, color: '#0d2030', lineHeight: 1.1, marginBottom: 12 }}>{s.title}</h3>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#2a5f72', background: 'rgba(42,95,114,.08)', padding: '4px 12px', borderRadius: 100 }}>{s.badge}</div>
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

      {/* CASOS REALES */}
      <section style={{ background: '#1e4a5a', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#7de0f0' }} />
            Casos reales
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 400, color: '#fff', marginBottom: 56, lineHeight: 1.15 }}>
            Las marcas más grandes<br />ya <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>migraron.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(255,255,255,.06)' }} className="brands-grid">
            {[
              { brand: 'Gymshark', from: 'Migró desde Magento', quote: 'Su sitio Magento colapsó durante un evento de ventas masivo. Perdieron revenue en tiempo real. Migraron a Shopify y nunca miraron atrás.', result: '→ Cero caídas desde la migración' },
              { brand: 'Newcastle United FC', from: 'Migró a Shopify Plus · 2024', quote: 'En el fin de semana de apertura del lanzamiento de su nueva camiseta Adidas, el sitio procesó miles de órdenes en la primera hora sin caerse.', result: '→ Miles de órdenes en la primera hora' },
              { brand: 'Club Brugge', from: 'Migró a Shopify Plus', quote: '72% del tráfico venía de móvil. Migraron a Shopify con diseño mobile-first y lograron 77% de tasa de conversión en checkout móvil.', result: '→ 77% conversión móvil en checkout' },
            ].map(b => (
              <div key={b.brand} style={{ background: 'rgba(30,74,90,.8)', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#fff', marginBottom: 6 }}>{b.brand}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 20 }}>{b.from}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20 }}>"{b.quote}"</div>
                <div style={{ fontSize: 11, color: '#7de0f0', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.08)' }}>{b.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            ¿Listo para pasarte<br />a <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>Shopify?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>
            Agendemos una llamada de 30 minutos. Analizamos tu plataforma actual y te decimos exactamente qué necesitas.
          </p>
          <a href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Hablemos de tu migración →
          </a>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 960px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .fear-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .brands-grid { grid-template-columns: 1fr !important; }
          .step-row { grid-template-columns: 40px 1fr !important; padding: 40px 0 !important; }
          .step-row > div:last-child { grid-column: 2; padding-left: 0 !important; border-left: none !important; border-top: 1px solid rgba(13,30,42,.08); padding-top: 20px; margin-top: 20px; }
        }
        @media (max-width: 600px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </main>
  );
}
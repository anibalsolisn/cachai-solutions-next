'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';

const services = [
  {
    id: 'meta',
    icon: '◈',
    title: 'Meta Ads',
    subtitle: 'Facebook & Instagram',
    desc: 'Campañas que convierten en frío y en retargeting. Creatividades que paran el scroll y estructuras de campaña optimizadas para ROAS máximo.',
    items: ['Estrategia de campaña full-funnel', 'Creatividades y copy', 'Audiencias y segmentación', 'Optimización continua de ROAS'],
    stat: '4.2x', statLabel: 'ROAS promedio',
    color: '#1877f2',
  },
  {
    id: 'google',
    icon: '◉',
    title: 'Google Ads',
    subtitle: 'Search, Shopping & Display',
    desc: 'Capturamos la intención de compra. Search, Shopping y Performance Max optimizados para que cada peso invertido traiga de vuelta varios más.',
    items: ['Google Shopping y PMax', 'Search con intención de compra', 'Remarketing dinámico', 'Optimización de Quality Score'],
    stat: '+68%', statLabel: 'Reducción en CPA',
    color: '#4285f4',
  },
  {
    id: 'tiktok',
    icon: '◐',
    title: 'TikTok Ads',
    subtitle: 'La plataforma que más crece',
    desc: 'El canal con el CAC más bajo del mercado si se hace bien. Creatividades nativas que no parecen anuncios y que generan ventas reales.',
    items: ['Estrategia de contenido nativo', 'Spark Ads y TopView', 'Audiencias lookalike', 'Testing de creatividades'],
    stat: '2.8x', statLabel: 'Más barato que Meta',
    color: '#ff0050',
  },
  {
    id: 'retargeting',
    icon: '◎',
    title: 'Retargeting',
    subtitle: 'Recupera los que casi compraron',
    desc: 'El 97% de los visitantes no compran en su primera visita. Con retargeting bien hecho los traemos de vuelta y los convertimos.',
    items: ['Secuencias de retargeting', 'Dynamic Product Ads', 'Abandono de carrito', 'Cross-sell y upsell'],
    stat: '+43%', statLabel: 'Recuperación de carritos',
    color: '#7de0f0',
  },
  {
    id: 'estrategia',
    icon: '◆',
    title: 'Estrategia de Adquisición',
    subtitle: 'El plan detrás de todo',
    desc: 'Sin estrategia, los anuncios queman plata. Diseñamos el funnel completo — desde el primer touch hasta la compra — con objetivos y métricas claras.',
    items: ['Auditoría de canales actuales', 'Definición de KPIs y objetivos', 'Plan de medios mensual', 'Reporting y optimización'],
    stat: '90 días', statLabel: 'Para ver resultados reales',
    color: '#2a5f72',
  },
];

const results = [
  { metric: '4.2x', label: 'ROAS promedio', desc: 'En campañas de Meta Ads para ecommerce de moda' },
  { metric: '+68%', label: 'Reducción de CPA', desc: 'En Google Shopping tras auditoría y reestructuración' },
  { metric: '3.1x', label: 'Revenue en 90 días', desc: 'Para tienda de suplementos con presupuesto de $5K/mes' },
  { metric: '+43%', label: 'Recuperación carrito', desc: 'Con secuencia de retargeting multi-canal' },
];

export default function GrowthPage() {
  const [active, setActive] = useState('meta');
  const activeService = services.find(s => s.id === active);

  return (
    <main style={{ background: '#ffffff' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', background: '#0a1a22', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(125,224,240,.07) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(125,224,240,.06)', animation: 'pulse 4s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '25%', right: '12%', width: 250, height: 250, borderRadius: '50%', border: '1px solid rgba(125,224,240,.1)', animation: 'pulse 4s ease-in-out infinite .5s' }} />

        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Growth Marketing
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          Más ventas.<br />Mejor <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>ROAS.</em><br />Sin magia.
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, lineHeight: 1.8 }}>
            Meta Ads, Google Ads, TikTok y retargeting. Con estrategia, datos y creatividades que convierten — no con promesas vacías.
          </p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[{ n: '4.2x', l: 'ROAS' }, { n: '+68%', l: 'Menos CPA' }, { n: '90d', l: 'Resultados' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#fff', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes pulse { 0%, 100% { transform: scale(1); opacity: .5; } 50% { transform: scale(1.05); opacity: 1; } }
        `}</style>
      </section>

      {/* SERVICIOS INTERACTIVOS */}
      <section style={{ background: '#ffffff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Lo que hacemos
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            Cada canal,<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>dominado.</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(13,30,42,.06)' }} className="services-grid">
            {/* Tabs izquierda */}
            <div style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
              {services.map(s => (
                <div key={s.id} onClick={() => setActive(s.id)}
                  style={{
                    padding: '28px 40px', cursor: 'pointer',
                    borderBottom: '1px solid rgba(13,30,42,.06)',
                    background: active === s.id ? '#f0f8fc' : '#fff',
                    borderLeft: active === s.id ? `3px solid ${s.color}` : '3px solid transparent',
                    transition: 'all .2s',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 20, color: active === s.id ? s.color : '#6b8a96' }}>{s.icon}</span>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 500, color: active === s.id ? '#0d2030' : '#6b8a96' }}>{s.title}</div>
                      <div style={{ fontSize: 12, color: '#6b8a96', marginTop: 2 }}>{s.subtitle}</div>
                    </div>
                    {active === s.id && (
                      <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-playfair)', fontSize: 24, color: s.color, fontWeight: 400 }}>{s.stat}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contenido derecha */}
            <div style={{ background: '#fff', padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: activeService.color, marginBottom: 12 }}>{activeService.subtitle}</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, fontWeight: 400, color: '#0d2030', marginBottom: 20, lineHeight: 1.1 }}>{activeService.title}</h3>
              <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>{activeService.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
                {activeService.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#0d2030' }}>
                    <span style={{ width: 20, height: 1, background: activeService.color, flexShrink: 0, display: 'block' }} />
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(13,30,42,.08)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 48, color: activeService.color, lineHeight: 1 }}>{activeService.stat}</div>
                  <div style={{ fontSize: 12, color: '#6b8a96', marginTop: 4 }}>{activeService.statLabel}</div>
                </div>
                <Link href="/#contacto" style={{ marginLeft: 'auto', background: '#0d2030', color: '#fff', padding: '12px 24px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                  Empezar →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 960px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* RESULTADOS */}
      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#7de0f0' }} />
            Resultados reales
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#fff', marginBottom: 64, lineHeight: 1.15 }}>
            Números que<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>hablan solos.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'rgba(255,255,255,.06)' }} className="results-grid">
            {results.map(r => (
              <div key={r.metric} style={{ background: '#0a1a22', padding: '40px 32px', borderBottom: '2px solid rgba(125,224,240,.15)' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 52, fontWeight: 400, color: '#7de0f0', lineHeight: 1, marginBottom: 8 }}>{r.metric}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 960px) {
            .results-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .results-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* PROCESO */}
      <section style={{ background: '#ffffff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Cómo trabajamos
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            De cero a escala<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>en 90 días.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="proceso-grid">
            {[
              { num: '01', title: 'Diagnóstico', desc: 'Auditamos tus canales actuales y definimos la estrategia de adquisición.' },
              { num: '02', title: 'Lanzamiento', desc: 'Activamos las primeras campañas con creatividades testeadas y estructura óptima.' },
              { num: '03', title: 'Optimización', desc: 'Datos diarios, ajustes continuos y escalado de lo que funciona.' },
              { num: '04', title: 'Escala', desc: 'Con el sistema probado, escalamos el presupuesto con ROAS predecible.' },
            ].map((step, i) => (
              <div key={step.num} style={{ padding: '40px 32px', borderRight: i < 3 ? '1px solid rgba(13,30,42,.08)' : 'none' }} className="proceso-step">
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96', marginBottom: 20 }}>{step.num}</div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 24, color: '#0d2030', marginBottom: 12 }}>{step.title}</div>
                <div style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.7 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 960px) {
            .proceso-grid { grid-template-columns: 1fr 1fr !important; }
            .proceso-step { border-right: none !important; border-bottom: 1px solid rgba(13,30,42,.08) !important; }
          }
          @media (max-width: 600px) {
            .proceso-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: '#1e4a5a', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            ¿Listo para escalar<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>tu revenue?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>
            Auditamos tus campañas actuales gratis. Te decimos exactamente qué está fallando y cómo lo arreglaríamos.
          </p>
          <Link href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Auditoría gratuita →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
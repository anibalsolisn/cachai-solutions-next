'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

const areas = [
  { id: 'ux', title: 'UX & Diseño', desc: 'Identificamos los puntos de fricción en tu tienda que están costando ventas. Cada elemento tiene un propósito: convertir.', items: ['Heatmaps y session recordings', 'Análisis de flujo de checkout', 'Jerarquía visual y CTAs', 'Mobile UX optimization'], stat: '+38%', statLabel: 'Conversión mobile' },
  { id: 'checkout', title: 'Checkout Optimization', desc: 'El checkout es donde se gana o se pierde. Reducimos el abandono con un proceso de pago sin fricción.', items: ['One-page checkout', 'Métodos de pago optimizados', 'Trust signals y garantías', 'Recuperación de abandono'], stat: '+52%', statLabel: 'Menos abandono de checkout' },
  { id: 'copy', title: 'Copy & Persuasión', desc: 'Las palabras correctas en el momento correcto. Copy basado en psicología del consumidor y datos de comportamiento.', items: ['Headlines que convierten', 'Product descriptions optimizadas', 'Social proof estratégico', 'Urgency y scarcity'], stat: '+29%', statLabel: 'CTR en product pages' },
  { id: 'testing', title: 'A/B Testing', desc: 'Sin testing, todo es opinión. Diseñamos y ejecutamos experimentos que generan insights reales y mejoras medibles.', items: ['Priorización de hipótesis', 'Setup técnico de tests', 'Análisis estadístico', 'Implementación de ganadores'], stat: '12', statLabel: 'Tests simultáneos max' },
];

export default function CroPage() {
  const [active, setActive] = useState('ux');
  const activeArea = areas.find(a => a.id === active);

  return (
    <main style={{ background: '#fff' }}>
      <section style={{ minHeight: '100vh', background: '#0d2030', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 100% 100%, rgba(125,224,240,.06) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Conversion Rate Optimization
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          Más ventas.<br />Mismo <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>tráfico.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, lineHeight: 1.8 }}>
            El tráfico ya lo tienes. CRO es convertir más de los visitantes que ya llegan — sin gastar más en ads.
          </p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[{ n: '+38%', l: 'Conversión' }, { n: '-52%', l: 'Abandono checkout' }, { n: '90d', l: 'Para ver resultados' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#fff', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Áreas de optimización
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            Cada punto de<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>fricción eliminado.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(13,30,42,.06)' }} className="cro-grid">
            <div style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
              {areas.map(a => (
                <div key={a.id} onClick={() => setActive(a.id)} style={{
                  padding: '24px 32px', cursor: 'pointer',
                  borderBottom: '1px solid rgba(13,30,42,.06)',
                  background: active === a.id ? '#f0f8fc' : '#fff',
                  borderLeft: active === a.id ? '3px solid #2a5f72' : '3px solid transparent',
                  transition: 'all .2s',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: active === a.id ? '#0d2030' : '#6b8a96' }}>{a.title}</div>
                  {active === a.id && <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#2a5f72' }}>{a.stat}</div>}
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, fontWeight: 400, color: '#0d2030', marginBottom: 16 }}>{activeArea.title}</h3>
              <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>{activeArea.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {activeArea.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#0d2030' }}>
                    <span style={{ display: 'block', width: 16, height: 1, background: '#2a5f72', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ paddingTop: 32, borderTop: '1px solid rgba(13,30,42,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 48, color: '#2a5f72', lineHeight: 1 }}>{activeArea.stat}</div>
                  <div style={{ fontSize: 12, color: '#6b8a96', marginTop: 4 }}>{activeArea.statLabel}</div>
                </div>
                <Link href="/#contacto" style={{ background: '#0d2030', color: '#fff', padding: '12px 24px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Empezar →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#1e4a5a', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            ¿Dónde estás<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>perdiendo ventas?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>Hacemos una auditoría CRO gratuita de tu tienda. Te decimos exactamente dónde están los problemas.</p>
          <Link href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Auditoría gratuita →
          </Link>
        </div>
      </section>
      <Footer />
      <style>{`
        @media(max-width:960px){.cro-grid{grid-template-columns:1fr!important}}
        @media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </main>
  );
}
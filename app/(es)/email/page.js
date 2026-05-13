'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';

const flows = [
  { id: 'welcome', title: 'Welcome Series', desc: 'Primera impresión que convierte. Secuencia de bienvenida que presenta tu marca y genera la primera compra.', stat: '+35%', statLabel: 'Conversión primera compra' },
  { id: 'abandon', title: 'Abandono de Carrito', desc: 'Recupera el revenue que ya estaba en tu bolsillo. Secuencia de 3 emails que trae de vuelta a los que casi compraron.', stat: '+43%', statLabel: 'Recuperación de carritos' },
  { id: 'winback', title: 'Win-back', desc: 'Reactiva clientes que no compran hace tiempo. Oferta irresistible en el momento correcto.', stat: '28%', statLabel: 'Tasa de reactivación' },
  { id: 'postpurchase', title: 'Post-Compra', desc: 'La venta no termina cuando pagan. Secuencia que genera reseñas, upsells y clientes recurrentes.', stat: '3.2x', statLabel: 'LTV vs sin secuencia' },
  { id: 'campaigns', title: 'Campañas & Newsletters', desc: 'Comunicación regular que mantiene tu marca top-of-mind. Calendarios editoriales y campañas estacionales.', stat: '42%', statLabel: 'Open rate promedio' },
];

export default function EmailPage() {
  const [active, setActive] = useState('welcome');
  const activeFlow = flows.find(f => f.id === active);

  return (
    <main style={{ background: '#fff' }}>
      <section style={{ minHeight: '100vh', background: '#0a1a22', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(125,224,240,.06) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Email Marketing
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          El canal con<br />mejor <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>ROI</em><br />del mercado.
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, lineHeight: 1.8 }}>
            Por cada $1 invertido en email marketing, las marcas retornan $42. Flows automáticos, campañas y segmentación que generan revenue mientras duermes.
          </p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[{ n: '$42', l: 'ROI por $1' }, { n: '42%', l: 'Open rate' }, { n: '+43%', l: 'Carritos' }].map(s => (
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
            Flows y campañas
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            Revenue automático<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>mientras duermes.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(13,30,42,.06)' }} className="flows-grid">
            <div style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
              {flows.map(f => (
                <div key={f.id} onClick={() => setActive(f.id)} style={{
                  padding: '24px 32px', cursor: 'pointer',
                  borderBottom: '1px solid rgba(13,30,42,.06)',
                  background: active === f.id ? '#f0f8fc' : '#fff',
                  borderLeft: active === f.id ? '3px solid #2a5f72' : '3px solid transparent',
                  transition: 'all .2s',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: active === f.id ? '#0d2030' : '#6b8a96' }}>{f.title}</div>
                  {active === f.id && <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#2a5f72' }}>{f.stat}</div>}
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, fontWeight: 400, color: '#0d2030', marginBottom: 16, lineHeight: 1.1 }}>{activeFlow.title}</h3>
              <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>{activeFlow.desc}</p>
              <div style={{ paddingTop: 32, borderTop: '1px solid rgba(13,30,42,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 48, color: '#2a5f72', lineHeight: 1 }}>{activeFlow.stat}</div>
                  <div style={{ fontSize: 12, color: '#6b8a96', marginTop: 4 }}>{activeFlow.statLabel}</div>
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
            ¿Cuánto revenue<br />estás <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>dejando ir?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>Auditamos tu setup actual gratis y te decimos exactamente qué flows te faltan.</p>
          <Link href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Auditoría gratuita →
          </Link>
        </div>
      </section>
      <Footer />
      <style>{`@media(max-width:960px){.flows-grid{grid-template-columns:1fr!important}}`}</style>
    </main>
  );
}
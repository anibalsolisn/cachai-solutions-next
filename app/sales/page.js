import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Sales Strategy — Cachai Solutions',
};

export default function SalesPage() {
  return (
    <main style={{ background: '#fff' }}>
      <section style={{ minHeight: '100vh', background: '#1e4a5a', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 0% 60%, rgba(125,224,240,.08) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Sales Strategy
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          Una estrategia<br />de ventas que<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>escala.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: 40, position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', maxWidth: 520, lineHeight: 1.8 }}>
            El tráfico sin estrategia de ventas es ruido. Diseñamos el sistema completo — desde la captación hasta el upsell — para maximizar el revenue por cliente.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Qué construimos
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            Del primer clic<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>al cliente recurrente.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(13,30,42,.06)' }} className="sales-grid">
            {[
              { num: '01', title: 'Funnel de Ventas', desc: 'Diseñamos el recorrido completo del cliente desde el primer contacto hasta la conversión y más allá.', items: ['Mapeo del customer journey', 'Optimización de touchpoints', 'Reducción de fricción', 'Upsell y cross-sell'] },
              { num: '02', title: 'Pricing & Ofertas', desc: 'Estrategia de precios y estructura de ofertas que maximiza el AOV sin sacrificar conversión.', items: ['Análisis de elasticidad de precio', 'Bundles y kits estratégicos', 'Promociones y urgencia', 'Programa de lealtad'] },
              { num: '03', title: 'Retención & LTV', desc: 'El mejor cliente es el que ya tienes. Estrategias para aumentar la frecuencia de compra y el valor de vida.', items: ['Segmentación por valor', 'Programas de suscripción', 'Reactivación de inactivos', 'NPS y feedback loops'] },
            ].map(s => (
              <div key={s.num} style={{ background: '#fff', padding: '40px 36px' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96', marginBottom: 20 }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#0d2030', marginBottom: 12 }}>{s.title}</div>
                <p style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#0d2030' }}>
                      <span style={{ display: 'block', width: 16, height: 1, background: '#2a5f72', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="sales-cta-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#fff', lineHeight: 1.15, marginBottom: 24 }}>
              ¿Cuánto vale<br />cada cliente<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>para ti realmente?</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, marginBottom: 32 }}>
              La mayoría de las marcas subestima el LTV de sus clientes — y por eso no invierte lo suficiente en captación ni en retención. Te ayudamos a entender los números reales.
            </p>
            <Link href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 32px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              Hablemos →
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'rgba(255,255,255,.04)' }}>
            {[
              { metric: '+45%', label: 'AOV con bundles bien diseñados' },
              { metric: '3.2x', label: 'LTV con programa de retención' },
              { metric: '+28%', label: 'Conversión con funnel optimizado' },
              { metric: '60%', label: 'Revenue de clientes recurrentes' },
            ].map(item => (
              <div key={item.metric} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '24px 32px', background: 'rgba(255,255,255,.02)' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#7de0f0', lineHeight: 1, minWidth: 80, flexShrink: 0 }}>{item.metric}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,.5)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <style>{`
        @media(max-width:960px){.sales-grid,.sales-cta-gr
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';

const tabs = [
  { id: 'seo', label: 'SEO' },
  { id: 'geo', label: 'GEO' },
];

export default function SeoGeoPage() {
  const [active, setActive] = useState('seo');

  return (
    <main style={{ background: '#fff' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', background: '#0a1a22', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 100% 20%, rgba(125,224,240,.07) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', top: '15%', right: '8%', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(125,224,240,.04)', animation: 'pulse 5s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '20%', right: '11%', width: 300, height: 300, borderRadius: '50%', border: '1px solid rgba(125,224,240,.08)', animation: 'pulse 5s ease-in-out infinite .8s' }} />

        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          SEO & GEO
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 900, marginBottom: 48, position: 'relative' }}>
          Aparece en Google.<br />Aparece en <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>ChatGPT.</em><br />Aparece en todos.
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 520, lineHeight: 1.8 }}>
            SEO para dominar Google. GEO para existir en la nueva era de búsqueda con IA. Porque el 50% de las búsquedas serán generativas en 2028 — y la mayoría de tus competidores aún no lo saben.
          </p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { n: '900M', l: 'Usuarios ChatGPT/semana' },
              { n: '+520%', l: 'Tráfico IA a retail' },
              { n: '47%', l: 'Marcas sin estrategia GEO' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, color: '#fff', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4, maxWidth: 100 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes pulse { 0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.04);opacity:1} }`}</style>
      </section>

      {/* LA GRAN PREGUNTA */}
      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            El cambio que está pasando ahora
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 48, lineHeight: 1.15, maxWidth: 700 }}>
            La gente ya no solo<br />busca en Google.<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>Le pregunta a la IA.</em>
          </h2>

          {/* Tabs SEO vs GEO */}
          <div style={{ display: 'flex', gap: 0, marginBottom: 48, borderBottom: '1px solid rgba(13,30,42,.1)' }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)} style={{
                padding: '16px 40px', background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-onest)',
                color: active === t.id ? '#0d2030' : '#6b8a96',
                borderBottom: active === t.id ? '2px solid #2a5f72' : '2px solid transparent',
                marginBottom: -1, transition: 'all .2s',
              }}>{t.label}</button>
            ))}
          </div>

          {active === 'seo' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="tab-grid">
              <div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, fontWeight: 400, color: '#0d2030', marginBottom: 20 }}>SEO — El rey que sigue reinando</h3>
                <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>
                  Google sigue enviando 345 veces más tráfico que ChatGPT, Gemini y Perplexity combinados. El SEO no murió — se transformó. Y las marcas que lo dominan tienen una ventaja enorme.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[
                    { title: 'SEO Técnico', desc: 'Core Web Vitals, velocidad, estructura y crawlability. Los cimientos que todo lo demás necesita.' },
                    { title: 'Contenido & Keywords', desc: 'Páginas de categoría, fichas de producto y contenido editorial optimizados para intención de compra.' },
                    { title: 'Link Building', desc: 'Autoridad de dominio construida con menciones de calidad en medios y sitios de autoridad.' },
                    { title: 'SEO Local & Internacional', desc: 'Presencia en múltiples mercados con estrategia localizada por país e idioma.' },
                  ].map((item, i) => (
                    <div key={item.title} style={{ padding: '20px 0', borderBottom: '1px solid rgba(13,30,42,.08)' }}>
                      <div style={{ fontSize: 15, fontWeight: 500, color: '#0d2030', marginBottom: 6 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: '#6b8a96', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#f7fbfc', padding: '40px', borderRadius: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 24 }}>Por qué el SEO sigue siendo crítico</div>
                {[
                  { stat: '345x', desc: 'Más tráfico desde Google que desde todas las IAs combinadas (2025)' },
                  { stat: '99%', desc: 'De los AI Overviews citan el top 10 orgánico de Google — sin SEO, no hay GEO' },
                  { stat: '76%', desc: 'De las citas en AI Overviews también rankean en el top 10 de Google' },
                ].map(item => (
                  <div key={item.stat} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(13,30,42,.06)' }}>
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#2a5f72', lineHeight: 1, flexShrink: 0, minWidth: 80 }}>{item.stat}</div>
                    <div style={{ fontSize: 13, color: '#6b8a96', lineHeight: 1.6, paddingTop: 4 }}>{item.desc}</div>
                  </div>
                ))}
                <div style={{ fontSize: 12, color: 'rgba(13,30,42,.3)', fontStyle: 'italic' }}>Fuente: Dataslayer, Incremys — 2025/2026</div>
              </div>
            </div>
          )}

          {active === 'geo' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="tab-grid">
              <div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 32, fontWeight: 400, color: '#0d2030', marginBottom: 20 }}>GEO — La nueva frontera</h3>
                <p style={{ fontSize: 15, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>
                  Generative Engine Optimization es la práctica de optimizar tu contenido para aparecer en las respuestas de ChatGPT, Perplexity, Gemini y Google AI Overviews. El 47% de las marcas no tienen estrategia GEO todavía. La ventaja de ser primero es real — y se está cerrando.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[
                    { title: 'Optimización para ChatGPT & Perplexity', desc: 'Estructuramos tu contenido para ser citado en respuestas de los principales motores de IA.' },
                    { title: 'Google AI Overviews', desc: 'Aparece en los resúmenes que Google genera antes de los resultados — donde el 60% de los usuarios se queda.' },
                    { title: 'E-E-A-T & Autoridad de marca', desc: 'Las IAs citan fuentes confiables. Construimos tu autoridad para que seas esa fuente.' },
                    { title: 'Schema Markup Avanzado', desc: 'Datos estructurados que los modelos de IA interpretan y citan con 30-40% más frecuencia.' },
                  ].map(item => (
                    <div key={item.title} style={{ padding: '20px 0', borderBottom: '1px solid rgba(13,30,42,.08)' }}>
                      <div style={{ fontSize: 15, fontWeight: 500, color: '#0d2030', marginBottom: 6 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: '#6b8a96', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#0a1a22', padding: '40px', borderRadius: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 24 }}>Los números que cambian todo</div>
                {[
                  { stat: '900M', desc: 'Usuarios semanales de ChatGPT en 2025 — duplicó en 8 meses' },
                  { stat: '+520%', desc: 'Crecimiento del tráfico desde IA hacia retail entre 2024 y 2025' },
                  { stat: '4.4x', desc: 'Más cualificados son los visitantes que llegan desde IA vs búsqueda tradicional' },
                  { stat: '25%', desc: 'De las búsquedas tradicionales desaparecerán para fin de 2026 (Gartner)' },
                ].map(item => (
                  <div key={item.stat} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, color: '#7de0f0', lineHeight: 1, flexShrink: 0, minWidth: 80 }}>{item.stat}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.6, paddingTop: 4 }}>{item.desc}</div>
                  </div>
                ))}
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.2)', fontStyle: 'italic' }}>Fuente: Incremys, IMD, Adobe — 2025/2026</div>
              </div>
            </div>
          )}
        </div>
        <style>{`@media(max-width:960px){.tab-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* EL NUEVO VIAJE DEL COMPRADOR */}
      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#7de0f0' }} />
            Cómo busca la gente hoy
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#fff', marginBottom: 64, lineHeight: 1.15 }}>
            Antes buscaban en Google.<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>Ahora le preguntan a la IA.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(255,255,255,.04)' }} className="journey-grid">
            <div style={{ background: 'rgba(255,255,255,.02)', padding: '48px 40px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 24 }}>Antes — SEO tradicional</div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#fff', marginBottom: 24, lineHeight: 1.2 }}>"ropa deportiva online mujer"</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Escribe keywords cortas en Google', 'Ve una lista de 10 links', 'Abre 5 tabs diferentes', 'Compara manualmente', 'Decide después de mucho tiempo'].map((step, i) => (
                  <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'rgba(255,255,255,.45)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', border: '1px solid rgba(255,255,255,.15)', fontSize: 11, flexShrink: 0, color: 'rgba(255,255,255,.3)' }}>{i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(125,224,240,.04)', padding: '48px 40px', borderLeft: '1px solid rgba(125,224,240,.1)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 24 }}>Ahora — GEO + SEO</div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#fff', marginBottom: 24, lineHeight: 1.2 }}>"Quiero comprar ropa deportiva de calidad para entrenar en casa, tengo $100 de presupuesto"</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['La IA entiende el contexto completo', 'Genera una respuesta personalizada', 'Cita 2-3 marcas específicas', 'El usuario confía en la recomendación', 'Compra directo — alta conversión'].map((step, i) => (
                  <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: 'rgba(125,224,240,.15)', fontSize: 11, flexShrink: 0, color: '#7de0f0' }}>{i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 48, padding: '32px 40px', background: 'rgba(125,224,240,.06)', borderLeft: '3px solid #7de0f0', borderRadius: 2 }}>
            <div style={{ fontSize: 16, color: '#fff', lineHeight: 1.7 }}>
              <strong style={{ color: '#7de0f0' }}>El punto clave:</strong> Los visitantes que llegan desde IA tienen 4.4x más intención de compra que los de búsqueda tradicional. Son menos, pero convierten mucho mejor.
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){.journey-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* NUESTRO PROCESO */}
      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Lo que hacemos
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            SEO y GEO<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>trabajando juntos.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(13,30,42,.06)' }} className="services-grid">
            {[
              {
                tag: 'Fundación', title: 'SEO Técnico', items: [
                  'Auditoría técnica completa',
                  'Core Web Vitals y velocidad',
                  'Arquitectura de URLs y sitemaps',
                  'Schema markup para ecommerce',
                  'Indexación y crawlability',
                  'Mobile-first optimization',
                ]
              },
              {
                tag: 'Visibilidad', title: 'Contenido & Autoridad', items: [
                  'Keywords con intención de compra',
                  'Páginas de categoría optimizadas',
                  'Fichas de producto para SEO',
                  'Blog y contenido editorial',
                  'Link building estratégico',
                  'Estructura E-E-A-T',
                ]
              },
              {
                tag: 'Futuro', title: 'GEO — IA Generativa', items: [
                  'Optimización para ChatGPT',
                  'Google AI Overviews',
                  'Presencia en Perplexity',
                  'FAQ schema y structured data',
                  'Monitoreo de citas en IA',
                  'Estrategia de autoridad para LLMs',
                ]
              },
            ].map(s => (
              <div key={s.title} style={{ background: '#fff', padding: '40px 36px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 12 }}>{s.tag}</div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 24, color: '#0d2030', marginBottom: 24 }}>{s.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#6b8a96' }}>
                      <span style={{ display: 'block', width: 16, height: 1, background: '#2a5f72', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:960px){.services-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ESTADÍSTICAS */}
      <section style={{ background: '#1e4a5a', padding: '100px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 400, color: '#fff', marginBottom: 56, lineHeight: 1.15, textAlign: 'center' }}>
            Los números que definen<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>el presente del search.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'rgba(255,255,255,.06)' }} className="stats-grid">
            {[
              { stat: '60%', desc: 'De las búsquedas en Google terminan sin ningún click — el usuario obtiene la respuesta directo de la IA', source: 'Incremys 2026' },
              { stat: '900M', desc: 'Usuarios semanales de ChatGPT — el doble que hace 8 meses. La adopción de IA se duplica cada año', source: 'OpenAI 2025' },
              { stat: '+600%', desc: 'Crecimiento del tráfico referido desde IA hacia sitios web en 2025 vs 2024', source: 'HubSpot 2026' },
              { stat: '47%', desc: 'De las marcas no tienen estrategia GEO todavía. La oportunidad de ser primero está abierta ahora', source: 'Digital Agency Network 2026' },
            ].map(item => (
              <div key={item.stat} style={{ background: 'rgba(30,74,90,.8)', padding: '36px 28px' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 48, color: '#7de0f0', lineHeight: 1, marginBottom: 12 }}>{item.stat}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.25)', letterSpacing: '.08em' }}>{item.source}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:960px){.stats-grid{grid-template-columns:1fr 1fr!important}}
          @media(max-width:600px){.stats-grid{grid-template-columns:1fr!important}}
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            ¿Tu marca aparece<br />cuando alguien le pregunta<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>a ChatGPT sobre tu categoría?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>
            Hacemos una auditoría SEO + GEO gratuita. Te mostramos tu visibilidad actual en Google y en los principales motores de IA — y el plan para dominar ambos.
          </p>
          <Link href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Auditoría gratuita →
          </Link>
        </div>
      </section>

      <Footer />
      <style>{`
        @media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </main>
  );
}
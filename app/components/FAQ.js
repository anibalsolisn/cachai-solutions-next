'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuánto cuesta trabajar con Cachai?', a: 'Depende del proyecto y los objetivos. Agendamos una llamada de 30 minutos, analizamos tu situación y te damos una propuesta concreta. Sin costo ni compromiso.' },
  { q: '¿En cuánto tiempo veo resultados?', a: 'Para proyectos de desarrollo, la tienda está lista en 4-8 semanas. Para growth marketing, los primeros datos llegan en 30 días y resultados consolidados en 90.' },
  { q: '¿Trabajan solo con Shopify?', a: 'Para ecommerce nos especializamos en Shopify porque es la mejor plataforma del mercado. Para marketing y growth trabajamos con cualquier plataforma.' },
  { q: '¿En qué países operan?', a: 'Trabajamos con marcas en Canadá, USA, Latinoamérica y España. Operamos en inglés y español.' },
  { q: '¿Qué diferencia a Cachai de otras agencias?', a: 'Tenemos la piel en el juego. Tu éxito es el nuestro — no cobramos por horas de reuniones ni reportes bonitos. Ejecutamos, medimos y no paramos hasta que los números hablen.' },
  { q: '¿Cómo empezamos?', a: 'Agendamos una llamada de diagnóstico gratuita. En 30 minutos te decimos exactamente qué haríamos con tu marca y qué resultados puedes esperar.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ background: '#ffffff', padding: '120px 80px', borderTop: '1px solid rgba(13,30,42,.08)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
          FAQ
        </div>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
          Preguntas<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>frecuentes</em>
        </h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(13,30,42,.08)' }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
              <span style={{ fontSize: 16, fontWeight: 400, color: '#0d2030', fontFamily: 'var(--font-onest)' }}>{f.q}</span>
              <span style={{ fontSize: 20, color: '#2a5f72', transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .3s' }}>+</span>
            </button>
            <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height .4s ease' }}>
              <p style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.8, paddingBottom: 24 }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          #faq { padding: 72px 24px !important; }
        }
      `}</style>
    </section>
  );
}
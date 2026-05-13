export default function AboutStrip() {
  return (
    <section id="nosotros" style={{
      background: '#ffffff',
      padding: '120px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center',
    }}>
      {/* Título izquierda */}
      <div>
        <h2 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(28px, 3vw, 48px)',
          fontWeight: 400,
          lineHeight: 1.1,
          color: '#0d2030',
        }}>
          Somos el equipo ecommerce que tú y tu marca necesitan
        </h2>
      </div>

      {/* Texto derecha */}
      <div>
        <p style={{ fontSize: 16, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>
          Hartazgo. Esa es la palabra. Hartazgo de ver marcas con potencial gastando fortunas 
          en agencias que solo saben hablar bonito. Cachai existe para cambiar eso — somos el 
          equipo que tiene la piel en el juego y no para hasta que los números hablen.
        </p>
        <a href="/#contacto" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: '#0d2030', color: '#fff',
          padding: '14px 28px', borderRadius: 4,
          fontSize: 13, fontWeight: 600, textDecoration: 'none',
        }}>
          Probemos juntos →
        </a>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 960px) {
          #nosotros {
            grid-template-columns: 1fr !important;
            padding: 72px 24px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
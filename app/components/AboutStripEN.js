export default function AboutStripEN() {
  return (
    <section id="about" style={{ background: '#ffffff', padding: '120px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
      <div>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 400, lineHeight: 1.1, color: '#0d2030' }}>
          The ecommerce team your brand actually needs
        </h2>
      </div>
      <div>
        <p style={{ fontSize: 16, color: '#6b8a96', lineHeight: 1.8, marginBottom: 32 }}>
          Frustration. That's the word. Frustration watching brands with real potential burn their budgets on agencies that talk a lot and deliver little. Cachai exists to change that — we're the team that has skin in the game and doesn't stop until the numbers speak for themselves.
        </p>
        <a href="/en/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#0d2030', color: '#fff', padding: '14px 28px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
          Let's talk →
        </a>
      </div>
      <style>{`@media(max-width:960px){#about{grid-template-columns:1fr!important;padding:72px 24px!important;gap:40px!important}}`}</style>
    </section>
  );
}
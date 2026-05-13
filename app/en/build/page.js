import Footer from '../../components/FooterEN';

export const metadata = {
  title: 'Ecommerce & Shopify Services — Cachai Solutions',
  description: 'We build Shopify stores that actually sell.',
};

export default function BuildENPage() {
  return (
    <main style={{ background: '#ffffff' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', background: '#1e4a5a', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(125,224,240,.1) 0%, transparent 60%)' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Shopify Services
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 800, marginBottom: 48, position: 'relative' }}>
          Stores built<br />to <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>actually sell.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', maxWidth: 480, lineHeight: 1.8 }}>
            Shopify development obsessed with conversion. From design to checkout — every decision is made so your store sells more.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Shopify Dev', 'UX/UI Design', 'Shopify Plus', 'Integrations', 'Performance', 'Migrations'].map(tag => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.1)', padding: '6px 14px', borderRadius: 100 }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: '#ffffff' }}>
        {[
          { num: '01', title: 'Shopify Development', tagline: 'We don\'t just build stores. We build revenue machines.', desc: 'Custom Shopify development from scratch — bespoke themes, integrations, and technical architecture built to scale.', items: ['Custom Liquid theme development', 'Third-party app & API integrations', 'Speed and performance optimization', 'Mobile-first from day one'] },
          { num: '02', title: 'UX/UI Design', tagline: 'You have 3 seconds to convince someone. Make them count.', desc: 'Shopping experiences that guide users intuitively from first click to checkout.', items: ['UX research and audits', 'Interactive wireframes and prototypes', 'Checkout and conversion flow design', 'A/B testing of key elements'] },
          { num: '03', title: 'Shopify Plus', tagline: 'For the brands that have outgrown standard.', desc: 'Enterprise implementation with automated flows, customizable checkout, and multi-market architecture.', items: ['Extensible and custom checkout', 'Shopify Flow automations', 'Multi-currency and multi-language', 'Campaign and launch planning'] },
          { num: '04', title: 'Integrations & Apps', tagline: 'Your stack, working in perfect harmony.', desc: 'We connect your store with Klaviyo, Gorgias, Recharge, and any tool in your ecosystem.', items: ['ERP and management systems', 'Email marketing and CRM', 'Payments, subscriptions and loyalty', 'Custom APIs'] },
          { num: '05', title: 'Performance Optimization', tagline: 'A slow store loses sales. That\'s just the truth.', desc: 'We audit and optimize your store\'s speed and technical SEO to maximize conversion.', items: ['Full technical audit', 'Image and asset optimization', 'Load speed improvements', 'On-page technical SEO'] },
          { num: '06', title: 'Shopify Migrations', tagline: 'Switching platforms doesn\'t have to be chaos.', desc: 'We migrate your store from any platform without losing data, rankings, or sales.', href: '/en/migrations', cta: 'See Migrations page →', items: ['Product and customer migration', 'SEO and URL preservation', 'Zero downtime guaranteed', 'Post-migration audit'] },
        ].map((s) => (
          <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', padding: '64px 80px', borderBottom: '1px solid rgba(13,30,42,.08)', background: '#fff' }} className="service-row">
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 13, color: '#6b8a96' }}>{s.num}</div>
            <div style={{ paddingRight: 60 }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 400, color: '#0d2030', lineHeight: 1.1, marginBottom: 16 }}>{s.title}</h3>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 14, fontStyle: 'italic', color: '#2a5f72', marginBottom: 20 }}>"{s.tagline}"</div>
              <p style={{ fontSize: 14, color: '#6b8a96', lineHeight: 1.8 }}>{s.desc}</p>
              {s.cta && <a href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24, background: '#0d2030', color: '#fff', padding: '12px 24px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{s.cta}</a>}
            </div>
            <div style={{ paddingLeft: 60, borderLeft: '1px solid rgba(13,30,42,.08)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6b8a96', marginBottom: 20 }}>Includes</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {s.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#0d2030' }}>
                    <span style={{ display: 'block', width: 20, height: 1, background: '#2a5f72', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Ready to build something<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>that actually sells?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>No cost, no commitment. We analyze your store and tell you exactly what we'd do.</p>
          <a href="/en/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Let's talk →
          </a>
        </div>
      </section>

      <Footer />
      <style>{`
        @media(max-width:960px){.service-row{grid-template-columns:40px 1fr!important;padding:48px 24px!important}.service-row>div:last-child{grid-column:2;padding-left:0!important;border-left:none!important;border-top:1px solid rgba(13,30,42,.08);padding-top:24px;margin-top:24px}}
      `}</style>
    </main>
  );
}
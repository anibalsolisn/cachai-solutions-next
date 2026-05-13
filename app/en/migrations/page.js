import Footer from '../../components/FooterEN';

export const metadata = {
  title: 'Shopify Migrations — Cachai Solutions',
  description: 'Migrate to Shopify without losing data, SEO or sales.',
};

export default function MigrationsENPage() {
  return (
    <main style={{ background: '#ffffff' }}>
      <section style={{ minHeight: '100vh', background: '#1e4a5a', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 80% at 100% 0%, rgba(125,224,240,.12) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(125,224,240,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(125,224,240,.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'block', width: 40, height: 1, background: '#7de0f0' }} />
          Shopify Migrations
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 400, lineHeight: .95, color: '#fff', maxWidth: 800, marginBottom: 48, position: 'relative' }}>
          Your next platform.<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>Nothing left behind.</em>
        </h1>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', position: 'relative' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', maxWidth: 480, lineHeight: 1.8 }}>
            Switching platforms is scary. Lost data, destroyed SEO, downtime that costs sales. We've done this dozens of times — we know exactly what can go wrong and how to prevent it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['WooCommerce', 'Magento', 'Adobe Commerce', 'PrestaShop', 'BigCommerce', 'Wix', 'Custom'].map(tag => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.1)', padding: '6px 14px', borderRadius: 100 }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Why Shopify
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 64, lineHeight: 1.15 }}>
            The world already <em style={{ fontStyle: 'italic', color: '#2a5f72' }}>decided.</em><br />Have you?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(13,30,42,.08)' }} className="why-grid">
            {[
              { num: '$14.6B', label: 'In sales in a single Black Friday', desc: 'Shopify merchants generated $14.6 billion on Black Friday 2024 — a 27% increase from the year before.' },
              { num: '36%', label: 'Lower cost of ownership', desc: 'Shopify has up to 36% lower total cost of ownership vs competitors — 29% better than Adobe Commerce.' },
              { num: '16+', label: 'Enterprise launches in one quarter', desc: 'In Q3 2024 alone, brands like On, Victoria\'s Secret and Off-White migrated to Shopify.' },
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

      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="fear-grid">
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#7de0f0', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'block', width: 28, height: 1, background: '#7de0f0' }} />
              The fear is real
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#fff', lineHeight: 1.15, marginBottom: 28 }}>
              We know exactly<br />what can go <em style={{ fontStyle: 'italic', color: '#7de0f0' }}>wrong.</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.8 }}>
              Gymshark lost sales when their Magento crashed during a traffic peak. Newcastle United needed to process thousands of orders in the first hour of launch. Club Brugge wanted to convert 72% of their mobile traffic into real sales.
              <br /><br />
              <strong style={{ color: 'rgba(255,255,255,.8)', fontWeight: 500 }}>They all migrated to Shopify. We know how to do it without the chaos.</strong>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Data loss', desc: 'Products, customers, order history. We migrate everything with double verification before go-live.' },
              { title: 'SEO destroyed', desc: '301 redirects, preserved URLs, meta tags and domain authority intact.' },
              { title: 'Downtime that costs sales', desc: 'Migration happens in parallel. Your store keeps selling until the very last second.' },
              { title: 'Broken integrations', desc: 'We reconnect all your apps, ERPs and tools. No friction, no lost data.' },
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

      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2a5f72', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#2a5f72' }} />
            Our process
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, color: '#0d2030', marginBottom: 72, lineHeight: 1.15 }}>
            6 steps to migrate<br /><em style={{ fontStyle: 'italic', color: '#2a5f72' }}>without surprises</em>
          </h2>
          {[
            { num: '01', title: 'Data migration', badge: 'Nothing left behind', desc: 'Products, customers, orders and full history. Every piece of data verified before and after.', items: ['Full product catalog', 'Customer database', 'Order history', 'Reviews and generated content'] },
            { num: '02', title: 'SEO preservation', badge: 'Rankings intact', desc: 'Your domain authority and organic rankings are real assets. We protect them like they\'re ours.', items: ['Complete 301 redirects', 'Preserved URLs and structure', 'Meta tags and structured data', 'Post-migration monitoring'] },
            { num: '03', title: 'Design & UX', badge: 'Better than before', desc: 'Your new Shopify store doesn\'t just work better — it looks better too.', items: ['Custom Liquid theme', 'Mobile-first from day one', 'Optimized checkout', 'Improved load speed'] },
            { num: '04', title: 'Integrations & apps', badge: 'Full ecosystem', desc: 'We reconnect all your tools to the new Shopify ecosystem.', items: ['ERP and management systems', 'Email marketing and CRM', 'Payments and subscriptions', 'Custom apps if needed'] },
            { num: '05', title: 'Zero downtime', badge: 'Always selling', desc: 'Migration happens in parallel. You don\'t lose a single minute of sales.', items: ['Parallel development environment', 'Instant DNS switch', 'Rollback plan if needed', 'Real-time monitoring'] },
            { num: '06', title: 'QA & launch', badge: 'No surprises', desc: 'Thorough review of every page and flow before go-live.', items: ['Multi-device testing', 'Payment and checkout verification', 'Load and speed testing', 'Post-launch support'] },
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

      <section style={{ background: '#0a1a22', padding: '120px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Ready to make<br /><em style={{ fontStyle: 'italic', color: '#7de0f0' }}>the switch?</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 40, lineHeight: 1.8 }}>Let's schedule a 30-minute call. We'll analyze your current platform and tell you exactly what you need.</p>
          <a href="/en/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7de0f0', color: '#0d2030', padding: '16px 40px', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Let's talk migration →
          </a>
        </div>
      </section>
      <Footer />
      <style>{`
        @media(max-width:960px){.why-grid,.fear-grid{grid-template-columns:1fr!important}.step-row{grid-template-columns:40px 1fr!important;padding:40px 0!important}.step-row>div:last-child{grid-column:2;padding-left:0!important;border-left:none!important;border-top:1px solid rgba(13,30,42,.08);padding-top:20px;margin-top:20px}}
        @media(max-width:600px){section{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </main>
  );
}
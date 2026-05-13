'use client';
import Link from 'next/link';

export default function FooterEN() {
  return (
    <footer style={{ background: '#1e4a5a', padding: '80px 80px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 60, marginBottom: 64, paddingBottom: 64, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          <div>
            <img src="/logo_cachaisolutions_blanco.svg" alt="Cachai Solutions" style={{ height: 28, marginBottom: 20 }} />
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.4)', lineHeight: 1.8, maxWidth: 260, marginBottom: 24 }}>
              Specialized consultancy in Shopify and Growth Marketing. We scale online stores with strategy, data and high-level execution.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="https://linkedin.com/company/cachai-solutions" target="_blank" rel="noopener noreferrer"
                style={{ width: 36, height: 36, borderRadius: 4, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://instagram.com/cachaisolutions" target="_blank" rel="noopener noreferrer"
                style={{ width: 36, height: 36, borderRadius: 4, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.25)', marginBottom: 20 }}>Build</div>
            {[
              { label: 'Ecommerce & Shopify', href: '/en/build' },
              { label: 'Shopify Migrations', href: '/en/migrations' },
              { label: 'Shopify Plus', href: '/en/shopify-plus' },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.45)', textDecoration: 'none', marginBottom: 12 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.25)', marginBottom: 20 }}>Grow</div>
            {[
              { label: 'Growth Marketing', href: '/en/growth' },
              { label: 'Email Marketing', href: '/en/email' },
              { label: 'SEO & GEO', href: '/en/seo-geo' },
              { label: 'Analytics & Data', href: '/en/analytics' },
              { label: 'Sales Strategy', href: '/en/sales' },
              { label: 'CRO', href: '/en/cro' },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.45)', textDecoration: 'none', marginBottom: 12 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.25)', marginBottom: 20 }}>Company</div>
            {[
              { label: 'Case studies', href: '/en/#work' },
              { label: 'About', href: '/en/#about' },
              { label: 'FAQ', href: '/en/#faq' },
              { label: 'Contact', href: '/en/#contacto' },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.45)', textDecoration: 'none', marginBottom: 12 }}>{l.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>© 2025 Cachai Solutions. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>Privacy</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>Terms</span>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:960px){footer{padding:60px 24px 40px!important}footer>div>div:first-child{grid-template-columns:1fr 1fr!important;gap:40px!important}}
        @media(max-width:600px){footer>div>div:first-child{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}
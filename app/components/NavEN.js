'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavEN() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState(1);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimer = useRef(null);
  const pathname = usePathname();
  const esPath = pathname.replace('/en', '') || '/';

  const openMega = () => { clearTimeout(megaTimer.current); setMegaOpen(true); };
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 150); };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => { setMobileOpen(false); setMobilePanel(1); };

  return (
    <>
      {/* NAV TOP */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        height: 72, padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'opacity .4s ease, transform .4s ease',
        opacity: scrolled ? 0 : 1,
        transform: scrolled ? 'translateY(-16px)' : 'translateY(0)',
        pointerEvents: scrolled ? 'none' : 'all',
      }}>
        <Link href="/en"><img src="/logo_cachaisolutions_blanco.svg" alt="Cachai" style={{ height: 32 }} /></Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 0 }} className="nav-top-links">
          <Link href="/en/#work" style={linkStyle}>Work</Link>
          <Link href="/en/#about" style={linkStyle}>About</Link>
          <Link href="/en/#faq" style={linkStyle}>FAQ</Link>
          <div onMouseEnter={openMega} onMouseLeave={closeMega}>
            <span style={{ ...linkStyle, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
          <Link href={esPath} style={langStyle}>ES</Link>
        </nav>
        <Link href="/en/#contacto" style={ctaStyle}>Let's talk</Link>
      </header>

      {/* MEGA MENU TOP */}
      <div onMouseEnter={openMega} onMouseLeave={closeMega} style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9998,
        background: 'rgba(13,30,42,.97)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,.08)',
        padding: '88px 80px 48px',
        opacity: megaOpen && !scrolled ? 1 : 0,
        visibility: megaOpen && !scrolled ? 'visible' : 'hidden',
        transition: 'opacity .2s ease, visibility .2s ease',
        pointerEvents: megaOpen && !scrolled ? 'all' : 'none',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div style={megaColTitle}>Build</div>
            {megaLink('Ecommerce & Shopify', '/en/build', false)}
            {megaLink('Shopify Migrations', '/en/migrations', false)}
            {megaLink('Shopify Plus', '/en/shopify-plus', false)}
          </div>
          <div>
            <div style={megaColTitle}>Grow</div>
            {megaLink('Growth Marketing', '/en/growth', false)}
            {megaLink('Email Marketing', '/en/email', false)}
            {megaLink('SEO & GEO', '/en/seo-geo', false)}
            {megaLink('Analytics & Data', '/en/analytics', false)}
            {megaLink('Sales Strategy', '/en/sales', false)}
            {megaLink('Conversion Rate Optimization', '/en/cro', false)}
          </div>
        </div>
      </div>

      {/* MEGA MENU PILL */}
      <div onMouseEnter={openMega} onMouseLeave={closeMega} style={{
        position: 'fixed', bottom: 80, left: '50%', transform: 'translateX(-50%)',
        width: 280, zIndex: 9998,
        background: 'rgba(30,74,90,.97)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(125,205,232,.15)', borderRadius: 6, overflow: 'hidden',
        opacity: megaOpen && scrolled ? 1 : 0,
        visibility: megaOpen && scrolled ? 'visible' : 'hidden',
        transition: 'opacity .2s ease, visibility .2s ease',
        pointerEvents: megaOpen && scrolled ? 'all' : 'none',
      }}>
        <div style={pillSectionTitle}>Build</div>
        {pillMegaLink('Ecommerce & Shopify', '/en/build', false)}
        {pillMegaLink('Shopify Migrations', '/en/migrations', false)}
        {pillMegaLink('Shopify Plus', '/en/shopify-plus', false)}
        <div style={pillSectionTitle}>Grow</div>
        {pillMegaLink('Growth Marketing', '/en/growth', false)}
        {pillMegaLink('Email Marketing', '/en/email', false)}
        {pillMegaLink('SEO & GEO', '/en/seo-geo', false)}
        {pillMegaLink('Analytics & Data', '/en/analytics', false)}
        {pillMegaLink('Sales Strategy', '/en/sales', false)}
        {pillMegaLink('CRO', '/en/cro', false)}
      </div>

      {/* ISOTIPO */}
      <div style={{
        position: 'fixed', top: 24, left: 32, zIndex: 9998,
        opacity: scrolled ? 1 : 0, transition: 'opacity .4s ease',
        pointerEvents: scrolled ? 'all' : 'none', mixBlendMode: 'difference',
      }}>
        <Link href="/en"><img src="/isotipo.svg" alt="Cachai" style={{ height: 36, filter: 'brightness(0) invert(1)' }} /></Link>
      </div>

      {/* PILL NAV */}
      <nav className="pill-nav" style={{
        position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        zIndex: 9999, height: 52, padding: '0 8px',
        display: 'flex', alignItems: 'center', gap: 0,
        background: 'rgba(8,37,48,.85)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(125,205,232,.15)', borderRadius: 6,
        opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? 'all' : 'none',
        transition: 'opacity .4s ease',
      }}>
        <div className="pill-desktop-links" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/en/#work" style={pillLink}>Work</Link>
          <Link href="/en/#about" style={pillLink}>About</Link>
          <Link href="/en/#faq" style={pillLink}>FAQ</Link>
          <div onMouseEnter={openMega} onMouseLeave={closeMega}>
            <span style={{ ...pillLink, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
          <Link href={esPath} style={pillLangStyle}>ES</Link>
        </div>
        <button className="pill-hamburger" onClick={() => setMobileOpen(true)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', display: 'none', flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 22, height: 2, background: '#e8f8fc', borderRadius: 2 }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#e8f8fc', borderRadius: 2 }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#e8f8fc', borderRadius: 2 }}/>
        </button>
        <Link href="/en/#contacto" style={pillCta} className="pill-cta">Let's talk →</Link>
      </nav>

      {/* MOBILE OVERLAY */}
      {mobileOpen && <div style={{ position: 'fixed', inset: 0, zIndex: 9997, background: 'rgba(0,0,0,.5)' }} onClick={closeMobile} />}

      {/* MOBILE MENU */}
      <div style={{
        position: 'fixed', top: 80, bottom: 90, left: 16, right: 16, zIndex: 9998,
        background: 'rgba(30,74,90,.97)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(125,205,232,.15)', borderRadius: 6, overflow: 'hidden',
        opacity: mobileOpen ? 1 : 0, visibility: mobileOpen ? 'visible' : 'hidden',
        transform: mobileOpen ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity .3s ease, transform .3s ease, visibility .3s ease',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflowY: 'auto',
          transition: 'transform .35s cubic-bezier(.16,1,.3,1)',
          transform: mobilePanel === 1 ? 'translateX(0)' : 'translateX(-100%)',
        }}>
          <Link href="/en/#work" style={mobileLink} onClick={closeMobile}>Work</Link>
          <Link href="/en/#about" style={mobileLink} onClick={closeMobile}>About</Link>
          <Link href="/en/#faq" style={mobileLink} onClick={closeMobile}>FAQ</Link>
          <button style={{ ...mobileLink, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', justifyContent: 'space-between' }}
            onClick={() => setMobilePanel(2)}>Services <span style={{ opacity: .4 }}>›</span></button>
          <Link href={esPath} style={{ ...mobileLink, color: 'rgba(232,248,252,.5)', fontSize: 12 }} onClick={closeMobile}>
            Ver en español <span style={{ opacity: .4 }}>→</span>
          </Link>
        </div>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflowY: 'auto',
          transition: 'transform .35s cubic-bezier(.16,1,.3,1)',
          transform: mobilePanel === 2 ? 'translateX(0)' : 'translateX(100%)',
        }}>
          <button style={{ ...mobileLink, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 8, justifyContent: 'flex-start', color: 'rgba(232,248,252,.6)', fontSize: 12 }}
            onClick={() => setMobilePanel(1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </button>
          <div style={mobileSectionTitle}>Build</div>
          <Link href="/en/build" style={mobileLink} onClick={closeMobile}>Ecommerce & Shopify <span style={{ opacity: .3 }}>→</span></Link>
          <Link href="/en/migrations" style={mobileLink} onClick={closeMobile}>Shopify Migrations <span style={{ opacity: .3 }}>→</span></Link>
          <Link href="/en/shopify-plus" style={mobileLink} onClick={closeMobile}>Shopify Plus <span style={{ opacity: .3 }}>→</span></Link>
          <div style={mobileSectionTitle}>Grow</div>
          <Link href="/en/growth" style={mobileLink} onClick={closeMobile}>Growth Marketing <span style={{ opacity: .3 }}>→</span></Link>
          <Link href="/en/email" style={mobileLink} onClick={closeMobile}>Email Marketing <span style={{ opacity: .3 }}>→</span></Link>
          <Link href="/en/seo-geo" style={mobileLink} onClick={closeMobile}>SEO & GEO <span style={{ opacity: .3 }}>→</span></Link>
          <Link href="/en/analytics" style={mobileLink} onClick={closeMobile}>Analytics & Data <span style={{ opacity: .3 }}>→</span></Link>
          <Link href="/en/sales" style={mobileLink} onClick={closeMobile}>Sales Strategy <span style={{ opacity: .3 }}>→</span></Link>
          <Link href="/en/cro" style={mobileLink} onClick={closeMobile}>CRO <span style={{ opacity: .3 }}>→</span></Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .pill-desktop-links { display: none !important; }
          .pill-hamburger { display: flex !important; }
          .pill-cta { font-size: 12px !important; }
          .pill-nav { left: 16px !important; right: 16px !important; transform: none !important; justify-content: space-between !important; opacity: 1 !important; pointer-events: all !important; }
          .nav-top-links { display: none !important; }
        }
      `}</style>
    </>
  );
}

const linkStyle = { fontSize: 13, fontWeight: 400, color: 'rgba(232,248,252,.8)', textDecoration: 'none', padding: '8px 16px', borderRadius: 4, display: 'inline-flex', alignItems: 'center' };
const langStyle = { fontSize: 11, fontWeight: 600, letterSpacing: '.08em', color: 'rgba(232,248,252,.5)', textDecoration: 'none', padding: '5px 10px', border: '1px solid rgba(255,255,255,.15)', borderRadius: 4, marginLeft: 8, display: 'inline-flex', alignItems: 'center' };
const pillLangStyle = { fontSize: 11, fontWeight: 600, letterSpacing: '.08em', color: 'rgba(208,240,248,.5)', textDecoration: 'none', padding: '4px 8px', border: '1px solid rgba(125,205,232,.2)', borderRadius: 4, marginLeft: 4, display: 'inline-flex', alignItems: 'center' };
const ctaStyle = { background: '#fff', color: '#0d2030', padding: '10px 22px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' };
const pillLink = { fontSize: 13, fontWeight: 400, color: 'rgba(208,240,248,.75)', textDecoration: 'none', padding: '8px 14px', display: 'inline-flex', alignItems: 'center' };
const pillCta = { background: '#fff', color: '#0d2030', padding: '10px 18px', borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: 'none', marginLeft: 6, whiteSpace: 'nowrap' };
const mobileLink = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid rgba(125,205,232,.08)', fontFamily: 'var(--font-onest)', fontSize: 13, fontWeight: 500, color: '#e8f8fc', textDecoration: 'none', width: '100%' };
const mobileSectionTitle = { padding: '8px 20px', fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(232,248,252,.3)', borderBottom: '1px solid rgba(125,205,232,.08)', fontFamily: 'var(--font-onest)' };
const megaColTitle = { fontSize: 10, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 20, fontFamily: 'var(--font-onest)' };
const pillSectionTitle = { fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(232,248,252,.3)', padding: '8px 18px', borderBottom: '1px solid rgba(125,205,232,.08)', fontFamily: 'var(--font-onest)' };

function megaLink(label, href, soon) {
  if (soon) return <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)', fontFamily: 'var(--font-onest)', fontSize: 14, color: 'rgba(232,248,252,.3)' }}>{label} <span style={{ fontSize: 10, background: 'rgba(255,255,255,.06)', padding: '2px 7px', borderRadius: 2 }}>Coming soon</span></div>;
  return <Link key={label} href={href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)', fontFamily: 'var(--font-onest)', fontSize: 14, color: '#e8f8fc', textDecoration: 'none' }}>{label} <span style={{ opacity: .3 }}>→</span></Link>;
}

function pillMegaLink(label, href, soon) {
  if (soon) return <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 18px', borderBottom: '1px solid rgba(125,205,232,.08)', fontFamily: 'var(--font-onest)', fontSize: 12, color: 'rgba(232,248,252,.35)' }}>{label} <span style={{ fontSize: 10, background: 'rgba(255,255,255,.06)', padding: '1px 6px', borderRadius: 2 }}>Coming soon</span></div>;
  return <Link key={label} href={href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 18px', borderBottom: '1px solid rgba(125,205,232,.08)', fontFamily: 'var(--font-onest)', fontSize: 12, color: '#e8f8fc', textDecoration: 'none' }}>{label} <span style={{ opacity: .3 }}>→</span></Link>;
}
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState(1);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef(null);
  const megaTriggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobilePanel(1);
  };

  return (
    <>
      {/* NAV TOP — visible al inicio, desaparece al scroll */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        height: 72, padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'opacity .4s ease, transform .4s ease',
        opacity: scrolled ? 0 : 1,
        transform: scrolled ? 'translateY(-16px)' : 'translateY(0)',
        pointerEvents: scrolled ? 'none' : 'all',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo_cachaisolutions_blanco.svg" alt="Cachai" style={{ height: 32 }} />
        </Link>
        <nav style={{ display: 'flex', gap: 0, listStyle: 'none' }} className="nav-top-links">
          <Link href="/#casos" style={linkStyle}>Casos</Link>
          <Link href="/#nosotros" style={linkStyle}>Nosotros</Link>
          <Link href="/#faq" style={linkStyle}>FAQ</Link>
          <div
            ref={megaTriggerRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <span style={{ ...linkStyle, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
              Servicios
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </nav>
        <Link href="/#contacto" style={ctaStyle}>Probemos juntos</Link>
      </header>

      {/* MEGA MENU TOP */}
      <div
        onMouseEnter={() => setMegaOpen(true)}
        onMouseLeave={() => setMegaOpen(false)}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9998,
          background: 'rgba(13,30,42,.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
          padding: '88px 80px 48px',
          opacity: megaOpen ? 1 : 0,
          visibility: megaOpen ? 'visible' : 'hidden',
          transition: 'opacity .2s ease, visibility .2s ease',
          pointerEvents: megaOpen ? 'all' : 'none',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div style={megaColTitle}>Construir</div>
            {megaLink('Ecommerce & Shopify', '/shopify', false)}
            {megaLink('Migraciones a Shopify', '/migrations', false)}
            {megaLink('Shopify Plus', '/shopify-plus', true)}
          </div>
          <div>
            <div style={megaColTitle}>Crecer</div>
            {megaLink('Growth Marketing', '/growth', true)}
            {megaLink('Email Marketing', '/email', true)}
            {megaLink('SEO Ecommerce', '/seo', true)}
            {megaLink('Analytics & Data', '/analytics', true)}
            {megaLink('Sales Strategy', '/sales', true)}
            {megaLink('Conversion Rate Optimization', '/cro', true)}
          </div>
        </div>
      </div>

      {/* ISOTIPO — aparece al scrollear */}
      <div style={{
        position: 'fixed', top: 24, left: 32, zIndex: 9998,
        opacity: scrolled ? 1 : 0,
        transition: 'opacity .4s ease',
        pointerEvents: scrolled ? 'all' : 'none',
        mixBlendMode: 'difference',
      }}>
        <Link href="/"><img src="/isotipo.svg" alt="Cachai" style={{ height: 36, filter: 'brightness(0) invert(1)' }} /></Link>
      </div>

      {/* PILL NAV — aparece al scrollear, siempre visible en mobile */}
      <nav style={{
        position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        zIndex: 9999, height: 52, padding: '0 8px',
        display: 'flex', alignItems: 'center', gap: 0,
        background: 'rgba(8,37,48,.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(125,205,232,.15)',
        borderRadius: 6,
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'all' : 'none',
        transition: 'opacity .4s ease',
      }} className="pill-nav">

        {/* Desktop links */}
        <div className="pill-desktop-links" style={{ display: 'flex' }}>
          <Link href="/#casos" style={pillLink}>Casos</Link>
          <Link href="/#nosotros" style={pillLink}>Nosotros</Link>
          <Link href="/#faq" style={pillLink}>FAQ</Link>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <span style={{ ...pillLink, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
              Servicios
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="pill-hamburger"
          onClick={() => setMobileOpen(true)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', display: 'none' }}>
          <span style={{ display: 'block', width: 22, height: 2, background: '#e8f8fc', borderRadius: 2, marginBottom: 5 }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#e8f8fc', borderRadius: 2, marginBottom: 5 }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#e8f8fc', borderRadius: 2 }}/>
        </button>

        <Link href="/#contacto" style={{ ...pillCta }} className="pill-cta">Probemos juntos →</Link>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9997, background: 'rgba(0,0,0,.5)' }} onClick={closeMobile} />
      )}
      <div style={{
        position: 'fixed', top: 80, bottom: 90, left: 16, right: 16,
        zIndex: 9998,
        background: 'rgba(30,74,90,.97)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(125,205,232,.15)',
        borderRadius: 6,
        overflow: 'hidden',
        opacity: mobileOpen ? 1 : 0,
        visibility: mobileOpen ? 'visible' : 'hidden',
        transform: mobileOpen ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity .3s ease, transform .3s ease, visibility .3s ease',
      }}>
        {/* Panel 1 */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
          transition: 'transform .35s cubic-bezier(.16,1,.3,1)',
          transform: mobilePanel === 1 ? 'translateX(0)' : 'translateX(-100%)',
        }}>
          <Link href="/#casos" style={mobileLink} onClick={closeMobile}>Casos</Link>
          <Link href="/#nosotros" style={mobileLink} onClick={closeMobile}>Nosotros</Link>
          <Link href="/#faq" style={mobileLink} onClick={closeMobile}>FAQ</Link>
          <button style={{ ...mobileLink, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', justifyContent: 'space-between' }}
            onClick={() => setMobilePanel(2)}>
            Servicios <span style={{ opacity: .4 }}>›</span>
          </button>
        </div>

        {/* Panel 2 — Servicios */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
          transition: 'transform .35s cubic-bezier(.16,1,.3,1)',
          transform: mobilePanel === 2 ? 'translateX(0)' : 'translateX(100%)',
        }}>
          <button style={{ ...mobileLink, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 8, justifyContent: 'flex-start', color: 'rgba(232,248,252,.6)', fontSize: 12 }}
            onClick={() => setMobilePanel(1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver
          </button>
          <div style={mobileSectionTitle}>Construir</div>
          <Link href="/shopify" style={mobileLink} onClick={closeMobile}>Ecommerce & Shopify <span style={{ opacity: .3 }}>→</span></Link>
          <Link href="/migrations" style={mobileLink} onClick={closeMobile}>Migraciones a Shopify <span style={{ opacity: .3 }}>→</span></Link>
          <div style={{ ...mobileLink, opacity: .4, cursor: 'default' }}>Shopify Plus <span style={mobileSoon}>Próximo</span></div>
          <div style={mobileSectionTitle}>Crecer</div>
          <div style={{ ...mobileLink, opacity: .4, cursor: 'default' }}>Growth Marketing <span style={mobileSoon}>Próximo</span></div>
          <div style={{ ...mobileLink, opacity: .4, cursor: 'default' }}>Email Marketing <span style={mobileSoon}>Próximo</span></div>
          <div style={{ ...mobileLink, opacity: .4, cursor: 'default' }}>SEO Ecommerce <span style={mobileSoon}>Próximo</span></div>
          <div style={{ ...mobileLink, opacity: .4, cursor: 'default' }}>Analytics & Data <span style={mobileSoon}>Próximo</span></div>
          <div style={{ ...mobileLink, opacity: .4, cursor: 'default' }}>Sales Strategy <span style={mobileSoon}>Próximo</span></div>
          <div style={{ ...mobileLink, opacity: .4, cursor: 'default' }}>CRO <span style={mobileSoon}>Próximo</span></div>
        </div>
      </div>

      {/* CSS responsive */}
      <style>{`
        @media (max-width: 960px) {
          .pill-desktop-links { display: none !important; }
          .pill-hamburger { display: flex !important; flex-direction: column; }
          .pill-cta { font-size: 12px !important; }
          .pill-nav {
            left: 16px !important;
            right: 16px !important;
            transform: none !important;
            width: auto !important;
            justify-content: space-between !important;
            opacity: 1 !important;
            pointer-events: all !important;
          }
          .nav-top-links { display: none !important; }
        }
      `}</style>
    </>
  );
}

// Estilos
const linkStyle = {
  fontSize: 13, fontWeight: 400, color: 'rgba(232,248,252,.8)',
  textDecoration: 'none', padding: '8px 16px', borderRadius: 4,
  display: 'inline-flex', alignItems: 'center',
};
const ctaStyle = {
  background: '#fff', color: '#0d2030',
  padding: '10px 22px', borderRadius: 4,
  fontSize: 13, fontWeight: 600, textDecoration: 'none',
};
const pillLink = {
  fontSize: 13, fontWeight: 400, color: 'rgba(208,240,248,.75)',
  textDecoration: 'none', padding: '8px 14px',
  display: 'inline-flex', alignItems: 'center',
};
const pillCta = {
  background: '#fff', color: '#0d2030',
  padding: '10px 18px', borderRadius: 4,
  fontSize: 13, fontWeight: 700, textDecoration: 'none',
  marginLeft: 6, whiteSpace: 'nowrap',
};
const mobileLink = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '14px 20px',
  borderBottom: '1px solid rgba(125,205,232,.08)',
  fontFamily: 'var(--font-onest)', fontSize: 13, fontWeight: 500,
  color: '#e8f8fc', textDecoration: 'none',
  width: '100%',
};
const mobileSectionTitle = {
  padding: '8px 20px',
  fontSize: 10, fontWeight: 600, letterSpacing: '.14em',
  textTransform: 'uppercase', color: 'rgba(232,248,252,.3)',
  borderBottom: '1px solid rgba(125,205,232,.08)',
  fontFamily: 'var(--font-onest)',
};
const mobileSoon = {
  fontSize: 10, fontWeight: 600,
  color: 'rgba(255,255,255,.25)',
  background: 'rgba(255,255,255,.06)',
  padding: '2px 7px', borderRadius: 2,
};
const megaColTitle = {
  fontSize: 10, fontWeight: 600, letterSpacing: '.16em',
  textTransform: 'uppercase', color: 'rgba(255,255,255,.3)',
  marginBottom: 20, fontFamily: 'var(--font-onest)',
};

function megaLink(label, href, soon) {
  if (soon) return (
    <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)', fontFamily: 'var(--font-onest)', fontSize: 14, color: 'rgba(232,248,252,.3)' }}>
      {label} <span style={{ fontSize: 10, background: 'rgba(255,255,255,.06)', padding: '2px 7px', borderRadius: 2 }}>Próximo</span>
    </div>
  );
  return (
    <Link key={label} href={href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)', fontFamily: 'var(--font-onest)', fontSize: 14, color: '#e8f8fc', textDecoration: 'none' }}>
      {label} <span style={{ opacity: .3 }}>→</span>
    </Link>
  );
}
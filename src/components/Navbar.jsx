import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Treasury',  to: '/treasury' },
  { label: 'Blogs',     to: '/blogs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navRef = useRef(null)

  const active = (to) => pathname === to
  const isHome = pathname === '/'
  // Solid (frosted) background everywhere except while the homepage hero is in view.
  const solid = !isHome || scrolled

  useEffect(() => {
    const navEl = navRef.current
    const section = navEl?.parentElement?.querySelector('section')
    const onScroll = () => {
      const navH = navEl ? navEl.offsetHeight : 68
      if (!section) { setScrolled(window.scrollY > navH); return }
      // Switch once the first section (hero) has scrolled up past the navbar.
      setScrolled(section.getBoundingClientRect().bottom <= navH + 2)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return (
    <nav
      ref={navRef}
      className="site-nav"
      style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: solid ? 'rgba(252,250,248,0.85)' : 'transparent',
        backdropFilter: solid ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(16px)' : 'none',
        borderBottom: solid ? '1px solid rgba(18,62,122,0.08)' : '1px solid transparent',
        boxShadow: solid ? '0 6px 28px rgba(18,62,122,0.07)' : '0 0 0 rgba(0,0,0,0)',
        transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      }}
    >
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: scrolled ? '62px' : '72px',
        transition: 'height 0.35s ease',
      }}>

        {/* Logo */}
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: '26px', fontWeight: 700, color: '#123E7A' }}>Jessly</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '8.5px', fontWeight: 700, color: '#123E7A', letterSpacing: '0.18em', opacity: 0.55, marginTop: '-2px' }}>CHETTANIYAL</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="nav-desktop">
          {LINKS.map(l => (
            <Link
              key={l.to} to={l.to}
              className={`nav-link${active(l.to) ? ' active' : ''}`}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '13px', fontWeight: active(l.to) ? 700 : 500,
                color: active(l.to) ? '#123E7A' : '#2F343A',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >{l.label}</Link>
          ))}
          <Link to="/contact" className="nav-cta" style={{
            background: '#123E7A', color: '#fff',
            padding: '9px 22px', borderRadius: '999px',
            fontFamily: "'Manrope', sans-serif",
            fontSize: '13px', fontWeight: 700,
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(18,62,122,0.20)',
            transition: 'background 0.18s, transform 0.18s, box-shadow 0.18s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0e2f5e'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(18,62,122,0.30)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#123E7A'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(18,62,122,0.20)' }}
          >Let's Connect</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#123E7A' }}
          className="nav-burger"
          aria-label="menu"
        >
          {open
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '340px' : '0px',
        opacity: open ? 1 : 0,
        transition: 'max-height 0.4s cubic-bezier(.22,1,.36,1), opacity 0.3s ease',
        background: 'rgba(252,250,248,0.98)',
        borderTop: open ? '1px solid rgba(18,62,122,0.08)' : '1px solid transparent',
      }}>
        <div style={{ padding: '16px 32px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {LINKS.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '15px', fontWeight: active(l.to) ? 700 : 500,
              color: active(l.to) ? '#123E7A' : '#2F343A',
              textDecoration: 'none',
            }}>{l.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} style={{
            display: 'inline-block',
            background: '#123E7A', color: '#fff',
            padding: '12px 24px', borderRadius: '999px',
            fontFamily: "'Manrope', sans-serif",
            fontSize: '14px', fontWeight: 700,
            textAlign: 'center', marginTop: '4px',
          }}>Let's Connect</Link>
        </div>
      </div>

      <style>{`
        .site-nav { animation: navDrop 0.5s cubic-bezier(.22,1,.36,1) both; }
        .nav-logo { transition: transform 0.2s cubic-bezier(.22,1,.36,1); display: inline-block; }
        .nav-logo:hover { transform: scale(1.04); }
        .nav-link { position: relative; padding-bottom: 3px; transition: color 0.18s; }
        .nav-link::after {
          content: ''; position: absolute; left: 0; bottom: 0;
          height: 2px; width: 0; border-radius: 2px;
          background: #123E7A;
          transition: width 0.28s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover { color: #123E7A; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active::after { width: 100%; }
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: block !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .site-nav { animation: none !important; }
        }
      `}</style>
    </nav>
  )
}

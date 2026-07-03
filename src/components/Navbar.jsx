import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'Home',                to: '/' },
  { label: 'About',               to: '/about' },
  { label: 'Treasury',            to: '/treasury' },
  { label: 'Speaking',            to: '/speaking' },
  { label: 'Adventures',          to: '/adventures' },
  { label: 'Health & Fitness',    to: '/health' },
  { label: 'Journal',             to: '/blogs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const active = (to) => pathname === to

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'rgba(252,250,248,0.94)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(18,62,122,0.08)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '68px',
      }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: '26px', fontWeight: 700, color: '#123E7A' }}>Jessly</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '8.5px', fontWeight: 700, color: '#123E7A', letterSpacing: '0.18em', opacity: 0.55, marginTop: '-2px' }}>CHETTANIYAL</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }} className="nav-desktop">
          {LINKS.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '13px', fontWeight: active(l.to) ? 700 : 500,
              color: active(l.to) ? '#123E7A' : '#2F343A',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              paddingBottom: '2px',
              borderBottom: active(l.to) ? '2px solid #123E7A' : '2px solid transparent',
              transition: 'color 0.15s',
            }}>{l.label}</Link>
          ))}
          <Link to="/contact" style={{
            background: '#123E7A', color: '#fff',
            padding: '9px 22px', borderRadius: '999px',
            fontFamily: "'Manrope', sans-serif",
            fontSize: '13px', fontWeight: 700,
            textDecoration: 'none', whiteSpace: 'nowrap',
            transition: 'background 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#0e2f5e'}
            onMouseLeave={e => e.currentTarget.style.background = '#123E7A'}
          >Let's Connect</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '4px', color: '#123E7A',
          }}
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
      {open && (
        <div style={{
          background: '#FCFAF8',
          borderTop: '1px solid rgba(18,62,122,0.08)',
          padding: '16px 32px 24px',
          display: 'flex', flexDirection: 'column', gap: '14px',
        }}>
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
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

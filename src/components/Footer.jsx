import { Link } from 'react-router-dom'

const COL1 = [
  { label: 'Home',             to: '/' },
  { label: 'About',            to: '/about' },
  { label: 'Treasury',         to: '/treasury' },
  { label: 'Speaking',         to: '/speaking' },
  { label: 'Adventures',       to: '/adventures' },
  { label: 'Health & Fitness', to: '/health' },
  { label: 'Growth Journal',   to: '/blogs' },
  { label: 'Contact',          to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#123E7A', color: '#fff', padding: '60px 32px 36px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: '30px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>Jessly</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>CHETTANIYAL</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '240px' }}>
              Treasury Manager · Speaker · Toastmasters Leader · Adventurer
            </p>
            <p style={{ fontFamily: "'Inter', italic", fontStyle: 'italic', fontSize: '13px', color: '#F7D7DC', marginTop: '14px', lineHeight: 1.6 }}>
              "Growth is not a destination. It's a lifestyle."
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: '16px' }}>Pages</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {COL1.map(l => (
                <Link key={l.to} to={l.to} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: '16px' }}>Get in Touch</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:jesschettaniyal@outlook.com" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>jesschettaniyal@outlook.com</a>
              <a href="https://www.linkedin.com/in/jesslychettaniyal" target="_blank" rel="noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>LinkedIn</a>
              <a href="tel:9142551687" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>914-255-1687</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Jessly Chettaniyal. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
            itsjessly.com
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

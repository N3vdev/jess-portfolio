import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PILLARS = [
  {
    to: '/treasury',
    label: 'Treasury',
    color: '#EAF0FB',
    accent: '#123E7A',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#123E7A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    desc: 'Driving financial excellence through strategic treasury management and operational efficiency.',
  },
  {
    to: '/speaking',
    label: 'Speaking & Leadership',
    color: '#FDF0F2',
    accent: '#8B3A52',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B3A52" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    desc: 'Empowering individuals and organizations through the power of communication and leadership.',
  },
  {
    to: '/adventures',
    label: 'Adventures',
    color: '#F0F7F4',
    accent: '#2D6B50',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D6B50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 17 12 3 21 17"/><line x1="3" y1="17" x2="21" y2="17"/>
      </svg>
    ),
    desc: 'Embracing new challenges, exploring the unknown, and living life beyond comfort zones.',
  },
  {
    to: '/health',
    label: 'Health & Fitness',
    color: '#FEF6EE',
    accent: '#C07A3A',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C07A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    desc: 'Building discipline, strength, and resilience through fitness and healthy habits.',
  },
]

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '80px 32px 80px',
        display: 'grid', gridTemplateColumns: '58% 42%',
        alignItems: 'center', gap: '48px', minHeight: '88vh',
      }}>
        <div>
          <p style={{
            fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#F7D7DC', background: '#123E7A',
            display: 'inline-block', padding: '5px 14px', borderRadius: '999px',
            marginBottom: '24px',
          }}>Welcome to My Journey</p>

          <h1 style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 'clamp(38px, 5vw, 68px)',
            fontWeight: 800, color: '#123E7A',
            lineHeight: 1.08, letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            Building a<br />Stronger Me<span style={{ color: '#F7D7DC' }}>.</span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 1.3vw, 18px)',
            color: '#2F343A', lineHeight: 1.7, marginBottom: '28px', maxWidth: '460px',
          }}>
            Through finance, leadership, adventure, and continuous growth.
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {['Treasury Manager', 'Speaker', 'Toastmasters Leader', 'Adventurer'].map(tag => (
              <span key={tag} style={{
                fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 600,
                color: '#123E7A', background: '#EAF0FB',
                padding: '6px 14px', borderRadius: '999px',
                border: '1px solid rgba(18,62,122,0.15)',
              }}>{tag}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/about" style={{
              background: '#123E7A', color: '#fff',
              padding: '14px 28px', borderRadius: '999px',
              fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700,
              display: 'inline-block',
            }}>Explore My Journey</Link>
            <Link to="/treasury" style={{
              background: 'transparent', color: '#123E7A',
              padding: '14px 28px', borderRadius: '999px',
              fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700,
              border: '1.5px solid #123E7A', display: 'inline-block',
            }}>Learn More →</Link>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: '24px', overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(18,62,122,0.16)',
            aspectRatio: '4/5',
          }}>
            <img src="Assets/card-6.jpg" alt="Jessly Chettaniyal"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{
            position: 'absolute', bottom: '-16px', left: '-16px',
            background: '#F7D7DC', borderRadius: '16px',
            padding: '14px 20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '22px', fontWeight: 800, color: '#123E7A' }}>10+</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#2F343A' }}>Years in Treasury</p>
          </div>
          <div style={{
            position: 'absolute', top: '20px', right: '-16px',
            background: '#fff', borderRadius: '16px',
            padding: '14px 20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(18,62,122,0.08)',
          }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '22px', fontWeight: 800, color: '#123E7A' }}>15+</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#2F343A' }}>Clubs Chartered</p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ background: '#F3F5F7', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C07A3A', textAlign: 'center', marginBottom: '12px' }}>What Drives Me</p>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#123E7A', textAlign: 'center', letterSpacing: '-0.02em', marginBottom: '48px' }}>Four Pillars. One Purpose.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {PILLARS.map(p => (
              <Link key={p.to} to={p.to} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: p.color, borderRadius: '20px',
                  padding: '28px 24px 24px',
                  border: `1px solid ${p.accent}22`,
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.10)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ marginBottom: '16px' }}>{p.icon}</div>
                  <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '16px', fontWeight: 800, color: '#123E7A', marginBottom: '10px' }}>{p.label}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#2F343A', lineHeight: 1.65, marginBottom: '18px' }}>{p.desc}</p>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 700, color: p.accent }}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote strip */}
      <section style={{ background: '#F7D7DC', padding: '48px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <svg width="24" height="18" viewBox="0 0 24 18" fill="#123E7A" opacity="0.3"><path d="M0 18V10.8C0 4.68 3.6 1.08 10.8 0l1.44 2.16C8.76 3.12 6.72 5.28 6 9H10.8V18H0zM13.2 18V10.8C13.2 4.68 16.8 1.08 24 0l1.44 2.16c-3.48.96-5.52 3.12-6.24 6.84H24V18H13.2z"/></svg>
            <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 22px)', color: '#123E7A', fontWeight: 500 }}>
              Growth is not a destination. It's a lifestyle.
            </p>
          </div>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '28px', fontWeight: 700, color: '#123E7A' }}>Jessly</span>
        </div>
      </section>

      {/* Blog teaser */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C07A3A', marginBottom: '10px' }}>Growth Journal</p>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em' }}>Stories from the journey.</h2>
          </div>
          <Link to="/blogs" style={{
            background: 'transparent', color: '#123E7A',
            padding: '13px 28px', borderRadius: '999px',
            fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700,
            border: '1.5px solid #123E7A', display: 'inline-block', whiteSpace: 'nowrap',
          }}>Read the Journal →</Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          section:first-of-type { grid-template-columns: 1fr !important; min-height: auto !important; }
        }
        @media (max-width: 720px) {
          .pillars-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

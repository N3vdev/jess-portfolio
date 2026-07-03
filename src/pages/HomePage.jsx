import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getPosts } from '../data/postStore'

const PILLARS = [
  {
    to: '/treasury',
    label: 'Treasury',
    sub: 'Finance & Strategy',
    img: 'Assets/card-9.png',
    accent: '#123E7A',
    gradientStart: 'rgba(18,62,122,0.72)',
    gradientEnd: 'rgba(18,62,122,0.18)',
  },
  {
    to: '/speaking',
    label: 'Speaking & Leadership',
    sub: 'Communication & Growth',
    img: 'Assets/card-2.jpg',
    accent: '#8B3A52',
    gradientStart: 'rgba(139,58,82,0.72)',
    gradientEnd: 'rgba(139,58,82,0.18)',
  },
  {
    to: '/adventures',
    label: 'Adventures',
    sub: 'Beyond the Comfort Zone',
    img: 'Assets/card-1.jpg',
    accent: '#2D6B50',
    gradientStart: 'rgba(30,70,45,0.75)',
    gradientEnd: 'rgba(30,70,45,0.18)',
  },
  {
    to: '/health',
    label: 'Health & Fitness',
    sub: 'Discipline & Resilience',
    img: 'Assets/card-8.png',
    accent: '#C07A3A',
    gradientStart: 'rgba(130,72,20,0.76)',
    gradientEnd: 'rgba(130,72,20,0.18)',
  },
]

const STATS = [
  { num: '10+', label: 'Years in Treasury' },
  { num: 'CTP®', label: 'Certified Professional' },
  { num: '15+', label: 'Clubs Chartered' },
  { num: '1000+', label: 'Lives Impacted' },
  { num: '3×', label: 'Club Charter Founder' },
]

const pillStyle = (p) => ({
  display: 'inline-block',
  background: p.pill, color: p.pillText,
  fontFamily: "'Manrope', sans-serif",
  fontSize: '10px', fontWeight: 800,
  letterSpacing: '0.12em', textTransform: 'uppercase',
  padding: '4px 11px', borderRadius: '999px',
})

export default function HomePage() {
  const recent = getPosts().slice(0, 3)

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: 'clamp(56px,8vh,96px) 32px clamp(48px,6vh,80px)',
        display: 'grid', gridTemplateColumns: '56% 44%',
        alignItems: 'center', gap: '48px',
      }}>
        <div>
          <span style={{
            fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#fff', background: '#123E7A',
            display: 'inline-block', padding: '5px 14px', borderRadius: '999px',
            marginBottom: '28px',
          }}>Treasury · Leadership · Adventure · Growth</span>

          <h1 style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            fontWeight: 800, color: '#123E7A',
            lineHeight: 1.05, letterSpacing: '-0.025em',
            marginBottom: '22px',
          }}>
            Building a<br />Stronger <span style={{
              position: 'relative', display: 'inline-block',
            }}>Me<span style={{
              color: '#F7D7DC',
              fontFamily: "'Caveat', cursive",
              fontSize: '0.92em',
            }}>.</span></span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(15px, 1.3vw, 18px)',
            color: 'rgba(47,52,58,0.8)', lineHeight: 1.75,
            marginBottom: '36px', maxWidth: '440px',
          }}>
            Treasury Manager. Speaker. Toastmasters leader. Adventurer.
            One purpose — to grow, lead, and inspire.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/about" style={{
              background: '#123E7A', color: '#fff',
              padding: '14px 30px', borderRadius: '999px',
              fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              textDecoration: 'none', boxShadow: '0 6px 24px rgba(18,62,122,0.22)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(18,62,122,0.30)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(18,62,122,0.22)' }}
            >My Journey <span style={{ opacity: 0.7 }}>→</span></Link>
            <Link to="/blogs" style={{
              background: '#fff', color: '#123E7A',
              padding: '14px 30px', borderRadius: '999px',
              fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700,
              border: '1.5px solid rgba(18,62,122,0.2)', display: 'inline-block',
              textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#123E7A'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(18,62,122,0.2)'}
            >Read the Journal</Link>
          </div>
        </div>

        {/* Photo card */}
        <div style={{ position: 'relative', paddingBottom: '24px', paddingRight: '24px' }}>
          {/* Blush frame */}
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: 'calc(100% - 20px)', height: 'calc(100% - 20px)',
            background: '#F7D7DC', borderRadius: '28px',
          }} />
          <div style={{
            position: 'relative',
            borderRadius: '24px', overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(18,62,122,0.14)',
            aspectRatio: '4/5',
          }}>
            <img
              src="Assets/card-6.jpg"
              alt="Jessly Chettaniyal"
              fetchpriority="high"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Stat cards */}
          <div style={{
            position: 'absolute', bottom: '-4px', left: '-20px',
            background: '#fff', borderRadius: '16px',
            padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            border: '1px solid rgba(18,62,122,0.06)',
          }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '24px', fontWeight: 800, color: '#123E7A', lineHeight: 1 }}>10+</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#2F343A', opacity: 0.65, marginTop: '3px' }}>Years in Finance</p>
          </div>
          <div style={{
            position: 'absolute', top: '28px', right: '-4px',
            background: '#123E7A', borderRadius: '16px',
            padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(18,62,122,0.25)',
          }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '24px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>CTP®</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '3px' }}>Certified</p>
          </div>
          <div style={{
            position: 'absolute', top: '44%', left: '-28px',
            background: '#F7D7DC', borderRadius: '14px',
            padding: '12px 16px',
            boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
          }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '20px', fontWeight: 800, color: '#123E7A', lineHeight: 1 }}>15+</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: '#2F343A', opacity: 0.65, marginTop: '2px' }}>Clubs Chartered</p>
          </div>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <section style={{ background: '#123E7A', padding: '36px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '28px' }}>
          {STATS.map(s => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '6px', letterSpacing: '0.03em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pillars ─────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px,7vh,96px) 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C7A35B', marginBottom: '10px' }}>What Drives Me</p>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em' }}>Four Pillars. One Purpose.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'auto auto', gap: '16px' }}>
            {PILLARS.map((p, i) => (
              <Link key={p.to} to={p.to} style={{ textDecoration: 'none', gridColumn: i === 0 ? '1' : i === 1 ? '2' : 'auto' }}>
                <div style={{
                  position: 'relative', borderRadius: '24px', overflow: 'hidden',
                  height: i < 2 ? '340px' : '260px',
                  background: '#111',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.015)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)' }}
                >
                  <img
                    src={p.img} alt={p.label}
                    loading="lazy"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.78 }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${p.gradientStart} 0%, ${p.gradientEnd} 55%, transparent 100%)` }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px' }}>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '6px' }}>{p.sub}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                      <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{p.label}</h3>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote strip ─────────────────────────────────────────── */}
      <section style={{ background: '#F7D7DC', padding: '52px 32px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <svg width="32" height="24" viewBox="0 0 32 24" fill="#123E7A" opacity="0.2" style={{ marginBottom: '20px' }}>
            <path d="M0 24V14.4C0 6.24 4.8 1.44 14.4 0l1.92 2.88C11.68 4.16 9.28 7.04 8 12H14.4V24H0zM17.6 24V14.4C17.6 6.24 22.4 1.44 32 0l1.92 2.88C28.48 4.16 26.08 7.04 24.8 12H31.2V24H17.6z"/>
          </svg>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontStyle: 'italic',
            fontSize: 'clamp(18px, 2.2vw, 26px)',
            color: '#123E7A', lineHeight: 1.6, fontWeight: 400,
          }}>
            Growth is not a destination. It's a lifestyle.
          </p>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '30px', fontWeight: 700, color: '#123E7A', display: 'block', marginTop: '16px', opacity: 0.8 }}>Jessly</span>
        </div>
      </section>

      {/* ── Journal preview ─────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px,7vh,96px) 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C7A35B', marginBottom: '10px' }}>Growth Journal</p>
              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em' }}>Stories from the journey.</h2>
            </div>
            <Link to="/blogs" style={{
              color: '#123E7A', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700,
              textDecoration: 'none', border: '1.5px solid rgba(18,62,122,0.25)', padding: '10px 22px', borderRadius: '999px',
              whiteSpace: 'nowrap',
              transition: 'border-color 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#123E7A'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(18,62,122,0.25)'}
            >All posts →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {recent.map(p => (
              <Link key={p.slug} to={`/blogs/${p.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{
                  background: '#fff', borderRadius: '20px', overflow: 'hidden',
                  border: '1px solid rgba(18,62,122,0.07)',
                  boxShadow: '0 4px 20px rgba(18,62,122,0.06)',
                  height: '100%', display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(18,62,122,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(18,62,122,0.06)' }}
                >
                  {p.image && (
                    <div style={{ height: '180px', overflow: 'hidden', background: p.bg, flexShrink: 0, position: 'relative' }}>
                      <img src={p.image} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.88 }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35) 100%)' }} />
                      <div style={{
                        position: 'absolute', top: '14px', left: '14px',
                        background: p.pill, color: p.pillText,
                        fontFamily: "'Manrope', sans-serif", fontSize: '10px', fontWeight: 800,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        padding: '4px 11px', borderRadius: '999px',
                      }}>{p.category}</div>
                    </div>
                  )}
                  <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontWeight: 800, color: '#123E7A', lineHeight: 1.3, marginBottom: '8px' }}>{p.title}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(47,52,58,0.7)', lineHeight: 1.65, flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '14px' }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: 'rgba(47,52,58,0.45)' }}>
                      <span>{p.date}</span>
                      <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(47,52,58,0.35)', display: 'inline-block' }} />
                      <span>{p.read} read</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          section:first-of-type > div { grid-template-columns: 1fr !important; }
          section:first-of-type > div > div:last-child { display: none; }
        }
        @media (max-width: 680px) {
          section + section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 720px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
          .posts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../components/Img'
import CountUp from '../components/CountUp'
import { useInView } from '../hooks/useInView'
import { getPosts } from '../data/postStore'

const PILLARS = [
  {
    to: '/treasury', label: 'Treasury', sub: 'Finance & Strategy',
    img: 'Assets/card-3-cropped.png',
    grad: 'linear-gradient(to top, rgba(18,62,122,0.82) 0%, rgba(18,62,122,0.22) 55%, transparent 100%)',
  },
  {
    to: '/speaking', label: 'Speaking & Leadership', sub: 'Communication & Growth',
    img: 'Assets/card-1-cropped.jpg',
    grad: 'linear-gradient(to top, rgba(100,28,56,0.82) 0%, rgba(100,28,56,0.22) 55%, transparent 100%)',
  },
  {
    to: '/adventures', label: 'Adventures', sub: 'Beyond the Comfort Zone',
    img: 'Assets/card-2.jpg',
    grad: 'linear-gradient(to top, rgba(20,60,36,0.84) 0%, rgba(20,60,36,0.22) 55%, transparent 100%)',
  },
  {
    to: '/health', label: 'Health & Fitness', sub: 'Discipline & Resilience',
    img: 'Assets/card-4.jpg',
    grad: 'linear-gradient(to top, rgba(110,58,10,0.82) 0%, rgba(110,58,10,0.22) 55%, transparent 100%)',
  },
]

const STATS = [
  { num: '10+', label: 'Years in Treasury' },
  { num: 'CTP®', label: 'Certified Professional' },
  { num: '15+', label: 'Clubs Chartered' },
  { num: '1000+', label: 'Lives Impacted' },
  { num: '3×', label: 'Club Charter Founder' },
]

function TiltCard({ children, style, className, onClickLink }) {
  const ref = useRef(null)
  const reset = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }
  const tilt = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 14
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -14
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.025)`
  }
  return (
    <div ref={ref} style={{ transition: 'transform 0.2s cubic-bezier(.22,1,.36,1)', ...style }}
      className={className}
      onMouseMove={tilt}
      onMouseLeave={reset}
    >{children}</div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [statsRef, statsIn] = useInView()
  const [pillarsRef, pillarsIn] = useInView()
  const [postsRef, postsIn] = useInView()

  const recent = getPosts().slice(0, 3)

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: 'clamp(540px, 82vh, 760px)',
        display: 'flex', alignItems: 'center',
        marginTop: '-72px', paddingTop: '72px',   // pull up behind the transparent navbar
      }}>
        {/* Background image */}
        <Img
          src="Assets/hero.png"
          alt="Jessly Chettaniyal"
          fetchpriority="high"
          wrapStyle={{ position: 'absolute', inset: 0 }}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Readability scrim (light, fades left→right) */}
        <div className="hero-scrim" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(252, 250, 248, 0.36) 0%, rgba(252,250,248,0.86) 26%, rgba(252,250,248,0.45) 50%, rgba(252,250,248,0) 72%)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div className={`hero-inner${mounted ? ' hero-enter' : ''}`} style={{
          position: 'relative', width: '100%',
          maxWidth: '1200px', margin: '0 auto',
          padding: '0 32px',
        }}>
          <div style={{ maxWidth: '560px' }}>
            <p className="he-0" style={{
              fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#C08497', marginBottom: '22px',
            }}>Welcome to My Journey</p>

            <h1 className="he-1" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(46px, 6.2vw, 86px)',
              fontWeight: 600, color: '#123E7A',
              lineHeight: 1.04, letterSpacing: '-0.01em',
              marginBottom: '24px',
            }}>
              Building a<br />
              Stronger Me<span style={{ color: '#E8A0AE' }}>.</span>
            </h1>

            {/* Divider */}
            <div className="he-2" style={{ width: '64px', height: '2px', background: '#E8A0AE', marginBottom: '24px' }} />

            <p className="he-2" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(17px, 1.5vw, 21px)',
              color: '#2F343A', lineHeight: 1.5,
              marginBottom: '22px', maxWidth: '380px', fontWeight: 400,
            }}>
              Through finance, leadership, adventure, and continuous growth.
            </p>

            <div className="he-3" style={{
              display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px',
              marginBottom: '34px',
            }}>
              {['Treasury Manager', 'Speaker', 'Toastmasters Leader', 'Adventurer'].map((role, i) => (
                <span key={role} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  {i > 0 && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#E8A0AE', display: 'inline-block' }} />}
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500, color: '#5A6068' }}>{role}</span>
                </span>
              ))}
            </div>

            <div className="he-3" style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-press" style={{
                background: '#123E7A', color: '#fff',
                padding: '15px 32px', borderRadius: '999px',
                fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 8px 28px rgba(18,62,122,0.28)',
                transition: 'transform 0.15s, box-shadow 0.15s, background 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0e2f5e'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(18,62,122,0.36)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#123E7A'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(18,62,122,0.28)' }}
              >Explore My Journey</Link>
              <Link to="/treasury" style={{
                color: '#123E7A', fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'gap 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                onMouseLeave={e => e.currentTarget.style.gap = '8px'}
              >Learn More <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 760px) {
            .hero-scrim { background: linear-gradient(to right, rgba(252,250,248,0.97) 0%, rgba(252,250,248,0.9) 55%, rgba(252,250,248,0.55) 100%) !important; }
          }
        `}</style>
      </section>

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <section ref={statsRef} style={{ background: '#123E7A', padding: '36px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '28px' }}>
          {STATS.map((s, i) => (
            <div key={s.num} className={`reveal d${i} ${statsIn ? 'in-view' : ''}`} style={{ textAlign: 'center' }}>
              <CountUp value={s.num} start={statsIn} style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: '#fff', lineHeight: 1 }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '6px', letterSpacing: '0.03em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pillars ─────────────────────────────────────────────── */}
      <section ref={pillarsRef} style={{ padding: 'clamp(56px,7vh,96px) 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className={`reveal ${pillarsIn ? 'in-view' : ''}`} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C7A35B', marginBottom: '10px' }}>What Drives Me</p>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em' }}>Four Pillars. One Purpose.</h2>
          </div>

          <div className="r-pillars">
            {PILLARS.map((p, i) => (
              <Link key={p.to} to={p.to} style={{ textDecoration: 'none' }}>
                <TiltCard
                  className={`reveal d${i} ${pillarsIn ? 'in-view' : ''}`}
                  style={{
                    borderRadius: '24px', overflow: 'hidden',
                    height: '300px',
                    background: '#111', cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    position: 'relative',
                  }}
                >
                  <Img
                    src={p.img} alt={p.label} loading="lazy"
                    style={{ objectFit: 'cover', opacity: 0.78, position: 'absolute', inset: 0 }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: p.grad }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px' }}>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '6px' }}>{p.sub}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                      <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{p.label}</h3>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>
                </TiltCard>
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
            color: '#123E7A', lineHeight: 1.6,
          }}>
            Growth is not a destination. It's a lifestyle.
          </p>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '30px', fontWeight: 700, color: '#123E7A', display: 'block', marginTop: '16px', opacity: 0.8 }}>Jessly</span>
        </div>
      </section>

      {/* ── Journal preview ─────────────────────────────────────── */}
      <section ref={postsRef} style={{ padding: 'clamp(56px,7vh,96px) 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className={`reveal ${postsIn ? 'in-view' : ''}`} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C7A35B', marginBottom: '10px' }}>Growth Journal</p>
              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em' }}>Stories from the journey.</h2>
            </div>
            <Link to="/blogs" style={{
              color: '#123E7A', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700,
              border: '1.5px solid rgba(18,62,122,0.22)', padding: '10px 22px', borderRadius: '999px', whiteSpace: 'nowrap',
              transition: 'border-color 0.15s, background 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#123E7A'; e.currentTarget.style.background = '#f0f4fd' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(18,62,122,0.22)'; e.currentTarget.style.background = 'transparent' }}
            >All posts →</Link>
          </div>

          <div className="r-3col">
            {recent.map((p, i) => (
              <Link key={p.slug} to={`/blogs/${p.slug}`} style={{ textDecoration: 'none' }}>
                <article className={`card-lift reveal d${i} ${postsIn ? 'in-view' : ''}`} style={{
                  background: '#fff', borderRadius: '20px', overflow: 'hidden',
                  border: '1px solid rgba(18,62,122,0.07)',
                  boxShadow: '0 4px 20px rgba(18,62,122,0.06)',
                  height: '100%', display: 'flex', flexDirection: 'column',
                }}>
                  {p.image && (
                    <div style={{ height: '186px', overflow: 'hidden', background: p.bg, flexShrink: 0, position: 'relative' }}>
                      <Img src={p.image} alt={p.title} loading="lazy" style={{ objectFit: 'cover', opacity: 0.88 }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35) 100%)', pointerEvents: 'none' }} />
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
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(47,52,58,0.68)', lineHeight: 1.65, flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '14px' }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: 'rgba(47,52,58,0.4)' }}>
                      <span>{p.date}</span>
                      <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
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
    </div>
  )
}

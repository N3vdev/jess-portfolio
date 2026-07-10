import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { useInView } from '../hooks/useInView'

const STATS = [
  { num: '10+', label: 'Years in Treasury' },
  { num: 'CTP®', label: 'Certified Professional' },
  { num: '15+', label: 'Clubs Chartered' },
  { num: '1000+', label: 'Lives Impacted' },
]

const CHECKLIST = [
  'Professional Background in Treasury',
  'Toastmasters Leadership Journey',
  'Speaking Topics & Engagements',
  'Adventures & Experiences',
  'Health & Fitness Transformation',
]

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [storyRef, storyIn] = useInView()
  const [statsRef, statsIn] = useInView()

  useEffect(() => { const t = requestAnimationFrame(() => setMounted(true)); return () => cancelAnimationFrame(t) }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#F7D7DC', padding: '72px 32px 0' }}>
        <div className={`r-55${mounted ? ' hero-enter' : ''}`} style={{ maxWidth: '1200px', margin: '0 auto', alignItems: 'flex-end' }}>
          <div className="he-1" style={{ paddingBottom: '64px' }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B3A52', marginBottom: '16px' }}>About Me</p>
            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(34px, 4.5vw, 60px)', fontWeight: 800, color: '#123E7A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Hi, I'm Jessly.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px,1.2vw,16px)', color: '#2F343A', lineHeight: 1.75, marginBottom: '16px', maxWidth: '500px' }}>
              I am a Treasury Manager, Certified Treasury Professional, speaker, Toastmasters leader, adventurer, and someone who believes growth is a lifestyle.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px,1.2vw,16px)', color: '#2F343A', lineHeight: 1.75, maxWidth: '500px' }}>
              My journey has always been about becoming stronger — professionally, personally, physically, and mentally.
            </p>
          </div>
          <div className="he-photo" style={{ borderRadius: '20px 20px 0 0', overflow: 'hidden', height: '420px' }}>
            <Img src="Assets/card-7.jpg" alt="Jessly" fetchpriority="high" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} style={{ background: '#123E7A', padding: '40px 32px' }}>
        <div className="r-4col" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          {STATS.map((s, i) => (
            <div key={s.num} className={`reveal d${i} ${statsIn ? 'in-view' : ''}`}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '32px', fontWeight: 800, color: '#fff' }}>{s.num}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className={`reveal ${storyIn ? 'in-view' : ''}`} style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C07A3A', marginBottom: '16px' }}>My Story</p>
          <h2 className={`reveal d1 ${storyIn ? 'in-view' : ''}`} style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em', marginBottom: '28px' }}>
            My journey is built on four pillars: finance, leadership, adventure, and health.
          </h2>
          {[
            'This website brings together the different parts of who I am: finance, leadership, adventure, and health. Each area has shaped me in a different way and helped me become the person I am today.',
            'Whether I am leading treasury initiatives, building stronger Toastmasters clubs, speaking on stage, riding motorcycles, traveling, or working toward my fitness goals, I believe in showing up with intention and purpose.',
            'My mission is simple: keep growing, keep leading, and keep inspiring others to step into their own confidence.',
          ].map((p, i) => (
            <p key={i} className={`reveal d${i + 2} ${storyIn ? 'in-view' : ''}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.8, marginBottom: '20px' }}>{p}</p>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '36px 0' }}>
            {CHECKLIST.map((item, i) => (
              <div key={item} className={`reveal d${i} ${storyIn ? 'in-view' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#F7D7DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="#123E7A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote strip */}
      <section style={{ background: '#EAF0FB', padding: '48px 32px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 22px)', color: '#123E7A', maxWidth: '600px', margin: '0 auto' }}>
          "Different paths. One purpose. Continuous growth."
        </p>
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: '24px', fontWeight: 700, color: '#123E7A', display: 'block', marginTop: '12px' }}>Jessly</span>
      </section>

      <Footer />
    </div>
  )
}

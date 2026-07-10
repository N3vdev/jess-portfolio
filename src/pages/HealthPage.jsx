import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { useInView } from '../hooks/useInView'

const FOCUS = [
  { icon: '🏋️', label: 'Strength Training' },
  { icon: '⚖️', label: 'Weight Loss' },
  { icon: '💪', label: 'Muscle Definition' },
  { icon: '🥗', label: 'Nutrition' },
  { icon: '🚶', label: 'Walking & Cardio' },
  { icon: '🔁', label: 'Consistency' },
  { icon: '🧠', label: 'Mindset' },
]

export default function HealthPage() {
  const [mounted, setMounted] = useState(false)
  const [focusRef, focusIn] = useInView()
  const [storyRef, storyIn] = useInView()

  useEffect(() => { const t = requestAnimationFrame(() => setMounted(true)); return () => cancelAnimationFrame(t) }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#FEF6EE', padding: '72px 32px' }}>
        <div className={`r-55${mounted ? ' hero-enter' : ''}`} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="he-1">
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C07A3A', marginBottom: '16px' }}>Health & Fitness</p>
            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(26px, 3.2vw, 46px)', fontWeight: 800, color: '#123E7A', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Building a stronger me starts with daily discipline.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.75, maxWidth: '480px', marginBottom: '16px' }}>
              My health and fitness journey is about strength, confidence, consistency, and becoming the best version of myself.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.75, maxWidth: '480px' }}>
              I focus on fitness, nutrition, movement, and habits that help me feel strong from the inside out. This journey is not about perfection — it is about progress.
            </p>
          </div>
          <div className="he-photo" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 60px rgba(0,0,0,0.10)', aspectRatio: '3/4' }}>
            <Img src="Assets/card-8.png" alt="Health and fitness" fetchpriority="high" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section ref={focusRef} style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className={`reveal ${focusIn ? 'in-view' : ''}`} style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C07A3A', marginBottom: '12px' }}>Focus Areas</p>
          <h2 className={`reveal d1 ${focusIn ? 'in-view' : ''}`} style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em', marginBottom: '36px' }}>What I work on every day.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            {FOCUS.map((f, i) => (
              <div key={f.label} className={`reveal d${i % 5} ${focusIn ? 'in-view' : ''}`} style={{ background: '#FEF6EE', borderRadius: '16px', padding: '22px 20px', textAlign: 'center', border: '1px solid rgba(192,122,58,0.14)', minWidth: '110px', flex: '1 1 110px', transition: 'background 0.18s, transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fde7ca'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FEF6EE'; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{ fontSize: '26px', marginBottom: '10px' }}>{f.icon}</div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, color: '#C07A3A' }}>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className={`reveal ${storyIn ? 'in-view' : ''}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.8, marginBottom: '20px' }}>
            Health has always been part of my "Building a Stronger Me" mission. Every workout, every meal choice, every early morning is a vote for the person I want to become.
          </p>
          <p className={`reveal d1 ${storyIn ? 'in-view' : ''}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.8 }}>
            The discipline I build at the gym carries into every other area of my life — my work, my speaking, my leadership, and my adventures. It all starts with choosing to show up.
          </p>
        </div>
      </section>

      {/* Quote strip */}
      <section style={{ background: '#FEF6EE', padding: '48px 32px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 22px)', color: '#C07A3A', maxWidth: '620px', margin: '0 auto' }}>
          "Discipline today. Strength tomorrow. Confidence always."
        </p>
      </section>

      <Footer />
    </div>
  )
}

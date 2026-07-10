import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { useInView } from '../hooks/useInView'

const FOCUS = [
  'Cash Management', 'Risk Awareness', 'Banking Strategy',
  'Financial Controls', 'Treasury Operations', 'Acquisition Banking Support',
  'Process Improvement', 'CTP Credential',
]

export default function TreasuryPage() {
  const [mounted, setMounted] = useState(false)
  const [bodyRef, bodyIn] = useInView()
  const [ctaRef, ctaIn] = useInView()

  useEffect(() => { const t = requestAnimationFrame(() => setMounted(true)); return () => cancelAnimationFrame(t) }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#EAF0FB', padding: '72px 32px' }}>
        <div className={`r-55${mounted ? ' hero-enter' : ''}`} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="he-1">
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#123E7A', opacity: 0.6, marginBottom: '16px' }}>Treasury</p>
            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, color: '#123E7A', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Treasury is where strategy meets execution.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.75, maxWidth: '480px' }}>
              As a Treasury Manager and Certified Treasury Professional, I focus on cash management, banking relationships, operational efficiency, process improvement, and financial strategy.
            </p>
          </div>
          <div className="he-photo" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 60px rgba(18,62,122,0.12)', aspectRatio: '4/3' }}>
            <Img src="Assets/card-9.png" alt="Treasury" fetchpriority="high" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={bodyRef} style={{ padding: '80px 32px' }}>
        <div className="r-2col" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className={`reveal ${bodyIn ? 'in-view' : ''}`}>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em', marginBottom: '20px' }}>What I do in Treasury</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A', lineHeight: 1.8, marginBottom: '16px' }}>
              My treasury work is built on accuracy, accountability, and forward thinking. I enjoy creating structure, solving problems, improving workflows, and supporting business growth through strong financial operations.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A', lineHeight: 1.8 }}>
              I help organizations understand their financial position, manage risk effectively, and make decisions with confidence backed by clean, reliable data.
            </p>
          </div>
          <div className={`reveal d2 ${bodyIn ? 'in-view' : ''}`}>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '18px', fontWeight: 700, color: '#123E7A', marginBottom: '20px' }}>Key Focus Areas</h2>
            <div className="r-2col" style={{ gap: '10px' }}>
              {FOCUS.map((item, i) => (
                <div key={item} className={`reveal d${i % 4} ${bodyIn ? 'in-view' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F3F5F7', borderRadius: '12px', padding: '12px 16px' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#EAF0FB' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#F3F5F7' }}
                >
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#123E7A', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#2F343A', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: '#123E7A', padding: '48px 32px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 22px)', color: '#F7D7DC', maxWidth: '600px', margin: '0 auto' }}>
          "I turn complexity into clarity and numbers into meaningful impact."
        </p>
      </section>

      {/* CTA */}
      <section ref={ctaRef} style={{ padding: '72px 32px', textAlign: 'center' }}>
        <h2 className={`reveal ${ctaIn ? 'in-view' : ''}`} style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 800, color: '#123E7A', marginBottom: '16px' }}>Want to connect professionally?</h2>
        <p className={`reveal d1 ${ctaIn ? 'in-view' : ''}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A', marginBottom: '28px' }}>Let's talk treasury, finance, or career growth.</p>
        <div className={`reveal d2 ${ctaIn ? 'in-view' : ''}`} style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.linkedin.com/in/jesslychettaniyal" target="_blank" rel="noreferrer" className="btn-press" style={{ background: '#123E7A', color: '#fff', padding: '13px 28px', borderRadius: '999px', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700, transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#0e2f5e'}
            onMouseLeave={e => e.currentTarget.style.background = '#123E7A'}
          >Connect on LinkedIn</a>
          <a href="mailto:jesschettaniyal@outlook.com" className="btn-press" style={{ background: 'transparent', color: '#123E7A', padding: '13px 28px', borderRadius: '999px', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700, border: '1.5px solid #123E7A', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#EAF0FB'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >Send an Email</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'

const TOPICS = [
  { icon: '🎯', title: 'Leadership Growth', desc: 'Building leaders who lead with purpose and impact.' },
  { icon: '🗣️', title: 'Communication Confidence', desc: 'Finding and using your authentic voice.' },
  { icon: '✨', title: 'Personal Branding', desc: 'Telling your story in a way that opens doors.' },
  { icon: '📈', title: 'Club Growth & Retention', desc: 'Strategies for building thriving communities.' },
  { icon: '🎤', title: 'Public Speaking', desc: 'From nervous beginner to confident communicator.' },
  { icon: '🤝', title: 'Building Community', desc: 'Creating spaces where people belong and grow.' },
  { icon: '🚀', title: 'Leading with Purpose', desc: 'Aligning your leadership with your values.' },
]

export default function SpeakingPage() {
  const [mounted, setMounted] = useState(false)
  const [bodyRef, bodyIn] = useInView()

  useEffect(() => { const t = requestAnimationFrame(() => setMounted(true)); return () => cancelAnimationFrame(t) }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#FDF0F2', padding: '72px 32px' }}>
        <div className={`r-55${mounted ? ' hero-enter' : ''}`} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="he-1">
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B3A52', marginBottom: '16px' }}>Speaking & Leadership</p>
            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(26px, 3.2vw, 46px)', fontWeight: 800, color: '#123E7A', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Leadership is not just about having a title. It is about helping people grow.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.75, maxWidth: '480px', marginBottom: '28px' }}>
              Through Toastmasters and District 46 leadership, I have developed a passion for communications, public speaking, mentorship, and community building.
            </p>
            <Link to="/contact" className="btn-press" style={{ background: '#123E7A', color: '#fff', padding: '13px 28px', borderRadius: '999px', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700, display: 'inline-block', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#0e2f5e'}
              onMouseLeave={e => e.currentTarget.style.background = '#123E7A'}
            >Invite Me to Speak</Link>
          </div>
          <div className="he-photo" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 60px rgba(0,0,0,0.10)', aspectRatio: '4/3' }}>
            <Img src="Assets/card-2.jpg" alt="Jessly speaking" fetchpriority="high" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={bodyRef} style={{ padding: '80px 32px' }}>
        <div className="r-2col" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className={`reveal ${bodyIn ? 'in-view' : ''}`}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C07A3A', marginBottom: '12px' }}>Toastmasters Journey</p>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em', marginBottom: '20px' }}>Every voice has power.</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A', lineHeight: 1.8, marginBottom: '16px' }}>
              I have chartered over 15 Toastmasters clubs, served in District 46 leadership as Club Growth Director, and mentored hundreds of speakers in finding their authentic voice.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A', lineHeight: 1.8 }}>
              My leadership style is warm, empathetic, strategic, and service-driven. I believe powerful communication transforms careers, teams, and communities.
            </p>
          </div>
          <div className={`reveal d2 ${bodyIn ? 'in-view' : ''}`}>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '18px', fontWeight: 700, color: '#123E7A', marginBottom: '20px' }}>Speaking Topics</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {TOPICS.map((t, i) => (
                <div key={t.title} className={`reveal d${i % 5} ${bodyIn ? 'in-view' : ''}`} style={{ background: '#F3F5F7', borderRadius: '14px', padding: '14px 16px', display: 'flex', gap: '14px', alignItems: 'flex-start', transition: 'background 0.18s, transform 0.18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#FDF0F2'; e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#F3F5F7'; e.currentTarget.style.transform = 'none' }}
                >
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700, color: '#123E7A', marginBottom: '3px' }}>{t.title}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#2F343A' }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote strip */}
      <section style={{ background: '#FDF0F2', padding: '48px 32px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 22px)', color: '#8B3A52', maxWidth: '600px', margin: '0 auto' }}>
          "Every voice has power. I help you use yours."
        </p>
      </section>

      <Footer />
    </div>
  )
}

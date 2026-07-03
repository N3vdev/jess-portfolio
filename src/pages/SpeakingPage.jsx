import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#FDF0F2', padding: '72px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '55% 45%', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B3A52', marginBottom: '16px' }}>Speaking & Leadership</p>
            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(26px, 3.2vw, 46px)', fontWeight: 800, color: '#123E7A', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Leadership is not just about having a title. It is about helping people grow.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.75, maxWidth: '480px', marginBottom: '28px' }}>
              Through Toastmasters and District 46 leadership, I have developed a passion for communications, public speaking, mentorship, and community building.
            </p>
            <Link to="/contact" style={{ background: '#123E7A', color: '#fff', padding: '13px 28px', borderRadius: '999px', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700, display: 'inline-block', textDecoration: 'none' }}>Invite Me to Speak</Link>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 60px rgba(0,0,0,0.10)', aspectRatio: '4/3' }}>
            <img src="Assets/card-2.jpg" alt="Jessly speaking" fetchpriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Toastmasters */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C07A3A', marginBottom: '12px' }}>Toastmasters Journey</p>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em', marginBottom: '20px' }}>Every voice has power.</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A', lineHeight: 1.8, marginBottom: '16px' }}>
              I have chartered over 15 Toastmasters clubs, served in District 46 leadership as Club Growth Director, and mentored hundreds of speakers in finding their authentic voice.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A', lineHeight: 1.8 }}>
              My leadership style is warm, empathetic, strategic, and service-driven. I believe powerful communication transforms careers, teams, and communities.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '18px', fontWeight: 700, color: '#123E7A', marginBottom: '20px' }}>Speaking Topics</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {TOPICS.map(t => (
                <div key={t.title} style={{ background: '#F3F5F7', borderRadius: '14px', padding: '16px 18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
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

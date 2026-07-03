import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ADVENTURES = [
  { icon: '🪂', label: 'Skydiving' },
  { icon: '🏍️', label: 'Motorcycles' },
  { icon: '🤿', label: 'Scuba Diving' },
  { icon: '🪂', label: 'Paragliding' },
  { icon: '🏄', label: 'Wakeboarding' },
  { icon: '✈️', label: 'Travel' },
]

export default function AdventuresPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#F0F7F4', padding: '72px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '50% 50%', gap: '48px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2D6B50', marginBottom: '16px' }}>Adventures</p>
            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, color: '#123E7A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Adventure keeps me brave.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.75, maxWidth: '460px', marginBottom: '16px' }}>
              From motorcycles to skydiving, scuba diving, paragliding, wakeboarding, and new experiences — adventure reminds me that growth happens outside the comfort zone.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.75, maxWidth: '460px' }}>
              This part of my life keeps me curious, bold, and open to challenges. It is where I learn courage, patience, trust, and resilience in a different way.
            </p>
          </div>
          {/* Image grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {['card-1.jpg', 'card-3.png', 'card-4.jpg', 'card-5.jpg'].map((img, i) => (
              <div key={img} style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: i === 0 ? '1/1.2' : '1/1', gridRow: i === 0 ? 'span 1' : '' }}>
                <img src={`Assets/${img}`} alt="" loading={i === 0 ? 'eager' : 'lazy'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I've done */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C07A3A', marginBottom: '12px' }}>What I've Done</p>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 800, color: '#123E7A', letterSpacing: '-0.02em', marginBottom: '36px' }}>Adventures that shaped who I am.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '14px' }}>
            {ADVENTURES.map(a => (
              <div key={a.label} style={{ background: '#F0F7F4', borderRadius: '16px', padding: '24px 16px', textAlign: 'center', border: '1px solid rgba(45,107,80,0.12)' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{a.icon}</div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 700, color: '#2D6B50' }}>{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.8, marginBottom: '20px' }}>
            Adventure is not just about adrenaline. For me, it's about becoming the kind of person who says yes to life. Every jump, every dive, every new destination has taught me something about myself.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#2F343A', lineHeight: 1.8 }}>
            The lessons I've learned in the air, on the water, and on the road directly apply to how I lead, how I speak, and how I tackle challenges in business and life.
          </p>
        </div>
      </section>

      {/* Quote strip */}
      <section style={{ background: '#F0F7F4', padding: '48px 32px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 22px)', color: '#2D6B50', maxWidth: '600px', margin: '0 auto' }}>
          "Life begins at the end of your comfort zone."
        </p>
      </section>

      <Footer />
    </div>
  )
}

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const inp = {
    width: '100%', background: '#fff',
    border: '1.5px solid rgba(18,62,122,0.15)',
    borderRadius: '12px', padding: '13px 16px',
    fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.15s',
  }

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    window.location.href = `mailto:jesschettaniyal@outlook.com?subject=${encodeURIComponent(subject || 'Website enquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    setSent(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero strip */}
      <section style={{ background: '#123E7A', padding: '64px 32px 72px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F7D7DC', marginBottom: '14px' }}>Contact</p>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>Let's Connect.</h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, maxWidth: '500px' }}>
            Whether you'd like to connect professionally, collaborate on opportunities, invite me to speak, or simply follow the journey — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section style={{ padding: '64px 32px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '60% 40%', gap: '60px', alignItems: 'start' }}>

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 8px 48px rgba(18,62,122,0.08)', border: '1px solid rgba(18,62,122,0.06)' }}>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '22px', fontWeight: 800, color: '#123E7A', marginBottom: '28px' }}>Send a Message</h2>
            {sent
              ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#F0F7F4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D6B50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '18px', fontWeight: 700, color: '#123E7A' }}>Opening your email client…</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#2F343A', marginTop: '8px' }}>If it didn't open, email jesschettaniyal@outlook.com directly.</p>
                </div>
              )
              : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(18,62,122,0.5)', display: 'block', marginBottom: '8px' }}>Your Name</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Jane Smith" style={inp} onFocus={e => e.target.style.borderColor = '#123E7A'} onBlur={e => e.target.style.borderColor = 'rgba(18,62,122,0.15)'} />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(18,62,122,0.5)', display: 'block', marginBottom: '8px' }}>Your Email</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required placeholder="jane@example.com" style={inp} onFocus={e => e.target.style.borderColor = '#123E7A'} onBlur={e => e.target.style.borderColor = 'rgba(18,62,122,0.15)'} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(18,62,122,0.5)', display: 'block', marginBottom: '8px' }}>Subject</label>
                    <input name="subject" value={form.subject} onChange={handle} placeholder="Speaking invitation / Collaboration / Say hello" style={inp} onFocus={e => e.target.style.borderColor = '#123E7A'} onBlur={e => e.target.style.borderColor = 'rgba(18,62,122,0.15)'} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(18,62,122,0.5)', display: 'block', marginBottom: '8px' }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={6} placeholder="Tell me what's on your mind..." style={{ ...inp, resize: 'vertical', lineHeight: 1.65 }} onFocus={e => e.target.style.borderColor = '#123E7A'} onBlur={e => e.target.style.borderColor = 'rgba(18,62,122,0.15)'} />
                  </div>
                  <button type="submit" style={{ background: '#123E7A', color: '#fff', border: 'none', borderRadius: '999px', padding: '15px', fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontWeight: 700, cursor: 'pointer', transition: 'background 0.15s' }} onMouseEnter={e => e.currentTarget.style.background = '#0e2f5e'} onMouseLeave={e => e.currentTarget.style.background = '#123E7A'}>Send Message</button>
                </form>
              )
            }
          </div>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 700, color: 'rgba(18,62,122,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Email</p>
              <a href="mailto:jesschettaniyal@outlook.com" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#123E7A', textDecoration: 'none', fontWeight: 500 }}>jesschettaniyal@outlook.com</a>
            </div>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 700, color: 'rgba(18,62,122,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Phone</p>
              <a href="tel:9142551687" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#123E7A', textDecoration: 'none', fontWeight: 500 }}>914-255-1687</a>
            </div>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 700, color: 'rgba(18,62,122,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>LinkedIn</p>
              <a href="https://www.linkedin.com/in/jesslychettaniyal" target="_blank" rel="noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#123E7A', textDecoration: 'none', fontWeight: 500 }}>linkedin.com/in/jesslychettaniyal</a>
            </div>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 700, color: 'rgba(18,62,122,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Website</p>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#123E7A', fontWeight: 500 }}>itsjessly.com</span>
            </div>
            <div style={{ marginTop: '8px', background: '#F7D7DC', borderRadius: '16px', padding: '20px 24px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: '14px', color: '#123E7A', lineHeight: 1.65 }}>
                "Let's build something meaningful together."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          section:last-of-type > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useInView } from '../hooks/useInView'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formRef, formIn] = useInView()

  useEffect(() => { const t = requestAnimationFrame(() => setMounted(true)); return () => cancelAnimationFrame(t) }, [])

  const inp = {
    width: '100%', background: '#fff',
    border: '1.5px solid rgba(18,62,122,0.13)',
    borderRadius: '12px', padding: '13px 16px',
    fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#2F343A',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  }

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    window.location.href = `mailto:jesschettaniyal@outlook.com?subject=${encodeURIComponent(subject || 'Website enquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    setSent(true)
  }

  const focusInp = (e) => { e.target.style.borderColor = '#123E7A'; e.target.style.boxShadow = '0 0 0 3px rgba(18,62,122,0.08)' }
  const blurInp  = (e) => { e.target.style.borderColor = 'rgba(18,62,122,0.13)'; e.target.style.boxShadow = 'none' }

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero strip */}
      <section style={{ background: '#123E7A', padding: '64px 32px 72px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className={mounted ? 'he-0 hero-enter' : ''} style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F7D7DC', marginBottom: '14px' }}>Contact</p>
          <h1 className={mounted ? 'he-1 hero-enter' : ''} style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>Let's Connect.</h1>
          <p className={mounted ? 'he-2 hero-enter' : ''} style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, maxWidth: '500px' }}>
            Whether you'd like to connect professionally, collaborate, invite me to speak, or simply say hello — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section ref={formRef} style={{ padding: '64px 32px 80px' }}>
        <div className="r-60" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Form */}
          <div className={`reveal ${formIn ? 'in-view' : ''}`} style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 8px 48px rgba(18,62,122,0.08)', border: '1px solid rgba(18,62,122,0.06)' }}>
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
                  <div className="r-2col" style={{ gap: '16px' }}>
                    <div>
                      <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(18,62,122,0.5)', display: 'block', marginBottom: '8px' }}>Your Name</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Jane Smith" style={inp} onFocus={focusInp} onBlur={blurInp} />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(18,62,122,0.5)', display: 'block', marginBottom: '8px' }}>Your Email</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required placeholder="jane@example.com" style={inp} onFocus={focusInp} onBlur={blurInp} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(18,62,122,0.5)', display: 'block', marginBottom: '8px' }}>Subject</label>
                    <input name="subject" value={form.subject} onChange={handle} placeholder="Speaking invitation / Collaboration / Say hello" style={inp} onFocus={focusInp} onBlur={blurInp} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(18,62,122,0.5)', display: 'block', marginBottom: '8px' }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={6} placeholder="Tell me what's on your mind..." style={{ ...inp, resize: 'vertical', lineHeight: 1.65 }} onFocus={focusInp} onBlur={blurInp} />
                  </div>
                  <button type="submit" className="btn-press" style={{ background: '#123E7A', color: '#fff', border: 'none', borderRadius: '999px', padding: '15px', fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontWeight: 700, cursor: 'pointer', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#0e2f5e'}
                    onMouseLeave={e => e.currentTarget.style.background = '#123E7A'}
                  >Send Message →</button>
                </form>
              )
            }
          </div>

          {/* Contact details */}
          <div className={`reveal d2 ${formIn ? 'in-view' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              { label: 'Email', href: 'mailto:jesschettaniyal@outlook.com', text: 'jesschettaniyal@outlook.com' },
              { label: 'Phone', href: 'tel:9142551687', text: '914-255-1687' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jesslychettaniyal', text: 'linkedin.com/in/jesslychettaniyal', external: true },
              { label: 'Website', text: 'itsjessly.com' },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '11px', fontWeight: 700, color: 'rgba(18,62,122,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>{item.label}</p>
                {item.href
                  ? <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#123E7A', fontWeight: 500, transition: 'opacity 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >{item.text}</a>
                  : <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#123E7A', fontWeight: 500 }}>{item.text}</span>
                }
              </div>
            ))}
            <div style={{ marginTop: '8px', background: '#F7D7DC', borderRadius: '16px', padding: '22px 24px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: '14px', color: '#123E7A', lineHeight: 1.65 }}>
                "Let's build something meaningful together."
              </p>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: '22px', fontWeight: 700, color: '#123E7A', display: 'block', marginTop: '8px' }}>Jessly</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const field = {
  background: 'rgba(255,255,255,0.07)',
  border: '1.5px solid rgba(255,255,255,0.13)',
  borderRadius: '14px',
  padding: '16px 20px',
  fontFamily: "'Nunito', sans-serif",
  fontSize: '15px', fontWeight: 500,
  color: '#fff',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

const pill = (children, style = {}) => (
  <div style={{
    display: 'inline-block', alignSelf: 'flex-start',
    background: 'rgba(255,255,255,0.09)', borderRadius: '999px',
    padding: '6px 16px',
    fontFamily: "'Nunito', sans-serif", fontSize: '11px', fontWeight: 800,
    color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase',
    marginBottom: '22px', ...style,
  }}>{children}</div>
)

export default function ContactSection() {
  return (
    <div id="s6" style={{
      position: 'relative', flexShrink: 0,
      height: 'calc(100vh - 20px)', marginTop: '10px',
      borderRadius: '20px', overflow: 'hidden',
      background: '#0f0f1a',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: '48px',
      padding: '52px 56px 0',
      boxSizing: 'border-box',
    }}>

      {/* ── Left: connect info ── */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {pill('say hi')}

        <h2 style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 'clamp(38px, 4.8vw, 72px)',
          color: '#fff', lineHeight: 1.0,
          margin: '0 0 28px', letterSpacing: '-0.02em',
        }}>let's<br />connect.</h2>

        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 'clamp(14px, 1.1vw, 16px)', fontWeight: 400,
          color: 'rgba(255,255,255,0.48)',
          lineHeight: 1.78, margin: '0 0 40px',
          maxWidth: '340px',
        }}>
          Whether it's treasury talk, Toastmasters, an upcoming adventure,
          or just a good conversation — I'm always up for it.
        </p>

        <div style={{
          fontFamily: "'Nunito', sans-serif", fontSize: '11px', fontWeight: 800,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)', marginBottom: '8px',
        }}>email</div>
        <a href="mailto:jessly@email.com" style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 'clamp(16px, 1.6vw, 24px)',
          color: '#c5ef5e', textDecoration: 'none',
          letterSpacing: '-0.01em', marginBottom: '48px',
          transition: 'opacity 0.2s', display: 'inline-block',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >jessly@email.com</a>

        <div style={{
          position: 'absolute', bottom: '20%', left: '6%',
          pointerEvents: 'none', zIndex: 2,
          animation: 'doodleFloat 3.4s ease-in-out infinite',
        }}>
          <svg viewBox="0 0 72 64" width="62" height="55">
            <path d="M 36 60 C 36 60 4 38 4 18 C 4 8 13 2 22 4 C 29 6 36 14 36 14 C 36 14 43 6 50 4 C 59 2 68 8 68 18 C 68 38 36 60 36 60 Z"
              fill="#e85c30" opacity="0.7" />
          </svg>
        </div>

        <div style={{
          position: 'absolute', top: '14%', left: '42%',
          pointerEvents: 'none', zIndex: 2,
          animation: 'doodleWiggle 4s ease-in-out infinite 0.8s',
        }}>
          <svg viewBox="0 0 90 90" width="72" height="72">
            <path d="M45 4 C45 4 40.5 34 36 45 C31.5 56 4 45 4 45 C4 45 31.5 34 36 45 C40.5 56 45 86 45 86 C45 86 49.5 56 54 45 C58.5 34 86 45 86 45 C86 45 58.5 56 54 45 C49.5 34 45 4 45 4 Z" fill="#c5ef5e" opacity="0.55"/>
          </svg>
        </div>
      </div>

      {/* ── Right: form ── */}
      <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '52px' }}>
        {pill('contact')}

        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}
          onSubmit={e => e.preventDefault()}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input className="cf-input" placeholder="name" style={field} />
            <input className="cf-input" placeholder="email" type="email" style={field} />
          </div>

          <input className="cf-input" placeholder="subject" style={field} />

          <textarea
            className="cf-input"
            placeholder="message"
            rows={5}
            style={{ ...field, resize: 'none', flex: 1 }}
          />

          <button
            type="submit"
            style={{
              background: '#c5ef5e', color: '#111',
              border: 'none', borderRadius: '999px',
              padding: '16px 40px',
              fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 800,
              cursor: 'pointer', alignSelf: 'flex-start',
              letterSpacing: '0.02em',
              transition: 'transform 0.15s, background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = '#d4ff6e' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#c5ef5e' }}
          >send it →</button>
        </form>
      </div>

      <div style={{
        position: 'absolute', bottom: '-18px', left: 0, right: 0,
        textAlign: 'center', pointerEvents: 'none', userSelect: 'none', zIndex: 0,
        fontFamily: "'Caveat', cursive",
        fontSize: 'clamp(110px, 17vw, 240px)',
        color: 'rgba(255,255,255,0.035)',
        letterSpacing: '-0.01em', lineHeight: 1,
        whiteSpace: 'nowrap',
      }}>jessly</div>

    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import { getHomePosts } from '../data/postStore'

const pillStyle = (p) => ({
  display: 'inline-block',
  background: p.pill,
  color: p.pillText,
  fontFamily: "'Nunito', sans-serif",
  fontSize: '11px', fontWeight: 800,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  padding: '5px 13px', borderRadius: '999px',
})

export default function WorkGallery() {
  const navigate = useNavigate()
  const posts = getHomePosts()

  return (
    <div id="s3" style={{
      position: 'relative', flexShrink: 0,
      height: '100vh', borderRadius: '20px',
      background: '#edecea', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      padding: '52px 48px 48px',
      boxSizing: 'border-box',
    }}>

      {/* Section header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexShrink: 0 }}>
        <h2 style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 'clamp(30px, 3.8vw, 56px)',
          color: '#111', lineHeight: 1.0, margin: 0,
        }}>thoughts &amp; stories</h2>
        <span
          onClick={() => {
            sessionStorage.setItem('returnScrollY', String(window.scrollY))
            navigate('/blogs')
          }}
          style={{
            fontFamily: "'Nunito', sans-serif", fontSize: '14px',
            fontWeight: 700, color: 'rgba(17,17,17,0.45)',
            cursor: 'pointer', letterSpacing: '0.02em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#111'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.45)'}
        >all posts →</span>
      </div>

      {/* Cards grid */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1.52fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        gap: '14px',
        minHeight: 0,
      }}>

        {/* Featured card */}
        {(() => {
          const p = posts[0]
          return (
            <div onClick={() => { sessionStorage.setItem('returnScrollY', String(window.scrollY)); navigate(`/blogs/${p.slug}`) }}
              style={{
                gridRow: '1 / 4',
                borderRadius: '18px',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                overflow: 'hidden',
                position: 'relative',
                background: p.image ? '#000' : p.bg,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 18px 48px rgba(0,0,0,0.28)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.18)' }}
            >
              {p.image && (
                <img src={p.image} alt={p.title} style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  opacity: 0.72,
                }} />
              )}

              {/* gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                pointerEvents: 'none',
              }} />

              {/* watermark */}
              <div style={{
                position: 'absolute', bottom: '-20px', right: '-10px',
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '180px', lineHeight: 1,
                color: 'rgba(255,255,255,0.05)',
                userSelect: 'none', pointerEvents: 'none',
              }}>01</div>

              {/* content */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '28px 32px',
              }}>
                <div style={{ ...pillStyle(p), alignSelf: 'flex-start', marginBottom: '14px' }}>{p.category}</div>

                <h3 style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: 'clamp(22px, 2.4vw, 36px)',
                  color: p.image ? '#fff' : p.text,
                  lineHeight: 1.12, margin: '0 0 12px',
                }}>{p.title}</h3>

                <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 'clamp(13px, 1vw, 15px)',
                  color: p.image ? 'rgba(255,255,255,0.72)' : p.sub,
                  lineHeight: 1.7, margin: '0 0 20px',
                }}>{p.excerpt}</p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontFamily: "'Nunito', sans-serif", fontSize: '12px',
                  fontWeight: 600, color: p.image ? 'rgba(255,255,255,0.55)' : p.sub,
                }}>
                  <span>{p.date}</span>
                  <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: p.image ? 'rgba(255,255,255,0.55)' : p.sub }} />
                  <span>{p.read} read</span>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Small cards */}
        {posts.slice(1).map((p) => (
          <div key={p.slug}
            onClick={() => { sessionStorage.setItem('returnScrollY', String(window.scrollY)); navigate(`/blogs/${p.slug}`) }}
            style={{
              background: p.bg,
              borderRadius: '18px',
              display: 'flex', flexDirection: 'column',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
              transition: 'transform 0.22s ease, box-shadow 0.22s ease',
              overflow: 'hidden',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.14)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.08)' }}
          >
            <div style={{ display: 'flex', flexDirection: 'row', gap: '14px', padding: '14px', alignItems: 'stretch', flex: 1 }}>
              {p.image && (
                <div style={{ width: '30%', flexShrink: 0, borderRadius: '10px', overflow: 'hidden' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2px 0' }}>
                <div>
                  <div style={pillStyle(p)}>{p.category}</div>
                  <h3 style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 'clamp(13px, 1.05vw, 15px)',
                    fontWeight: 900, color: p.text,
                    lineHeight: 1.25, margin: '8px 0 5px',
                  }}>{p.title}</h3>
                  <p style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 'clamp(11px, 0.8vw, 12px)',
                    color: p.sub, lineHeight: 1.55, margin: 0,
                  }}>{p.excerpt}</p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontFamily: "'Nunito', sans-serif", fontSize: '11px',
                  fontWeight: 600, color: p.sub, marginTop: '10px',
                }}>
                  <span>{p.date}</span>
                  <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: p.sub }} />
                  <span>{p.read} read</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

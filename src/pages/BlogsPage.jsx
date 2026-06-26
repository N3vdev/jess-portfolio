import { Link } from 'react-router-dom'
import { getPosts } from '../data/postStore'

const pillStyle = (p) => ({
  display: 'inline-block',
  background: p.pill, color: p.pillText,
  fontFamily: "'Nunito', sans-serif",
  fontSize: '11px', fontWeight: 800,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  padding: '5px 13px', borderRadius: '999px',
  alignSelf: 'flex-start',
})

export default function BlogsPage() {
  const posts = getPosts()

  return (
    <div style={{ minHeight: '100vh', background: '#edecea', padding: '0 0 80px' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 48px' }}>
        <Link to="/" style={{
          fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 700,
          color: 'rgba(17,17,17,0.5)', textDecoration: 'none',
          letterSpacing: '0.04em', transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#111'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.5)'}
        >← back</Link>
        <Link to="/" style={{
          fontFamily: "'Caveat', cursive", fontSize: '28px', fontWeight: 700,
          letterSpacing: '2px', color: '#111', textDecoration: 'none',
        }}>Jessly</Link>
        <div style={{ width: '60px' }} />
      </nav>

      {/* Header */}
      <div style={{ padding: '20px 48px 40px' }}>
        <h1 style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 'clamp(44px, 6vw, 96px)',
          color: '#111', lineHeight: 1.0,
          margin: '0 0 12px', letterSpacing: '-0.02em',
        }}>thoughts &amp; stories</h1>
        <p style={{
          fontFamily: "'Nunito', sans-serif", fontSize: '16px',
          color: 'rgba(17,17,17,0.5)', margin: 0,
        }}>{posts.length} posts</p>
      </div>

      {/* 2-column grid */}
      <div style={{
        padding: '0 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
      }}>
        {posts.map(p => {
          const hasImage = !!p.image
          const textColor = hasImage ? '#fff' : p.text
          const subColor  = hasImage ? 'rgba(255,255,255,0.65)' : p.sub

          return (
            <Link key={p.slug} to={`/blogs/${p.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                background: hasImage ? '#111' : p.bg,
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.16)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)' }}
              >
                {hasImage && (
                  <img src={p.image} alt={p.title} style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', opacity: 0.72,
                  }} />
                )}
                {hasImage && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
                  }} />
                )}

                {/* Content */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', flexDirection: 'column',
                  justifyContent: hasImage ? 'flex-end' : 'flex-start',
                  padding: '24px 28px',
                }}>
                  <span style={pillStyle(p)}>{p.category}</span>
                  <h2 style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: 'clamp(18px, 1.7vw, 24px)',
                    color: textColor, lineHeight: 1.1,
                    margin: '10px 0 8px', letterSpacing: '-0.01em',
                  }}>{p.title}</h2>
                  <p style={{
                    fontFamily: "'Nunito', sans-serif", fontSize: '13px',
                    color: subColor, lineHeight: 1.6,
                    margin: '0 0 12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>{p.excerpt}</p>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    fontFamily: "'Nunito', sans-serif", fontSize: '11px',
                    fontWeight: 600, color: subColor,
                  }}>
                    <span>{p.date}</span>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: subColor }} />
                    <span>{p.read} read</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

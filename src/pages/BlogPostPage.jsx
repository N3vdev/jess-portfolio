import { useParams, Link } from 'react-router-dom'
import { getPost, getPosts } from '../data/postStore'

const pill = (p) => ({
  display: 'inline-block',
  background: p.pill, color: p.pillText,
  fontFamily: "'Nunito', sans-serif",
  fontSize: '11px', fontWeight: 800,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  padding: '5px 13px', borderRadius: '999px',
})

function renderBody(body) {
  return body.split('\n\n').map((block, i) => {
    if (block.startsWith('**') && block.endsWith('**')) {
      return (
        <h3 key={i} style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 'clamp(18px, 1.6vw, 24px)',
          color: '#111', margin: '36px 0 12px', letterSpacing: '-0.01em',
        }}>{block.slice(2, -2)}</h3>
      )
    }
    // inline bold inside paragraph
    const parts = block.split(/(\*\*[^*]+\*\*)/g)
    return (
      <p key={i} style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: 'clamp(15px, 1.1vw, 17px)', fontWeight: 400,
        color: 'rgba(17,17,17,0.78)', lineHeight: 1.86,
        margin: '0 0 20px',
      }}>
        {parts.map((part, j) =>
          part.startsWith('**') ? <strong key={j}>{part.slice(2, -2)}</strong> : part
        )}
      </p>
    )
  })
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', background: '#edecea', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
        <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '48px', color: '#111' }}>Post not found</h1>
        <Link to="/blogs" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: '#111' }}>← all posts</Link>
      </div>
    )
  }

  const others = getPosts().filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div style={{ minHeight: '100vh', background: '#edecea' }}>

      {/* Nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 48px',
      }}>
        <Link to="/blogs" style={{
          fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 700,
          color: 'rgba(17,17,17,0.5)', textDecoration: 'none',
          letterSpacing: '0.04em', transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#111'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.5)'}
        >← all posts</Link>

        <Link to="/" style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '28px', fontWeight: 700, letterSpacing: '2px',
          color: '#111', textDecoration: 'none',
        }}>Jessly</Link>

        <div style={{ width: '80px' }} />
      </nav>

      {/* Hero band */}
      <div style={{
        background: post.bg,
        margin: '0 24px',
        borderRadius: '20px',
        padding: 'clamp(40px, 6vw, 80px) clamp(28px, 6vw, 80px)',
        marginBottom: '0',
      }}>
        <div style={pill(post)}>{post.category}</div>
        <h1 style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 'clamp(32px, 5vw, 72px)',
          color: post.text, lineHeight: 1.05,
          margin: '24px 0 20px', letterSpacing: '-0.02em',
          maxWidth: '780px',
        }}>{post.title}</h1>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          fontFamily: "'Nunito', sans-serif", fontSize: '13px',
          fontWeight: 600, color: post.sub,
        }}>
          <span>{post.date}</span>
          <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: post.sub }} />
          <span>{post.read} read</span>
        </div>
      </div>

      {/* Body */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '56px 24px 80px',
      }}>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 1.5vw, 22px)',
          color: 'rgba(17,17,17,0.7)',
          lineHeight: 1.68, margin: '0 0 40px',
        }}>{post.excerpt}</p>

        <div style={{ width: '40px', height: '2px', background: 'rgba(17,17,17,0.2)', borderRadius: '2px', marginBottom: post.image ? '32px' : '40px' }} />

        {post.image && (
          <div style={{ marginBottom: '44px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', maxHeight: '460px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}

        {renderBody(post.body)}
      </div>

      {/* More posts */}
      {others.length > 0 && (
        <div style={{ padding: '0 48px 80px' }}>
          <h2 style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 'clamp(22px, 2.4vw, 36px)',
            color: '#111', margin: '0 0 24px', letterSpacing: '-0.01em',
          }}>more posts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {others.map(p => (
              <Link key={p.slug} to={`/blogs/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: p.bg, borderRadius: '16px',
                  padding: '24px 22px', minHeight: '180px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  cursor: 'pointer', transition: 'transform 0.2s',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div>
                    <div style={pill(p)}>{p.category}</div>
                    <h3 style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: '15px', fontWeight: 900,
                      color: p.text, margin: '10px 0 0', lineHeight: 1.3,
                    }}>{p.title}</h3>
                  </div>
                  <span style={{
                    fontFamily: "'Nunito', sans-serif", fontSize: '12px',
                    fontWeight: 600, color: p.sub, marginTop: '16px',
                  }}>{p.read} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

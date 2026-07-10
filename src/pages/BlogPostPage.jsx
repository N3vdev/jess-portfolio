import { useParams, Link } from 'react-router-dom'
import { getPost, getPosts } from '../data/postStore'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../components/Img'

const pill = (p) => ({
  display: 'inline-block',
  background: p.pill, color: p.pillText,
  fontFamily: "'Manrope', sans-serif",
  fontSize: '10px', fontWeight: 800,
  letterSpacing: '0.12em', textTransform: 'uppercase',
  padding: '5px 12px', borderRadius: '999px',
})

function renderBody(body) {
  return body.split('\n\n').map((block, i) => {
    if (block.startsWith('**') && block.endsWith('**')) {
      return (
        <h3 key={i} style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 'clamp(18px, 1.6vw, 22px)',
          fontWeight: 800, color: '#123E7A',
          margin: '36px 0 12px', letterSpacing: '-0.01em',
        }}>{block.slice(2, -2)}</h3>
      )
    }
    const parts = block.split(/(\*\*[^*]+\*\*)/g)
    return (
      <p key={i} style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(15px, 1.1vw, 17px)',
        color: '#2F343A', lineHeight: 1.85,
        margin: '0 0 22px',
      }}>
        {parts.map((part, j) =>
          part.startsWith('**') ? <strong key={j} style={{ color: '#123E7A' }}>{part.slice(2, -2)}</strong> : part
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
      <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
        <Navbar />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px', padding: '120px 32px' }}>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '40px', fontWeight: 800, color: '#123E7A' }}>Post not found</h1>
          <Link to="/blogs" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: '#123E7A' }}>← all posts</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const others = getPosts().filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Hero band */}
      <div style={{
        background: post.bg,
        margin: '24px 24px 0',
        borderRadius: '20px',
        padding: 'clamp(40px, 6vw, 72px) clamp(28px, 6vw, 72px)',
      }}>
        <div style={pill(post)}>{post.category}</div>
        <h1 style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 'clamp(28px, 5vw, 64px)',
          fontWeight: 800, color: post.text,
          lineHeight: 1.08, margin: '20px 0 16px',
          letterSpacing: '-0.02em', maxWidth: '780px',
        }}>{post.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: post.sub }}>
          <span>{post.date}</span>
          <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: post.sub }} />
          <span>{post.read} read</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '56px 32px 80px' }}>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontStyle: 'italic',
          fontSize: 'clamp(17px, 1.4vw, 21px)',
          color: 'rgba(18,62,122,0.65)', lineHeight: 1.7,
          margin: '0 0 36px',
        }}>{post.excerpt}</p>

        <div style={{ width: '40px', height: '2px', background: 'rgba(18,62,122,0.2)', borderRadius: '2px', marginBottom: post.image ? '32px' : '40px' }} />

        {post.image && (
          <div style={{ marginBottom: '44px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(18,62,122,0.12)', maxHeight: '460px' }}>
            <Img src={post.image} alt={post.title} loading="lazy" style={{ objectFit: 'cover', maxHeight: '460px' }} />
          </div>
        )}

        {renderBody(post.body)}

        <Link to="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 700, color: '#123E7A', textDecoration: 'none', marginTop: '24px', border: '1.5px solid #123E7A', padding: '11px 22px', borderRadius: '999px' }}>← Back to Journal</Link>
      </div>

      {/* More posts */}
      {others.length > 0 && (
        <div style={{ background: '#F3F5F7', padding: '56px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 800, color: '#123E7A', margin: '0 0 24px', letterSpacing: '-0.01em' }}>More from the Journal</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {others.map(p => (
                <Link key={p.slug} to={`/blogs/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: p.bg, borderRadius: '16px', padding: '24px 22px', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.2s', boxShadow: '0 4px 16px rgba(18,62,122,0.07)' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                  >
                    <div>
                      <div style={pill(p)}>{p.category}</div>
                      <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontWeight: 800, color: p.text, margin: '10px 0 0', lineHeight: 1.3 }}>{p.title}</h3>
                    </div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: p.sub, marginTop: '16px' }}>{p.read} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

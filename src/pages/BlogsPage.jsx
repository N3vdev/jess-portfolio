import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../data/postStore'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { useInView } from '../hooks/useInView'

const pillStyle = (p) => ({
  display: 'inline-block',
  background: p.pill, color: p.pillText,
  fontFamily: "'Manrope', sans-serif",
  fontSize: '10px', fontWeight: 800,
  letterSpacing: '0.12em', textTransform: 'uppercase',
  padding: '5px 12px', borderRadius: '999px',
  alignSelf: 'flex-start',
})

export default function BlogsPage() {
  const posts = getPosts()
  const [mounted, setMounted] = useState(false)
  const [gridRef, gridIn] = useInView()

  useEffect(() => { const t = requestAnimationFrame(() => setMounted(true)); return () => cancelAnimationFrame(t) }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#FCFAF8' }}>
      <Navbar />

      {/* Header */}
      <section style={{ background: '#EAF0FB', padding: '64px 32px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className={mounted ? 'he-0 hero-enter' : ''} style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#123E7A', opacity: 0.6, marginBottom: '12px' }}>Growth Journal</p>
          <h1 className={mounted ? 'he-1 hero-enter' : ''} style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, color: '#123E7A', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '12px' }}>Thoughts &amp; Stories</h1>
          <p className={mounted ? 'he-2 hero-enter' : ''} style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(18,62,122,0.6)' }}>{posts.length} posts</p>
        </div>
      </section>

      {/* Grid */}
      <section ref={gridRef} style={{ padding: '48px 32px 80px' }}>
        <div className="r-blogs" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {posts.map((p, i) => {
            const hasImage = !!p.image
            const textColor = hasImage ? '#fff' : p.text
            const subColor  = hasImage ? 'rgba(255,255,255,0.65)' : p.sub

            return (
              <Link key={p.slug} to={`/blogs/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div className={`card-lift reveal d${i % 4} ${gridIn ? 'in-view' : ''}`} style={{
                  height: '400px', borderRadius: '20px', overflow: 'hidden',
                  position: 'relative', background: hasImage ? '#111' : p.bg,
                  boxShadow: '0 4px 24px rgba(18,62,122,0.08)',
                }}>
                  {hasImage && (
                    <Img src={p.image} alt={p.title} loading="lazy"
                      style={{ objectFit: 'cover', opacity: 0.72, position: 'absolute', inset: 0 }}
                    />
                  )}
                  {hasImage && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: hasImage ? 'flex-end' : 'flex-start', padding: '28px' }}>
                    <span style={pillStyle(p)}>{p.category}</span>
                    <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(18px, 1.7vw, 24px)', fontWeight: 800, color: textColor, lineHeight: 1.15, margin: '10px 0 8px', letterSpacing: '-0.01em' }}>{p.title}</h2>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: subColor, lineHeight: 1.6, margin: '0 0 12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: subColor }}>
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
      </section>

      <Footer />
    </div>
  )
}

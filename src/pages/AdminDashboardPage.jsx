import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getPosts, deletePost, getPinnedSlugs, pinPost, unpinPost } from '../data/postStore'

export default function AdminDashboardPage() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState(getPosts)
  const [pins, setPins] = useState(getPinnedSlugs)
  const [confirm, setConfirm] = useState(null)
  const [pinWarn, setPinWarn] = useState(false)

  if (!sessionStorage.getItem('admin_auth')) {
    navigate('/admin')
    return null
  }

  const handleDelete = (slug) => {
    deletePost(slug)
    setPosts(getPosts())
    setPins(getPinnedSlugs())
    setConfirm(null)
  }

  const handlePin = (slug) => {
    const result = pinPost(slug)
    if (!result.ok) { setPinWarn(true); return }
    setPins(getPinnedSlugs())
  }

  const handleUnpin = (slug) => {
    unpinPost(slug)
    setPins(getPinnedSlugs())
  }

  const logout = () => {
    sessionStorage.removeItem('admin_auth')
    navigate('/admin')
  }

  const PinIcon = ({ filled }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#111' : 'none'} stroke={filled ? '#111' : 'rgba(17,17,17,0.35)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#edecea', padding: '0 0 80px' }}>

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 48px',
        borderBottom: '1px solid rgba(17,17,17,0.08)',
        background: '#edecea',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '26px', fontWeight: 700, color: '#111', letterSpacing: '2px',
          }}>Jessly</span>
          <span style={{
            background: 'rgba(17,17,17,0.08)', color: '#111',
            borderRadius: '999px', padding: '4px 12px',
            fontFamily: "'Nunito', sans-serif", fontSize: '11px', fontWeight: 800,
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>admin</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link to="/" style={{
            fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700,
            color: 'rgba(17,17,17,0.4)', textDecoration: 'none',
          }}>view site</Link>
          <button onClick={logout} style={{
            background: 'transparent', border: '1px solid rgba(17,17,17,0.18)',
            borderRadius: '999px', padding: '7px 18px',
            fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700,
            color: 'rgba(17,17,17,0.5)', cursor: 'pointer',
          }}>log out</button>
        </div>
      </div>

      <div style={{ padding: '40px 48px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <h1 style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 'clamp(28px, 3vw, 44px)',
              color: '#111', margin: 0, letterSpacing: '-0.02em',
            }}>blog posts</h1>
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontSize: '14px',
              color: 'rgba(17,17,17,0.4)', margin: '6px 0 0',
            }}>{posts.length} posts</p>
          </div>
          <button
            onClick={() => navigate('/admin/post/new')}
            style={{
              background: '#111', color: '#fff',
              border: 'none', borderRadius: '999px', padding: '13px 28px',
              fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 800,
              cursor: 'pointer', transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#333'}
            onMouseLeave={e => e.currentTarget.style.background = '#111'}
          >+ new post</button>
        </div>

        {/* Pin hint */}
        <p style={{
          fontFamily: "'Nunito', sans-serif", fontSize: '13px',
          color: 'rgba(17,17,17,0.38)', margin: '0 0 28px',
        }}>
          Pin up to 4 posts to feature them on the home page.
          <span style={{ color: pins.length >= 4 ? '#e85c30' : '#111', marginLeft: '8px', fontWeight: 700 }}>
            {pins.length}/4 pinned
          </span>
        </p>

        {/* Posts list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {posts.map(p => {
            const isPinned = pins.includes(p.slug)
            return (
              <div key={p.slug} style={{
                background: isPinned ? 'rgba(17,17,17,0.05)' : '#fff',
                border: isPinned ? '1.5px solid rgba(17,17,17,0.18)' : '1.5px solid rgba(17,17,17,0.06)',
                borderRadius: '16px', padding: '18px 22px',
                display: 'flex', alignItems: 'center', gap: '18px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                {/* Color swatch */}
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: p.bg, flexShrink: 0,
                  border: '1px solid rgba(17,17,17,0.08)',
                }} />

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    {isPinned && (
                      <span style={{
                        background: 'rgba(17,17,17,0.08)', color: '#111',
                        borderRadius: '999px', padding: '2px 9px',
                        fontFamily: "'Nunito', sans-serif", fontSize: '10px', fontWeight: 800,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>pinned</span>
                    )}
                    <span style={{
                      background: p.pill, color: p.pillText,
                      borderRadius: '999px', padding: '3px 10px',
                      fontFamily: "'Nunito', sans-serif", fontSize: '10px', fontWeight: 800,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{p.category}</span>
                    <span style={{
                      fontFamily: "'Nunito', sans-serif", fontSize: '12px',
                      color: 'rgba(17,17,17,0.35)',
                    }}>{p.date} · {p.read} read</span>
                  </div>
                  <p style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: 'clamp(14px, 1.1vw, 17px)',
                    color: '#111', margin: 0,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>{p.title}</p>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center' }}>
                  <button
                    onClick={() => isPinned ? handleUnpin(p.slug) : handlePin(p.slug)}
                    title={isPinned ? 'unpin' : 'pin to home'}
                    style={{
                      background: isPinned ? 'rgba(17,17,17,0.08)' : 'transparent',
                      border: '1.5px solid rgba(17,17,17,0.12)',
                      borderRadius: '10px', padding: '8px 14px',
                      cursor: 'pointer', transition: 'background 0.15s',
                      display: 'flex', alignItems: 'center', gap: '6px',
                      fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700,
                      color: 'rgba(17,17,17,0.6)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(17,17,17,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = isPinned ? 'rgba(17,17,17,0.08)' : 'transparent'}
                  >
                    <PinIcon filled={isPinned} />
                    {isPinned ? 'unpin' : 'pin'}
                  </button>

                  <button
                    onClick={() => navigate(`/admin/post/edit/${p.slug}`)}
                    style={{
                      background: 'transparent',
                      border: '1.5px solid rgba(17,17,17,0.12)',
                      borderRadius: '10px', padding: '8px 18px',
                      fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700,
                      color: '#111', cursor: 'pointer', transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(17,17,17,0.06)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >edit</button>

                  <button
                    onClick={() => setConfirm(p.slug)}
                    style={{
                      background: 'rgba(232,92,48,0.08)',
                      border: '1.5px solid rgba(232,92,48,0.2)',
                      borderRadius: '10px', padding: '8px 18px',
                      fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700,
                      color: '#e85c30', cursor: 'pointer', transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,92,48,0.16)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(232,92,48,0.08)'}
                  >delete</button>
                </div>
              </div>
            )
          })}

          {posts.length === 0 && (
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontSize: '15px',
              color: 'rgba(17,17,17,0.3)', textAlign: 'center', padding: '48px 0',
            }}>no posts yet — add one above</p>
          )}
        </div>
      </div>

      {/* Delete confirm modal */}
      {confirm && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
        }}>
          <div style={{
            background: '#fff', borderRadius: '20px', padding: '36px 40px',
            border: '1px solid rgba(17,17,17,0.08)',
            maxWidth: '380px', width: '90%', textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          }}>
            <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '22px', color: '#111', margin: '0 0 12px' }}>
              delete post?
            </h3>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '14px', color: 'rgba(17,17,17,0.45)', margin: '0 0 28px' }}>
              This can't be undone.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button onClick={() => setConfirm(null)} style={{
                background: 'transparent', border: '1.5px solid rgba(17,17,17,0.15)',
                borderRadius: '999px', padding: '11px 28px',
                fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 700,
                color: '#111', cursor: 'pointer',
              }}>cancel</button>
              <button onClick={() => handleDelete(confirm)} style={{
                background: '#e85c30', border: 'none',
                borderRadius: '999px', padding: '11px 28px',
                fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 800,
                color: '#fff', cursor: 'pointer',
              }}>yes, delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Max pins warning */}
      {pinWarn && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
        }} onClick={() => setPinWarn(false)}>
          <div style={{
            background: '#fff', borderRadius: '20px', padding: '36px 40px',
            border: '1px solid rgba(232,92,48,0.2)',
            maxWidth: '380px', width: '90%', textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>📌</div>
            <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '22px', color: '#111', margin: '0 0 12px' }}>
              already at 4 pins
            </h3>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '14px', color: 'rgba(17,17,17,0.45)', margin: '0 0 28px', lineHeight: 1.6 }}>
              The home page only shows 4 posts. Unpin one before pinning another.
            </p>
            <button onClick={() => setPinWarn(false)} style={{
              background: '#111', border: 'none',
              borderRadius: '999px', padding: '11px 32px',
              fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 800,
              color: '#fff', cursor: 'pointer',
            }}>got it</button>
          </div>
        </div>
      )}
    </div>
  )
}

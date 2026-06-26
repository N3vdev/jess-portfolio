import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPosts, getPost, addPost, updatePost, slugify } from '../data/postStore'

const SCHEMES = [
  { label: 'dark',       bg: '#111',     pill: '#c5ef5e', pillText: '#111', text: '#fff',  sub: 'rgba(255,255,255,0.5)' },
  { label: 'white',      bg: '#fff',     pill: '#111',    pillText: '#fff', text: '#111',  sub: 'rgba(0,0,0,0.38)' },
  { label: 'blue',       bg: '#6282ec',  pill: '#dce4fa', pillText: '#111', text: '#fff',  sub: 'rgba(255,255,255,0.5)' },
  { label: 'lime',       bg: '#c5ef5e',  pill: '#111',    pillText: '#fff', text: '#111',  sub: 'rgba(0,0,0,0.38)' },
  { label: 'coral',      bg: '#e85c30',  pill: '#fff',    pillText: '#111', text: '#fff',  sub: 'rgba(255,255,255,0.5)' },
  { label: 'periwinkle', bg: '#8b8de8',  pill: '#fff',    pillText: '#111', text: '#fff',  sub: 'rgba(255,255,255,0.5)' },
]

const fieldStyle = {
  background: '#fff',
  border: '1.5px solid rgba(17,17,17,0.12)',
  borderRadius: '12px', padding: '13px 18px',
  fontFamily: "'Nunito', sans-serif", fontSize: '15px',
  fontWeight: 500, color: '#111', outline: 'none',
  width: '100%', boxSizing: 'border-box',
}

const Label = ({ text }) => (
  <span style={{
    fontFamily: "'Nunito', sans-serif", fontSize: '11px', fontWeight: 800,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'rgba(17,17,17,0.4)', display: 'block', marginBottom: '8px',
  }}>{text}</span>
)

export default function AdminEditPage() {
  const navigate = useNavigate()
  const { slug: editSlug } = useParams()
  const isNew = !editSlug
  const existing = editSlug ? getPost(editSlug) : null

  const [title,    setTitle]    = useState(existing?.title    || '')
  const [category, setCategory] = useState(existing?.category || '')
  const [excerpt,  setExcerpt]  = useState(existing?.excerpt  || '')
  const [body,     setBody]     = useState(existing?.body     || '')
  const [date,     setDate]     = useState(existing?.date     || '')
  const [read,     setRead]     = useState(existing?.read     || '')
  const [image,    setImage]    = useState(existing?.image    || '')
  const [scheme,   setScheme]   = useState(SCHEMES.find(s => s.bg === existing?.bg) || SCHEMES[0])
  const [err,      setErr]      = useState('')
  const [saving,   setSaving]   = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('admin_auth')) navigate('/admin')
  }, [])

  if (!sessionStorage.getItem('admin_auth')) return null

  const save = () => {
    setErr('')
    if (!title.trim())    return setErr('Title is required.')
    if (!category.trim()) return setErr('Category is required.')
    if (!body.trim())     return setErr('Body is required.')

    const slug = isNew ? slugify(title) : editSlug
    if (isNew && getPosts().some(p => p.slug === slug)) return setErr('A post with this title already exists.')

    setSaving(true)
    const post = {
      slug, title: title.trim(), category: category.trim(),
      excerpt: excerpt.trim(), body: body.trim(),
      date: date.trim() || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      read: read.trim() || '3 min',
      image: image || undefined,
      bg: scheme.bg, pill: scheme.pill, pillText: scheme.pillText,
      text: scheme.text, sub: scheme.sub,
    }

    const result = isNew ? addPost(post) : updatePost(editSlug, post)
    setSaving(false)

    if (!result?.ok) {
      setErr(result?.reason === 'quota'
        ? 'Storage full — try a smaller image or remove it.'
        : 'Something went wrong. Please try again.')
      return
    }
    navigate('/admin/dashboard')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#edecea', padding: '0 0 80px' }}>

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px',
        borderBottom: '1px solid rgba(17,17,17,0.08)',
        background: '#edecea',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <button onClick={() => navigate('/admin/dashboard')} style={{
          background: 'transparent', border: 'none',
          fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 700,
          color: 'rgba(17,17,17,0.45)', cursor: 'pointer', padding: 0,
        }}>← dashboard</button>
        <span style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '26px', fontWeight: 700, color: '#111', letterSpacing: '2px',
        }}>Jessly</span>
        <button onClick={save} disabled={saving} style={{
          background: saving ? 'rgba(17,17,17,0.4)' : '#111',
          color: '#fff', border: 'none',
          borderRadius: '999px', padding: '11px 28px',
          fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 800,
          cursor: saving ? 'wait' : 'pointer', transition: 'background 0.15s',
        }}
          onMouseEnter={e => { if (!saving) e.currentTarget.style.background = '#333' }}
          onMouseLeave={e => { if (!saving) e.currentTarget.style.background = '#111' }}
        >{saving ? 'saving…' : isNew ? 'publish' : 'save changes'}</button>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 48px', display: 'flex', flexDirection: 'column', gap: '22px' }}>

        <h1 style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 'clamp(24px, 2.5vw, 36px)',
          color: '#111', margin: 0, letterSpacing: '-0.02em',
        }}>{isNew ? 'new post' : 'edit post'}</h1>

        {/* Title */}
        <div>
          <Label text="title" />
          <input value={title} onChange={e => { setTitle(e.target.value); setErr('') }} placeholder="Post title" style={fieldStyle} />
        </div>

        {/* Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
          <div>
            <Label text="category" />
            <input value={category} onChange={e => { setCategory(e.target.value); setErr('') }} placeholder="e.g. adventures" style={fieldStyle} />
          </div>
          <div>
            <Label text="date" />
            <input value={date} onChange={e => setDate(e.target.value)} placeholder="Jun 2025" style={fieldStyle} />
          </div>
          <div>
            <Label text="read time" />
            <input value={read} onChange={e => setRead(e.target.value)} placeholder="5 min" style={fieldStyle} />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <Label text="excerpt" />
          <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Short description shown on the card" rows={3} style={{ ...fieldStyle, resize: 'vertical' }} />
        </div>

        {/* Image upload */}
        <div>
          <Label text="cover image (optional)" />
          <label style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            background: '#fff', border: '1.5px dashed rgba(17,17,17,0.15)',
            borderRadius: '12px', padding: '16px 20px',
            cursor: 'pointer', transition: 'border-color 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(17,17,17,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(17,17,17,0.15)'}
          >
            <input type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => {
                const file = e.target.files[0]
                if (!file) return
                if (file.size > 2 * 1024 * 1024) setErr('Image is large — may cause storage issues. Try a smaller file.')
                else setErr('')
                const reader = new FileReader()
                reader.onload = ev => setImage(ev.target.result)
                reader.readAsDataURL(file)
              }}
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '14px', fontWeight: 600, color: 'rgba(17,17,17,0.4)' }}>
              {image ? 'click to change image' : 'choose image from files'}
            </span>
          </label>
          {image && (
            <div style={{ marginTop: '12px', borderRadius: '12px', overflow: 'hidden', maxHeight: '200px', position: 'relative' }}>
              <img src={image} alt="preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', display: 'block' }} />
              <button onClick={() => { setImage(''); setErr('') }} style={{
                position: 'absolute', top: '10px', right: '10px',
                background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '999px',
                width: '28px', height: '28px', color: '#fff', cursor: 'pointer',
                fontSize: '16px', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>×</button>
            </div>
          )}
        </div>

        {/* Body */}
        <div>
          <Label text="body (use **text** for bold headings)" />
          <textarea value={body} onChange={e => { setBody(e.target.value); setErr('') }} placeholder="Write your post here..." rows={16} style={{ ...fieldStyle, resize: 'vertical', lineHeight: 1.7 }} />
        </div>

        {/* Colour scheme */}
        <div>
          <Label text="card colour" />
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {SCHEMES.map(s => (
              <button key={s.label} onClick={() => setScheme(s)} style={{
                background: s.bg,
                border: scheme.label === s.label ? '3px solid #111' : '3px solid transparent',
                borderRadius: '12px', padding: '10px 20px',
                fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 800,
                color: s.text, cursor: 'pointer', outline: 'none', transition: 'border-color 0.15s',
              }}>{s.label}</button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div>
          <Label text="preview" />
          <div style={{ background: scheme.bg, borderRadius: '18px', overflow: 'hidden', maxWidth: '340px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            {image && (
              <div style={{ height: '150px', overflow: 'hidden' }}>
                <img src={image} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            )}
            <div style={{ padding: '24px 28px' }}>
              <span style={{
                display: 'inline-block', background: scheme.pill, color: scheme.pillText,
                borderRadius: '999px', padding: '4px 12px',
                fontFamily: "'Nunito', sans-serif", fontSize: '11px', fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
              }}>{category || 'category'}</span>
              <p style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '18px', color: scheme.text, margin: '0 0 10px', lineHeight: 1.15 }}>
                {title || 'Post title'}
              </p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '13px', color: scheme.sub, margin: '0 0 14px', lineHeight: 1.6 }}>
                {excerpt || 'Excerpt appears here...'}
              </p>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '12px', fontWeight: 600, color: scheme.sub }}>
                {date || 'Date'} · {read || 'x min'} read
              </span>
            </div>
          </div>
        </div>

        {err && (
          <div style={{
            fontFamily: "'Nunito', sans-serif", fontSize: '14px', color: '#e85c30',
            background: 'rgba(232,92,48,0.08)', borderRadius: '10px', padding: '12px 16px', lineHeight: 1.5,
          }}>{err}</div>
        )}

        <button onClick={save} disabled={saving} style={{
          background: saving ? 'rgba(17,17,17,0.4)' : '#111',
          color: '#fff', border: 'none', borderRadius: '999px', padding: '16px',
          fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 800,
          cursor: saving ? 'wait' : 'pointer', transition: 'background 0.15s',
          alignSelf: 'flex-start', minWidth: '160px',
        }}
          onMouseEnter={e => { if (!saving) e.currentTarget.style.background = '#333' }}
          onMouseLeave={e => { if (!saving) e.currentTarget.style.background = '#111' }}
        >{saving ? 'saving…' : isNew ? 'publish post' : 'save changes'}</button>

      </div>
    </div>
  )
}

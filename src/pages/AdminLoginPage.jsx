import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inp = {
  background: '#fff',
  border: '1.5px solid rgba(17,17,17,0.12)',
  borderRadius: '12px', padding: '14px 18px',
  fontFamily: "'Nunito', sans-serif", fontSize: '15px',
  fontWeight: 500, color: '#111', outline: 'none',
  width: '100%', boxSizing: 'border-box',
}

export default function AdminLoginPage() {
  const [user, setUser] = useState('')
  const [pw, setPw] = useState('')
  const [err, setErr] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    if (user === 'test123' && pw === 'test123') {
      sessionStorage.setItem('admin_auth', '1')
      navigate('/admin/dashboard')
    } else {
      setErr('Wrong username or password.')
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: '#edecea',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: '100%', maxWidth: '420px', padding: '0 24px' }}>
        <div style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '36px', fontWeight: 700,
          color: '#111', letterSpacing: '2px', marginBottom: '6px',
        }}>Jessly</div>
        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: '13px', color: 'rgba(17,17,17,0.4)',
          margin: '0 0 36px',
        }}>admin access only</p>

        <form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            placeholder="username"
            value={user}
            onChange={e => { setUser(e.target.value); setErr('') }}
            style={inp}
            autoComplete="username"
          />
          <input
            placeholder="password"
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setErr('') }}
            style={inp}
            autoComplete="current-password"
          />

          {err && (
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '13px', color: '#e85c30', margin: 0 }}>
              {err}
            </p>
          )}

          <button type="submit" style={{
            background: '#111', color: '#fff',
            border: 'none', borderRadius: '999px',
            padding: '15px', marginTop: '4px',
            fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 800,
            cursor: 'pointer', transition: 'background 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#333'}
            onMouseLeave={e => e.currentTarget.style.background = '#111'}
          >log in</button>
        </form>
      </div>
    </div>
  )
}

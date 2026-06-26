function scallopPath(cx, cy, R, amp, n) {
  let d = ''
  const pts = 80
  for (let i = 0; i <= pts; i++) {
    const t = (2 * Math.PI * i) / pts
    const r = R + amp * Math.sin(n * t)
    const x = (cx + r * Math.cos(t)).toFixed(2)
    const y = (cy + r * Math.sin(t)).toFixed(2)
    d += i === 0 ? `M${x},${y}` : `L${x},${y}`
  }
  return d + 'Z'
}

function ScallopBadge({ word, bg, textColor, style }) {
  const path = scallopPath(70, 70, 50, 9, 10)
  return (
    <div style={{ position: 'absolute', pointerEvents: 'none', zIndex: 60, ...style }}>
      <svg width="140" height="140" viewBox="0 0 140 140" overflow="visible">
        <filter id="sb-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="7" floodColor="rgba(0,0,0,0.45)" />
        </filter>
        <path d={path} fill={bg} filter="url(#sb-shadow)" />
        <text
          x="70" y="72"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Nunito', sans-serif"
          fontSize="15"
          fontWeight="800"
          fill={textColor}
        >{word}</text>
      </svg>
    </div>
  )
}

const cardBase = {
  position: 'absolute',
  left: '50%', top: '50%',
  marginLeft: '-180px', marginTop: '-330px',
  width: '380px', height: '560px',
  borderRadius: '22px', overflow: 'hidden',
  touchAction: 'none', willChange: 'transform',
  userSelect: 'none', WebkitUserSelect: 'none',
}

export default function SwipeableDeck() {
  return (
    <div id="s4" style={{
      position: 'relative', flexShrink: 0,
      height: 'calc(100vh - 20px)', marginTop: '10px',
      borderRadius: '20px',
      background: '#b8c4ec', overflow: 'hidden',
    }}>

      {/* White curly doodle — top left */}
      <div style={{ position: 'absolute', top: '8%', left: '5%', pointerEvents: 'none', zIndex: 60 }}>
        <svg width="130" height="95" viewBox="0 0 130 95" fill="none">
          <path d="M 28 80 C 22 58 24 36 33 28 C 42 20 52 32 57 22 C 62 12 65 4 75 4 C 85 4 90 20 98 16" stroke="#7c6fa0" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Lime 4-pointed star — bottom right */}
      <div style={{ position: 'absolute', bottom: '10%', right: '6%', pointerEvents: 'none', zIndex: 60 }}>
        <svg width="128" height="128" viewBox="0 0 128 128">
          <path d="M 64 6 C 64 6 55 50 50 54 C 45 58 6 64 6 64 C 6 64 45 70 50 74 C 55 78 64 122 64 122 C 64 122 73 78 78 74 C 83 70 122 64 122 64 C 122 64 83 58 78 54 C 73 50 64 6 64 6 Z" fill="#f5d4a0" />
        </svg>
      </div>

      {/* 5 swipeable cards — drop images into public/ and name them card-1.jpg … card-5.jpg */}
      <div id="s4-c1" style={{ ...cardBase }}>
        <img src="Assets/card-1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div id="s4-c2" style={{ ...cardBase }}>
        <img src="Assets/card-2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div id="s4-c3" style={{ ...cardBase }}>
        <img src="Assets/card-3.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div id="s4-c4" style={{ ...cardBase }}>
        <img src="Assets/card-4.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div id="s4-c5" style={{ ...cardBase }}>
        <img src="Assets/card-5.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div id="s4-c6" style={{ ...cardBase }}>
        <img src="Assets/card-6.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* Drag hint */}
      <div id="s4-hint" style={{
        position: 'absolute', left: 0, top: 0,
        transform: 'translate(-50%, calc(-100% - 14px))',
        zIndex: 100, pointerEvents: 'none',
        opacity: 0, transition: 'opacity 0.15s ease',
      }}>
        <div style={{
          background: 'rgba(148,110,255,0.86)',
          borderRadius: '999px', padding: '8px 24px',
          fontFamily: "'Nunito', sans-serif", fontSize: '15px',
          fontWeight: 700, color: '#fff', whiteSpace: 'nowrap',
          backdropFilter: 'blur(8px)',
        }}>drag</div>
      </div>

      {/* toastmasters badge */}
      <div style={{
        position: 'absolute', top: '22%', right: '24%',
        background: '#fff', borderRadius: '999px', padding: '9px 20px',
        fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 800,
        color: '#111', display: 'flex', alignItems: 'center', gap: '7px',
        boxShadow: '0 4px 18px rgba(0,0,0,0.5)', pointerEvents: 'none', zIndex: 60,
      }}>
        <svg width="13" height="13" viewBox="0 0 40 40" fill="#111">
          <path d="M20 0 L23 17 L40 20 L23 23 L20 40 L17 23 L0 20 L17 17 Z" />
        </svg>
        toastmasters
      </div>

      {/* Scallop badge pills */}
      <ScallopBadge word="adventure" bg="#f5d4a0" textColor="#7a4a1a"
        style={{ top: '7%', left: '7%', animation: 'doodleFloat 3s ease-in-out infinite' }} />

      <ScallopBadge word="thrill" bg="#e85c30" textColor="#fff"
        style={{ top: '34%', right: '5%', animation: 'doodleFloatB 2.8s ease-in-out infinite 0.5s' }} />

      <ScallopBadge word="creative" bg="#dce4fa" textColor="#111"
        style={{ bottom: '16%', left: '5%', animation: 'doodleWiggle 4.2s ease-in-out infinite 1s' }} />


      {/* "album" pill */}
      <div style={{
        position: 'absolute', bottom: '9%', left: '50%',
        transform: 'translateX(-50%)',
        background: '#f0f0f0', borderRadius: '999px', padding: '12px 34px',
        fontFamily: "'Nunito', sans-serif", fontSize: '17px', fontWeight: 800,
        color: '#111', whiteSpace: 'nowrap',
        boxShadow: '0 4px 18px rgba(0,0,0,0.5)', zIndex: 60, pointerEvents: 'none',
      }}>album</div>

    </div>
  )
}

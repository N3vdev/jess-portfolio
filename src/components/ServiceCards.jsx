const cardBase = {
  position: 'absolute',
  left: '50%', top: '50%',
  marginLeft: '-170px', marginTop: '-270px',
  width: '340px', height: '540px',
  borderRadius: '24px',
  padding: '44px 34px 32px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  willChange: 'transform',
  userSelect: 'none', WebkitUserSelect: 'none',
  boxShadow: '0 12px 40px rgba(0,0,0,0.13)',
}

const divider = (dark = false) => ({
  width: '100%',
  height: '2.5px',
  background: dark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.45)',
  marginBottom: '22px',
})

const h3Style = (color, size = '42px') => ({
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 900, fontSize: size,
  color, margin: '0 0 16px', lineHeight: 1.1,
})

const item = (color) => ({
  fontFamily: "'Nunito', sans-serif",
  fontSize: '15px', fontWeight: 600, color,
})

export default function ServiceCards() {
  return (
    <div id="s5" style={{
      position: 'relative', flexShrink: 0,
      height: '100vh', borderRadius: '20px',
      background: '#edecea', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
    }}>
      <div style={{
        position: 'absolute', top: '52px', left: '52px',
        pointerEvents: 'none', zIndex: 20,
      }}>
        <h2 style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 'clamp(32px, 4vw, 58px)',
          color: '#222', lineHeight: 1.0, margin: 0,
          letterSpacing: '-0.02em',
        }}>What Shapes Me</h2>
      </div>

      <div id="s5-stage" style={{ position: 'relative', width: '100%', height: '640px', overflow: 'visible' }}>

        {/* Card 1: Treasury — sage */}
        <div className="s5c" style={{ ...cardBase, background: '#b6e8cf' }}>
          <div style={{ position: 'absolute', top: '-44px', right: '16px', pointerEvents: 'none' }}>
            <svg width="96" height="96" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="48" fill="#3daa6e" />
              <rect x="18" y="34" width="60" height="38" rx="7" stroke="#fff" strokeWidth="3.5" fill="none" />
              <circle cx="48" cy="53" r="12" stroke="#fff" strokeWidth="3.5" fill="none" />
              <rect x="34" y="25" width="14" height="10" rx="4" fill="#fff" />
              <circle cx="70" cy="41" r="4" fill="#fff" />
              <circle cx="48" cy="53" r="4" fill="#fff" />
            </svg>
          </div>
          <h3 style={h3Style('#1a4d35', '42px')}>treasury</h3>
          <div style={divider(true)} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {[
              'CTP Certified',
              'Cash Flow Management',
              'Financial Risk',
              'FX Management',
              'Banking Relations',
              'Organizational Finance',
              'Financial Planning',
            ].map((s) => <span key={s} style={item('#1a4d35')}>♦ {s}</span>)}
          </div>
        </div>

        {/* Card 2: Speaking & Leadership — periwinkle */}
        <div className="s5c" style={{ ...cardBase, background: '#8b8de8' }}>
          <div style={{ position: 'absolute', top: '-44px', right: '16px', pointerEvents: 'none' }}>
            <svg width="88" height="106" viewBox="0 0 88 106">
              <ellipse cx="44" cy="46" rx="42" ry="44" fill="#d4f540" />
              <rect x="24" y="14" width="38" height="60" rx="9" stroke="#2a1060" strokeWidth="3" fill="none" />
              <rect x="34" y="70" width="18" height="4" rx="2" fill="#2a1060" />
              <path d="M 28 65 Q 12 74 15 90 Q 18 102 34 100 L 66 100 Q 80 100 80 87 Q 80 75 66 72" fill="none" stroke="#2a1060" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <h3 style={h3Style('#fff', '36px')}>speaking &amp;<br />leadership</h3>
          <div style={divider(false)} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {[
              'Public Speaking',
              'Toastmasters',
              'Club Chartering',
              'District Leadership',
              'Member Mentoring',
              'Communication Coaching',
            ].map((s) => <span key={s} style={item('#fff')}>♦ {s}</span>)}
          </div>
        </div>

        {/* Card 3: Adventures — coral */}
        <div className="s5c" style={{ ...cardBase, background: '#e85c30' }}>
          <div style={{ position: 'absolute', top: '-44px', right: '16px', pointerEvents: 'none' }}>
            <svg width="96" height="96" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="48" fill="#6b8fe8" />
              <circle cx="34" cy="40" r="6" fill="#fff" />
              <circle cx="62" cy="40" r="6" fill="#fff" />
              <path d="M 30 60 Q 48 76 66 60" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <h3 style={h3Style('#fff', '42px')}>adventures</h3>
          <div style={divider(false)} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {[
              'Skydiving',
              'Scuba Diving',
              'Paragliding',
              'Motorcycle Riding',
              'Dragon Boat Racing',
              'International Travel',
            ].map((s) => <span key={s} style={item('#fff')}>♦ {s}</span>)}
          </div>
        </div>

        {/* Card 4: Building a Stronger Me — light rose */}
        <div className="s5c" style={{ ...cardBase, background: '#f5c2da' }}>
          <div style={{ position: 'absolute', top: '-44px', right: '16px', pointerEvents: 'none' }}>
            <svg width="100" height="80" viewBox="0 0 100 80">
              <ellipse cx="50" cy="40" rx="48" ry="37" fill="#d4f540" />
              <ellipse cx="50" cy="40" rx="15" ry="19" stroke="#8b1a4a" strokeWidth="3" fill="#fff" />
              <circle cx="50" cy="40" r="7" fill="#8b1a4a" />
              <line x1="50" y1="4" x2="50" y2="14" stroke="#8b1a4a" strokeWidth="3" strokeLinecap="round" />
              <line x1="50" y1="66" x2="50" y2="76" stroke="#8b1a4a" strokeWidth="3" strokeLinecap="round" />
              <line x1="12" y1="40" x2="22" y2="40" stroke="#8b1a4a" strokeWidth="3" strokeLinecap="round" />
              <line x1="78" y1="40" x2="88" y2="40" stroke="#8b1a4a" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <h3 style={h3Style('#6b1038', '32px')}>building a<br />stronger me</h3>
          <div style={divider(true)} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {[
              'Health & Fitness',
              'Strength Training',
              'Discipline & Habits',
              'Mindset Work',
              'Personal Growth',
              'New Challenges',
            ].map((s) => <span key={s} style={item('#6b1038')}>♦ {s}</span>)}
          </div>
        </div>

        {/* Card 5: Community — lavender */}
        <div className="s5c" style={{ ...cardBase, background: '#d680e0' }}>
          <div style={{ position: 'absolute', top: '-44px', right: '16px', pointerEvents: 'none' }}>
            <svg width="96" height="96" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="48" fill="#f0eaff" />
              <path d="M48 70 C48 70 26 58 26 40 C26 30 35 24 48 36 C61 24 70 30 70 40 C70 58 48 70 48 70Z" fill="#771040" />
              <path d="M48 16 L50.2 24 L58 26.2 L50.2 28.4 L48 36.4 L45.8 28.4 L38 26.2 L45.8 24Z" fill="#5a1e8a" />
              <path d="M76 10 L77.8 16 L84 17.8 L77.8 19.6 L76 25.6 L74.2 19.6 L68 17.8 L74.2 16Z" fill="#5a1e8a" />
            </svg>
          </div>
          <h3 style={h3Style('#fff', '42px')}>community</h3>
          <div style={divider(false)} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {[
              'Club Chartering',
              'Leader Development',
              'District Roles',
              'New York Toastmasters',
              'Lasting Friendships',
              'Mentoring Members',
            ].map((s) => <span key={s} style={item('#fff')}>♦ {s}</span>)}
          </div>
        </div>

      </div>
    </div>
  )
}

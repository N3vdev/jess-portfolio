export default function ScrollTextSection() {
  return (
    <div id="s2-wrap" style={{ position: 'relative', flexShrink: 0, height: '250vh' }}>
      <div id="s2-card" style={{
        position: 'sticky', top: '10px',
        height: 'calc(100vh - 20px)', borderRadius: '20px',
        overflow: 'hidden', background: '#edecea',
      }}>

        {/* ─── scrolling text track ─── */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', paddingBottom: '8%' }}>
          <div id="s2-track" style={{ willChange: 'transform', whiteSpace: 'nowrap', paddingLeft: '48px' }}>
            <span id="s2-text" style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 'clamp(52px, 7.5vw, 116px)',
              color: '#0d0d0d', letterSpacing: '-0.02em',
              lineHeight: 1, display: 'inline-block',
            }}>
              leadership is not about titles
            </span>
          </div>
        </div>

        {/* ─── GSAP scroll stickers (inner wrapper = CSS float, outer = GSAP x-scroll) ─── */}

        {/* S1 — lime speech bubble */}
        <div id="s2-s1" style={{ position: 'absolute', top: '20%', left: '54%', pointerEvents: 'none', zIndex: 2 }}>
          <div style={{ animation: 'doodleFloat 3.2s ease-in-out infinite' }}>
            <svg viewBox="0 0 92 92" width="108" height="108">
              {/* bubble body */}
              <path d="M 10 6 Q 3 6 3 13 L 3 56 Q 3 63 10 63 L 26 63 L 17 80 L 46 63 L 82 63 Q 89 63 89 56 L 89 13 Q 89 6 82 6 Z" fill="#c5ef5e"/>
              {/* shadow under bubble */}
              <path d="M 10 9 Q 3 9 3 16 L 3 59 Q 3 66 10 66 L 26 66 L 17 83 L 46 66 L 82 66 Q 89 66 89 59" fill="rgba(0,0,0,0.07)"/>
              {/* three dots */}
              <circle cx="29" cy="35" r="6.5" fill="#1a4a1a" opacity="0.72"/>
              <circle cx="46" cy="35" r="6.5" fill="#1a4a1a" opacity="0.72"/>
              <circle cx="63" cy="35" r="6.5" fill="#1a4a1a" opacity="0.72"/>
            </svg>
          </div>
        </div>

        {/* S2 — coral 4-pointed starburst */}
        <div id="s2-s2" style={{ position: 'absolute', top: '7%', left: '60%', pointerEvents: 'none', zIndex: 2 }}>
          <div style={{ animation: 'doodleWiggle 2.6s ease-in-out infinite' }}>
            <svg viewBox="0 0 90 90" width="100" height="100">
              {/* outer star */}
              <path d="M45 4 C45 4 40.5 34 36 45 C31.5 56 4 45 4 45 C4 45 31.5 34 36 45 C40.5 56 45 86 45 86 C45 86 49.5 56 54 45 C58.5 34 86 45 86 45 C86 45 58.5 56 54 45 C49.5 34 45 4 45 4 Z" fill="#e85c30"/>
              {/* inner highlight */}
              <path d="M45 18 C45 18 42.5 38 40 45 C37.5 52 22 45 22 45 C22 45 37.5 38 40 45 C42.5 52 45 72 45 72 C45 72 47.5 52 50 45 C52.5 38 68 45 68 45 C68 45 52.5 52 50 45 C47.5 38 45 18 45 18 Z" fill="rgba(255,255,255,0.22)"/>
              {/* centre dot */}
              <circle cx="45" cy="45" r="8" fill="white" opacity="0.35"/>
            </svg>
          </div>
        </div>

        {/* S3 — lavender paper airplane */}
        <div id="s2-s3" style={{ position: 'absolute', top: '42%', right: '6%', pointerEvents: 'none', zIndex: 2 }}>
          <div style={{ animation: 'doodleFloatB 4s ease-in-out infinite' }}>
            <svg viewBox="0 0 92 92" width="100" height="100">
              {/* circle bg */}
              <circle cx="46" cy="46" r="43" fill="#dce4fa"/>
              {/* subtle inner ring */}
              <circle cx="46" cy="46" r="43" fill="none" stroke="#b0c0f0" strokeWidth="1.5" opacity="0.6"/>
              {/* plane body */}
              <path d="M 16 48 L 72 20 L 58 74 L 46 58 Z" fill="#4a5bc4"/>
              {/* fold shadow */}
              <path d="M 46 58 L 52 45 L 58 74 Z" fill="rgba(0,0,60,0.25)"/>
              {/* motion trail */}
              <circle cx="7"  cy="56" r="3"   fill="#4a5bc4" opacity="0.35"/>
              <circle cx="13" cy="60" r="2.4" fill="#4a5bc4" opacity="0.25"/>
              <circle cx="19" cy="62" r="1.8" fill="#4a5bc4" opacity="0.16"/>
            </svg>
          </div>
        </div>

        {/* ─── CSS-only floating doodles (always visible, no GSAP) ─── */}

        {/* Lightning bolt — top left, fast float */}
        <div style={{
          position: 'absolute', top: '7%', left: '8%',
          pointerEvents: 'none', zIndex: 2,
          animation: 'doodleFloat 2.1s ease-in-out infinite',
        }}>
          <svg viewBox="0 0 44 74" width="44" height="74">
            <path d="M 29 3 L 8 40 L 21 40 L 15 71 L 40 32 L 25 32 Z"
              fill="#ffd60a" stroke="#1a1200" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Heart — mid left, slow float reversed */}
        <div style={{
          position: 'absolute', top: '56%', left: '6%',
          pointerEvents: 'none', zIndex: 2,
          animation: 'doodleFloatB 4.2s ease-in-out infinite 0.7s',
        }}>
          <svg viewBox="0 0 72 64" width="72" height="64">
            <path d="M 36 60 C 36 60 4 38 4 18 C 4 8 13 2 22 4 C 29 6 36 14 36 14 C 36 14 43 6 50 4 C 59 2 68 8 68 18 C 68 38 36 60 36 60 Z"
              fill="#f0b5cc" stroke="#d0608a" strokeWidth="2.5" strokeLinejoin="round"/>
            {/* tiny sparkle on heart */}
            <path d="M55 12 L56 16 L60 17 L56 18 L55 22 L54 18 L50 17 L54 16 Z" fill="#d0608a" opacity="0.8"/>
          </svg>
        </div>

        {/* Outline star — bottom right area, slow spin */}
        <div style={{
          position: 'absolute', top: '66%', right: '12%',
          pointerEvents: 'none', zIndex: 2,
          animation: 'doodleSpin 16s linear infinite',
        }}>
          <svg viewBox="0 0 68 68" width="68" height="68">
            {/* outer 4-pointed outline star */}
            <path d="M34 3 L37 29 L62 27 L37 31 L34 57 L31 31 L6 27 L31 29 Z"
              fill="none" stroke="#111" strokeWidth="2.8" strokeLinejoin="round"/>
            {/* diagonal mini arms */}
            <path d="M16 16 L28 28 M52 16 L40 28 M16 52 L28 40 M52 52 L40 40"
              stroke="#111" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"/>
          </svg>
        </div>


        {/* Squiggly blob / scribble — lower left */}
        <div style={{
          position: 'absolute', top: '72%', left: '20%',
          pointerEvents: 'none', zIndex: 2,
          animation: 'doodleFloat 5s ease-in-out infinite 2s',
        }}>
          <svg viewBox="0 0 96 50" width="96" height="50">
            <path d="M 6 28 C 12 10 24 6 34 14 C 44 22 46 6 58 8 C 70 10 74 26 84 22 C 92 18 94 28 90 34"
              stroke="#6282ec" strokeWidth="3.6" fill="none" strokeLinecap="round"/>
            <circle cx="6"  cy="28" r="4" fill="#6282ec"/>
            <circle cx="90" cy="34" r="4" fill="#6282ec"/>
          </svg>
        </div>

        {/* ─── bottom content block ─── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0 0 44px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px',
          zIndex: 3, pointerEvents: 'none',
        }}>

          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(15px, 1.25vw, 19px)',
            color: 'rgba(17,17,17,0.72)',
            lineHeight: 1.65,
            maxWidth: '560px',
            textAlign: 'center',
            margin: 0,
          }}>
            "There is always another skill to learn, another challenge to take on,
            and another opportunity to grow."
          </p>

          <div style={{ width: '36px', height: '1.5px', background: 'rgba(17,17,17,0.25)', borderRadius: '2px' }} />

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 'clamp(14px, 1.05vw, 16px)',
            fontWeight: 400,
            color: '#111',
            lineHeight: 1.82,
            maxWidth: '520px',
            textAlign: 'center',
            margin: 0,
          }}>
            I joined Toastmasters on a whim. Years later I'd chartered clubs, served in
            district leadership, and watched people discover strengths they never knew
            they had. That's the kind of growth that matters most to me.
          </p>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 'clamp(13px, 0.95vw, 15px)',
            fontWeight: 400,
            color: 'rgba(17,17,17,0.52)',
            lineHeight: 1.78,
            maxWidth: '480px',
            textAlign: 'center',
            margin: 0,
          }}>
            I work in treasury, lead in Toastmasters, and chase adrenaline on weekends.
            These aren't separate lives — it's all the same one.
          </p>

        </div>

      </div>
    </div>
  )
}

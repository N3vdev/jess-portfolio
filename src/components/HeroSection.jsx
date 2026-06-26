export default function HeroSection() {
  return (
    <div
      data-anim="hero-frame"
      style={{
        height: 'calc(100vh - 20px)',
        flexShrink: 0,
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(158deg, #0c0c1e 0%, #0f0f28 42%, #070710 100%)',
      }}
    >
      {/* Nav */}
      <nav style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 28px',
      }}>
        <div data-anim="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.55')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <svg width="27" height="27" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.99 2C6.476 2 2.01 6.466 2.01 11.98c0 1.93.517 3.742 1.42 5.305L2 22l4.844-1.41c1.486.848 3.208 1.34 5.04 1.34h.004c5.51 0 9.976-4.464 9.976-9.978C21.864 6.47 17.396 2 11.99 2zm0 18.298c-1.69 0-3.26-.5-4.573-1.36l-.328-.195-3.388.99 1.008-3.29-.214-.338C3.61 14.96 3.1 13.52 3.1 11.98c0-4.893 3.98-8.88 8.887-8.88 4.903 0 8.888 3.983 8.888 8.88 0 4.901-3.984 8.896-8.886 8.896l-.001-.003z" />
            </svg>
          </a>
        </div>

        <div data-anim="nav-brand" style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '33px', fontWeight: 700, letterSpacing: '2px',
          color: 'white', userSelect: 'none',
        }}>
          Jessly
        </div>

        <a
          data-anim="nav-wa"
          href="/blogs"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '15px', fontWeight: 700,
            color: 'rgba(255,255,255,0.82)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
        >
          blogs
        </a>
      </nav>

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 1, pointerEvents: 'none',
        }}
      >
        <source src="/hero_edit_web.mp4" type="video/mp4" />
      </video>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.08) 70%, transparent 100%)',
      }} />

      {/* Headline */}
      <div data-anim="headline" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, padding: '0 54px 58px' }}>

        {/* Line 1 — columnGap handles word spacing; no trailing spaces in spans */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: '0.26em',
          fontFamily: "'Nunito', sans-serif", fontWeight: 900,
          fontSize: 'clamp(38px, 5.8vw, 96px)', lineHeight: 1.0,
          color: 'white', letterSpacing: '-0.018em',
        }}>
          <span>risk</span>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic', fontWeight: 500,
            letterSpacing: '0.01em', color: 'rgba(255,255,255,0.9)',
          }}>manager.</span>
        </div>

        {/* Line 2 */}
        <div style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '0.26em',
          fontFamily: "'Nunito', sans-serif", fontWeight: 900,
          fontSize: 'clamp(38px, 5.8vw, 96px)', lineHeight: 1.06,
          color: 'white', letterSpacing: '-0.018em',
        }}>
          <span>risk</span>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            taker.
            <svg
              style={{ position: 'absolute', left: '-4px', bottom: '-0.11em', width: 'calc(100% + 8px)', height: '0.32em', overflow: 'visible', pointerEvents: 'none' }}
              viewBox="0 0 300 22"
              preserveAspectRatio="none"
            >
              <ellipse cx="150" cy="11" rx="148" ry="10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.2" />
            </svg>
          </span>
          <span data-anim="sparkle" style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.04em' }}>
            <svg style={{ width: '0.44em', height: '0.44em' }} viewBox="0 0 40 40" fill="oklch(0.84 0.19 296)">
              <path d="M20 0 L23 17 L40 20 L23 23 L20 40 L17 23 L0 20 L17 17 Z" />
            </svg>
          </span>
        </div>

      </div>
    </div>
  )
}

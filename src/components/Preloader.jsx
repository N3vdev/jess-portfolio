import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL || './'

// Every image the site uses — preloaded up front so pages feel instant.
const IMAGES = [
  'card-1.jpg', 'card-2.jpg', 'card-3.png', 'card-4.jpg', 'card-5.jpg',
  'card-6.jpg', 'card-7.jpg', 'card-8.png', 'card-9.png',
  'card-1-cropped.jpg', 'card-3-cropped.png',
].map(f => `${BASE}Assets/${f}`)

const MIN_DURATION = 550   // keep the screen on-screen at least this long (ms)
const FADE_DURATION = 500  // fade-out length (ms)

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let loaded = 0
    const start = performance.now()
    let finished = false

    const bump = () => {
      loaded += 1
      setProgress(Math.round((loaded / IMAGES.length) * 100))
      if (loaded >= IMAGES.length) finish()
    }

    const finish = () => {
      if (finished) return
      finished = true
      const elapsed = performance.now() - start
      const wait = Math.max(0, MIN_DURATION - elapsed)
      setTimeout(() => {
        setProgress(100)
        setLeaving(true)
        setTimeout(() => { setGone(true); onDone?.() }, FADE_DURATION)
      }, wait)
    }

    IMAGES.forEach(src => {
      const img = new Image()
      img.onload = bump
      img.onerror = bump   // don't let a missing/404 image block reveal
      img.src = src
    })

    // Safety net: never hang longer than 4s even if something stalls
    const safety = setTimeout(finish, 4000)
    return () => clearTimeout(safety)
  }, [onDone])

  if (gone) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#FCFAF8',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '26px',
        opacity: leaving ? 0 : 1,
        transition: `opacity ${FADE_DURATION}ms cubic-bezier(.4,0,.2,1)`,
        pointerEvents: leaving ? 'none' : 'auto',
      }}
    >
      {/* Logo mark */}
      <div style={{ textAlign: 'center', animation: 'preFade 0.6s cubic-bezier(.22,1,.36,1) both' }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: '48px', fontWeight: 700, color: '#123E7A', lineHeight: 1 }}>Jessly</div>
        <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', color: '#123E7A', opacity: 0.5, marginTop: '4px', paddingLeft: '0.28em' }}>CHETTANIYAL</div>
      </div>

      {/* Progress track */}
      <div style={{ width: '160px', height: '3px', borderRadius: '999px', background: 'rgba(18,62,122,0.12)', overflow: 'hidden' }}>
        <div style={{
          width: `${progress}%`, height: '100%',
          background: 'linear-gradient(90deg, #123E7A, #C7A35B)',
          borderRadius: '999px',
          transition: 'width 0.3s cubic-bezier(.4,0,.2,1)',
        }} />
      </div>

      <style>{`
        @keyframes preFade {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}

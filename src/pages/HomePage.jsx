import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from '../components/HeroSection'
import ScrollTextSection from '../components/ScrollTextSection'
import WorkGallery from '../components/WorkGallery'
import SwipeableDeck from '../components/SwipeableDeck'
import ServiceCards from '../components/ServiceCards'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  useEffect(() => {
    const ease = 'power3.out'
    const tl = gsap.timeline()

    tl
      .fromTo('[data-anim="nav-logo"]',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.55, ease }
      )
      .fromTo('[data-anim="nav-brand"]',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6, ease },
        '<0.07'
      )
      .fromTo('[data-anim="nav-wa"]',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.55, ease },
        '<0'
      )
      .fromTo('[data-anim="hero-frame"]',
        { opacity: 0, scale: 0.974, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.95, ease },
        '<0.1'
      )
      .fromTo('[data-anim="headline"]',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 0.82, ease },
        '<0.52'
      )
      .fromTo('[data-anim="sparkle"]',
        { opacity: 0, scale: 0, rotation: -32 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.48, ease: 'back.out(2.2)' },
        '-=0.24'
      )

    gsap.to('[data-anim="hero-frame"]', {
      yPercent: -7,
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-anim="hero-frame"]',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.4,
      },
    })

    // Section 2: letter-drop scroll animation
    const s2Text = document.getElementById('s2-text')
    if (s2Text) {
      const raw = s2Text.textContent
      s2Text.innerHTML = ''
      const letters2 = []
      for (let ci = 0; ci < raw.length; ci++) {
        const lsp = document.createElement('span')
        lsp.textContent = raw[ci]
        lsp.style.display = 'inline-block'
        lsp.style.willChange = 'transform, opacity'
        if (raw[ci] === ' ') lsp.style.width = '0.55em'
        s2Text.appendChild(lsp)
        letters2.push(lsp)
      }

      const vw = window.innerWidth
      const textW = s2Text.offsetWidth
      const startX = vw * 1.08
      const endX = -(textW + vw * 0.35)
      const travel = startX - endX
      const tlDur = 1.0
      const dropDur = 0.055

      const s2tl = gsap.timeline({ defaults: { ease: 'none' } })
      s2tl.fromTo('#s2-track', { x: startX }, { x: endX, duration: tlDur }, 0)
      gsap.set(letters2, { y: -200, x: 40, opacity: 0, rotation: 24 })

      letters2.forEach((lsp, li) => {
        const letterPx = lsp.offsetLeft
        let enterProg = (startX + letterPx - vw) / travel
        enterProg = Math.max(0, Math.min(tlDur - dropDur, enterProg))
        const landY = 0
        const landR = Math.sin(li * 0.44) * 16
        const startR = 24 + Math.sin(li * 1.6) * 12
        s2tl.fromTo(
          lsp,
          { y: -200, x: 40, opacity: 0, rotation: startR },
          { y: landY, x: 0, opacity: 1, rotation: landR, duration: dropDur, ease: 'power3.out' },
          enterProg
        )
      })

      s2tl.fromTo('#s2-s1', { x: vw * 0.5, opacity: 0 }, { x: -vw * 0.85, opacity: 1, duration: 1.0 }, 0)
      s2tl.fromTo('#s2-s2', { x: vw * 0.38, opacity: 0 }, { x: -vw * 0.68, opacity: 1, duration: 1.0 }, 0)
      s2tl.fromTo('#s2-s3', { x: vw * 0.24, opacity: 0 }, { x: -vw * 0.46, opacity: 1, duration: 1.0 }, 0)

      ScrollTrigger.create({
        animation: s2tl,
        trigger: '#s2-wrap',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      })
    }

    // Section 3: magnetic card hover
    const allCards = Array.from(document.querySelectorAll('[data-card]'))
    allCards.forEach((card, idx) => {
      gsap.set(card, { transformPerspective: 900 })
      const xTo  = gsap.quickTo(card, 'x',       { duration: 0.5, ease: 'power3.out' })
      const yTo  = gsap.quickTo(card, 'y',       { duration: 0.5, ease: 'power3.out' })
      const ryTo = gsap.quickTo(card, 'rotateY', { duration: 0.5, ease: 'power3.out' })
      const rxTo = gsap.quickTo(card, 'rotateX', { duration: 0.5, ease: 'power3.out' })
      let cachedRect = null

      const ripple = (nx, ny) => {
        allCards.forEach((other, oi) => {
          if (other === card) return
          const dist = Math.abs(oi - idx)
          if (dist > 2) return
          const f = dist === 1 ? 0.28 : 0.12
          const dir = oi < idx ? -1 : 1
          gsap.to(other, { x: dir * nx * 6 * f, y: ny * 4 * f, rotateY: dir * nx * 2 * f, rotateX: -ny * 1.5 * f, duration: 0.5, ease: 'power2.out', overwrite: 'auto' })
        })
      }

      const resetRipple = () => {
        allCards.forEach((other) => {
          if (other === card) return
          gsap.to(other, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' })
        })
      }

      card.addEventListener('mouseenter', (e) => {
        cachedRect = card.getBoundingClientRect()
        const cx = cachedRect.left + cachedRect.width / 2
        const cy = cachedRect.top + cachedRect.height / 2
        const dx = e.clientX - cx, dy = e.clientY - cy
        let px = 0, py = 0
        if (Math.abs(dx) >= Math.abs(dy)) px = dx < 0 ? 8 : -8
        else py = dy < 0 ? 6 : -6
        gsap.killTweensOf(card)
        gsap.fromTo(card, { x: 0, y: 0 }, { x: px, y: py, duration: 0.18, ease: 'power2.out' })
      })
      card.addEventListener('mousemove', (e) => {
        if (!cachedRect) return
        const nx = (e.clientX - cachedRect.left - cachedRect.width / 2) / (cachedRect.width / 2)
        const ny = (e.clientY - cachedRect.top - cachedRect.height / 2) / (cachedRect.height / 2)
        xTo(nx * 8); yTo(ny * 5); ryTo(nx * 6); rxTo(-ny * 4)
        ripple(nx, ny)
      })
      card.addEventListener('mouseleave', () => {
        cachedRect = null
        gsap.to(card, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.75, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' })
        resetRipple()
      })
    })

    // Section 4: swipeable deck
    const s4Cards = [1, 2, 3, 4, 5, 6].map((i) => document.getElementById(`s4-c${i}`)).filter(Boolean)
    const s4Hint = document.getElementById('s4-hint')
    const s4Section = document.getElementById('s4')
    const N4 = s4Cards.length
    let front4 = 0

    const SLOT4 = [
      { x: 0,    y: 0,  r: 0,   z: 10 },
      { x: 120,  y: 28, r: 16,  z: 5 },
      { x: 210,  y: 56, r: 28,  z: 3 },
      { x: 0,    y: 76, r: 0,   z: 1 },
      { x: -210, y: 56, r: -28, z: 2 },
      { x: -120, y: 28, r: -16, z: 4 },
    ]

    const placeDeck4 = (animate) => {
      s4Cards.forEach((card, i) => {
        const rel = (i - front4 + N4) % N4
        const sl = SLOT4[rel]
        const isFront = rel === 0
        card.style.border = isFront ? '3px solid rgba(255,255,255,0.92)' : '3px solid rgba(255,255,255,0.5)'
        card.style.cursor = isFront ? 'grab' : 'default'
        card._s4front = isFront
        const shadow = isFront ? '0 28px 80px rgba(0,0,0,0.95)' : '0 10px 36px rgba(0,0,0,0.55)'
        if (animate) gsap.to(card, { x: sl.x, y: sl.y, rotation: sl.r, zIndex: sl.z, boxShadow: shadow, duration: 0.38, ease: 'power3.out', overwrite: 'auto' })
        else gsap.set(card, { x: sl.x, y: sl.y, rotation: sl.r, zIndex: sl.z, boxShadow: shadow })
      })
    }

    if (s4Cards.length && s4Section) {
      placeDeck4(false)
      let drag4Active = false, drag4StartX = 0, drag4CurX = 0

      const onPointerDown = (e) => {
        e.preventDefault()
        const fc = s4Cards[front4]
        if (!fc || !fc._s4front) return
        const rect = fc.getBoundingClientRect()
        if (e.clientX < rect.left - 10 || e.clientX > rect.right + 10 || e.clientY < rect.top - 10 || e.clientY > rect.bottom + 10) return
        drag4Active = true; drag4StartX = e.clientX; drag4CurX = 0
        s4Section.setPointerCapture(e.pointerId)
        fc.style.cursor = 'grabbing'
        if (s4Hint) s4Hint.style.opacity = '0'
        gsap.killTweensOf(fc)
      }
      const onPointerMove = (e) => {
        if (!drag4Active) return
        drag4CurX = e.clientX - drag4StartX
        gsap.set(s4Cards[front4], { x: drag4CurX, y: Math.abs(drag4CurX) * 0.05, rotation: drag4CurX * 0.055, zIndex: 10 })
      }
      const onPointerUp = () => {
        if (!drag4Active) return
        drag4Active = false
        const fc = s4Cards[front4]
        if (Math.abs(drag4CurX) > 55) {
          front4 = drag4CurX > 0 ? (front4 - 1 + N4) % N4 : (front4 + 1) % N4
          placeDeck4(true)
        } else {
          gsap.to(fc, { x: 0, y: 0, rotation: 0, duration: 0.4, ease: 'power3.out' })
          fc.style.cursor = 'grab'
        }
        drag4CurX = 0
      }
      const onPointerCancel = () => {
        if (!drag4Active) return
        drag4Active = false
        gsap.to(s4Cards[front4], { x: 0, y: 0, rotation: 0, duration: 0.75, ease: 'elastic.out(1, 0.6)' })
      }
      const onMouseMove4 = (e) => {
        if (drag4Active || !s4Hint) return
        const fc = s4Cards[front4]
        if (!fc) return
        const rect = fc.getBoundingClientRect()
        const over = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom
        const sr = s4Section.getBoundingClientRect()
        s4Hint.style.left = (e.clientX - sr.left) + 'px'
        s4Hint.style.top  = (e.clientY - sr.top)  + 'px'
        s4Hint.style.opacity = over ? '1' : '0'
      }
      const onMouseLeave4 = () => { if (s4Hint) s4Hint.style.opacity = '0' }

      s4Section.addEventListener('pointerdown', onPointerDown)
      s4Section.addEventListener('pointermove', onPointerMove)
      s4Section.addEventListener('pointerup', onPointerUp)
      s4Section.addEventListener('pointercancel', onPointerCancel)
      s4Section.addEventListener('mousemove', onMouseMove4)
      s4Section.addEventListener('mouseleave', onMouseLeave4)
    }

    // Section 5: fanned card hover
    const s5Cards = Array.from(document.querySelectorAll('.s5c'))
    const s5Stage = document.getElementById('s5-stage')

    if (s5Cards.length && s5Stage) {
      const S5DEF = [
        { x: -440, y: 24, r: -13 },
        { x: -220, y: 6,  r: -5 },
        { x: 0,    y: -8, r: 2 },
        { x: 220,  y: 6,  r: 8 },
        { x: 440,  y: 24, r: 14 },
      ]
      s5Cards.forEach((card, i) => {
        gsap.set(card, { x: S5DEF[i].x, y: S5DEF[i].y, rotation: S5DEF[i].r, zIndex: i + 1, boxShadow: i === 2 ? '0 20px 60px rgba(0,0,0,0.18)' : '0 10px 36px rgba(0,0,0,0.12)' })
        card.addEventListener('mouseenter', () => {
          s5Cards.forEach((other, j) => {
            const dist = j - i
            gsap.to(other, { x: S5DEF[j].x + dist * 200, y: dist === 0 ? -22 : S5DEF[j].y + Math.abs(dist) * 6, rotation: dist === 0 ? 0 : S5DEF[j].r + dist * 3, zIndex: dist === 0 ? 10 : 5 - Math.abs(dist), scale: dist === 0 ? 1.05 : 1, boxShadow: dist === 0 ? '0 32px 90px rgba(0,0,0,0.26)' : '0 6px 22px rgba(0,0,0,0.08)', duration: 0.4, ease: 'power3.out', overwrite: 'auto' })
          })
        })
      })
      s5Stage.addEventListener('mouseleave', () => {
        s5Cards.forEach((card, i) => {
          gsap.to(card, { x: S5DEF[i].x, y: S5DEF[i].y, rotation: S5DEF[i].r, zIndex: i + 1, scale: 1, boxShadow: '0 10px 36px rgba(0,0,0,0.14)', duration: 0.5, ease: 'power3.out', overwrite: 'auto' })
        })
      })
    }

    // Restore scroll position when returning from blogs
    const savedY = sessionStorage.getItem('returnScrollY')
    if (savedY) {
      sessionStorage.removeItem('returnScrollY')
      requestAnimationFrame(() => {
        window.scrollTo({ top: parseInt(savedY, 10), behavior: 'instant' })
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', padding: '10px', display: 'flex', flexDirection: 'column', gap: 0 }}>
      <HeroSection />
      <ScrollTextSection />
      <WorkGallery />
      <SwipeableDeck />
      <ServiceCards />
      <ContactSection />
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

// Splits a stat like "1000+" → { prefix:'', target:1000, suffix:'+' }
// or "CTP®" → { prefix:'CTP®', target:null } (rendered as-is, no rolling).
function parse(value) {
  const m = String(value).match(/^(\D*)(\d[\d,]*)(.*)$/)
  if (!m) return { prefix: String(value), target: null, suffix: '' }
  return {
    prefix: m[1] || '',
    target: parseInt(m[2].replace(/,/g, ''), 10),
    suffix: m[3] || '',
  }
}

// easeOutCubic
const ease = (t) => 1 - Math.pow(1 - t, 3)

export default function CountUp({ value, start, duration = 1400, style }) {
  const { prefix, target, suffix } = parse(value)
  const [display, setDisplay] = useState(target === null ? value : `${prefix}0${suffix}`)
  const rafRef = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    if (target === null || !start || done.current) return
    done.current = true
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      const n = Math.round(ease(p) * target)
      setDisplay(`${prefix}${n.toLocaleString()}${suffix}`)
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [start, target, duration, prefix, suffix])

  return <p style={style}>{display}</p>
}

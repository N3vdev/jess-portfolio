import { useState } from 'react'

export default function Img({ src, alt, style, wrapStyle, className, fetchpriority, loading, ...props }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="img-wrap" style={{ width: '100%', height: '100%', ...wrapStyle }}>
      {!loaded && <div className="img-skeleton" style={{ borderRadius: style?.borderRadius }} />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchpriority={fetchpriority}
        onLoad={() => setLoaded(true)}
        className={loaded ? `img-loaded${className ? ' ' + className : ''}` : className}
        style={{
          ...style,
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: loaded ? 1 : 0,
        }}
        {...props}
      />
    </div>
  )
}

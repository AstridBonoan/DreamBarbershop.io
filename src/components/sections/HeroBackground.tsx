import { motion, useScroll, useTransform } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import { SITE } from '../../data/site'

const POSTER = `${import.meta.env.BASE_URL}logo.png`
const VIDEO_SRC = `${import.meta.env.BASE_URL}${SITE.heroVideo}`

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1585747860715-2ba37e808f54?w=1920&h=1080&fit=crop&q=85'

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const [useFallback, setUseFallback] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  const handleVideoError = useCallback(() => setUseFallback(true), [])

  return (
    <motion.div ref={ref} style={{ y, scale }} className="absolute inset-0 overflow-hidden bg-black">
      {!useFallback ? (
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          onError={handleVideoError}
          aria-hidden
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <img
          src={FALLBACK_IMAGE}
          alt=""
          className="hero-video absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Light cinematic grade — video stays vivid */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Left scrim for readable copy */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Subtle neon brand tint at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-neon/10 to-transparent pointer-events-none" />
    </motion.div>
  )
}

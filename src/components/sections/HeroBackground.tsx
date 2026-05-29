import { motion, useScroll, useTransform } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import { SITE } from '../../data/site'

const POSTER = `${import.meta.env.BASE_URL}logo.png?v=4`
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
    <motion.div ref={ref} style={{ y, scale }} className="absolute inset-0 overflow-hidden bg-void">
      {!useFallback ? (
        <video
          className="hero-video-light absolute inset-0 h-full w-full object-cover"
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
          className="hero-video-light absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Soft white wash — lighter than before so video reads through */}
      <div className="absolute inset-0 bg-void/45 pointer-events-none" />

      {/* Stronger white on left for text; right stays more open */}
      <div className="absolute inset-0 bg-linear-to-r from-void/85 via-void/50 to-void/15 pointer-events-none" />

      {/* Bottom anchor — keeps bright feel */}
      <div className="absolute inset-0 bg-linear-to-t from-void via-void/35 to-void/10 pointer-events-none" />
    </motion.div>
  )
}

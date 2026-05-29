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
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  const handleVideoError = useCallback(() => setUseFallback(true), [])

  return (
    <motion.div ref={ref} style={{ y, scale }} className="absolute inset-0 overflow-hidden">
      {!useFallback ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
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
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-void/75" />
      <div className="absolute inset-0 bg-linear-to-t from-void via-void/55 to-void/25" />
      <div className="absolute inset-0 bg-linear-to-r from-void/40 via-transparent to-void/40" />
    </motion.div>
  )
}

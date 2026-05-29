import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SITE } from '../../data/site'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1622286342621-4bd786c24470?w=1920&h=1080&fit=crop&q=85',
  'https://images.unsplash.com/photo-1585747860715-2ba37e808f54?w=1920&h=1080&fit=crop&q=85',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&h=1080&fit=crop&q=85',
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] flex items-end overflow-hidden bg-void"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
          {HERO_IMAGES.map((src, i) => (
            <div key={src} className="relative overflow-hidden h-full min-h-[40vh] md:min-h-0">
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-void/80 md:bg-void/70" />
        <div className="absolute inset-0 bg-linear-to-t from-void via-void/50 to-void/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full mx-auto max-w-7xl px-5 md:px-8 pb-28 md:pb-32 pt-24 md:pt-28"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 md:mb-8"
        >
          <Logo size="hero" className="drop-shadow-[0_8px_32px_rgba(184,240,40,0.35)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-neon-dim mb-4">
            Elmhurst · Queens
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display text-[clamp(2.5rem,10vw,6.5rem)] leading-[0.92] text-cream tracking-wide max-w-4xl"
        >
          {SITE.tagline.split('. ').map((line, i) => (
            <span key={line} className="block">
              {line + (i < 2 ? '.' : '')}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-lg text-silver text-base md:text-lg leading-relaxed"
        >
          {SITE.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button href={SITE.bookingUrl} size="lg">
            Book Appointment
          </Button>
          <Button href="#barbers" variant="secondary" size="lg">
            View Barbers
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-12 bg-neon rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

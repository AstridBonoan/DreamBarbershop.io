import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-12 md:mb-16 ${alignClass}`}
    >
      <span className="block font-heading text-xs md:text-sm tracking-[0.35em] uppercase text-muted mb-3">
        {label}
      </span>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.95] tracking-wide">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-silver text-base md:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-cream ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </motion.div>
  )
}

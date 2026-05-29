import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { REVIEWS } from '../../data/reviews'
import { SectionHeading } from '../ui/SectionHeading'

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-ink relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Testimonials"
          title="CLIENT LOVE"
          description="Real feedback from real regulars. Trust built one cut at a time."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-panel p-6 md:p-8 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-cream text-base md:text-lg leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-center justify-between">
                <cite className="not-italic font-heading text-sm tracking-wider text-gold">
                  — {review.name}
                </cite>
                {review.service && (
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted">
                    {review.service}
                  </span>
                )}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

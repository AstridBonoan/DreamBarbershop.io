import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { REVIEWS } from '../../data/reviews'
import { SectionHeading } from '../ui/SectionHeading'

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 section-muted relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Testimonials"
          title="CLIENT LOVE"
          description="What regulars say — the same trust you see in our reviews online."
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
              className="card-elevated p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-neon text-neon" />
                ))}
              </div>
              <p className="text-cream text-base md:text-lg leading-relaxed font-light">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-center justify-between gap-4">
                <cite className="not-italic font-heading text-sm tracking-wider text-cream">
                  — {review.name}
                </cite>
                {review.service && (
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted shrink-0">
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

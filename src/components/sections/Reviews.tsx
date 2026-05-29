import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { REVIEWS } from '../../data/reviews'
import { SITE } from '../../data/site'
import { GoogleLogo } from '../ui/GoogleLogo'
import { SectionHeading } from '../ui/SectionHeading'

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 section-muted relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Testimonials"
          title="CLIENT LOVE"
          description="Real reviews from Google — the same rating guests see when they search for us."
          align="center"
        />

        <motion.a
          href={SITE.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 md:mb-16 flex max-w-md flex-col items-center gap-3 rounded-lg border border-stone bg-void px-6 py-5 text-center shadow-sm transition-colors hover:border-neon-dim/40"
        >
          <div className="flex items-center gap-2">
            <GoogleLogo size={22} />
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-muted">
              Google Reviews
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display text-5xl text-cream leading-none">
              {SITE.googleRating}
            </span>
            <div className="text-left">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-neon text-neon" />
                ))}
              </div>
              <p className="mt-1 text-sm text-muted">
                {SITE.googleReviewCount}+ reviews on Google
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 font-heading text-[10px] tracking-[0.2em] uppercase text-neon-dim">
            See all on Google
            <ExternalLink size={12} />
          </span>
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-elevated flex flex-col p-6 md:p-8"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-neon text-neon" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <GoogleLogo size={14} />
                  <span className="text-[10px] tracking-[0.15em] uppercase text-muted">Google</span>
                </div>
              </div>
              <p className="text-cream text-base md:text-lg leading-relaxed font-light flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-end justify-between gap-4 border-t border-stone/60 pt-4">
                <cite className="not-italic">
                  <span className="block font-heading text-sm tracking-wider text-cream">
                    {review.name}
                  </span>
                  <span className="mt-1 block text-xs text-muted">{review.date}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted max-w-lg mx-auto leading-relaxed">
          Review excerpts from public Google listings for {SITE.fullName}. Ratings and counts may
          update on{' '}
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-dim hover:underline"
          >
            Google
          </a>
          .
        </p>
      </div>
    </section>
  )
}

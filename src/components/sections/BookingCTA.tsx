import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { SITE } from '../../data/site'
import { Button } from '../ui/Button'

export function BookingCTA() {
  return (
    <section id="book" className="py-20 md:py-28 relative overflow-hidden bg-void border-y border-stone">
      <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Calendar className="mx-auto text-neon mb-6" size={32} strokeWidth={1.5} />
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-cream leading-none">
            BOOK ON INSTAGRAM
          </h2>
          <p className="mt-6 text-silver text-lg max-w-xl mx-auto leading-relaxed">
            Message us on {SITE.instagramHandle} to grab a chair — quick, easy, and how most of our
            clients schedule.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={SITE.bookingUrl} size="lg" className="w-full sm:w-auto">
              Open Instagram
              <ArrowRight size={18} />
            </Button>
            <Button
              href={`tel:${SITE.phone.replace(/\D/g, '')}`}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Call {SITE.phone}
            </Button>
          </div>

          <p className="mt-8 text-xs text-muted tracking-[0.25em] uppercase">
            {SITE.address.full}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { SITE } from '../../data/site'
import { Button } from '../ui/Button'

export function BookingCTA() {
  return (
    <section id="book" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1622286342621-4bd786c24470?w=1920&h=800&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Calendar className="mx-auto text-gold mb-6" size={32} />
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-cream leading-none">
            YOUR CHAIR IS WAITING
          </h2>
          <p className="mt-6 text-silver text-lg max-w-xl mx-auto leading-relaxed">
            Book in seconds through Instagram DM or our booking link. Fast, simple, no
            friction — just show up sharp.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={SITE.bookingUrl} size="lg" className="w-full sm:w-auto">
              Book Appointment
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
            Walk-ins welcome · Queens, NY
          </p>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { BOOKING_FOOTNOTE, SERVICES } from '../../data/services'
import { SITE } from '../../data/site'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-void relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Menu"
          title="SERVICES & PRICING"
          description="Book haircuts and combos online. Other services available walk-in when chairs are open."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl mx-auto card-elevated p-6 md:p-8 border-neon/30 bg-moss-light/50"
        >
          <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-neon-dim mb-2">
            {SITE.bookingNotice.title}
          </h3>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            {SITE.bookingNotice.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative p-6 md:p-8 transition-all duration-500 ${
                service.featured
                  ? 'card-elevated border-neon/40 bg-ink'
                  : 'card-elevated hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
              }`}
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-heading tracking-[0.2em] uppercase text-cream bg-neon px-2 py-1 font-bold">
                  {service.tag}
                </span>
              )}
              <h3 className="font-display text-3xl md:text-4xl text-cream">{service.name}</h3>
              <p className="mt-2 text-silver text-sm leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-end justify-between gap-4">
                <span className="font-display text-2xl md:text-3xl text-cream">{service.price}</span>
                {service.bookable ? (
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading tracking-widest uppercase text-neon-dim hover:text-cream transition-colors"
                  >
                    Book →
                  </a>
                ) : (
                  <span className="text-xs text-muted tracking-widest uppercase">Walk-in</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted max-w-2xl mx-auto leading-relaxed">
          {BOOKING_FOOTNOTE}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button href={SITE.bookingUrl}>Book on Square</Button>
        </motion.div>
      </div>
    </section>
  )
}

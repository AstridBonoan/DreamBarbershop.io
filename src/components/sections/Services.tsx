import { motion } from 'framer-motion'
import { SERVICES } from '../../data/services'
import { SITE } from '../../data/site'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-ink relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Menu"
          title="SERVICES & PRICING"
          description="Transparent pricing. Premium results. Walk-ins welcome when available."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative p-6 md:p-8 border transition-all duration-500 ${
                service.featured
                  ? 'border-gold/50 bg-linear-to-br from-charcoal to-slate hover:border-gold'
                  : 'border-white/5 bg-charcoal/50 hover:border-white/15'
              }`}
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-heading tracking-[0.2em] uppercase text-gold border border-gold/40 px-2 py-1">
                  {service.tag}
                </span>
              )}
              <h3 className="font-display text-3xl md:text-4xl text-cream">{service.name}</h3>
              <p className="mt-2 text-silver text-sm leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-end justify-between">
                <span className="font-display text-4xl text-gold">{service.price}</span>
                <span className="text-xs text-muted tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Book →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href={SITE.bookingUrl}>Book Your Service</Button>
        </motion.div>
      </div>
    </section>
  )
}

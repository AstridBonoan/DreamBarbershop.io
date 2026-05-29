import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section id="about" className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={ref} className="relative order-2 lg:order-1">
            <motion.div style={{ y: imageY }} className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&h=1100&fit=crop&q=85"
                alt="DREAM Barbershop interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold/20 m-4 pointer-events-none" />
            </motion.div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 glass-panel p-6 max-w-[200px]">
              <span className="font-display text-5xl text-gold">10+</span>
              <p className="text-xs text-silver mt-1 tracking-wide uppercase">
                Years of craft in Queens
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              label="Our Story"
              title="BUILT IN QUEENS"
              description="More than a haircut — a culture of precision, loyalty, and community."
            />

            <ScrollReveal delay={0.1}>
              <p className="text-silver leading-relaxed mb-6">
                DREAM Barbershop & Salon was born from Queens street culture and elevated
                with a luxury grooming standard. We blend the energy of NYC barbering with
                the polish of a premium destination — where every fade is intentional and
                every lineup tells a story.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-silver leading-relaxed mb-8">
                Our chair is for the community — families, creatives, professionals, and
                anyone who values consistency. Follow us on Instagram for daily work, then
                book your spot. Walk out sharp. Walk out DREAM.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stat: '5K+', label: 'Clients Served' },
                  { stat: '4', label: 'Master Barbers' },
                  { stat: '100%', label: 'Precision Focus' },
                ].map((item) => (
                  <li key={item.label} className="border-l border-gold/40 pl-4">
                    <span className="font-display text-3xl text-cream">{item.stat}</span>
                    <p className="text-xs text-muted mt-1 tracking-widest uppercase">
                      {item.label}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

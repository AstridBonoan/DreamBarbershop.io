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
    <section id="about" className="py-20 md:py-32 bg-void relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={ref} className="relative order-2 lg:order-1">
            <motion.div style={{ y: imageY }} className="relative aspect-[4/5] overflow-hidden card-elevated">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&h=1100&fit=crop&q=85"
                alt="DREAM Barbershop interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 card-elevated p-6 max-w-[200px]">
              <span className="font-display text-5xl text-cream">4.8</span>
              <p className="text-xs text-muted mt-1 tracking-wide uppercase">
                Rated on Google & Yelp
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              label="Our Story"
              title="ELMHURST BUILT"
              description="A welcoming shop on Grand Ave — neat, friendly, and consistent."
            />

            <ScrollReveal delay={0.1}>
              <p className="text-silver leading-relaxed mb-6">
                DREAM Barbershop & Salon is rooted in Queens — the same community you see on our
                Instagram. We keep the shop clean, the cuts sharp, and the energy positive. Whether
                you need a skin fade, lineup, or full service, you leave looking fresh.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-silver leading-relaxed mb-8">
                DM us on Instagram to book, or walk in when we have availability. Families,
                regulars, and first-timers — everyone gets the same level of care.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stat: 'Grand Ave', label: 'Elmhurst Location' },
                  { stat: 'Walk-In', label: 'When Available' },
                  { stat: 'IG Book', label: 'Fast Scheduling' },
                ].map((item) => (
                  <li key={item.label} className="border-l-2 border-cream pl-4">
                    <span className="font-display text-2xl md:text-3xl text-cream">{item.stat}</span>
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

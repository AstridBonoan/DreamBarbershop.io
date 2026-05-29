import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SITE } from '../../data/site'

const BASE = import.meta.env.BASE_URL
const SHOP_SRC = `${BASE}shop-exterior.jpg?v=4`
const SHOP_W = 1024
const SHOP_H = 768

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 section-moss relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative order-2 lg:order-1 w-full max-w-[1024px] mx-auto lg:mx-0 lg:sticky lg:top-28">
            <figure className="card-elevated overflow-hidden bg-charcoal">
              <picture>
                <source type="image/webp" srcSet={`${BASE}shop-exterior.webp?v=4`} />
                <img
                  src={SHOP_SRC}
                  width={SHOP_W}
                  height={SHOP_H}
                  alt="DREAM Barbershop and Salon storefront at 84-46 Grand Ave, Elmhurst"
                  className="block w-full h-auto max-w-[1024px]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </picture>
            </figure>
            <div className="absolute bottom-4 right-4 card-elevated px-5 py-4 shadow-lg pointer-events-none">
              <span className="font-display text-4xl text-cream leading-none">4.8</span>
              <p className="text-[10px] text-muted mt-1 tracking-widest uppercase">
                Google & Yelp
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
                DREAM Barbershop & Salon on Grand Ave is rooted in Elmhurst — clean shop, sharp
                cuts, and a welcoming vibe. Book haircuts and haircut & beard combos online, or
                walk in when chairs are open.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-silver leading-relaxed mb-8">
                {SITE.bookingNotice.body} Thank you for choosing DREAM — we look forward to seeing
                you in the chair.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stat: 'Grand Ave', label: 'Elmhurst Location' },
                  { stat: 'Walk-In', label: 'When Available' },
                  { stat: 'Book', label: 'Online via Square' },
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

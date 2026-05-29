import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SITE } from '../../data/site'

const BASE = import.meta.env.BASE_URL
const SHOP_W = 960
const SHOP_H = 739

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 section-moss relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1 w-full max-w-[960px] lg:max-w-none mx-auto lg:mx-0">
            <div className="relative aspect-[4/3] overflow-hidden card-elevated bg-charcoal">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${BASE}shop-exterior.webp 960w, ${BASE}shop-exterior@2x.webp 1440w`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <img
                  src={`${BASE}shop-exterior.jpg`}
                  srcSet={`${BASE}shop-exterior.jpg 960w, ${BASE}shop-exterior@2x.jpg 1440w`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  width={SHOP_W}
                  height={SHOP_H}
                  alt="DREAM Barbershop storefront on Grand Ave, Elmhurst"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 card-elevated p-6 max-w-[200px] shadow-lg">
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

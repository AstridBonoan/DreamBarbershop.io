import { motion } from 'framer-motion'
import { BARBERS, BARBERS_APPOINTMENT_NOTE } from '../../data/barbers'
import { Button } from '../ui/Button'
import { InstagramIcon } from '../ui/InstagramIcon'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedBarbers() {
  return (
    <section id="barbers" className="py-20 md:py-32 section-muted relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="The Team"
          title="FEATURED BARBERS"
          description="Book online where available — select barbers accept scheduled appointments."
        />

        <p className="text-sm text-muted max-w-2xl mb-8 -mt-6 leading-relaxed">
          {BARBERS_APPOINTMENT_NOTE}
        </p>

        <div className="flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 scrollbar-hide snap-x snap-mandatory">
          {BARBERS.map((barber, index) => (
            <motion.article
              key={barber.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group shrink-0 w-[280px] md:w-auto snap-center"
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-slate card-elevated">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-void/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-muted text-xs font-heading tracking-[0.2em] uppercase">
                    {barber.role}
                  </span>
                  <h3 className="font-display text-3xl text-cream mt-1">{barber.name}</h3>
                  <p className="text-silver text-sm mt-1">{barber.specialty}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {barber.instagram && (
                    <a
                      href={barber.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-void/95 rounded-full text-cream shadow-md hover:opacity-70"
                      aria-label={`${barber.name} Instagram`}
                    >
                      <InstagramIcon size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <p className="text-sm text-silver leading-relaxed line-clamp-2">{barber.bio}</p>
                <Button
                  href={barber.bookingUrl}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  {barber.acceptsAppointments ? `Book ${barber.name}` : 'View Shop'}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

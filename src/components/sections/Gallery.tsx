import { motion } from 'framer-motion'
import { GALLERY } from '../../data/gallery'
import { SITE } from '../../data/site'
import { InstagramIcon } from '../ui/InstagramIcon'
import { SectionHeading } from '../ui/SectionHeading'

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 section-muted relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            label="Portfolio"
            title="FROM THE FEED"
            description="Fresh work, shop energy, and transformations — follow us for daily cuts."
          />
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading text-sm tracking-[0.2em] uppercase text-cream hover:opacity-60 transition-opacity shrink-0"
          >
            <InstagramIcon size={18} />
            {SITE.instagramHandle}
          </a>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 space-y-2 md:space-y-3">
          {GALLERY.map((image, index) => (
            <motion.a
              key={image.id}
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group block break-inside-avoid relative overflow-hidden bg-slate"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-void/0 group-hover:bg-void/20 transition-colors duration-500 flex items-center justify-center">
                <InstagramIcon
                  size={28}
                  className="text-cream opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 duration-300 drop-shadow-md"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

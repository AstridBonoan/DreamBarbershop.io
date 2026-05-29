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
            description="Real cuts and shop moments from @dreambarbershopandsalon."
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group block break-inside-avoid relative overflow-hidden bg-charcoal rounded-sm"
            >
              <picture>
                <source type="image/webp" srcSet={image.webp} />
                <img
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 bg-void/0 group-hover:bg-void/25 transition-colors duration-500 flex items-center justify-center pointer-events-none">
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

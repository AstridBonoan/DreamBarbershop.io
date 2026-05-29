import { motion } from 'framer-motion'
import type { GalleryImage } from '../../data/gallery'

interface GalleryGridProps {
  images: GalleryImage[]
  columns?: 'preview' | 'full'
}

const columnClasses = {
  preview: 'w-full max-w-4xl grid-cols-5 gap-2 sm:gap-3',
  full: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-2.5 max-w-5xl',
}

export function GalleryGrid({ images, columns = 'full' }: GalleryGridProps) {
  const isPreview = columns === 'preview'

  return (
    <div className={`mx-auto grid ${columnClasses[columns]}`}>
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={isPreview ? false : { opacity: 0, y: 12 }}
          whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.5) }}
          className="relative aspect-square w-full overflow-hidden rounded-sm border border-stone bg-slate shadow-sm"
        >
          {isPreview ? (
            <img
              src={image.src}
              width={400}
              height={400}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          ) : (
            <picture className="absolute inset-0">
              <source type="image/webp" srcSet={image.webp} />
              <img
                src={image.src}
                width={400}
                height={400}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </picture>
          )}
        </motion.div>
      ))}
    </div>
  )
}

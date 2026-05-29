import { motion } from 'framer-motion'
import type { GalleryImage } from '../../data/gallery'

interface GalleryGridProps {
  images: GalleryImage[]
  columns?: 'preview' | 'full'
}

const columnClasses = {
  preview: 'grid-cols-5 gap-1.5 sm:gap-2 max-w-3xl',
  full: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-2.5 max-w-5xl',
}

export function GalleryGrid({ images, columns = 'full' }: GalleryGridProps) {
  return (
    <div className={`mx-auto grid ${columnClasses[columns]}`}>
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.5) }}
          className="relative aspect-square overflow-hidden bg-charcoal rounded-sm"
        >
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
        </motion.div>
      ))}
    </div>
  )
}

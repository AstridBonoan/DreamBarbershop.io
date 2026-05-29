import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { GalleryGrid } from '../components/gallery/GalleryGrid'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GALLERY } from '../data/gallery'
import { SITE } from '../data/site'
import { InstagramIcon } from '../components/ui/InstagramIcon'

export function GalleryPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-silver hover:text-neon-dim transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            label="Portfolio"
            title="FROM THE FEED"
            description="Real cuts and shop moments from the DREAM chair."
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

        <GalleryGrid images={GALLERY} columns="full" />
      </div>
    </div>
  )
}

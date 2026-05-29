import { HOME_FEED_PREVIEW } from '../../data/gallery'
import { GalleryGrid } from '../gallery/GalleryGrid'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

export function GalleryPreview() {

  return (
    <section id="gallery" className="py-16 md:py-24 section-muted relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center gap-10">
          <SectionHeading
            label="Portfolio"
            title="FROM THE FEED"
            description="A glimpse of recent work — see the full gallery for every cut."
            align="center"
            className="!mb-0"
          />
          {HOME_FEED_PREVIEW.length > 0 ? (
            <GalleryGrid images={HOME_FEED_PREVIEW} columns="preview" />
          ) : null}
          <Button to="/gallery" variant="secondary" size="md">
            View full gallery
          </Button>
        </div>
      </div>
    </section>
  )
}

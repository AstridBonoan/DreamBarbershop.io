import { Hero } from '../components/sections/Hero'
import { FeaturedBarbers } from '../components/sections/FeaturedBarbers'
import { Services } from '../components/sections/Services'
import { GalleryPreview } from '../components/sections/GalleryPreview'
import { About } from '../components/sections/About'
import { Reviews } from '../components/sections/Reviews'
import { BookingCTA } from '../components/sections/BookingCTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBarbers />
      <Services />
      <GalleryPreview />
      <About />
      <Reviews />
      <BookingCTA />
    </>
  )
}

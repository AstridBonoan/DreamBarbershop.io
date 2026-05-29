import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { MobileBookingCTA } from './components/layout/MobileBookingCTA'
import { Hero } from './components/sections/Hero'
import { FeaturedBarbers } from './components/sections/FeaturedBarbers'
import { Services } from './components/sections/Services'
import { Gallery } from './components/sections/Gallery'
import { About } from './components/sections/About'
import { Reviews } from './components/sections/Reviews'
import { BookingCTA } from './components/sections/BookingCTA'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedBarbers />
        <Services />
        <Gallery />
        <About />
        <Reviews />
        <BookingCTA />
      </main>
      <Footer />
      <MobileBookingCTA />
    </>
  )
}

export default App

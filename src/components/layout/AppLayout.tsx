import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { scrollToSectionWhenReady } from '../../utils/scrollToSection'
import { BonoanLabsWatermark } from './BonoanLabsWatermark'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileBookingCTA } from './MobileBookingCTA'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, '')
      scrollToSectionWhenReady(id)
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function AppLayout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileBookingCTA />
      <BonoanLabsWatermark />
    </>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../../utils/scrollToSection'
import { SITE } from '../../data/site'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

type NavLink =
  | { label: string; hash: string }
  | { label: string; to: string }

const NAV_LINKS: NavLink[] = [
  { label: 'Barbers', hash: 'barbers' },
  { label: 'Services', hash: 'services' },
  { label: 'About', hash: 'about' },
  { label: 'Reviews', hash: 'reviews' },
  { label: 'Gallery', to: '/gallery' },
]

function isRouteLink(link: NavLink): link is { label: string; to: string } {
  return 'to' in link
}

const navLinkClass =
  'font-heading text-xs tracking-[0.2em] uppercase text-silver hover:text-neon-dim transition-colors'

const mobileNavLinkClass =
  'font-display text-4xl text-cream hover:text-neon-dim transition-colors block'

export function Header() {
  const scrolled = useScrollPosition(40)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function goToSection(hash: string) {
    setMenuOpen(false)
    const target = `#${hash}`

    if (location.pathname === '/' && location.hash === target) {
      scrollToSection(hash)
      return
    }

    navigate({ pathname: '/', hash: target })
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-void/95 backdrop-blur-xl border-b border-stone py-2 shadow-sm'
            : 'bg-void/85 backdrop-blur-md py-3 md:py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <Logo size="sm" className="transition-transform group-hover:scale-105" />
            <span className="hidden md:block font-script text-lg text-cream -mt-1 opacity-90">
              Barbershop & Salon
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              isRouteLink(link) ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-heading text-xs tracking-[0.2em] uppercase transition-colors ${
                    location.pathname === link.to ? 'text-neon-dim' : 'text-silver hover:text-neon-dim'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => goToSection(link.hash)}
                  className={navLinkClass}
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Button href={SITE.bookingUrl} size="sm">
              Book Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-cream hover:text-neon-dim transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-void/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-void border-l border-stone shadow-2xl p-8 pt-20 flex flex-col gap-6"
            >
              <div className="flex justify-center pb-4 border-b border-stone">
                <Logo size="md" />
              </div>
              {NAV_LINKS.map((link, i) =>
                isRouteLink(link) ? (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-4xl text-cream hover:text-neon-dim transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => goToSection(link.hash)}
                      className={mobileNavLinkClass}
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ),
              )}
              <div className="mt-auto pt-8 border-t border-stone">
                <Button
                  href={SITE.bookingUrl}
                  className="w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Appointment
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

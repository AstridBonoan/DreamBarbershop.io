import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SITE } from '../../data/site'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { Button } from '../ui/Button'

const NAV_LINKS = [
  { label: 'Barbers', href: '#barbers' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
]

export function Header() {
  const scrolled = useScrollPosition(40)
  const [menuOpen, setMenuOpen] = useState(false)

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
            ? 'bg-ink/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#" className="group flex items-center gap-2">
            <span className="font-display text-3xl md:text-4xl tracking-wider text-cream group-hover:text-gold transition-colors">
              {SITE.name}
            </span>
            <span className="hidden sm:block h-4 w-px bg-gold/40" />
            <span className="hidden sm:block font-heading text-[10px] tracking-[0.3em] uppercase text-silver">
              Barbershop
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-xs tracking-[0.2em] uppercase text-silver hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={SITE.bookingUrl} size="sm">
              Book Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
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
              className="absolute inset-0 bg-void/95 backdrop-blur-2xl"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-charcoal border-l border-white/5 p-8 pt-24 flex flex-col gap-6"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-4xl text-cream hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-auto pt-8 border-t border-white/10">
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

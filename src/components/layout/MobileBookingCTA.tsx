import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { SITE } from '../../data/site'
import { useScrollPosition } from '../../hooks/useScrollPosition'

export function MobileBookingCTA() {
  const scrolled = useScrollPosition(300)

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-neon text-cream font-heading font-bold text-sm tracking-[0.2em] uppercase neon-glow border border-neon-dim"
          >
            <Calendar size={18} />
            Book Online
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

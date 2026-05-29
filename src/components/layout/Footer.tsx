import { Mail, MapPin, Phone } from 'lucide-react'
import { InstagramIcon } from '../ui/InstagramIcon'
import { SITE } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-void border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="font-display text-5xl md:text-6xl text-cream tracking-wider">
              {SITE.name}
            </span>
            <p className="mt-4 text-silver max-w-md leading-relaxed">
              Premium barbershop & salon in Queens, NY. Craftsmanship, culture, and
              consistency — every visit.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
              >
                <Phone size={18} className="text-gold shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
              >
                <Mail size={18} className="text-gold shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-cream">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                {SITE.address.full}
              </div>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-cream hover:text-gold transition-colors"
              >
                <InstagramIcon size={18} className="text-gold shrink-0" />
                {SITE.instagramHandle}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Hours
              </h3>
              <ul className="space-y-3">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-sm">
                    <span className="text-silver">{h.day}</span>
                    <span className="text-cream">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden border border-white/10 h-48 sm:h-full min-h-[200px]">
              <iframe
                title="DREAM Barbershop location"
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 200 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© {year} {SITE.fullName}. All rights reserved.</p>
          <p className="tracking-widest uppercase">Queens · NYC · Craft</p>
        </div>
      </div>
    </footer>
  )
}

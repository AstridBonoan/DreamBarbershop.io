import { SITE } from './site'

export interface Barber {
  id: string
  name: string
  role: string
  specialty: string
  bio: string
  image: string
  instagram?: string
  bookingUrl: string
  acceptsAppointments?: boolean
}

export const BARBERS: Barber[] = [
  {
    id: 'ben',
    name: 'Ben',
    role: 'Owner',
    specialty: 'Premium Cuts · Detail · Client Care',
    bio: 'Owner of DREAM — known for attention to detail, friendly service, and consistent premium results.',
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop&q=80',
    instagram: SITE.instagram,
    bookingUrl: SITE.bookingUrl,
    acceptsAppointments: true,
  },
  {
    id: 'asheem',
    name: 'Asheem',
    role: 'Barber',
    specialty: 'Fix-Ups · Fades · Precision',
    bio: 'Trusted for clean work and saving the day when a cut needs a professional fix.',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop&q=80',
    instagram: SITE.instagram,
    bookingUrl: SITE.bookingUrl,
    acceptsAppointments: true,
  },
  {
    id: 'carlos',
    name: 'Carlos',
    role: 'Barber',
    specialty: 'Fades · Lineups · Everyday Cuts',
    bio: 'Respectful, skilled, and focused on getting you right before you walk out the door.',
    image:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop&q=80',
    instagram: SITE.instagram,
    bookingUrl: SITE.bookingUrl,
  },
  {
    id: 'fatima',
    name: 'Fatima',
    role: 'Stylist',
    specialty: 'Cuts · Styling · Professional Finish',
    bio: 'Experienced and professional — a favorite for clients who want a polished, confident look.',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop&q=80',
    instagram: SITE.instagram,
    bookingUrl: SITE.bookingUrl,
    acceptsAppointments: true,
  },
]

export const BARBERS_APPOINTMENT_NOTE =
  'Only select barbers are currently accepting scheduled bookings online — availability shown at checkout.'

export interface Barber {
  id: string
  name: string
  role: string
  specialty: string
  bio: string
  image: string
  instagram?: string
  bookingUrl: string
}

export const BARBERS: Barber[] = [
  {
    id: 'dream-1',
    name: 'Mike D.',
    role: 'Lead Barber',
    specialty: 'Skin Fades · Tapers · Lineups',
    bio: 'Known for razor-sharp fades and signature Queens precision. 10+ years in the chair.',
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop&q=80',
    instagram: 'https://www.instagram.com/dreambarbershopandsalon/',
    bookingUrl: 'https://www.instagram.com/dreambarbershopandsalon/',
  },
  {
    id: 'dream-2',
    name: 'Jay R.',
    role: 'Master Barber',
    specialty: 'Beards · Shape Ups · Hot Towel',
    bio: 'Beard sculpting specialist with a luxury grooming touch. Every detail matters.',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop&q=80',
    instagram: 'https://www.instagram.com/dreambarbershopandsalon/',
    bookingUrl: 'https://www.instagram.com/dreambarbershopandsalon/',
  },
  {
    id: 'dream-3',
    name: 'Chris V.',
    role: 'Senior Barber',
    specialty: 'Kids Cuts · Creative Fades',
    bio: 'Patience meets precision — the go-to for families and next-level creative work.',
    image:
      'https://images.unsplash.com/photo-1599351431202-1e0f11278920?w=600&h=800&fit=crop&q=80',
    instagram: 'https://www.instagram.com/dreambarbershopandsalon/',
    bookingUrl: 'https://www.instagram.com/dreambarbershopandsalon/',
  },
  {
    id: 'dream-4',
    name: 'Alex T.',
    role: 'Barber · Stylist',
    specialty: 'Full Service · Combos · Styling',
    bio: 'Hair + beard combos and premium packages. Walk out camera-ready every time.',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e808f54?w=600&h=800&fit=crop&q=80',
    instagram: 'https://www.instagram.com/dreambarbershopandsalon/',
    bookingUrl: 'https://www.instagram.com/dreambarbershopandsalon/',
  },
]

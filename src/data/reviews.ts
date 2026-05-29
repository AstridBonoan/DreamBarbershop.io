export interface Review {
  id: string
  name: string
  text: string
  rating: number
  service?: string
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Marcus J.',
    text: 'Best fade in Queens, hands down. Walked in off Instagram and they exceeded every expectation. Loyal customer now.',
    rating: 5,
    service: 'Skin Fade',
  },
  {
    id: '2',
    name: 'David R.',
    text: 'The vibe is premium but still feels like home. Clean shop, professional barbers, and my beard has never looked sharper.',
    rating: 5,
    service: 'Beard Trim',
  },
  {
    id: '3',
    name: 'Anthony M.',
    text: 'Brought my son for his first real cut. Patient, skilled, and the lineup was perfect. This is our spot now.',
    rating: 5,
    service: 'Kids Cut',
  },
  {
    id: '4',
    name: 'James L.',
    text: 'Consistency is everything and DREAM delivers every single visit. Book through IG — fast and easy.',
    rating: 5,
    service: 'Full Service',
  },
  {
    id: '5',
    name: 'Kevin S.',
    text: 'Feels like a destination, not just a barbershop. The attention to detail is on another level.',
    rating: 5,
    service: 'Hair + Beard Combo',
  },
]

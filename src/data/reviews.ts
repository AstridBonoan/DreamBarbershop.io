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
    name: 'Ruben F.',
    text: 'Best fade in Queens. Walked in off Instagram and they exceeded every expectation — loyal customer now.',
    rating: 5,
    service: 'Skin Fade',
  },
  {
    id: '2',
    name: 'Marcus J.',
    text: 'The vibe is welcoming and friendly. Shop is kept neat. My beard has never looked sharper.',
    rating: 5,
    service: 'Beard Trim',
  },
  {
    id: '3',
    name: 'Anthony M.',
    text: 'Brought my son for his first real cut. Patient, skilled, and the lineup was perfect. This is our spot.',
    rating: 5,
    service: 'Kids Cut',
  },
  {
    id: '4',
    name: 'James L.',
    text: 'Real professionals. Walked out looking like a new man — highly recommend, especially in Elmhurst.',
    rating: 5,
    service: 'Full Service',
  },
  {
    id: '5',
    name: 'David R.',
    text: 'Consistency is everything and DREAM delivers every visit. Book through IG — fast and easy.',
    rating: 5,
    service: 'Hair + Beard',
  },
]

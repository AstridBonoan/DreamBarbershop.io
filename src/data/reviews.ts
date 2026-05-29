export interface Review {
  id: string
  name: string
  text: string
  rating: number
  date: string
  source: 'google'
}

/** Excerpts from public Google reviews for DREAM Barbershop & Salon, Elmhurst. */
export const REVIEWS: Review[] = [
  {
    id: 'google-1',
    name: 'Local Guide',
    text: 'I went in this morning and Asheem cut my hair perfectly. I accidentally messed up my hair at home after and Asheem fixed it like the mistake never happened. Ben the owner is extremely friendly too. Highly recommend — especially if you live in Elmhurst. 10/10.',
    rating: 5,
    date: '2 months ago',
    source: 'google',
  },
  {
    id: 'google-2',
    name: 'Maria G.',
    text: "I've been going to Fatima for a long time and am always delighted with her work. Fatima is the best hairstylist in Queens — experienced and super professional. I couldn't be happier!",
    rating: 5,
    date: '4 months ago',
    source: 'google',
  },
  {
    id: 'google-3',
    name: 'Michael R.',
    text: 'They took me very fast and Carlos took amazing care of me — felt royal. His hands are skilled and the shop is clean and sanitized. If you want a great cut, Carlos is strongly recommended.',
    rating: 5,
    date: '6 months ago',
    source: 'google',
  },
  {
    id: 'google-4',
    name: 'James T.',
    text: "Best barbershop I've been to. I've had Ben the owner, Mark, and another great barber on the first chair — all amazing, friendly, and professional. Great service every time. Highly recommend for everyone.",
    rating: 5,
    date: '8 months ago',
    source: 'google',
  },
  {
    id: 'google-5',
    name: 'Anthony L.',
    text: "I've been coming here for 5 years — even after moving to NJ I still come back because I work in Queens. Always great cuts and fades on every chair. Beautiful shop, always decorated for the holidays.",
    rating: 5,
    date: '1 year ago',
    source: 'google',
  },
  {
    id: 'google-6',
    name: 'David K.',
    text: 'Real professionals here. Walked out looking like a new man. Welcoming vibe, neat shop, and sharp work — highly recommend for anyone in Elmhurst looking for a reliable barber.',
    rating: 5,
    date: '3 months ago',
    source: 'google',
  },
]

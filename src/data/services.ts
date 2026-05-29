export interface Service {
  id: string
  name: string
  description: string
  price: string
  featured?: boolean
  tag?: string
}

export const SERVICES: Service[] = [
  {
    id: 'fade',
    name: 'Fade',
    description: 'Skin, mid, or high fade — blended to perfection.',
    price: '$35',
  },
  {
    id: 'beard',
    name: 'Beard Trim',
    description: 'Sculpted beard with hot towel finish.',
    price: '$20',
  },
  {
    id: 'shape',
    name: 'Shape Up',
    description: 'Crisp edges, clean hairline, sharp corners.',
    price: '$18',
  },
  {
    id: 'kids',
    name: 'Kids Cut',
    description: 'Patient, precise cuts for the next generation.',
    price: '$25',
  },
  {
    id: 'full',
    name: 'Full Service',
    description: 'Cut, lineup, beard work — the complete experience.',
    price: '$55',
    featured: true,
    tag: 'Popular',
  },
  {
    id: 'combo',
    name: 'Hair + Beard Combo',
    description: 'Premium package — fade plus beard sculpt.',
    price: '$50',
    featured: true,
    tag: 'Best Value',
  },
]

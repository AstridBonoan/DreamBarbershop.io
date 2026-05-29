import { SITE } from './site'

export interface Service {
  id: string
  name: string
  description: string
  price: string
  featured?: boolean
  tag?: string
  bookable?: boolean
}

export const SERVICES: Service[] = [
  {
    id: 'haircut',
    name: 'Haircut',
    description: 'Skin fades, tapers, and classic cuts — available to book online.',
    price: 'Book online',
    featured: true,
    tag: 'Book Online',
    bookable: true,
  },
  {
    id: 'combo',
    name: 'Haircut & Beard Combo',
    description: 'Full grooming package — haircut plus beard sculpt in one visit.',
    price: 'Book online',
    featured: true,
    tag: 'Book Online',
    bookable: true,
  },
  {
    id: 'beard',
    name: 'Beard Trim',
    description: 'Shape, line up, and clean finish. Walk-in when available.',
    price: 'Walk-in',
  },
  {
    id: 'shape',
    name: 'Shape Up',
    description: 'Crisp edges and sharp corners. Walk-in when available.',
    price: 'Walk-in',
  },
  {
    id: 'kids',
    name: 'Kids Cut',
    description: 'Patient, precise cuts for kids. Walk-in when available.',
    price: 'Walk-in',
  },
  {
    id: 'fade',
    name: 'Skin Fade',
    description: 'High-impact fades and blends. Walk-in when available.',
    price: 'Walk-in',
  },
]

export const BOOKING_FOOTNOTE = `Premium service: appointment pricing is higher than walk-in rates. Questions? Call ${SITE.phone}.`

export interface GalleryImage {
  id: string
  src: string
  alt: string
  span?: 'tall' | 'wide' | 'normal'
}

export const GALLERY: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c24470?w=800&h=1000&fit=crop&q=80',
    alt: 'Precision fade haircut',
    span: 'tall',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1599351431613-952e52e9c0e3?w=800&h=600&fit=crop&q=80',
    alt: 'Barber at work',
    span: 'normal',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e808f54?w=800&h=600&fit=crop&q=80',
    alt: 'Barbershop atmosphere',
    span: 'wide',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=1000&fit=crop&q=80',
    alt: 'Beard grooming',
    span: 'tall',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop&q=80',
    alt: 'Clean lineup',
    span: 'normal',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1593702275687-f2bfc562a2a3?w=800&h=600&fit=crop&q=80',
    alt: 'Premium barber tools',
    span: 'normal',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=1000&fit=crop&q=80',
    alt: 'Shop interior',
    span: 'tall',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb04d?w=800&h=600&fit=crop&q=80',
    alt: 'Fresh cut transformation',
    span: 'wide',
  },
]

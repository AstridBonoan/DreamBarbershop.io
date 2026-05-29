export interface GalleryImage {
  id: string
  src: string
  webp: string
  alt: string
  width: number
  height: number
  span?: 'tall' | 'wide' | 'normal'
}

const BASE = import.meta.env.BASE_URL

export const GALLERY: GalleryImage[] = [
  {
    id: 'feed-01',
    src: `${BASE}gallery/feed-01.jpg`,
    webp: `${BASE}gallery/feed-01.webp`,
    alt: 'Two-tone spiky fade at DREAM Barbershop',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-02',
    src: `${BASE}gallery/feed-02.jpg`,
    webp: `${BASE}gallery/feed-02.webp`,
    alt: 'Skin fade profile cut',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-03',
    src: `${BASE}gallery/feed-03.jpg`,
    webp: `${BASE}gallery/feed-03.webp`,
    alt: 'Client in the chair at DREAM',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-04',
    src: `${BASE}gallery/feed-04.jpg`,
    webp: `${BASE}gallery/feed-04.webp`,
    alt: 'Mid taper fade',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-05',
    src: `${BASE}gallery/feed-05.jpg`,
    webp: `${BASE}gallery/feed-05.webp`,
    alt: 'Mullet taper style',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-06',
    src: `${BASE}gallery/feed-06.jpg`,
    webp: `${BASE}gallery/feed-06.webp`,
    alt: 'Shop energy at DREAM Barbershop',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-07',
    src: `${BASE}gallery/feed-07.jpg`,
    webp: `${BASE}gallery/feed-07.webp`,
    alt: 'Precision scissor work',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-08',
    src: `${BASE}gallery/feed-08.jpg`,
    webp: `${BASE}gallery/feed-08.webp`,
    alt: 'DREAM Barbershop & Salon',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-09',
    src: `${BASE}gallery/feed-09.jpg`,
    webp: `${BASE}gallery/feed-09.webp`,
    alt: 'Mid skin fade',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-10',
    src: `${BASE}gallery/feed-10.jpg`,
    webp: `${BASE}gallery/feed-10.webp`,
    alt: 'Barber and client at DREAM',
    width: 800,
    height: 532,
    span: 'wide',
  },
]

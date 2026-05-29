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
  {
    id: 'feed-11',
    src: `${BASE}gallery/feed-11.jpg`,
    webp: `${BASE}gallery/feed-11.webp`,
    alt: 'Kids skin fade and hard part',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-12',
    src: `${BASE}gallery/feed-12.jpg`,
    webp: `${BASE}gallery/feed-12.webp`,
    alt: 'Client at DREAM Barbershop',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-13',
    src: `${BASE}gallery/feed-13.jpg`,
    webp: `${BASE}gallery/feed-13.webp`,
    alt: 'Skin fade at DREAM',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-14',
    src: `${BASE}gallery/feed-14.jpg`,
    webp: `${BASE}gallery/feed-14.webp`,
    alt: 'Beard fade',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-15',
    src: `${BASE}gallery/feed-15.jpg`,
    webp: `${BASE}gallery/feed-15.webp`,
    alt: 'Mid skin fade',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-16',
    src: `${BASE}gallery/feed-16.jpg`,
    webp: `${BASE}gallery/feed-16.webp`,
    alt: 'Low taper middle part',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-17',
    src: `${BASE}gallery/feed-17.jpg`,
    webp: `${BASE}gallery/feed-17.webp`,
    alt: 'Beard gang lineup',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-18',
    src: `${BASE}gallery/feed-18.jpg`,
    webp: `${BASE}gallery/feed-18.webp`,
    alt: 'Mid skin fade with texture',
    width: 576,
    height: 1024,
    span: 'tall',
  },
  {
    id: 'feed-19',
    src: `${BASE}gallery/feed-19.jpg`,
    webp: `${BASE}gallery/feed-19.webp`,
    alt: 'Scissor work at the chair',
    width: 576,
    height: 1024,
    span: 'tall',
  },
]

/** Featured on the home page From The Feed preview (matches Instagram highlights). */
const HOME_FEED_PREVIEW_IDS = ['feed-01', 'feed-02', 'feed-03', 'feed-04', 'feed-05'] as const

export const HOME_FEED_PREVIEW: GalleryImage[] = HOME_FEED_PREVIEW_IDS.flatMap((id) => {
  const image = GALLERY.find((item) => item.id === id)
  return image ? [image] : []
})

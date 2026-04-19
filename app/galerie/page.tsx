'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const photos = [
  { src: '/media/1.jpg',    alt: 'Cabana Aventurin',              category: 'exterior'   },
  { src: '/media/1b.jpg',   alt: 'Cabana Aventurin',              category: 'exterior'   },
  { src: '/media/2.jpg',    alt: 'Natură și peisaj',              category: 'natura'     },
  { src: '/media/3.jpg',    alt: 'Vedere panoramică',             category: 'natura'     },
  { src: '/media/4.jpg',    alt: 'Exterior cabană',               category: 'exterior'   },
  { src: '/media/5.jpg',    alt: 'Grădina cabanei',               category: 'exterior'   },
  { src: '/media/6.jpg',    alt: 'Interior cabană',               category: 'interior'   },
  { src: '/media/7.jpg',    alt: 'Cameră de zi',                  category: 'interior'   },
  { src: '/media/8.jpg',    alt: 'Detalii interior',              category: 'interior'   },
  { src: '/media/9.jpg',    alt: 'Priveliște',                    category: 'natura'     },
  { src: '/media/10.jpg',   alt: 'Grădina',                       category: 'exterior'   },
  { src: '/media/11.jpg',   alt: 'Cabana vara',                   category: 'exterior'   },
  { src: '/media/12.jpg',   alt: 'Spațiu de relaxare',            category: 'interior'   },
  { src: '/media/13.jpg',   alt: 'Natură înconjurătoare',         category: 'natura'     },
  { src: '/media/14.jpg',   alt: 'Eveniment la cabană',           category: 'evenimente' },
  { src: '/media/15.jpg',   alt: 'Terasă exterioară',             category: 'exterior'   },
  { src: '/media/16.jpg',   alt: 'Noapte la cabană',              category: 'evenimente' },
  { src: '/media/17.jpg',   alt: 'Activitate outdoor',            category: 'activitati' },
  { src: '/media/18.jpg',   alt: 'Trekking în pădure',            category: 'activitati' },
  { src: '/media/19.jpg',   alt: 'Vedere de pe deal',             category: 'natura'     },
  { src: '/media/20.jpg',   alt: 'Moment special',                category: 'evenimente' },
  { src: '/media/21.jpg',   alt: 'Aventura outdoor',              category: 'activitati' },
  { src: '/media/22.jpg',   alt: 'Seară la cabană',               category: 'evenimente' },
  { src: '/media/23.jpg',   alt: 'Iarna la cabană',               category: 'iarna'      },
  { src: '/media/B1.jpeg',  alt: 'Cabana Aventurin',              category: 'exterior'   },
  { src: '/media/B2.jpeg',  alt: 'Cabana Aventurin - peisaj',     category: 'natura'     },
  { src: '/media/B3.jpeg',  alt: 'Cabana Aventurin - exterior',   category: 'exterior'   },
  { src: '/media/B4.jpeg',  alt: 'Cabana Aventurin - grădină',    category: 'exterior'   },
  { src: '/media/B5.jpeg',  alt: 'Cabana Aventurin - detalii',    category: 'interior'   },
  { src: '/media/B6.jpeg',  alt: 'Cabana Aventurin - relaxare',   category: 'interior'   },
  { src: '/media/B7.jpeg',  alt: 'Cabana Aventurin - vedere',     category: 'natura'     },
  { src: '/media/B8.jpeg',  alt: 'Cabana Aventurin - natură',     category: 'natura'     },
]

const categories = [
  { value: 'all',        label: 'Toate' },
  { value: 'exterior',   label: 'Exterior' },
  { value: 'interior',   label: 'Interior' },
  { value: 'natura',     label: 'Natură' },
  { value: 'evenimente', label: 'Evenimente' },
  { value: 'activitati', label: 'Activități' },
  { value: 'iarna',      label: 'Iarnă' },
]

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightbox, setLightbox]             = useState<number | null>(null)

  const filtered = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory)

  const openLightbox = (idx: number) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prevPhoto = () => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const nextPhoto = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 bg-gradient-to-b from-forest-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 text-sm font-medium px-4 py-2 rounded-full mb-5">
            ✦ {photos.length} fotografii
          </div>
          <h1 className="section-title mb-4">Galerie Foto</h1>
          <p className="section-subtitle">
            Explorează cabana, grădina, natura înconjurătoare și momentele speciale petrecute la Aventurin.
          </p>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="container-custom py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-forest-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.label}
                <span className={`ml-1.5 text-xs ${activeCategory === cat.value ? 'text-forest-200' : 'text-gray-400'}`}>
                  {cat.value === 'all' ? photos.length : photos.filter((p) => p.category === cat.value).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="py-10 md:py-16">
        <div className="container-custom">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {filtered.map((photo, idx) => (
              <div
                key={photo.src}
                className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={closeLightbox}
            aria-label="Închide"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {filtered.length}
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prevPhoto() }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); nextPhoto() }}
            aria-label="Următor"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {filtered[lightbox].alt}
          </div>
        </div>
      )}
    </>
  )
}

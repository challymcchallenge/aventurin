'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: '/media/1.jpg',   alt: 'Cabana Aventurin - vedere exterioară' },
  { src: '/media/2.jpg',   alt: 'Cabana Aventurin - natură' },
  { src: '/media/3.jpg',   alt: 'Cabana Aventurin - peisaj' },
  { src: '/media/4.jpg',   alt: 'Cabana Aventurin - exterior' },
  { src: '/media/5.jpg',   alt: 'Cabana Aventurin - ambianță' },
  { src: '/media/6.jpg',   alt: 'Cabana Aventurin - interior' },
  { src: '/media/7.jpg',   alt: 'Cabana Aventurin - cameră' },
  { src: '/media/8.jpg',   alt: 'Cabana Aventurin - detalii' },
  { src: '/media/9.jpg',   alt: 'Cabana Aventurin - priveliște' },
  { src: '/media/10.jpg',  alt: 'Cabana Aventurin - grădină' },
]

export function Slideshow() {
  const [current, setCurrent]     = useState(0)
  const [isPaused, setIsPaused]   = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, isPaused])

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
            onLoad={() => i === 0 && setIsLoading(false)}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Imaginea anterioară"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Imaginea următoare"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}
    </div>
  )
}

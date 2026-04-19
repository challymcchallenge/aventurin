import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Slideshow } from '@/components/Slideshow'
import { ServiceCard } from '@/components/ServiceCard'
import servicii from '@/data/servicii.json'
import { ArrowRight, MapPin, Star, Users, Calendar, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Acasă — Cabana Aventurin | Vața de Jos, Munții Apuseni',
}

const stats = [
  { icon: Users,    value: '500+',  label: 'Clienți fericiți' },
  { icon: Calendar, value: '10+',   label: 'Ani de experiență' },
  { icon: Star,     value: '4.9',   label: 'Rating mediu' },
  { icon: Shield,   value: '100%',  label: 'Satisfacție garantată' },
]

const aboutPhotos = [
  { src: '/media/B1.jpeg', alt: 'Cabana Aventurin - exterior',  span: 'col-span-2 row-span-2' },
  { src: '/media/B2.jpeg', alt: 'Cabana Aventurin - peisaj',    span: '' },
  { src: '/media/B3.jpeg', alt: 'Cabana Aventurin - exterior',  span: '' },
  { src: '/media/B4.jpeg', alt: 'Cabana Aventurin - grădină',   span: '' },
  { src: '/media/B5.jpeg', alt: 'Cabana Aventurin - detalii',   span: '' },
  { src: '/media/B6.jpeg', alt: 'Cabana Aventurin - relaxare',  span: '' },
  { src: '/media/B7.jpeg', alt: 'Cabana Aventurin - vedere',    span: '' },
  { src: '/media/B8.jpeg', alt: 'Cabana Aventurin - natură',    span: 'col-span-2' },
]

export default function HomePage() {
  const topServices = servicii.slice(0, 4)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px]">
        <Slideshow />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <div className="pointer-events-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <MapPin className="w-3.5 h-3.5" />
              Vața de Jos, Munții Apuseni
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4 leading-tight">
              Cabana
              <span className="block text-forest-300">Aventurin</span>
            </h1>

            <p className="text-white/85 text-lg md:text-xl max-w-xl mx-auto mb-8 drop-shadow leading-relaxed">
              Natură, liniște și aventură — locul perfect pentru evenimente memorabile în inima Munților Apuseni.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-base shadow-xl"
              >
                Rezervă acum
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/servicii"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 border border-white/20"
              >
                Descoperă serviciile
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 bg-forest-600 dark:bg-forest-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center text-white">
                <Icon className="w-6 h-6 mx-auto mb-2 text-forest-200" />
                <div className="font-serif text-3xl font-bold">{value}</div>
                <div className="text-forest-200 text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Photo grid — 8 photos in mosaic layout */}
            <div
              className="grid grid-cols-4 grid-rows-3 gap-2 md:gap-2.5 h-[380px] md:h-[480px]"
            >
              {aboutPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-xl shadow-md group ${photo.span}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 text-sm font-medium px-4 py-2 rounded-full mb-5">
                ✦ Povestea noastră
              </div>
              <h2 className="section-title mb-5">
                Un loc unde <span className="text-forest-600 dark:text-forest-400">natura</span> devine fundal pentru amintiri
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Cabana Aventurin se află în Căzănești, Vața de Jos — un colț de lume unde Munții Apuseni te primesc cu brațele deschise. Fie că vii pentru o zi sau mai mult, vei găsi liniște, aventură și căldură.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Spațiul nostru este conceput pentru flexibilitate: poți închiria cabana integral sau doar o parte din ea, cu sau fără catering. Fiecare eveniment este unic — și noi ne adaptăm la viziunea ta.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'La 2 km de Parcul Natural Văile Crișurilor',
                  'La doar 10 km de Complexul Termal Vața Băi',
                  'Satul natal al părintelui Arsenie Boca',
                  'Capacitate flexibilă: 20–100 persoane',
                  'Parcare gratuită și acces facil cu mașina',
                  'Animale de companie acceptate',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200 text-sm">
                    <span className="w-5 h-5 rounded-full bg-forest-100 dark:bg-forest-900 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/galerie" className="btn-primary">
                Vezi galeria foto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 text-sm font-medium px-4 py-2 rounded-full mb-5">
              ✦ Ce oferim
            </div>
            <h2 className="section-title mb-4">Servicii pentru orice ocazie</h2>
            <p className="section-subtitle">
              De la evenimente private la aventuri outdoor — avem pachetul potrivit pentru tine.
              <br className="hidden md:block" />
              Toate prețurile sunt negociabile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicii" className="btn-outline text-base">
              Toate serviciile și prețurile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 text-sm font-medium px-4 py-2 rounded-full mb-5">
              ✦ Galerie
            </div>
            <h2 className="section-title mb-4">Imagini din Aventurin</h2>
            <p className="section-subtitle">
              Cuvintele pot descrie, dar imaginile arată. Explorează cabana, grădina și natura din jur.
            </p>
          </div>

          {/* Grid teaser */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[14, 15, 16, 17, 18, 19, 20, 21].map((n, i) => (
              <div
                key={n}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                  i === 0 ? 'col-span-2 row-span-2 h-64 md:h-80' : 'h-32 md:h-36'
                }`}
              >
                <Image
                  src={`/media/${n}.jpg`}
                  alt={`Cabana Aventurin - foto ${n}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/galerie" className="btn-primary">
              Vezi toate fotografiile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/media/22.jpg"
            alt="Cabana Aventurin - rezervă acum"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest-900/70" />
        </div>
        <div className="relative container-custom text-center text-white">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Gata să rezervi o experiență de neuitat?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Contactează-ne acum și îți pregătim o ofertă personalizată. Fără surprize, fără costuri ascunse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest-800 hover:bg-forest-50 font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Trimite o cerere
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+40724771278"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              📞 +40 724 771 278
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

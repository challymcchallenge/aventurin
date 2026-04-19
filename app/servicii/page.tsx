import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceCard } from '@/components/ServiceCard'
import servicii from '@/data/servicii.json'
import { ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicii & Prețuri',
  description:
    'Toate pachetele Cabanei Aventurin: evenimente private, team building, nunți & botezuri, activități outdoor, weekenduri cu DJ și multe altele. Prețuri flexibile, negociabile.',
}

export default function ServiciiPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/media/3.jpg"
            alt="Servicii Cabana Aventurin"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />
        </div>
        <div className="relative container-custom text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            ✦ Pachete flexibile, prețuri negociabile
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
            Servicii & Prețuri
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Fiecare eveniment este unic. Adaptăm fiecare pachet la nevoile tale — cabană integrală sau parțială, cu sau fără catering.
          </p>
        </div>
      </section>

      {/* ── PRICING NOTE ── */}
      <section className="py-8 bg-forest-50 dark:bg-forest-950 border-y border-forest-100 dark:border-forest-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h2 className="font-semibold text-forest-800 dark:text-forest-300 mb-1">
                💡 Notă despre prețuri
              </h2>
              <p className="text-forest-700 dark:text-forest-400 text-sm max-w-2xl">
                Toate prețurile sunt negociabile — în funcție de numărul de persoane, serviciile dorite, durata și perioada sezonului. Contactează-ne pentru o ofertă personalizată fără costuri ascunse.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 whitespace-nowrap">
              Solicită ofertă
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicii.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMIZE PACKAGE ── */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 text-sm font-medium px-4 py-2 rounded-full mb-5">
              ✦ Personalizare
            </span>
            <h2 className="section-title mb-5">Nu găsești exact ce cauți?</h2>
            <p className="section-subtitle mb-8">
              Putem construi un pachet complet personalizat. Spune-ne ideea ta și noi îți facem realitate.
              Fiecare combinație e posibilă — cazare, mâncare, activități, decoruri.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: '🏠', title: 'Cabana integrală',    desc: 'Exclusivitate completă — cabana toată pentru grupul tău' },
                { icon: '🍽️', title: 'Catering à la carte', desc: 'Adaugă mâncare și băuturi la orice pachet, oricând' },
                { icon: '🎯', title: 'Activități la cerere', desc: 'Trekking, ATV, tiroliana — compunem programul dorit' },
              ].map((item) => (
                <div key={item.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm text-left">
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Discutăm detaliile
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/40724771278"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-green-500 text-green-700 dark:text-green-400 hover:bg-green-500 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp rapid
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Întrebări frecvente</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Câte persoane pot fi cazate la cabană?', a: 'Cabana poate găzdui între 20 și 100 de persoane, în funcție de configurația aleasă — cazare overnight sau doar eveniment de zi.' },
              { q: 'Pot închiria doar o parte din cabană?', a: 'Da! Oferim flexibilitate maximă. Poți închiria cabana integrală sau parțial, în funcție de buget și nevoi.' },
              { q: 'Este catering-ul inclus în prețuri?', a: 'Catering-ul este opțional și se adaugă la cerere. Avem meniuri de la mic dejun simplu până la banchet complet, cu produse locale.' },
              { q: 'Cum se fac rezervările?', a: 'Ne poți contacta prin formularul de pe pagina Contact, direct pe WhatsApp sau telefonic la +40 724 771 278. Confirmăm disponibilitatea și stabilim detaliile împreună.' },
              { q: 'Câine/pisică poate veni cu noi?', a: 'Absolut — animalele de companie sunt binevenite! Te rugăm să ne anunți în avans.' },
            ].map((item) => (
              <details key={item.q} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-gray-900 dark:text-white hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  {item.q}
                  <span className="ml-4 shrink-0 text-forest-600 dark:text-forest-400 transition-transform duration-300 group-open:rotate-45 text-xl font-light">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

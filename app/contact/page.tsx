'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react'

// Note: Metadata can't be exported from a 'use client' component.
// Use a server wrapper if needed. For now, meta is in layout.

const infoItems = [
  {
    icon: MapPin,
    title: 'Adresă',
    lines: ['Căzănești, Vața de Jos', 'Hunedoara, 337504', 'România'],
    link: 'https://maps.google.com/?q=Cazanesti,Vata+de+Jos,Romania',
    linkLabel: 'Deschide în Maps',
  },
  {
    icon: Phone,
    title: 'Telefon & WhatsApp',
    lines: ['+40 724 771 278'],
    link: 'tel:+40724771278',
    linkLabel: 'Sună acum',
  },
  {
    icon: Clock,
    title: 'Program rezervări',
    lines: ['Luni – Duminică', '08:00 – 22:00'],
  },
]

export default function ContactPage() {
  const [form, setForm]       = useState({ nume: '', email: '', telefon: '', mesaj: '', serviciu: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission (replace with actual API / email service)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/media/5.jpg"
            alt="Contact Cabana Aventurin"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 via-gray-900/55 to-gray-900/80" />
        </div>
        <div className="relative container-custom text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            ✦ Răspundem în mai puțin de 24h
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
            Contact & Rezervări
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Scrie-ne, sună-ne sau trimite un WhatsApp. Suntem gata să îți pregătim cea mai bună ofertă.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Informații de contact
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Disponibili 7 zile din 7. Cel mai rapid răspuns — pe WhatsApp.
                </p>
              </div>

              {infoItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm flex gap-4"
                >
                  <div className="w-10 h-10 bg-forest-50 dark:bg-forest-950 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-forest-600 dark:text-forest-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-gray-600 dark:text-gray-300 text-sm">{line}</p>
                    ))}
                    {item.link && (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-forest-600 dark:text-forest-400 text-xs font-medium hover:underline mt-1 inline-block"
                      >
                        {item.linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp big CTA */}
              <a
                href="https://wa.me/40724771278?text=Bună!%20Aș%20dori%20o%20ofertă%20de%20la%20Cabana%20Aventurin."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Scrie pe WhatsApp
              </a>

              {/* Map embed placeholder */}
              <div className="rounded-2xl overflow-hidden h-52 bg-gray-100 dark:bg-gray-800 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.123456789!2d22.8!3d46.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmHIm2EgZGUgSm9zLCBSb21hbmlh!5e0!3m2!1sro!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locație Cabana Aventurin"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-10">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-forest-50 dark:bg-forest-950 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-forest-600 dark:text-forest-400" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      Mesaj trimis cu succes!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Îți mulțumim! Te vom contacta în mai puțin de 24 de ore pentru a stabili detaliile.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ nume: '', email: '', telefon: '', mesaj: '', serviciu: '' }) }}
                      className="text-forest-600 dark:text-forest-400 text-sm font-medium hover:underline"
                    >
                      Trimite o altă cerere
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Trimite o cerere de ofertă
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                      Completează formularul și îți pregătim o ofertă personalizată, fără niciun cost.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="nume" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                            Nume complet *
                          </label>
                          <input
                            id="nume"
                            name="nume"
                            type="text"
                            required
                            value={form.nume}
                            onChange={handleChange}
                            placeholder="Ion Popescu"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                            Telefon *
                          </label>
                          <input
                            id="telefon"
                            name="telefon"
                            type="tel"
                            required
                            value={form.telefon}
                            onChange={handleChange}
                            placeholder="+40 7XX XXX XXX"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="email@exemplu.ro"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="serviciu" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                          Tip eveniment / serviciu dorit
                        </label>
                        <select
                          id="serviciu"
                          name="serviciu"
                          value={form.serviciu}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-sm"
                        >
                          <option value="">Alege un tip de eveniment...</option>
                          <option value="eveniment-privat">Eveniment privat</option>
                          <option value="dj-party">Weekend cu DJ & Party</option>
                          <option value="team-building">Team Building</option>
                          <option value="nunta-botez">Nuntă / Botez</option>
                          <option value="outdoor">Activități Outdoor</option>
                          <option value="aniversare">Aniversare / Retreat</option>
                          <option value="iarna">Pachet de Iarnă</option>
                          <option value="catering">Catering</option>
                          <option value="altceva">Altceva</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                          Mesaj / Detalii *
                        </label>
                        <textarea
                          id="mesaj"
                          name="mesaj"
                          required
                          rows={5}
                          value={form.mesaj}
                          onChange={handleChange}
                          placeholder="Spune-ne mai multe: data dorită, numărul de persoane, ce ți-ai dori să includem..."
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-forest-600 hover:bg-forest-700 disabled:bg-forest-400 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Se trimite...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Trimite cererea
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                        Datele tale sunt confidențiale. Nu vom trimite spam.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

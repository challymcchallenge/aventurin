'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { href: '/',          label: 'Acasă'    },
  { href: '/servicii',  label: 'Servicii' },
  { href: '/galerie',   label: 'Galerie'  },
  { href: '/contact',   label: 'Contact'  },
]

export function Header() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [mounted, setMounted]       = useState(false)
  const { theme, setTheme }         = useTheme()
  const pathname                    = usePathname()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen || !isHome
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div
              className={`relative transition-all duration-300 ${
                scrolled || menuOpen || !isHome
                  ? 'h-10 md:h-12 w-auto'
                  : 'h-12 md:h-14 w-auto'
              }`}
              style={{ aspectRatio: '2.2 / 1' }}
            >
              {/* On dark hero: white pill background so logo is always readable */}
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  !scrolled && !menuOpen && isHome
                    ? 'bg-white/90 backdrop-blur-sm shadow-md'
                    : 'bg-transparent'
                }`}
              />
              <Image
                src="/logo.png"
                alt="Cabana Aventurin logo"
                fill
                className="object-contain relative z-10 p-1"
                sizes="160px"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-forest-600 text-white'
                    : scrolled || !isHome
                      ? 'text-gray-700 dark:text-gray-200 hover:bg-forest-50 dark:hover:bg-gray-800'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className={`p-2 rounded-full transition-all duration-200 ${
                  scrolled || !isHome
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            {/* CTA desktop */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-forest-600 hover:bg-forest-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Rezervă acum
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled || !isHome
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full text-center bg-forest-600 hover:bg-forest-700 text-white font-semibold px-4 py-3 rounded-xl mt-2 transition-colors"
          >
            Rezervă acum
          </Link>
        </div>
      </div>
    </header>
  )
}

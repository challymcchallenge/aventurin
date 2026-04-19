import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cabana-aventurin.ro'),
  title: {
    default: 'Cabana Aventurin — Natură, Aventură & Evenimente | Vața de Jos',
    template: '%s | Cabana Aventurin',
  },
  description:
    'Cabana Aventurin — locul perfect pentru evenimente private, team building, nunți, weekenduri cu prietenii și aventuri outdoor în Munții Apuseni. Rezervări: +40 724 771 278.',
  keywords: [
    'cabana aventurin',
    'cabana vata de jos',
    'cazare muntii apuseni',
    'inchiriere cabana',
    'team building natura',
    'nunti cabana',
    'evenimente private cabana',
    'trekking apuseni',
  ],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Cabana Aventurin',
    title: 'Cabana Aventurin — Natură, Aventură & Evenimente',
    description:
      'Evenimentele tale, cadrul nostru. Cabana Aventurin în Munții Apuseni — pachete flexibile, prețuri negociabile.',
    images: [{ url: '/media/1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabana Aventurin',
    description: 'Natură, aventură și evenimente în inima Munților Apuseni.',
    images: ['/media/1.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ro"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

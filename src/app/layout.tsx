import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'AlgoView',
  description:
    'Learn visually about classical algorithms for sorting, searching, graphs, and more. Ideal for students and computer enthusiasts.',
  keywords: [
    'algoritmos',
    'algorithms',
    'algorithm',
    'algoritmo',
    'visualización',
    'visualizer',
    'ordenamiento',
    'sorting',
    'búsqueda',
    'search',
    'grafos',
    'graphs',
    'backtracking',
    'programación dinámica',
    'dp',
    'greedy',
    'computación',
    'computer science'
  ],
  authors: [
    { name: 'Aaron-cue', url: 'https://portfolio-aaroncue.vercel.app/' }
  ],
  openGraph: {
    title: 'AlgoView - algorithm visualizer',
    description: 'Learn classical algorithms visually',
    url: 'https://algoview.vercel.app/',
    siteName: 'AlgoView',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'screenshot of AlgoView'
      }
    ],
    locale: 'es_AR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlgoView - algorithm visualizer',
    description: 'Learn classical algorithms visually',
    images: ['/og-image.png'],
    creator: 'Aaron-cue'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  }
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800']
})

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <footer className="bg-zinc-900 text-white text-center py-4">
          <p className="text-sm">@ 2025 Aaron-Cue 🩵</p>
        </footer>
      </body>
    </html>
  )
}

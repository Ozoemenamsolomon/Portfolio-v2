import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solomon Obinna Ozoemenam - Software Developer',
  description: 'Solomon Obinna Ozoemenam is a software developer with a freelance background in Graphics Design, currently studying computer science at the University of Siegen.',
  authors: [{ name: 'Solomon Obinna Ozoemenam' }],
  keywords: ['portfolio', 'software developer', 'web developer', 'Solomon Ozoemenam'],
  openGraph: {
    title: 'Solomon Obinna Ozoemenam - Software Developer',
    description: 'Software developer portfolio showcasing projects and blog articles',
    url: 'https://www.solozo.page',
    siteName: 'Solomon Ozoemenam Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

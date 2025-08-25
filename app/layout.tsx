import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '3D-печать в Алматы — прототипы и детали за 24 часа | Фикс-смета до старта',
  description: 'Онлайн 3D-печать в Алматы: прототипы, функциональные детали и макеты. Фиксируем цену до начала работ, SLA по срокам, NDA по умолчанию.',
  openGraph: {
    title: '3D-печать в Алматы — от идеи до детали уже завтра',
    description: 'Быстрая и надёжная 3D-печать с инженерной проверкой и доставкой по городу.',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
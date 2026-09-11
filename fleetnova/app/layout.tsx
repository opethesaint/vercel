import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FLEETNOVA Technologies Limited — Technology powering smarter movement',
    template: '%s — FLEETNOVA Technologies Limited',
  },
  description:
    'FLEETNOVA Technologies Limited is a Nigerian technology-driven mobility and logistics company building smarter, more efficient and more connected transportation.',
  keywords: [
    'FLEETNOVA',
    'mobility technology',
    'logistics Nigeria',
    'Lagos logistics',
    'last-mile delivery',
    'transportation technology',
  ],
  openGraph: {
    title: 'FLEETNOVA Technologies Limited',
    description: 'Technology powering smarter movement.',
    type: 'website',
    locale: 'en_NG',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0e1726',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

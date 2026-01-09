import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Save2740 - Smart Savings App',
  description: 'Save2740: Your intelligent savings companion for achieving financial goals',
  generator: 'Save2740',
  icons: {
    icon: [
      {
        url: '/save2740-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/save2740-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/save2740-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

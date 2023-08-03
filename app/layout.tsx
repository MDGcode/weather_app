import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MDG Weather',
  description: 'Aplicatie pentru vreme',
}
const montserrat = Montserrat({
  subsets:["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

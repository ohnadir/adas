import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/Modals/RegisterModal'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adas',
  description: 'Adidas Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

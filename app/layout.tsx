import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UNN Data Summit',
  description: 'Data Scienist Network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        
        <link rel="icon" href="/img/logo.svg" />
      </head>
      
      <body>{children}</body>
    </html>
  )
}

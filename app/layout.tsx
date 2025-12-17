import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employee Portal',
  description: 'Portal karyawan sederhana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  )
}

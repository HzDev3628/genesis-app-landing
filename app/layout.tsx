import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const mulishFont = localFont({
  src: [
    {
      path: './fonts/Mulish-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Mulish-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Mulish-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Mulish-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Mulish-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-general-sans',
})

export const metadata: Metadata = {
  title: 'Genesis',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulishFont.className} ${mulishFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

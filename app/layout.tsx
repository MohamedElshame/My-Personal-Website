import type React from "react"
import "./globals.css"
import { Inter, Cairo } from "next/font/google"
import type { Metadata } from "next"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Mohamed Elshamy - Social Links",
  description: "Connect with Mohamed Elshamy on various social media platforms",
  keywords: ["Mohamed Elshamy", "social media", "portfolio", "links", "connect"],
  authors: [{ name: "Mohamed Elshamy" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamed-elshamy.netlify.app/",
    title: "Mohamed Elshamy - Social Links",
    description: "Connect with Mohamed Elshamy on various social media platforms",
    siteName: "Mohamed Elshamy",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <head>
        {/* Force React Icons to load properly */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'
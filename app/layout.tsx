import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "High Mountain Holidays | Pakistan Tours & Adventure Travel",
  description:
    "Experience Pakistan beyond expectations. Guided tours, trekking holidays & cultural journeys across Pakistan, Gilgit-Baltistan, Nepal & Central Asia.",
  keywords:
    "Pakistan tours, trekking Gilgit-Baltistan, Pakistan adventure tourism, cultural tours Pakistan, mountaineering Pakistan",
  openGraph: {
    title: "High Mountain Holidays | Pakistan Tours & Adventure Travel",
    description:
      "Experience Pakistan beyond expectations. Guided tours, trekking holidays & cultural journeys across Pakistan and beyond.",
    url: "https://highmountainholidays.com",
    siteName: "High Mountain Holidays",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High Mountain Holidays | Pakistan Tours & Adventure Travel",
    description: "Experience Pakistan beyond expectations. Guided tours, trekking holidays & cultural journeys.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

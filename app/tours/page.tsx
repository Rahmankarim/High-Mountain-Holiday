import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ToursHero } from "@/components/tours/tours-hero"
import { ToursGrid } from "@/components/tours/tours-grid"

export const metadata: Metadata = {
  title: "Tours & Packages | High Mountain Holidays - Pakistan Adventure Tours",
  description:
    "Explore our curated collection of Pakistan tours - trekking holidays, mountaineering expeditions, cultural tours, and customized private journeys.",
}

export default function ToursPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ToursHero />
      <ToursGrid />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

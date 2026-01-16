import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AboutHero } from "@/components/about/about-hero"
import { AboutContent } from "@/components/about/about-content"
import { CEOSection } from "@/components/about/ceo-section"
import { TeamValues } from "@/components/about/team-values"

export const metadata: Metadata = {
  title: "About Us | High Mountain Holidays - Expert Pakistan Tour Guides",
  description:
    "Learn about High Mountain Holidays - your trusted partner for authentic Pakistan travel experiences with expert multilingual guides and VVIP service.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <CEOSection />
      <TeamValues />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

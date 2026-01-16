import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhyHero } from "@/components/why/why-hero"
import { WhyContent } from "@/components/why/why-content"
import { TrustBadges } from "@/components/why/trust-badges"

export const metadata: Metadata = {
  title: "Why Choose Us | High Mountain Holidays - Trusted Pakistan Tour Operator",
  description:
    "Discover why High Mountain Holidays is the most trusted choice for Pakistan tours. Satisfaction guaranteed, best prices, and unique authentic experiences.",
}

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WhyHero />
      <WhyContent />
      <TrustBadges />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

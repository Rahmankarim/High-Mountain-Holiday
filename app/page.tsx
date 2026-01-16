import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedTours } from "@/components/featured-tours"
import { WhyChooseUsPreview } from "@/components/why-choose-us-preview"
import { DestinationsGallery } from "@/components/destinations-gallery"
import { Testimonials } from "@/components/testimonials"
import { BlogPreview } from "@/components/blog-preview"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedTours />
      <WhyChooseUsPreview />
      <DestinationsGallery />
      <Testimonials />
      <BlogPreview />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

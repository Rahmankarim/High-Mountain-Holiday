import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "Blog | High Mountain Holidays - Pakistan Travel Stories & Tips",
  description:
    "Read inspiring travel stories, cultural insights, and expert tips for your Pakistan adventure from our experienced team.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogGrid />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

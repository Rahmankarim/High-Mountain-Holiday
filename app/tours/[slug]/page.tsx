import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TourDetail } from "@/components/tours/tour-detail"
import { tours, getTourBySlug } from "@/lib/data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    return {
      title: "Tour Not Found | High Mountain Holidays",
    }
  }

  return {
    title: `${tour.title} | High Mountain Holidays`,
    description: tour.description,
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <TourDetail tour={tour} />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

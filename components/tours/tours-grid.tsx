"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, Mountain, Users, Star, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { tours } from "@/lib/data"

// Group tours by category
const tourCategories = [
  {
    id: "trekking",
    title: "Trekking Holidays",
    description:
      "Challenge yourself with spectacular mountain trails through the world's most breathtaking landscapes.",
  },
  {
    id: "mountaineering",
    title: "Mountaineering Expeditions",
    description: "Conquer some of the world's most iconic peaks with our expert mountaineering guides.",
  },
  {
    id: "cultural",
    title: "Cultural Tours",
    description: "Immerse yourself in the rich traditions, ancient history, and warm hospitality of Pakistan.",
  },
  {
    id: "full-pakistan",
    title: "Full Pakistan Tours",
    description: "Experience the complete diversity of Pakistan from north to south in comprehensive tours.",
  },
]

export function ToursGrid() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {tourCategories.map((category) => {
          const categoryTours = tours.filter((tour) => tour.category === category.id)

          return (
            <div key={category.id} id={category.id} className="mb-20 last:mb-0 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-foreground mb-2">{category.title}</h2>
                <p className="text-muted-foreground max-w-2xl">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryTours.map((tour, index) => (
                  <motion.div
                    key={tour.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/tours/${tour.slug}`}>
                      <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 border border-border">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-2/5 relative overflow-hidden">
                            <img
                              src={tour.image || "/placeholder.svg"}
                              alt={tour.title}
                              className="w-full h-56 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-secondary text-secondary-foreground">{tour.price}</Badge>
                            </div>
                            <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                              <Star className="h-4 w-4 text-secondary fill-secondary" />
                              <span className="text-sm font-medium">{tour.rating}</span>
                            </div>
                          </div>
                          <CardContent className="lg:w-3/5 p-6 flex flex-col">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <MapPin className="h-4 w-4" />
                              {tour.location}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {tour.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 flex-1">{tour.description}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded">
                                <Clock className="h-4 w-4" />
                                {tour.duration}
                              </div>
                              <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded">
                                <Mountain className="h-4 w-4" />
                                {tour.difficulty}
                              </div>
                              <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded">
                                <Users className="h-4 w-4" />
                                {tour.groupSize}
                              </div>
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Customized Tours CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Looking for Something Custom?</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            We specialize in creating tailor-made journeys designed exclusively for you. Share your dream adventure and
            we&apos;ll make it happen.
          </p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Request Custom Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Clock,
  Mountain,
  Users,
  Star,
  MapPin,
  Check,
  X,
  ArrowLeft,
  Calendar,
  ChevronRight,
  Share2,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type Tour, getRelatedTours } from "@/lib/data"

interface TourDetailProps {
  tour: Tour
}

export function TourDetail({ tour }: TourDetailProps) {
  const relatedTours = getRelatedTours(tour.slug, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-card/80 hover:text-card mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tours
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-secondary text-secondary-foreground">{tour.price}</Badge>
              <Badge variant="outline" className="border-card/30 text-card">
                {tour.category.charAt(0).toUpperCase() + tour.category.slice(1).replace("-", " ")}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-4 text-balance">{tour.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-card/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {tour.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {tour.duration}
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="h-5 w-5" />
                {tour.difficulty}
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {tour.groupSize} People
              </div>
              <div className="flex items-center gap-1 bg-card/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-secondary fill-secondary" />
                <span className="font-medium">{tour.rating}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
                      <p className="text-muted-foreground leading-relaxed">{tour.longDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Tour Highlights</h3>
                      <div className="grid gap-3">
                        {tour.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="p-1 bg-secondary/20 rounded-full mt-0.5">
                              <Check className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gallery */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {tour.gallery.map((image, index) => (
                          <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${tour.title} gallery ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="itinerary" className="space-y-6">
                    <h2 className="text-2xl font-bold">Day-by-Day Itinerary</h2>
                    <div className="space-y-4">
                      {tour.itinerary.map((day, index) => (
                        <Card key={index} className="border-l-4 border-l-primary">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Calendar className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-medium text-primary">{day.day}</span>
                                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                  <span className="font-semibold">{day.title}</span>
                                </div>
                                <p className="text-muted-foreground text-sm">{day.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-2">
                          {tour.included.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <X className="h-5 w-5 text-red-500" />
                          Not Included
                        </h3>
                        <ul className="space-y-2">
                          {tour.notIncluded.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <X className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-muted-foreground text-sm mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-primary">{tour.price}</p>
                      <p className="text-muted-foreground text-sm">per person</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{tour.duration}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Difficulty</span>
                        <span className="font-medium">{tour.difficulty}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Group Size</span>
                        <span className="font-medium">{tour.groupSize}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Location</span>
                        <span className="font-medium">{tour.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                        Book This Tour
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent" size="lg">
                        Request Custom Itinerary
                      </Button>
                    </div>

                    <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8">Related Tours</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTours.map((relatedTour) => (
                  <Link key={relatedTour.id} href={`/tours/${relatedTour.slug}`}>
                    <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={relatedTour.image || "/placeholder.svg"}
                          alt={relatedTour.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                          {relatedTour.price}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {relatedTour.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{relatedTour.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}

"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    image: "/professional-woman-smiling-portrait.png",
    rating: 5,
    text: "An absolutely incredible experience! The team at High Mountain Holidays made our trek to K2 Base Camp unforgettable. The guides were knowledgeable, friendly, and ensured our safety at every step.",
  },
  {
    name: "Michael Chen",
    country: "Australia",
    image: "/professional-man-portrait-smiling-asian.jpg",
    rating: 5,
    text: "The cultural tour through Hunza Valley was beyond my expectations. The local insights, authentic experiences, and stunning landscapes left me speechless. Highly recommended!",
  },
  {
    name: "Emma Rodriguez",
    country: "Spain",
    image: "/professional-woman-portrait-smiling-hispanic.jpg",
    rating: 5,
    text: "From the moment I booked to the end of my journey, everything was perfectly organized. The VVIP treatment, comfortable accommodations, and expert guidance made this trip truly special.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-muted rounded-full text-muted-foreground text-sm font-medium mb-4">
            Traveler Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Guests Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read authentic experiences from travelers who explored Pakistan with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-muted/30 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-foreground mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-3 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

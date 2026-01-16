"use client"

import { motion } from "framer-motion"
import { Shield, BadgeDollarSign, Sparkles, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description: "We create lifetime experiences that exceed expectations. Your satisfaction is our top priority.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    description: "Tailor-made tours with competitive pricing. Get the best deals for your Pakistan adventure.",
  },
  {
    icon: Sparkles,
    title: "Unique Experiences",
    description: "Discover cultural, historical, and traditional Pakistan with authentic local perspectives.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Local Guides",
    description: "Multilingual, university-educated guides with decades of experience in Pakistan tourism.",
  },
]

export function WhyChooseUsPreview() {
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
            Why Travel With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Trusted Adventure Partner</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With decades of expertise and passion for showcasing Pakistan&apos;s beauty, we deliver unforgettable
            journeys with unmatched service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-muted/30 rounded-2xl hover:bg-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-foreground transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

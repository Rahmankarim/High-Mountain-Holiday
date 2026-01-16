"use client"

import { motion } from "framer-motion"
import { Heart, Target, Compass, Handshake } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We are deeply passionate about sharing Pakistan's beauty with the world.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service delivery.",
  },
  {
    icon: Compass,
    title: "Authenticity",
    description: "We provide genuine local experiences that connect travelers with real Pakistan.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "We build lasting relationships through transparency and reliability.",
  },
]

export function TeamValues() {
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
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

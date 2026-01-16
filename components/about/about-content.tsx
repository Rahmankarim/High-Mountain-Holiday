"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Globe, Shield, Users, Award } from "lucide-react"

const highlights = [
  {
    icon: Globe,
    title: "Official Tour Guides",
    description: "Managed by certified official tour guides from Pakistan with extensive local knowledge.",
  },
  {
    icon: Users,
    title: "Multilingual Experts",
    description: "University-educated guides fluent in multiple languages for seamless communication.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Modern safety standards with reliable transport and vetted accommodations.",
  },
  {
    icon: Award,
    title: "VVIP Treatment",
    description: "Personalized customer service that treats every traveler as our most valued guest.",
  },
]

export function AboutContent() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Authentic Experiences, <span className="text-primary">Exceptional Service</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              High Mountain Holidays is a premier travel company dedicated to showcasing the extraordinary beauty and
              rich cultural heritage of Pakistan. Our team consists of passionate, experienced professionals who are
              committed to providing authentic, customer-centric, and technology-driven tourism experiences.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in crafting unique journeys across Gilgit-Baltistan, Pakistan, Western China, Nepal, and
              Central Asia. Whether you seek challenging mountain treks, immersive cultural experiences, or luxurious
              private tours, we deliver unforgettable adventures tailored to your desires.
            </p>
            <ul className="space-y-3">
              {[
                "Expert certified guides with deep local knowledge",
                "Personalized itineraries for every traveler",
                "Modern hotels and reliable transportation",
                "24/7 support throughout your journey",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <div key={item.title} className="p-6 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

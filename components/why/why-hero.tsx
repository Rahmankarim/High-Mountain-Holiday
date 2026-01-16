"use client"

import { motion } from "framer-motion"

export function WhyHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-medium mb-6">
            Our Promise
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
            Why Choose High Mountain Holidays?
          </h1>
          <p className="text-xl text-card/80">
            We&apos;re committed to delivering exceptional experiences that exceed your expectations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

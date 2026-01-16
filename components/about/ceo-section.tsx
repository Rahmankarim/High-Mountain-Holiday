"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function CEOSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 bg-card rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="relative">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Amin Jan - CEO"
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <Quote className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
                &ldquo;We don&apos;t sell tours — we create lifelong memories.&rdquo;
              </blockquote>
              <div>
                <h3 className="text-xl font-bold text-foreground">Amin Jan</h3>
                <p className="text-primary font-medium">CEO, High Mountain Holidays</p>
                <p className="text-muted-foreground text-sm mt-2">
                  With over two decades of experience in Pakistan tourism, Amin Jan leads our team with passion and
                  expertise.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

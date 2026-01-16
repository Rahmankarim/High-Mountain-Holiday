"use client"

import { motion } from "framer-motion"
import { Shield, CreditCard, Clock, Award } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your information is always protected",
  },
  {
    icon: CreditCard,
    title: "PayPal Accepted",
    description: "Safe and convenient payment options",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "We're always here to help you",
  },
  {
    icon: Award,
    title: "Licensed Operator",
    description: "Officially certified tour company",
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-foreground">Book With Confidence</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-card rounded-xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

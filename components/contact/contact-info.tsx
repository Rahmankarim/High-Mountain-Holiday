"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+92-34888-75107", "+92-3555209200"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+92-343-8811177", "+92-347-9711935"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["highmountainholidays@yahoo.com"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["High Mountain Holidays", "Pakistan"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Contact Information</h2>
        <p className="text-muted-foreground">
          Reach out to us through any of these channels. We&apos;re always happy to help!
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Map Placeholder */}
      <div className="relative h-64 rounded-xl overflow-hidden">
        <img src="/placeholder.svg?height=300&width=500" alt="Our Location" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
          <div className="bg-card px-4 py-2 rounded-lg shadow-lg">
            <p className="font-semibold text-foreground">High Mountain Holidays</p>
            <p className="text-sm text-muted-foreground">Pakistan</p>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
        <div className="px-3 py-2 bg-primary/10 rounded-lg">
          <span className="text-primary font-bold text-lg">PayPal</span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Secure Payments Accepted</h4>
          <p className="text-sm text-muted-foreground">Pay safely with PayPal for your bookings</p>
        </div>
      </div>
    </motion.div>
  )
}

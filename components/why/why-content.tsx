"use client"

import { motion } from "framer-motion"
import { Shield, BadgeDollarSign, Sparkles, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    subtitle: "Your happiness is our mission",
    description:
      "We create lifetime experiences that go beyond expectations. Customer satisfaction isn't just a goal — it's our job. From the moment you book until you return home, we ensure every detail is perfect.",
    benefits: [
      "Personalized attention to every traveler",
      "Flexible itinerary adjustments",
      "24/7 support during your journey",
      "Money-back guarantee for unsatisfied customers",
    ],
    color: "bg-primary",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    subtitle: "Maximum value for your investment",
    description:
      "We offer tailor-made tours with competitive pricing without compromising quality. Whether you're traveling from Islamabad, Lahore, Karachi, or through Khunjerab Pass, we provide the best deals in the market.",
    benefits: [
      "Transparent pricing with no hidden fees",
      "Customized packages for every budget",
      "Group discounts available",
      "Early booking advantages",
    ],
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "Unique Experience",
    subtitle: "Authentic Pakistan like never before",
    description:
      "Experience the cultural, historical, and traditional aspects of Pakistan through our unique perspective. We take you beyond tourist spots to discover the real heart of this magnificent country.",
    benefits: [
      "Access to off-the-beaten-path destinations",
      "Authentic local cultural immersion",
      "Private and exclusive experiences",
      "Connections with local communities",
    ],
    color: "bg-accent",
  },
]

export function WhyContent() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-muted-foreground font-medium">{feature.subtitle}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">{feature.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <img
                  src={`/placeholder.svg?height=500&width=600&query=${
                    index === 0
                      ? "happy tourists pakistan mountains guide professional"
                      : index === 1
                        ? "luxury tour bus pakistan scenic road karakoram"
                        : "cultural experience pakistan local village authentic"
                  }`}
                  alt={feature.title}
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 ${feature.color} rounded-2xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

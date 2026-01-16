"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const destinations = [
  {
    name: "Hunza Valley",
    image: "/hunza-valley-pakistan-autumn-colors-karimabad-eagl.jpg",
    tours: 12,
  },
  {
    name: "K2 Base Camp",
    image: "/k2-base-camp-pakistan-concordia-karakoram-glaciers.jpg",
    tours: 5,
  },
  {
    name: "Skardu",
    image: "/skardu-pakistan-shangrila-resort-upper-kachura-lak.jpg",
    tours: 8,
  },
  {
    name: "Fairy Meadows",
    image: "/fairy-meadows-pakistan-nanga-parbat-reflection-gre.jpg",
    tours: 6,
  },
  {
    name: "Swat Valley",
    image: "/swat-valley-pakistan-malam-jabba-green-hills-river.jpg",
    tours: 7,
  },
]

export function DestinationsGallery() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
              Top Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Explore Breathtaking Locations</h2>
          </div>
          <Link href="/tours" className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View All Destinations
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-[3/4]"
              }`}
            >
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-card font-semibold text-lg md:text-xl mb-1">{dest.name}</h3>
                <p className="text-card/70 text-sm">{dest.tours} Tours Available</p>
              </div>
              <Link href="/tours" className="absolute inset-0" aria-label={`Explore ${dest.name}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

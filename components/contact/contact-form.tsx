"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
        <p className="text-muted-foreground mb-6">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1 234 567 8900" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tour">Tour Interest</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a tour type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trekking">Trekking Holidays</SelectItem>
                  <SelectItem value="mountaineering">Mountaineering</SelectItem>
                  <SelectItem value="cultural">Cultural Tours</SelectItem>
                  <SelectItem value="full-pakistan">Full Pakistan Tours</SelectItem>
                  <SelectItem value="custom">Customized Tours</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your travel plans, preferred dates, group size, and any specific requirements..."
              rows={5}
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </motion.div>
  )
}

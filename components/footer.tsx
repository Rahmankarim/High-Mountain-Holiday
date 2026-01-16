import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-primary-foreground/70 mb-6">
              Get the latest updates on tours, travel tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg bg-primary-foreground/10 overflow-hidden">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1.5">
                  <path d="M24 8L38 36H10L24 8Z" className="fill-primary-foreground" />
                  <path d="M16 20L26 36H6L16 20Z" className="fill-primary-foreground/60" />
                  <path d="M32 18L42 36H22L32 18Z" className="fill-primary-foreground/40" />
                  <path d="M24 8L28 16H20L24 8Z" className="fill-secondary" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg">High Mountain</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-primary-foreground/70">
                  Holidays
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Experience Pakistan Beyond Expectations. Your trusted partner for authentic travel experiences across
              Pakistan and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Tours", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Tours</h4>
            <ul className="space-y-2">
              {["Trekking Holidays", "Mountaineering", "Cultural Tours", "Full Pakistan Tours", "Customized Tours"].map(
                (tour) => (
                  <li key={tour}>
                    <Link
                      href="/tours"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {tour}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/70">High Mountain Holidays, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <div className="text-sm text-primary-foreground/70">
                  <p>+92-34888-75107</p>
                  <p>+92-3555209200</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/70">highmountainholidays@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} High Mountain Holidays. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2">
                <span>We Accept:</span>
                <div className="px-2 py-1 bg-primary-foreground/10 rounded text-xs font-semibold">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

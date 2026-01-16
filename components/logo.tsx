import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  scrolled?: boolean
  className?: string
}

export function Logo({ scrolled = false, className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <div
        className={cn(
          "relative w-12 h-12 rounded-xl transition-all duration-300 overflow-hidden",
          scrolled ? "bg-gradient-to-br from-primary to-primary/80" : "bg-card/20 backdrop-blur-sm",
        )}
      >
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-2">
          {/* K2-inspired peak design */}
          <path
            d="M24 8L38 36H10L24 8Z"
            className={cn("transition-colors duration-300", scrolled ? "fill-primary-foreground" : "fill-card")}
          />
          <path
            d="M16 20L26 36H6L16 20Z"
            className={cn("transition-colors duration-300", scrolled ? "fill-primary-foreground/60" : "fill-card/70")}
          />
          <path
            d="M32 18L42 36H22L32 18Z"
            className={cn("transition-colors duration-300", scrolled ? "fill-primary-foreground/40" : "fill-card/50")}
          />
          {/* Snow cap */}
          <path
            d="M24 8L28 16H20L24 8Z"
            className={cn("transition-colors duration-300", scrolled ? "fill-secondary" : "fill-secondary")}
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-bold text-lg leading-tight transition-colors tracking-tight",
            scrolled ? "text-primary" : "text-card",
          )}
        >
          High Mountain
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors",
            scrolled ? "text-muted-foreground" : "text-card/80",
          )}
        >
          Holidays
        </span>
      </div>
    </Link>
  )
}

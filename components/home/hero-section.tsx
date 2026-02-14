import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/30" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:py-32">
        {/* Text - Left */}
        <div className="flex flex-col gap-6 animate-fade-in">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Mindfully crafted
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Where Tradition Meets Modern Soul
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Explore a curated collection of ethnic wear that blends timeless Indian artistry with a fresh, contemporary boho aesthetic.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="gap-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md shadow-accent/20">
              <Link href="/products">
                Explore Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/products?category=Sarees">Shop Sarees</Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground animate-fade-in-delay-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">500+</span>
              <span>Curated Designs</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">50+</span>
              <span>Master Artisans</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">10K+</span>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Image - Right */}
        <div className="relative animate-fade-in-delay-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-accent/10 md:aspect-[4/5]">
            <Image
              src="/images/hero.jpg"
              alt="Woman wearing elegant ethnic wear in modern styling"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>
          {/* Floating accent shapes */}
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/40 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-secondary/60 blur-2xl" />
        </div>
      </div>
    </section>
  )
}

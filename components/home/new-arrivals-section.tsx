import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getNewArrivals } from "@/lib/data/products"
import { ProductCard } from "@/components/products/product-card"

export function NewArrivalsSection() {
  const arrivals = getNewArrivals().slice(0, 4)

  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              New Arrivals
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fresh styles just added to our collection
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden gap-1 md:flex text-accent hover:text-accent/80">
            <Link href="/products?sort=newest">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Masonry-inspired staggered grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {arrivals.map((product, i) => (
            <div
              key={product.id}
              className={i % 2 === 0 ? "md:mt-0" : "md:mt-8"}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="gap-1 rounded-full">
            <Link href="/products?sort=newest">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/data/categories"

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Shop by Category
          </h2>
          <p className="mt-2 text-muted-foreground">
            Find the perfect piece for every occasion
          </p>
        </div>

        {/* Circular category cards */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {categories.slice(0, 4).map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.name)}`}
              className={`group flex flex-col items-center gap-3 ${
                i === 0 ? "animate-fade-in" :
                i === 1 ? "animate-fade-in-delay-1" :
                i === 2 ? "animate-fade-in-delay-2" : "animate-fade-in-delay-3"
              }`}
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg shadow-primary/10 transition-all duration-300 group-hover:border-accent group-hover:shadow-accent/20 group-hover:scale-105 md:h-36 md:w-36">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 112px, 144px"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-sm font-semibold text-foreground group-hover:text-accent transition-colors md:text-base">
                  {cat.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground hidden md:block max-w-[120px]">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

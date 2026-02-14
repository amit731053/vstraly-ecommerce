"use client"

import { useMemo } from "react"
import { products } from "@/lib/data/products"
import { ProductCard } from "@/components/products/product-card"

interface RecommendationsProps {
  currentProductId: string
  category: string
}

export function Recommendations({ currentProductId, category }: RecommendationsProps) {
  const recommended = useMemo(() => {
    return products
      .filter((p) => p.id !== currentProductId)
      .filter((p) => p.category === category)
      .slice(0, 4)
  }, [currentProductId, category])

  if (recommended.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {recommended.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

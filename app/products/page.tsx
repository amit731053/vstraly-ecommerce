"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductFilters } from "@/components/products/product-filters"
import { SmartSearch } from "@/components/products/smart-search"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { filterProducts } from "@/lib/data/products"

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [filters, setFilters] = useState({
    category: categoryParam || null,
    occasion: null as string | null,
    color: null as string | null,
    priceRange: [0, 60000] as [number, number],
    sortBy: null as string | null,
  })

  const [searchFilters, setSearchFilters] = useState<{
    category?: string | null
    color?: string | null
    maxPrice?: number | null
    occasion?: string | null
  } | null>(null)

  const filteredProducts = useMemo(() => {
    const activeFilters = searchFilters
      ? {
          category: searchFilters.category || filters.category,
          minPrice: filters.priceRange[0] > 0 ? filters.priceRange[0] : null,
          maxPrice: searchFilters.maxPrice || (filters.priceRange[1] < 60000 ? filters.priceRange[1] : null),
          color: searchFilters.color || filters.color,
          occasion: searchFilters.occasion || filters.occasion,
          sortBy: filters.sortBy,
        }
      : {
          category: filters.category,
          minPrice: filters.priceRange[0] > 0 ? filters.priceRange[0] : null,
          maxPrice: filters.priceRange[1] < 60000 ? filters.priceRange[1] : null,
          color: filters.color,
          occasion: filters.occasion,
          sortBy: filters.sortBy,
        }
    return filterProducts(activeFilters)
  }, [filters, searchFilters])

  const handleSmartSearch = (results: {
    category?: string | null
    color?: string | null
    maxPrice?: number | null
    occasion?: string | null
  }) => {
    setSearchFilters(results)
    if (results.category) {
      setFilters((f) => ({ ...f, category: results.category! }))
    }
  }

  const activeFilterCount = [
    filters.category,
    filters.occasion,
    filters.color,
    filters.priceRange[0] > 0 || filters.priceRange[1] < 60000,
    filters.sortBy,
  ].filter(Boolean).length

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {filters.category || "All Collections"}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Smart Search */}
          <div className="mb-8">
            <SmartSearch onResults={handleSmartSearch} />
          </div>

          {/* Search filter badges */}
          {searchFilters && (
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">AI filters:</span>
              {searchFilters.category && (
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
                  {searchFilters.category}
                </span>
              )}
              {searchFilters.color && (
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
                  {searchFilters.color}
                </span>
              )}
              {searchFilters.maxPrice && (
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
                  Under {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(searchFilters.maxPrice)}
                </span>
              )}
              {searchFilters.occasion && (
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
                  {searchFilters.occasion}
                </span>
              )}
              <button
                onClick={() => setSearchFilters(null)}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" /> Clear AI filters
              </button>
            </div>
          )}

          <div className="flex gap-8">
            {/* Desktop Filters */}
            <aside className="hidden w-56 shrink-0 lg:block">
              <ProductFilters filters={filters} onChange={setFilters} />
            </aside>

            {/* Mobile Filters */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 gap-2 shadow-lg lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 overflow-y-auto">
                <div className="pt-6">
                  <ProductFilters filters={filters} onChange={setFilters} />
                </div>
              </SheetContent>
            </Sheet>

            {/* Products */}
            <div className="flex-1">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  )
}

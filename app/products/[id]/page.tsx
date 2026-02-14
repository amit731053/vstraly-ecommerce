"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, ShoppingBag, Heart, ArrowLeft, Minus, Plus } from "lucide-react"
import { toast } from "sonner"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getProductById, products } from "@/lib/data/products"
import { useCart } from "@/lib/store/cart-context"
import { Recommendations } from "@/components/recommendations"
import type { Size } from "@/lib/data/types"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const product = getProductById(id)
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    notFound()
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size")
      return
    }
    if (!selectedColor) {
      toast.error("Please select a color")
      return
    }
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor)
    }
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Breadcrumb */}
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
                  {discount}% OFF
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <h1 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(product.rating)
                          ? "fill-accent text-accent"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
                    Save {discount}%
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Size selector */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-foreground">Size</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-card-foreground hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color selector */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-foreground">Color</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-card-foreground hover:border-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-foreground">Quantity</h3>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-secondary"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-secondary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Details Accordion */}
              <Accordion type="multiple" className="mt-8">
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm">
                    Product Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Fabric</span>
                        <span className="text-foreground">{product.fabric}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Occasion</span>
                        <span className="text-foreground">
                          {product.occasion.join(", ")}
                        </span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger className="text-sm">
                    Care Instructions
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      {product.careInstructions}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-sm">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <p>Free shipping on orders above INR 2,000</p>
                      <p>Standard delivery: 5-7 business days</p>
                      <p>Easy 15-day return policy</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Recommendations */}
          <Recommendations
            currentProductId={product.id}
            category={product.category}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

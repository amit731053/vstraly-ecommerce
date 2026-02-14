"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Sparkles, Loader2, Plus, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/lib/store/auth-context"
import { products } from "@/lib/data/products"
import { toast } from "sonner"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function AdminProductsPage() {
  const router = useRouter()
  const { isAuthenticated, isAdmin } = useAuth()
  const [generatingId, setGeneratingId] = useState<string | null>(null)
  const [generatedDesc, setGeneratedDesc] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      router.push("/login")
    }
  }, [isAuthenticated, isAdmin, router])

  if (!isAuthenticated || !isAdmin) return null

  const handleGenerateDescription = async (
    productId: string,
    productName: string,
    category: string,
    fabric: string
  ) => {
    setGeneratingId(productId)
    try {
      const res = await fetch("/api/generate-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: productName, category, fabric }),
      })
      const data = await res.json()
      setGeneratedDesc((prev) => ({ ...prev, [productId]: data.description }))
      toast.success("Description generated!")
    } catch {
      toast.error("Failed to generate description")
    } finally {
      setGeneratingId(null)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="font-serif text-3xl font-bold text-foreground">
                  Products
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  {products.length} products in catalog
                </p>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    toast.success("Product added (demo)")
                  }}
                >
                  <div className="flex flex-col gap-1.5">
                    <Label>Product Name</Label>
                    <Input placeholder="Emerald Silk Saree" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label>Category</Label>
                      <Input placeholder="Sarees" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label>Price (INR)</Label>
                      <Input type="number" placeholder="5999" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label>Fabric</Label>
                    <Input placeholder="Pure Silk" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label>Description</Label>
                    <Textarea placeholder="Product description..." rows={3} />
                  </div>
                  <Button type="submit">Add Product</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Products Table */}
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Product
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Price
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Rating
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      AI Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded bg-secondary">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <span className="font-medium text-card-foreground line-clamp-1">
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {product.category}
                      </td>
                      <td className="px-4 py-3 text-card-foreground">
                        {formatPrice(product.price)}
                      </td>
                      <td className="px-4 py-3 text-card-foreground">
                        {product.rating}
                      </td>
                      <td className="px-4 py-3">
                        {generatedDesc[product.id] ? (
                          <p className="max-w-xs text-xs text-muted-foreground line-clamp-2">
                            {generatedDesc[product.id]}
                          </p>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-1.5 text-xs"
                            disabled={generatingId === product.id}
                            onClick={() =>
                              handleGenerateDescription(
                                product.id,
                                product.name,
                                product.category,
                                product.fabric
                              )
                            }
                          >
                            {generatingId === product.id ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              <Sparkles className="h-3 w-3" />
                            )}
                            Generate
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

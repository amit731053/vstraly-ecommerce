"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/store/cart-context"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function CheckoutPage() {
  const { items, subtotal, shipping, tax, total, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId] = useState(`ORD-${Math.random().toString(36).slice(2, 8).toUpperCase()}`)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="mx-auto max-w-md px-4 py-16 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
            <h1 className="mt-4 font-serif text-3xl font-bold text-foreground">
              Order Confirmed!
            </h1>
            <p className="mt-2 text-muted-foreground">
              Thank you for your order. Your order ID is{" "}
              <span className="font-mono font-semibold text-foreground">
                {orderId}
              </span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              We{"'"}ll send you a confirmation email shortly.
            </p>
            <Button asChild className="mt-8">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-foreground">
              Your cart is empty
            </h1>
            <Button asChild className="mt-4">
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Checkout
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-8 lg:grid-cols-3"
          >
            {/* Shipping form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Shipping Address
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required placeholder="Priya" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required placeholder="Sharma" />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="priya@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      required
                      placeholder="123 MG Road, Apartment 4B"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required placeholder="Mumbai" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required placeholder="Maharashtra" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input id="pincode" required placeholder="400001" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Payment
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  This is a demo checkout. No real payment will be processed.
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="expiry">Expiry</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Order Summary
                </h2>

                <div className="mt-4 flex flex-col gap-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground line-clamp-1 flex-1 pr-2">
                        {item.product.name} x{item.quantity}
                      </span>
                      <span className="text-card-foreground shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t border-border pt-4 flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-card-foreground">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-card-foreground">
                      {shipping === 0 ? "Free" : formatPrice(shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span className="text-card-foreground">{formatPrice(tax)}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between font-semibold">
                    <span className="text-card-foreground">Total</span>
                    <span className="text-card-foreground">{formatPrice(total)}</span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full">
                  Place Order
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

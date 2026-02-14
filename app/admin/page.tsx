"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import {
  Package,
  ShoppingCart,
  DollarSign,
  Users,
  ArrowRight,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/store/auth-context"
import { products } from "@/lib/data/products"
import { mockOrders } from "@/lib/data/orders"

const stats = [
  {
    label: "Total Products",
    value: products.length.toString(),
    icon: Package,
    change: "+3 this week",
  },
  {
    label: "Total Orders",
    value: mockOrders.length.toString(),
    icon: ShoppingCart,
    change: "+2 today",
  },
  {
    label: "Revenue",
    value: new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(mockOrders.reduce((sum, o) => sum + o.total, 0)),
    icon: DollarSign,
    change: "+12% this month",
  },
  {
    label: "Customers",
    value: "1,234",
    icon: Users,
    change: "+56 this week",
  },
]

export default function AdminDashboardPage() {
  const router = useRouter()
  const { isAuthenticated, isAdmin } = useAuth()

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      router.push("/login")
    }
  }, [isAuthenticated, isAdmin, router])

  if (!isAuthenticated || !isAdmin) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foreground">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage your store and products
              </p>
            </div>
            <Button asChild className="gap-2">
              <Link href="/admin/products">
                Manage Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="mt-2 text-2xl font-bold text-card-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">
              Recent Orders
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Order ID
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Customer
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Total
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-border last:border-0"
                      >
                        <td className="px-4 py-3 font-mono text-card-foreground">
                          {order.id}
                        </td>
                        <td className="px-4 py-3 text-card-foreground">
                          {order.customer}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {order.date}
                        </td>
                        <td className="px-4 py-3 text-card-foreground">
                          {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            maximumFractionDigits: 0,
                          }).format(order.total)}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-700"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-700"
                                : order.status === "Processing"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

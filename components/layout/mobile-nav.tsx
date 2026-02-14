"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { useAuth } from "@/lib/store/auth-context"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop All" },
  { href: "/products?category=Sarees", label: "Sarees" },
  { href: "/products?category=Lehengas", label: "Lehengas" },
  { href: "/products?category=Kurtis", label: "Kurtis" },
  { href: "/products?category=Salwar+Suits", label: "Salwar Suits" },
  { href: "/cart", label: "Cart" },
]

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { isAuthenticated, isAdmin, logout } = useAuth()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 left-0 w-72 bg-background/95 backdrop-blur-xl shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <span className="font-serif text-xl font-bold text-foreground">Rangoli</span>
          <button onClick={onClose} aria-label="Close menu" className="p-1 rounded-full hover:bg-secondary transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="my-3 border-t border-border/50" />

          {isAuthenticated ? (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  onClick={onClose}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={() => {
                  logout()
                  onClose()
                }}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors text-left"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={onClose}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={onClose}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Create Account
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}

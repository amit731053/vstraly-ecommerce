import Link from "next/link"

const footerLinks = {
  Shop: [
    { href: "/products?category=Sarees", label: "Sarees" },
    { href: "/products?category=Lehengas", label: "Lehengas" },
    { href: "/products?category=Kurtis", label: "Kurtis" },
    { href: "/products?category=Salwar+Suits", label: "Salwar Suits" },
    { href: "/products?category=Dupattas", label: "Dupattas" },
  ],
  Company: [
    { href: "#", label: "About Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Press" },
  ],
  Support: [
    { href: "#", label: "Contact" },
    { href: "#", label: "Shipping" },
    { href: "#", label: "Returns" },
    { href: "#", label: "FAQ" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold text-foreground">
              Rangoli
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Beautifully curated ethnic wear with a modern boho spirit, celebrating India{"'"}s rich textile heritage.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          2026 Rangoli. All rights reserved. Built with AI-powered technology.
        </div>
      </div>
    </footer>
  )
}

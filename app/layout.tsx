import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { Toaster } from "sonner"
import { CartProvider } from "@/lib/store/cart-context"
import { AuthProvider } from "@/lib/store/auth-context"
import { Chatbot } from "@/components/chat/chatbot"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Rangoli - Modern Ethnic Wear for Women",
  description:
    "Discover beautifully curated ethnic wear with a modern boho twist. Shop sarees, lehengas, kurtis, and salwar suits with AI-powered styling assistance.",
}

export const viewport: Viewport = {
  themeColor: "#E8B4A0",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          <CartProvider>
            {children}
            <Chatbot />
            <Toaster position="bottom-right" richColors />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

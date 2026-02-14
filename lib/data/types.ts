export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  category: Category
  colors: string[]
  sizes: Size[]
  occasion: Occasion[]
  fabric: string
  careInstructions: string
  images: string[]
  featured: boolean
  newArrival: boolean
  rating: number
  reviewCount: number
  inStock: boolean
}

export type Category =
  | "Sarees"
  | "Lehengas"
  | "Kurtis"
  | "Salwar Suits"
  | "Dupattas"

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "Free Size"

export type Occasion =
  | "Wedding"
  | "Party"
  | "Casual"
  | "Festive"
  | "Office"
  | "Bridal"

export interface CartItem {
  product: Product
  quantity: number
  selectedSize: Size
  selectedColor: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: "Pending" | "Processing" | "Shipped" | "Delivered"
  date: string
  customer: string
}

export interface User {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

export interface SearchFilters {
  category: Category | null
  minPrice: number | null
  maxPrice: number | null
  color: string | null
  size: Size | null
  occasion: Occasion | null
  sortBy: "price-asc" | "price-desc" | "newest" | "popular" | null
}

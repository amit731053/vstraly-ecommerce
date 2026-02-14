import type { Category } from "./types"

export interface CategoryInfo {
  name: Category
  slug: string
  description: string
  image: string
  productCount: number
}

export const categories: CategoryInfo[] = [
  {
    name: "Sarees",
    slug: "sarees",
    description: "Timeless silk, cotton and designer sarees for every occasion",
    image: "/images/categories/sarees.jpg",
    productCount: 4,
  },
  {
    name: "Lehengas",
    slug: "lehengas",
    description: "Bridal and party lehengas with exquisite craftsmanship",
    image: "/images/categories/lehengas.jpg",
    productCount: 5,
  },
  {
    name: "Kurtis",
    slug: "kurtis",
    description: "Everyday elegance with hand-embroidered and printed kurtis",
    image: "/images/categories/kurtis.jpg",
    productCount: 5,
  },
  {
    name: "Salwar Suits",
    slug: "salwar-suits",
    description: "Graceful salwar suits for parties and daily wear",
    image: "/images/categories/salwar-suits.jpg",
    productCount: 3,
  },
  {
    name: "Dupattas",
    slug: "dupattas",
    description: "Statement dupattas to elevate any ethnic outfit",
    image: "/images/categories/sarees.jpg",
    productCount: 3,
  },
]

import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Banarasi Silk Saree",
    slug: "royal-banarasi-silk-saree",
    description:
      "Exquisite Banarasi silk saree featuring traditional zari work with intricate floral motifs. The rich maroon base is complemented by a luxurious gold border, making it perfect for weddings and festive occasions.",
    price: 8999,
    originalPrice: 12999,
    category: "Sarees",
    colors: ["Maroon", "Gold"],
    sizes: ["Free Size"],
    occasion: ["Wedding", "Festive"],
    fabric: "Pure Banarasi Silk",
    careInstructions: "Dry clean only. Store in muslin cloth.",
    images: ["/images/products/saree-1.jpg"],
    featured: true,
    newArrival: false,
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: "2",
    name: "Emerald Kanjivaram Silk Saree",
    slug: "emerald-kanjivaram-silk-saree",
    description:
      "Stunning Kanjivaram silk saree in deep emerald green with a rich gold temple border. Hand-woven with pure mulberry silk threads, this masterpiece showcases the finest South Indian weaving traditions.",
    price: 15999,
    originalPrice: 19999,
    category: "Sarees",
    colors: ["Green", "Gold"],
    sizes: ["Free Size"],
    occasion: ["Wedding", "Bridal"],
    fabric: "Pure Kanjivaram Silk",
    careInstructions: "Dry clean only. Store in muslin cloth.",
    images: ["/images/products/saree-2.jpg"],
    featured: true,
    newArrival: true,
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: "3",
    name: "Royal Blue Bridal Lehenga",
    slug: "royal-blue-bridal-lehenga",
    description:
      "A breathtaking royal blue bridal lehenga featuring heavy gold embroidery and sequin work. The voluminous skirt and matching dupatta create a regal silhouette perfect for your wedding day.",
    price: 35999,
    originalPrice: 45999,
    category: "Lehengas",
    colors: ["Blue", "Gold"],
    sizes: ["S", "M", "L", "XL"],
    occasion: ["Bridal", "Wedding"],
    fabric: "Raw Silk with Net Dupatta",
    careInstructions: "Professional dry clean only.",
    images: ["/images/products/lehenga-1.jpg"],
    featured: true,
    newArrival: false,
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
  },
  {
    id: "4",
    name: "Blush Pink Mirror Lehenga",
    slug: "blush-pink-mirror-lehenga",
    description:
      "Dreamy blush pink lehenga adorned with mirror work and delicate floral embroidery. Features a fitted choli and a flowing skirt that creates a fairy-tale bridal look.",
    price: 28999,
    originalPrice: 34999,
    category: "Lehengas",
    colors: ["Pink", "Silver"],
    sizes: ["XS", "S", "M", "L"],
    occasion: ["Bridal", "Party"],
    fabric: "Georgette with Silk Lining",
    careInstructions: "Professional dry clean only.",
    images: ["/images/products/lehenga-2.jpg"],
    featured: false,
    newArrival: true,
    rating: 4.7,
    reviewCount: 45,
    inStock: true,
  },
  {
    id: "5",
    name: "Teal Chikankari Kurti",
    slug: "teal-chikankari-kurti",
    description:
      "Elegant teal green kurti featuring traditional Lucknowi chikankari embroidery. The hand-embroidered floral motifs and comfortable cotton fabric make it perfect for everyday wear.",
    price: 1899,
    originalPrice: 2499,
    category: "Kurtis",
    colors: ["Teal", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: ["Casual", "Office"],
    fabric: "Pure Cotton",
    careInstructions: "Machine wash gentle cycle. Iron on medium heat.",
    images: ["/images/products/kurti-1.jpg"],
    featured: true,
    newArrival: false,
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
  },
  {
    id: "6",
    name: "Mustard Block Print Anarkali",
    slug: "mustard-block-print-anarkali",
    description:
      "Vibrant mustard yellow Anarkali kurti with beautiful hand block print patterns. The flared silhouette and comfortable cotton fabric offer both style and ease for festive gatherings.",
    price: 2499,
    originalPrice: 3299,
    category: "Kurtis",
    colors: ["Yellow", "Brown"],
    sizes: ["S", "M", "L", "XL"],
    occasion: ["Festive", "Casual"],
    fabric: "Cotton Cambric",
    careInstructions: "Machine wash cold. Air dry in shade.",
    images: ["/images/products/kurti-2.jpg"],
    featured: false,
    newArrival: true,
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: "7",
    name: "Pink Anarkali Salwar Suit",
    slug: "pink-anarkali-salwar-suit",
    description:
      "Gorgeous pink Anarkali salwar suit with intricate silver thread embroidery. The flowing Anarkali silhouette and delicate dupatta create an enchanting look for parties and celebrations.",
    price: 4999,
    originalPrice: 6499,
    category: "Salwar Suits",
    colors: ["Pink", "Silver"],
    sizes: ["S", "M", "L", "XL"],
    occasion: ["Party", "Festive"],
    fabric: "Georgette with Santoon Lining",
    careInstructions: "Dry clean recommended.",
    images: ["/images/products/salwar-1.jpg"],
    featured: true,
    newArrival: true,
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
  },
  {
    id: "8",
    name: "Golden Silk Dupatta",
    slug: "golden-silk-dupatta",
    description:
      "Luxurious golden silk dupatta with an intricately woven border and elegant tassel details. This versatile piece elevates any ethnic outfit with its rich sheen and traditional charm.",
    price: 1499,
    originalPrice: 1999,
    category: "Dupattas",
    colors: ["Gold"],
    sizes: ["Free Size"],
    occasion: ["Wedding", "Festive", "Party"],
    fabric: "Art Silk",
    careInstructions: "Dry clean only.",
    images: ["/images/products/dupatta-1.jpg"],
    featured: false,
    newArrival: true,
    rating: 4.4,
    reviewCount: 76,
    inStock: true,
  },
  {
    id: "9",
    name: "Ivory Chanderi Saree",
    slug: "ivory-chanderi-saree",
    description:
      "Delicate ivory Chanderi saree with subtle gold butis and a contrasting border. The lightweight fabric drapes beautifully, making it ideal for summer events and office wear.",
    price: 4599,
    originalPrice: 5999,
    category: "Sarees",
    colors: ["Ivory", "Gold"],
    sizes: ["Free Size"],
    occasion: ["Office", "Casual", "Festive"],
    fabric: "Chanderi Silk Cotton",
    careInstructions: "Gentle hand wash. Air dry in shade.",
    images: ["/images/products/saree-1.jpg"],
    featured: false,
    newArrival: false,
    rating: 4.6,
    reviewCount: 112,
    inStock: true,
  },
  {
    id: "10",
    name: "Navy Velvet Lehenga",
    slug: "navy-velvet-lehenga",
    description:
      "Opulent navy velvet lehenga with antique gold embroidery inspired by Mughal motifs. A statement piece for winter weddings and grand receptions.",
    price: 42999,
    originalPrice: 52999,
    category: "Lehengas",
    colors: ["Navy", "Gold"],
    sizes: ["S", "M", "L"],
    occasion: ["Bridal", "Wedding"],
    fabric: "Velvet with Organza Dupatta",
    careInstructions: "Professional dry clean only.",
    images: ["/images/products/lehenga-1.jpg"],
    featured: true,
    newArrival: false,
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
  },
  {
    id: "11",
    name: "White Lucknowi Kurti Set",
    slug: "white-lucknowi-kurti-set",
    description:
      "Pristine white kurti set featuring dense chikankari embroidery with matching palazzos. A timeless combination of comfort and elegance for everyday wear.",
    price: 2799,
    originalPrice: 3599,
    category: "Kurtis",
    colors: ["White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: ["Casual", "Office"],
    fabric: "Modal Cotton",
    careInstructions: "Machine wash gentle cycle. Use mild detergent.",
    images: ["/images/products/kurti-1.jpg"],
    featured: false,
    newArrival: false,
    rating: 4.5,
    reviewCount: 189,
    inStock: true,
  },
  {
    id: "12",
    name: "Coral Palazzo Salwar Suit",
    slug: "coral-palazzo-salwar-suit",
    description:
      "Contemporary coral salwar suit with wide palazzo pants and minimal gold accents. A modern take on traditional Indian fashion, perfect for office and casual outings.",
    price: 3299,
    originalPrice: 4299,
    category: "Salwar Suits",
    colors: ["Coral", "Gold"],
    sizes: ["S", "M", "L", "XL"],
    occasion: ["Office", "Casual"],
    fabric: "Crepe with Cotton Lining",
    careInstructions: "Machine wash cold. Iron on low heat.",
    images: ["/images/products/salwar-1.jpg"],
    featured: false,
    newArrival: true,
    rating: 4.3,
    reviewCount: 67,
    inStock: true,
  },
  {
    id: "13",
    name: "Magenta Bandhani Dupatta",
    slug: "magenta-bandhani-dupatta",
    description:
      "Vibrant magenta dupatta featuring traditional Rajasthani bandhani tie-dye work. The rich color and handcrafted pattern add a pop of culture to any outfit.",
    price: 899,
    originalPrice: 1299,
    category: "Dupattas",
    colors: ["Magenta", "White"],
    sizes: ["Free Size"],
    occasion: ["Festive", "Casual"],
    fabric: "Art Silk",
    careInstructions: "Hand wash cold. Do not bleach.",
    images: ["/images/products/dupatta-1.jpg"],
    featured: false,
    newArrival: false,
    rating: 4.2,
    reviewCount: 143,
    inStock: true,
  },
  {
    id: "14",
    name: "Burgundy Organza Saree",
    slug: "burgundy-organza-saree",
    description:
      "Ethereal burgundy organza saree with delicate sequin and thread embroidery. The sheer fabric and shimmering details create a dreamy look for evening celebrations.",
    price: 6999,
    originalPrice: 8999,
    category: "Sarees",
    colors: ["Burgundy", "Gold"],
    sizes: ["Free Size"],
    occasion: ["Party", "Wedding"],
    fabric: "Organza",
    careInstructions: "Dry clean only.",
    images: ["/images/products/saree-2.jpg"],
    featured: true,
    newArrival: true,
    rating: 4.7,
    reviewCount: 56,
    inStock: true,
  },
  {
    id: "15",
    name: "Sage Green Sharara Set",
    slug: "sage-green-sharara-set",
    description:
      "Trendy sage green sharara set with delicate gota patti work and a flowing silhouette. The perfect blend of tradition and contemporary style for festive occasions.",
    price: 5699,
    originalPrice: 7299,
    category: "Salwar Suits",
    colors: ["Green", "Gold"],
    sizes: ["XS", "S", "M", "L", "XL"],
    occasion: ["Festive", "Party"],
    fabric: "Georgette",
    careInstructions: "Dry clean recommended.",
    images: ["/images/products/salwar-1.jpg"],
    featured: false,
    newArrival: true,
    rating: 4.6,
    reviewCount: 42,
    inStock: true,
  },
  {
    id: "16",
    name: "Peach Embroidered Lehenga",
    slug: "peach-embroidered-lehenga",
    description:
      "Romantic peach lehenga with hand-embroidered floral patterns and pearl accents. A dreamy choice for sangeet and engagement ceremonies.",
    price: 24999,
    originalPrice: 31999,
    category: "Lehengas",
    colors: ["Peach", "Ivory"],
    sizes: ["XS", "S", "M", "L"],
    occasion: ["Party", "Wedding"],
    fabric: "Net with Silk Lining",
    careInstructions: "Professional dry clean only.",
    images: ["/images/products/lehenga-2.jpg"],
    featured: false,
    newArrival: false,
    rating: 4.8,
    reviewCount: 78,
    inStock: true,
  },
  {
    id: "17",
    name: "Indigo Ajrakh Print Kurti",
    slug: "indigo-ajrakh-print-kurti",
    description:
      "Artisanal indigo kurti featuring traditional Ajrakh block printing from Kutch. Each piece is hand-printed using natural dyes, celebrating centuries-old textile heritage.",
    price: 1599,
    category: "Kurtis",
    colors: ["Indigo", "Red"],
    sizes: ["S", "M", "L", "XL"],
    occasion: ["Casual", "Office"],
    fabric: "Pure Cotton",
    careInstructions: "Hand wash cold separately. Natural dyes may fade slightly.",
    images: ["/images/products/kurti-2.jpg"],
    featured: false,
    newArrival: false,
    rating: 4.4,
    reviewCount: 92,
    inStock: true,
  },
  {
    id: "18",
    name: "Red Bridal Lehenga Set",
    slug: "red-bridal-lehenga-set",
    description:
      "Classic red bridal lehenga with heavy zardozi and kundan work. This showstopper piece comes with a matching choli and heavily embellished dupatta for the perfect bridal ensemble.",
    price: 55999,
    originalPrice: 69999,
    category: "Lehengas",
    colors: ["Red", "Gold"],
    sizes: ["S", "M", "L"],
    occasion: ["Bridal"],
    fabric: "Heavy Raw Silk",
    careInstructions: "Professional dry clean only. Handle with care.",
    images: ["/images/products/lehenga-1.jpg"],
    featured: true,
    newArrival: false,
    rating: 5.0,
    reviewCount: 23,
    inStock: true,
  },
  {
    id: "19",
    name: "Lilac Phulkari Dupatta",
    slug: "lilac-phulkari-dupatta",
    description:
      "Beautiful lilac dupatta featuring traditional Punjabi phulkari embroidery in multicolored threads. A vibrant accessory that brings any plain outfit to life.",
    price: 1799,
    originalPrice: 2399,
    category: "Dupattas",
    colors: ["Lilac", "Multi"],
    sizes: ["Free Size"],
    occasion: ["Festive", "Casual", "Party"],
    fabric: "Chiffon",
    careInstructions: "Dry clean recommended.",
    images: ["/images/products/dupatta-1.jpg"],
    featured: false,
    newArrival: true,
    rating: 4.5,
    reviewCount: 61,
    inStock: true,
  },
  {
    id: "20",
    name: "Black Palazzo Kurti Set",
    slug: "black-palazzo-kurti-set",
    description:
      "Sophisticated black palazzo kurti set with gold sequin detailing along the neckline and hem. A modern ethnic choice for evening parties and festive gatherings.",
    price: 3499,
    originalPrice: 4499,
    category: "Kurtis",
    colors: ["Black", "Gold"],
    sizes: ["S", "M", "L", "XL"],
    occasion: ["Party", "Festive"],
    fabric: "Rayon",
    careInstructions: "Machine wash cold. Do not bleach.",
    images: ["/images/products/kurti-1.jpg"],
    featured: false,
    newArrival: false,
    rating: 4.3,
    reviewCount: 134,
    inStock: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function filterProducts(filters: {
  category?: string | null
  minPrice?: number | null
  maxPrice?: number | null
  color?: string | null
  occasion?: string | null
  sortBy?: string | null
}): Product[] {
  let filtered = [...products]

  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category)
  }
  if (filters.minPrice) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice!)
  }
  if (filters.maxPrice) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice!)
  }
  if (filters.color) {
    filtered = filtered.filter((p) =>
      p.colors.some((c) => c.toLowerCase().includes(filters.color!.toLowerCase()))
    )
  }
  if (filters.occasion) {
    filtered = filtered.filter((p) =>
      p.occasion.some((o) => o.toLowerCase() === filters.occasion!.toLowerCase())
    )
  }

  if (filters.sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price)
  } else if (filters.sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price)
  } else if (filters.sortBy === "newest") {
    filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0))
  } else if (filters.sortBy === "popular") {
    filtered.sort((a, b) => b.reviewCount - a.reviewCount)
  }

  return filtered
}

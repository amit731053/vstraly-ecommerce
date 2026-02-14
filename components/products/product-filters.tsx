"use client"

import { useCallback } from "react"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Category, Occasion } from "@/lib/data/types"

const allCategories: Category[] = ["Sarees", "Lehengas", "Kurtis", "Salwar Suits", "Dupattas"]
const allOccasions: Occasion[] = ["Wedding", "Party", "Casual", "Festive", "Office", "Bridal"]
const allColors = [
  "Red", "Blue", "Green", "Pink", "Gold", "White", "Black", "Maroon",
  "Yellow", "Teal", "Ivory", "Coral", "Peach", "Navy", "Burgundy",
]

interface Filters {
  category: string | null
  occasion: string | null
  color: string | null
  priceRange: [number, number]
  sortBy: string | null
}

interface ProductFiltersProps {
  filters: Filters
  onChange: (filters: Filters) => void
}

export function ProductFilters({ filters, onChange }: ProductFiltersProps) {
  const updateFilter = useCallback(
    (key: keyof Filters, value: unknown) => {
      onChange({ ...filters, [key]: value })
    },
    [filters, onChange]
  )

  const clearAll = () => {
    onChange({
      category: null,
      occasion: null,
      color: null,
      priceRange: [0, 60000],
      sortBy: null,
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearAll} className="text-xs h-7">
          Clear all
        </Button>
      </div>

      {/* Sort */}
      <div className="flex flex-col gap-2">
        <Label className="text-xs font-medium text-muted-foreground">Sort By</Label>
        <Select
          value={filters.sortBy || ""}
          onValueChange={(val) => updateFilter("sortBy", val || null)}
        >
          <SelectTrigger className="h-9">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Category */}
      <div className="flex flex-col gap-2">
        <Label className="text-xs font-medium text-muted-foreground">Category</Label>
        <div className="flex flex-col gap-1.5">
          {allCategories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={filters.category === cat}
                onCheckedChange={(checked) =>
                  updateFilter("category", checked ? cat : null)
                }
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-3">
        <Label className="text-xs font-medium text-muted-foreground">
          Price Range
        </Label>
        <Slider
          min={0}
          max={60000}
          step={500}
          value={filters.priceRange}
          onValueChange={(val) => updateFilter("priceRange", val)}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>
            {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(filters.priceRange[0])}
          </span>
          <span>
            {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(filters.priceRange[1])}
          </span>
        </div>
      </div>

      {/* Occasion */}
      <div className="flex flex-col gap-2">
        <Label className="text-xs font-medium text-muted-foreground">Occasion</Label>
        <div className="flex flex-col gap-1.5">
          {allOccasions.map((occ) => (
            <label key={occ} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={filters.occasion === occ}
                onCheckedChange={(checked) =>
                  updateFilter("occasion", checked ? occ : null)
                }
              />
              <span className="text-sm">{occ}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="flex flex-col gap-2">
        <Label className="text-xs font-medium text-muted-foreground">Color</Label>
        <div className="flex flex-wrap gap-1.5">
          {allColors.slice(0, 10).map((color) => (
            <button
              key={color}
              onClick={() =>
                updateFilter("color", filters.color === color ? null : color)
              }
              className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                filters.color === color
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-card-foreground hover:border-primary"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

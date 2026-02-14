"use client"

import { useState } from "react"
import { Search, Sparkles, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SmartSearchProps {
  onResults: (filters: {
    category?: string | null
    color?: string | null
    maxPrice?: number | null
    occasion?: string | null
  }) => void
}

export function SmartSearch({ onResults }: SmartSearchProps) {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    try {
      const res = await fetch("/api/smart-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })
      const data = await res.json()
      onResults(data)
    } catch {
      // Fallback: just do basic text matching
      onResults({})
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={'Try "Blue lehenga under 30000 for wedding"'}
          className="pl-9 pr-4"
        />
      </div>
      <Button type="submit" disabled={loading || !query.trim()} className="gap-2 shrink-0">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">AI Search</span>
      </Button>
    </form>
  )
}

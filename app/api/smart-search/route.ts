import { generateText, Output } from "ai"
import { z } from "zod"

export const maxDuration = 15

const searchFiltersSchema = z.object({
  category: z
    .string()
    .nullable()
    .describe(
      "Product category: Sarees, Lehengas, Kurtis, Salwar Suits, or Dupattas"
    ),
  color: z
    .string()
    .nullable()
    .describe("Color preference like Red, Blue, Green, Pink, Gold, etc."),
  maxPrice: z
    .number()
    .nullable()
    .describe("Maximum price in INR the user is willing to pay"),
  occasion: z
    .string()
    .nullable()
    .describe(
      "Occasion: Wedding, Party, Casual, Festive, Office, or Bridal"
    ),
})

export async function POST(req: Request) {
  const { query } = await req.json()

  const { output } = await generateText({
    model: "openai/gpt-4o-mini",
    output: Output.object({
      schema: searchFiltersSchema,
    }),
    prompt: `Extract shopping filters from this natural language search query for an Indian ethnic wear store.

Query: "${query}"

Categories available: Sarees, Lehengas, Kurtis, Salwar Suits, Dupattas
Occasions available: Wedding, Party, Casual, Festive, Office, Bridal
Common colors: Red, Blue, Green, Pink, Gold, White, Black, Maroon, Yellow, Teal, Ivory, Coral, Peach, Navy, Burgundy

Return null for any filter not mentioned in the query.`,
  })

  return Response.json(output || { category: null, color: null, maxPrice: null, occasion: null })
}

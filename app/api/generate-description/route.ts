import { generateText } from "ai"

export const maxDuration = 15

export async function POST(req: Request) {
  const { name, category, fabric } = await req.json()

  const { text } = await generateText({
    model: "openai/gpt-4o-mini",
    prompt: `Write a premium, SEO-friendly product description for an Indian ethnic wear product.

Product: ${name}
Category: ${category}
Fabric: ${fabric}

Requirements:
- 2-3 sentences
- Highlight craftsmanship and quality
- Mention suitable occasions
- Use elegant, evocative language
- Include relevant keywords for SEO
- Do not use markdown or special formatting`,
    maxOutputTokens: 200,
    temperature: 0.7,
  })

  return Response.json({ description: text })
}

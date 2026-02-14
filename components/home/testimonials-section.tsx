import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The Banarasi saree I ordered was absolutely stunning. The quality and craftsmanship exceeded my expectations. The AI stylist helped me find the perfect piece for my sister's wedding.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    location: "Delhi",
    text: "I love how the smart search understands exactly what I'm looking for. I just typed 'casual kurti for office' and it showed me perfect options. The delivery was prompt too!",
    rating: 5,
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad",
    text: "The lehenga I ordered for my engagement was a dream come true. The attention to detail in the embroidery and the fit was flawless. Highly recommend Rangoli!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-secondary/20 to-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Loved by Thousands
          </h2>
          <p className="mt-2 text-muted-foreground">
            What our customers are saying
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                i === 0 ? "animate-fade-in" :
                i === 1 ? "animate-fade-in-delay-1" : "animate-fade-in-delay-2"
              }`}
            >
              <Quote className="h-6 w-6 text-primary/60" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-card-foreground">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="text-sm font-medium text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

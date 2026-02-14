import { MessageCircle, Search, Sparkles, Palette } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "AI Fashion Stylist",
    description:
      "Chat with our AI stylist for personalized recommendations based on your occasion, preferences, and body type.",
    color: "bg-primary/40",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Search naturally: \"Blue kurti under 2000 for party\" and our AI understands exactly what you need.",
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "AI Descriptions",
    description:
      "Every product description is AI-enhanced to give you the most detailed and accurate information.",
    color: "hsl(270 40% 80% / 0.4)",
  },
  {
    icon: Palette,
    title: "Style Recommendations",
    description:
      "Get personalized outfit combinations and accessory suggestions powered by machine learning.",
    color: "bg-accent/20",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            AI-Powered Shopping
          </h2>
          <p className="mt-2 text-muted-foreground">
            Experience the future of ethnic wear shopping
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                i === 0 ? "animate-fade-in" :
                i === 1 ? "animate-fade-in-delay-1" :
                i === 2 ? "animate-fade-in-delay-2" : "animate-fade-in-delay-3"
              }`}
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                i === 0 ? "bg-primary/40" : i === 1 ? "bg-secondary" : i === 2 ? "bg-[hsl(270_40%_80%_/_0.4)]" : "bg-accent/20"
              }`}>
                <feature.icon className={`h-5 w-5 ${
                  i === 3 ? "text-accent" : "text-foreground"
                }`} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

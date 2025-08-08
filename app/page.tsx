import { Hero } from "@/components/sections/hero"
import { ValueProps } from "@/components/sections/value-props"
import { FeaturesPreview } from "@/components/sections/features-preview"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <section id="overview" aria-labelledby="overview-heading" className="py-16 md:py-24">
        <div className="container">
          <h2
            id="overview-heading"
            className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight"
          >
            What you get with ShieldX
          </h2>
          <FeaturesPreview />
        </div>
      </section>
    </>
  )
}

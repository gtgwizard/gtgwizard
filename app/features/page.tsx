export const metadata = {
  title: "Features",
  description: "Explore ShieldX features for security, moderation, and utility.",
}

import { FeaturesGrid } from "@/components/sections/features-grid"

export default function FeaturesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          ShieldX Features
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          A comprehensive toolkit for community safety, growth, and management.
        </p>
        <FeaturesGrid />
      </div>
    </div>
  )
}

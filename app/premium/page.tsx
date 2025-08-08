export const metadata = {
  title: "Premium",
  description: "Unlock advanced features and priority support with ShieldX Premium.",
}

import { Pricing } from "@/components/sections/pricing"

export default function PremiumPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Premium Plans
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Choose a plan that scales with your community. Cancel anytime.
        </p>
        <Pricing />
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { featureCards } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesPreview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featureCards.slice(0, 6).map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03, duration: 0.4 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader className="flex-row items-center gap-3">
              <f.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <CardTitle className="text-base">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {f.description}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

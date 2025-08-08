"use client"

import { featureCards } from "@/lib/data"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featureCards.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.04, duration: 0.45 }}
          whileHover={{ y: -4 }}
        >
          <Card className="h-full hover:shadow-lg transition-all">
            <CardHeader className="flex-row items-center gap-3">
              <f.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <CardTitle className="text-base">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {f.description}
              {f.example && <div className="mt-3 text-xs text-foreground/80"><span className="font-medium">Example:</span> {f.example}</div>}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

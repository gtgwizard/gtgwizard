"use client"

import { ShieldCheck, Bot, Activity } from 'lucide-react'
import { motion } from "framer-motion"

const items = [
  { icon: ShieldCheck, title: "Advanced Security", desc: "Anti-raid, anti-spam, and real-time threat detection keep your server safe." },
  { icon: Bot, title: "Automation & Utility", desc: "Custom commands, auto-moderation, and logs save you time every day." },
  { icon: Activity, title: "Analytics & Insights", desc: "Track server health, member growth, and incidents with clear dashboards." },
]

export function ValueProps() {
  return (
    <section className="py-12 md:py-16 border-t">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <it.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

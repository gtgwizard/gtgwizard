"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16 pb-16 md:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50 dark:opacity-30" aria-hidden="true" />
      <div className="container relative grid gap-10 md:grid-cols-2 items-center">
        <div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ShieldX — Secure. Smart. Multipurpose Discord Bot.
          </motion.h1>
          <motion.p
            className="mt-4 text-muted-foreground max-w-prose"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Keep your community safe with advanced moderation, anti-raid, and automation tools — all in one sleek, reliable bot.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button asChild size="lg">
              <Link href="/invite">Add to Discord</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/features">Explore Features</Link>
            </Button>
          </motion.div>
          <motion.div
            className="mt-8 grid grid-cols-3 gap-6 text-sm"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              { stat: "99.9%", label: "Uptime" },
              { stat: "500K+", label: "Users Protected" },
              { stat: "190+", label: "Servers" },
            ].map((s) => (
              <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                <div className="text-xl font-semibold">{s.stat}</div>
                <div className="text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="relative aspect-[4/3] w-full rounded-xl border bg-muted/30 overflow-hidden shadow-lg">
            <Image
              src="/discord-bot-dashboard-ui.png"
              alt="ShieldX dashboard preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

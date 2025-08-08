"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function StickyCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="fixed bottom-4 right-4 z-[60]"
      aria-label="Sticky call to action"
    >
      <Button asChild size="lg" className="shadow-lg">
        <Link href="/premium">Get ShieldX Premium</Link>
      </Button>
    </motion.div>
  )
}

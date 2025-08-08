"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const current = theme === "system" ? systemTheme : theme
  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={current === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {current === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

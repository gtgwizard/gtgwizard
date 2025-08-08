"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { Menu, X } from 'lucide-react'
import { usePathname } from "next/navigation"

const nav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/premium", label: "Premium" },
  { href: "/support", label: "Support" },
  { href: "/invite", label: "Invite" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-8 w-8 rounded bg-gradient-to-br from-emerald-500 to-teal-600" aria-hidden="true" />
          <span className="sr-only">ShieldX</span>
          <span className="hidden sm:inline text-lg">ShieldX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm transition-colors hover:text-foreground ${pathname === n.href ? "text-foreground" : "text-muted-foreground"}`}
              prefetch
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href="/invite">Add to Discord</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/premium">Get Premium</Link>
          </Button>
          <ModeToggle />
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-3 flex flex-col gap-2" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-sm text-foreground/90 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asChild className="flex-1" variant="outline" size="sm">
                <Link href="/invite">Add to Discord</Link>
              </Button>
              <Button asChild className="flex-1" size="sm">
                <Link href="/premium">Get Premium</Link>
              </Button>
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

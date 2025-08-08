"use client"

import { useActionState, useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitContact } from "@/lib/actions"
import { Label } from "@/components/ui/label"

type State = { ok: boolean; message: string } | null

export function ContactForm() {
  const [state, action, pending] = useActionState<State, FormData>(submitContact, null)
  const [localMsg, setLocalMsg] = useState<string | null>(null)

  useEffect(() => {
    if (state) setLocalMsg(state.message)
  }, [state])

  return (
    <div className="rounded-lg border p-4">
      <h3 className="font-semibold mb-3">Contact Us</h3>
      <form action={action} className="space-y-3" aria-label="Contact form">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="coredevelopes@gmail.com" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" required placeholder="Subject" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required placeholder="How can we help?" rows={4} />
        </div>
        <Button type="submit" disabled={pending} aria-busy={pending}>
          {pending ? "Sending…" : "Send"}
        </Button>
      </form>
      {localMsg && <p className="mt-3 text-sm text-muted-foreground">{localMsg}</p>}
    </div>
  )
}

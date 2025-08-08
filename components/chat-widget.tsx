"use client"

import { useState } from "react"
import { MessageCircle, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ChatWidget() {
  const [messages, setMessages] = useState([{ role: "system", content: "Hi! How can we help you today?" }])
  const [value, setValue] = useState("")

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <MessageCircle className="h-4 w-4 mr-2" /> Live Chat
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[70vh]">
        <DrawerHeader>
          <DrawerTitle>Live Chat</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4 h-full flex flex-col">
          <ScrollArea className="flex-1 border rounded-md p-3 bg-muted/40">
            <ul className="space-y-2">
              {messages.map((m, i) => (
                <li key={i} className={`${m.role === "user" ? "text-right" : "text-left"}`}>
                  <span className={`inline-block px-3 py-2 rounded-md ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-background border"}`}>
                    {m.content}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollArea>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              if (!value.trim()) return
              setMessages((prev) => [...prev, { role: "user", content: value }, { role: "system", content: "Thanks! Our team will reply shortly." }])
              setValue("")
            }}
          >
            <Input
              placeholder="Type your message…"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              aria-label="Type your message"
            />
            <Button type="submit" aria-label="Send message">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

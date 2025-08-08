export const metadata = {
  title: "Support",
  description: "Find answers, contact us, or chat live for ShieldX support.",
}

import { FAQ } from "@/components/sections/faq"
import { ContactForm } from "@/components/sections/contact-form"
import { ChatWidget } from "@/components/chat-widget"

export default function SupportPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Support Center
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          We’re here to help. Browse FAQs, send a message, or open the live chat.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FAQ />
          </div>
          <aside className="space-y-6">
            <ContactForm />
            <ChatWidget />
          </aside>
        </div>
      </div>
    </div>
  )
}

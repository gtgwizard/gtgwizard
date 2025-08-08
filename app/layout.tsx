import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import "./styles/animations.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://shieldxbot.vercel.app/"),
  title: {
    default: "ShieldX — Secure. Smart. Multipurpose Discord Bot",
    template: "%s • ShieldX",
  },
  description:
    "ShieldX is a multipurpose Discord bot focused on security, moderation, and utility. Smooth, fast, and reliable for your communities.",
  keywords: [
    "ShieldX",
    "Discord bot",
    "moderation",
    "security",
    "utility bot",
    "multipurpose bot",
  ],
  openGraph: {
    title: "ShieldX — Secure. Smart. Multipurpose Discord Bot",
    description:
      "ShieldX is a multipurpose Discord bot focused on security, moderation, and utility.",
    url: "https://shieldxbot.vercel.app/",
    siteName: "ShieldX",
    images: [{ url: "/shieldx-discord-bot-opengraph.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShieldX — Secure. Smart. Multipurpose Discord Bot",
    description:
      "ShieldX is a multipurpose Discord bot focused on security, moderation, and utility.",
    images: ["/shieldx-discord-bot-twitter.png"],
  },
  robots: { index: true, follow: true },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-dvh flex flex-col bg-background text-foreground">
            <Navbar />
            <main role="main" className="flex-1">{children}</main>
            <Footer />
            <StickyCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

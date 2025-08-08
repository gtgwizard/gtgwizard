"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, ExternalLink, Users } from 'lucide-react'

const DISCORD_INVITE =
  "https://discord.com/oauth2/authorize?client_id=1337686858599108608&scope=bot%20applications.commands&permissions=8"
const REFERRAL_LINK = "https://shieldxbot.vercel.app/r/your-code"

export default function InviteClientPage() {
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert("Copied to clipboard")
    } catch {
      alert("Copy failed")
    }
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Invite ShieldX & Earn</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Bring ShieldX to your server in one click. Share your referral link and earn rewards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Invite to Discord
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Add ShieldX to your server with admin permissions for full functionality.
              </p>
              <div className="flex gap-2">
                <Button asChild>
                  <a
                    href={DISCORD_INVITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Invite ShieldX"
                  >
                    Invite ShieldX <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => copy(DISCORD_INVITE)}
                  aria-label="Copy invite link"
                >
                  Copy <Copy className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Referral Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Share your referral link. Earn credits when people upgrade to Premium.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => copy(REFERRAL_LINK)}
                  aria-label="Copy referral link"
                >
                  Copy Referral <Copy className="w-4 h-4 ml-2" />
                </Button>
                <Button asChild>
                  <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer">
                    Open <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

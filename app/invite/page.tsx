import type { Metadata } from "next"
import InviteClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Invite & Referrals",
  description: "Invite ShieldX to your server or share referral links.",
}

export default function InvitePage() {
  return <InviteClientPage />
}

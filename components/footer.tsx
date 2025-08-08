import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-emerald-500 to-teal-600" aria-hidden="true" />
            <span>ShieldX</span>
          </div>
          <p className="text-muted-foreground">
            Secure. Smart. Multipurpose Discord bot for thriving communities.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Product</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/features" className="hover:text-foreground">Features</Link></li>
            <li><Link href="/premium" className="hover:text-foreground">Premium</Link></li>
            <li><Link href="/invite" className="hover:text-foreground">Invite</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="https://dsc.gg/core-dev" target="_blank" rel="noreferrer" className="hover:text-foreground">Community</a></li>
            <li><Link href="/support" className="hover:text-foreground">Support</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Legal</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} ShieldX. All rights reserved.</p>
          <p>Made for Discord communities.</p>
        </div>
      </div>
    </footer>
  )
}

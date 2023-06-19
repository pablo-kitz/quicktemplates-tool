import Link from "next/link";

import { landingConfig } from "@/config/landing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import BackgroundDecoration from "@/components/bg-decoration";

interface LandingLayoutProps {
  children: React.ReactNode
}


export default async function LandingLayout({
  children
}: LandingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav className="justify-end">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "px-4 justify-end"
          )}>
          Login
        </Link>
      </MainNav>
      <main className="flex-1 relative">
        <BackgroundDecoration />
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
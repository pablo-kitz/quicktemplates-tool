import Link from "next/link";

import { landingConfig } from "@/config/landing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import BackgroundDecoration from "@/components/bg-decoration";
import { getCurrentUser } from "@/lib/session";
import { UserAccountNav } from "@/components/user-account-nav";

interface LandingLayoutProps {
  children: React.ReactNode
}

export default async function LandingLayout({
  children
}: LandingLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav isLanding={true}>
        <div className="ml-auto">
          {user ? <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          /> :
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "px-4"
              )}>
              Login
            </Link>
          }
        </div>
      </MainNav>
      <main className="flex-1 relative">
        <BackgroundDecoration />
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
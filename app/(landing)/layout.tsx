import Link from "next/link"

import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui"
import { UserAccountNav } from "@/components/user-account-nav"

interface LandingLayoutProps {
  children: React.ReactNode
}

export default async function LandingLayout({ children }: LandingLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav isLanding={true}>
        <div className="ml-auto">
          {user ? (
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
            />
          ) : (
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          )}
        </div>
      </MainNav>
      <main className="relative flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}

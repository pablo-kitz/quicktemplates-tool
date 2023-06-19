import Link from "next/link"

import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"
import { UserAccountNav } from "@/components/user-account-nav"
import { getCurrentUser } from "@/lib/session"
import { notFound, redirect } from "next/navigation"
import { DocCreate } from "@/components/doc-create"
import { DocItem } from "@/components/doc-item"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import BackgroundDecoration from "@/components/bg-decoration"


interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const documents = await db.document.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
    },
  })

  return (
    <div className="flex min-h-screen flex-col transition duration-700 dark:bg-none relative">
      <MainNav>
        {documents?.length ? (
          <div className="grow overflow-x-auto flex flex-nowrap gap-4 scroll-smooth p-2">
            {documents?.map((item, index) => (
              <DocItem key={index} doc={item} />
            ))}
          </div>
        ) : null}
        <UserAccountNav
          user={{
            name: user.name,
            image: user.image,
            email: user.email,
          }}
        />
      </MainNav>
      <div className="flex-1">
        <BackgroundDecoration />
        {children}
        <DocCreate />
      </div>
      <SiteFooter />
    </div>
  )
}
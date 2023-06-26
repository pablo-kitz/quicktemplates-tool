import Link from "next/link"
import { notFound, redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { DocCreate } from "@/components/doc-create"
import { DocItem } from "@/components/doc-item"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
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
    <div className="relative flex min-h-screen flex-col transition duration-700 dark:bg-none">
      <MainNav>
        {documents?.length ? (
          <div className="flex grow flex-nowrap gap-4 overflow-x-auto scroll-smooth p-2">
            {documents?.map((item, index) => (
              <DocItem key={index} doc={item} />
            ))}
          </div>
        ) : null}
        <div className="ml-auto">
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </MainNav>
      <div className="container flex flex-1 flex-col gap-6">
        {children}
        <DocCreate />
      </div>
      <SiteFooter />
    </div>
  )
}

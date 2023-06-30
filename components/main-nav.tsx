"use client"

import * as React from "react"
import Link from "next/link"
import { WrapText } from "lucide-react"

import { cn } from "@/lib/utils"

interface MainNavProps {
  isLanding?: boolean
  className?: string
  children?: React.ReactNode
}

export function MainNav({
  isLanding = false,
  className,
  children,
}: MainNavProps) {
  return (
    <header>
      <nav
        className={cn(
          "flex h-14 w-full items-center gap-2 px-4 py-2 backdrop-blur-xl",
          className
        )}
      >
        {!isLanding && (
          <Link href="/">
            <WrapText
              className={cn("mx-auto h-10 w-10 rounded-full border p-2")}
            />
          </Link>
        )}
        {children}
      </nav>
    </header>
  )
}

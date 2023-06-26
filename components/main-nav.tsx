"use client"

import * as React from "react"
import Link from "next/link"
import { Document } from "@/types"
import { WrapText } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

// TODO: Dudas de si va a hacer falta, probablemente no
// import { useSelectedLayoutSegment } from "next/navigation"
import { buttonVariants } from "./ui"

// TODO: Ver si es necesario agregar el MobileNav
// import { MobileNav } from "@/components/mobile-nav"

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
          <Link
            href="/"
            // className={cn(buttonVariants({ variant: "outline" }), "grow-0 h-10 w-10")}
          >
            <WrapText
              className={cn("mx-auto h-10 w-10 rounded-full border p-2")}
            />
          </Link>
        )}
        {/* TODO: Interesante lógica de menu mobile con su propio children con los items y su estilo `DocsSidebarNav` */}
        {children}
      </nav>
    </header>
  )
}

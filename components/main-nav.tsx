"use client"

import * as React from "react"
import Link from "next/link"

// TODO: Dudas de si va a hacer falta, probablemente no
// import { useSelectedLayoutSegment } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Document } from "@/types"
import { WrapText } from "lucide-react"
import { buttonVariants } from "./ui"

// TODO: Ver si es necesario agregar el MobileNav
// import { MobileNav } from "@/components/mobile-nav"


interface MainNavProps {
  className?: string
  children?: React.ReactNode
}

export function MainNav({ className, children }: MainNavProps) {
  return (
    <header>
      <nav className={cn("flex gap-2 items-center w-full backdrop-blur-xl py-2 px-4 h-14", className)}>
        <Link
          href="/"
        // className={cn(buttonVariants({ variant: "outline" }), "grow-0 h-10 w-10")}
        >
          <WrapText className={cn("mx-auto h-10 w-10 border rounded-full p-2")} />
        </Link>

        {/* TODO: Interesante lógica de menu mobile con su propio children con los items y su estilo `DocsSidebarNav` */}
        {children}
      </nav>
    </header>
  )
}
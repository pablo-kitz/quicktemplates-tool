import * as React from "react"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { ModeToggle } from "./mode-toggle"
import { buttonVariants } from "./ui"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex h-12 w-full items-center justify-start gap-4 justify-self-end bg-muted-foreground px-4 text-muted md:px-8">
        <Link
          href={siteConfig.links.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "")}
        >
          <Github />
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "")}
        >
          <Linkedin />
        </Link>
        <ModeToggle className="ml-auto" />
      </div>
    </footer>
  )
}

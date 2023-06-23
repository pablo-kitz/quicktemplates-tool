import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "./ui"
import { Github, Linkedin } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
// TODO: Index of Icons

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex h-12 w-full items-center justify-start gap-4 justify-self-end bg-neutral-800 px-4 text-white md:px-8">
        <a
          href={siteConfig.links.githubProfile}
          target="_blank"
          rel="noopener noreferrer">
          <Button size="sm" variant="icon">
            <Github />
          </Button>
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer">
          <Button size="sm" variant="icon">
            <Linkedin />
          </Button>
        </a>
        <ModeToggle className="ml-auto" />
      </div>
    </footer>
  )
}
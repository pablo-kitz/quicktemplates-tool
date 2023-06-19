import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "./ui"
import { Github, Linkedin } from "lucide-react"
// TODO: Index of Icons

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex h-12 w-full items-center justify-start gap-4 justify-self-end bg-neutral-800 px-4 text-white md:px-8">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer">
          <Button size="sm">
            <Github />
          </Button>
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer">
          <Button size="sm">
            <Linkedin />
          </Button>
        </a>
      </div>
    </footer>
  )
}
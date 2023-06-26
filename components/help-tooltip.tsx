import { HTMLAttributes } from "react"
import { HelpCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui"

type HelpTooltipProps = {
  className?: HTMLAttributes<HTMLElement>["className"]
  tooltipText: string
}

export function HelpTooltip({ className, tooltipText }: HelpTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          "text-muted-foreground hover:text-foreground/80",
          className
        )}
      >
        <HelpCircle />
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-sm">{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  )
}

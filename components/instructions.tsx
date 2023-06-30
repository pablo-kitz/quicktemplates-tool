
import { ArrowDownRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui"

export default function Instructions() {
  return (
    <>
      <div className="flex select-none items-center justify-center gap-2">
        To start, try creating a document
        <ArrowDownRight
          aria-disabled
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "text-muted-foreground"
          )}
        />
      </div>
    </>
  )
}

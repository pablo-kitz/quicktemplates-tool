import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui"

export default function NotFound() {
  return (
    <div
      className={cn(
        "flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50"
      )}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <h2 className={cn("mt-6 text-xl font-semibold")}>Not Found</h2>
        <p
          className={cn(
            "mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground"
          )}
        >
          Could not find requested resource
        </p>
        <p
          className={cn(
            "mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground"
          )}
        >
          <Link
            href="/dashboard"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Go To Dashboard
          </Link>
        </p>
      </div>
    </div>
  )
}

"use client"

import Instructions from "@/components/instructions"

export default function DashboardPage() {
  return (
    <div className="flex min-h-fit flex-1 grow flex-col items-center justify-center gap-8 text-center text-muted-foreground">
      <Instructions />
    </div>
  )
}

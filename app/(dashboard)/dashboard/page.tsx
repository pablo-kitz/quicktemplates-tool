"use client"

import Instructions from "@/components/instructions";

export default function DashboardPage() {

  return (
    <div className="min-h-fit flex-1 flex flex-col grow items-center justify-center gap-8 text-center text-muted-foreground">
      <Instructions />
    </div>
  )
}
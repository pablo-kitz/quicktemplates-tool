import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { EmptyPlaceholder } from "@/components/not-found"

export default function NotFound() {
  return (
    <EmptyPlaceholder className="mx-auto max-w-[800px]">
      {/*
      TODO: add when indexing Icons 
      <EmptyPlaceholder.Icon name="warning" />
       */}
      <EmptyPlaceholder.Title>Uh oh! Not Found</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        This document cound not be found. Please try again.
      </EmptyPlaceholder.Description>
      <Link href="/dashboard" className={buttonVariants({ variant: "ghost" })}>
        Go to Dashboard
      </Link>
    </EmptyPlaceholder>
  )
}

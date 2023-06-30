import Link from "next/link"
import { Document } from "@/types"

import { cn } from "@/lib/utils"

// import { Doc } from "@prisma/client"
import { buttonVariants, Toggle } from "./ui"
import { Skeleton } from "./ui/skeleton"

interface DocItemProps {
  doc: Pick<Document, "id" | "title">
}

export function DocItem({ doc }: DocItemProps) {
  return (
    <>
      <Link
        href={`/${doc.id}`}
        className={cn("font-semibold", buttonVariants())}
      >
        {doc.title}
      </Link>
    </>
  )
}

DocItem.Skeleton = function DocItemSkeleton() {
  return (
    <>
      <Skeleton className={cn("w-6", buttonVariants())} />
    </>
  )
}

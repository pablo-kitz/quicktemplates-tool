import Link from 'next/link'
// import { Doc } from "@prisma/client"

import { Skeleton } from './ui/skeleton'
import { Document } from '@/types'
import { Toggle, buttonVariants } from './ui'
import { cn } from '@/lib/utils'

interface DocItemProps {
  doc: Pick<Document, "id" | "title">
}

export function DocItem({ doc }: DocItemProps) {
  return (
    <>
      <Link
        href={`/${doc.id}`}
        className={cn('font-semibold hover:underline', buttonVariants())}>
        {doc.title}
      </Link>
    </>
  )
}

DocItem.Skeleton = function DocItemSkeleton() {
  return (
    <>
      <Skeleton className={cn('w-6', buttonVariants())} />
    </>
  )
}
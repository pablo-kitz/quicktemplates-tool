import { Skeleton } from "@/components/ui/skeleton"

export default async function DashboardLoading() {
  return (
    <div className="flex min-h-fit flex-1 grow flex-col items-center justify-center gap-8 text-center text-muted-foreground">
      <Skeleton className="h-[200px] w-full max-w-[720px]" />
    </div>
  )
}

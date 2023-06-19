import { Skeleton } from "@/components/ui/skeleton"


export default async function DashboardLoading() {
  return (
    <div className="min-h-fit flex-1 flex flex-col grow items-center justify-center gap-8 text-center text-muted-foreground">
      <Skeleton className="w-full max-w-[720px] h-[200px]" />
    </div>
  )
}
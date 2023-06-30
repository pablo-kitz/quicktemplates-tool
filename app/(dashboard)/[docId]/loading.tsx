import { Skeleton } from "@/components/ui/skeleton"

export default async function DashboardLoading() {
  return (
    <>
      <div className="m-4 mx-auto flex h-full w-full flex-grow flex-col gap-6 rounded p-4 backdrop-blur-lg xl:w-10/12 sm:flex-grow-0">
        <Skeleton className="h-24 mt-6" />
      </div>
    </>
  )
}

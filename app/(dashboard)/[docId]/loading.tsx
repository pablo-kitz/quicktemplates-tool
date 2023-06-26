import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <div className="container m-4 mx-auto flex h-full flex-grow flex-col gap-6 rounded bg-accent-foreground/50 p-4 backdrop-blur-lg sm:w-10/12 sm:flex-grow-0">
        <div className=" flex items-center justify-between text-2xl sm:mx-16">
          <div className="font-bold text-gray-800 dark:text-white">
            <Skeleton />
          </div>
          <Skeleton />
        </div>
        <div className="flex justify-between gap-2 gap-x-6 sm:flex-row">
          <Skeleton />
          <div className="flex flex-col justify-center gap-2">
            <Skeleton />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center py-2">
          <Skeleton />
        </div>
      </div>
    </>
  )
}

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <div className="container m-4 p-4 h-full mx-auto rounded backdrop-blur-lg bg-accent-foreground/50 flex flex-grow flex-col gap-6 sm:w-10/12 sm:flex-grow-0">
        <div className=" flex items-center justify-between text-2xl sm:mx-16">
          <div className="text-gray-800 font-bold dark:text-white"><Skeleton /></div>
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
        {/* Output */}
        {/* {currentOutput && (
        <div>
          <div className="flex justify-end py-2">
            <Button
              variant="ghost"
              size="square"
              rounded="round">
              <ClipboardType />
            </Button>
          </div>
        </div>
      )} */}
      </div>
    </>
  )
}

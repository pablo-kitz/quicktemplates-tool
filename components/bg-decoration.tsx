import { cn } from "@/lib/utils"

export default function BackgroundDecoration({
  className,
}: {
  className?: string
}) {
  return (
    <div className=" h-full w-full z-[-1]">
      {/* <div
        className={cn(
          "-z-10 absolute animate-blob top-0 left-[32%] w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl",
          className
        )}
      ></div>
      <div
        className={cn(
          "-z-10 absolute animate-blob animation-delay-2000 top-20 left-2/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl",
          className
        )}
      ></div>
      <div
        className={cn(
          "-z-10 absolute animate-blob animation-delay-4000 top-[10%] left-[40%] w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl",
          className
        )}
      ></div> */}
    </div>
  )
}

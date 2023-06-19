import { cn } from "@/lib/utils";
import { useSpring, animated } from "@react-spring/web";


export default function BackgroundDecoration({ className }: { className?: string }) {
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 }
  // })

  return (
    <div>
      <div className={cn("-z-10 absolute animate-blob top-0 left-[32%] w-80 h-80 bg-orange-400/90 rounded-full mix-blend-multiply filter blur-2xl", className)}></div>
      <div className={cn("-z-10 absolute animate-blob animation-delay-2000 top-20 left-2/4 w-80 h-80 bg-green-500/90 rounded-full mix-blend-multiply filter blur-2xl", className)}></div>
      <div className={cn("-z-10 absolute animate-blob animation-delay-4000 top-[10%] left-[40%] w-80 h-80 bg-pink-500/90 rounded-full mix-blend-multiply filter blur-2xl", className)}></div>
    </div>
  )
}
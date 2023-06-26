"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface LandingAnimationProps {
  strings: string[]
}

export default function LandingAnimation({ strings }: LandingAnimationProps) {
  const [currentString, setCurrentString] = useState(0)

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setCurrentString((prevString) => (prevString + 1) % strings.length)
    }, 2000) // Adjust the timeout duration to match your animation duration

    return () => clearTimeout(animationTimeout)
  }, [currentString, strings])

  return (
    <>
      <h1
        className={cn(
          "font-heading text-3xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl"
        )}
      >
        {strings[currentString]}
      </h1>
    </>
  )
}

"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface LandingAnimationProps {
  strings: string[]
}

export default function LandingAnimation({ strings }: LandingAnimationProps) {
  const [currentString, setCurrentString] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentString((prevString) => (prevString + 1) % strings.length)
        setVisible(true)
      }, 500) // Adjust the duration of fade-out and fade-in transitions
    }, 2000) // Adjust the timeout duration to match your animation duration

    return () => clearTimeout(animationTimeout)
  }, [currentString, strings])

  return (
    <h1
      className={cn(
        "font-heading text-3xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl transition duration-500",
        { "opacity-100": visible, "opacity-0": !visible }
      )}
    >
      {strings[currentString]}
    </h1>
  )
}

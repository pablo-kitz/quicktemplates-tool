"use client"

import { HTMLAttributes, useState } from "react"
import { Check, ClipboardType } from "lucide-react"

import { toast } from "@/hooks/use-toast"

import { Button } from "./ui"

type ToClipboardProps = {
  output: string
  className?: HTMLAttributes<HTMLElement>["className"]
}

export function ToClipboard({ output, className }: ToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      toast({
        title: "Something went wrong.",
        description: "We couldn't copy your Document. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={handleClipboard}
        className={className}
      >
        {isCopied ? <Check className="animate-pulse" /> : <ClipboardType />}
      </Button>
    </>
  )
}

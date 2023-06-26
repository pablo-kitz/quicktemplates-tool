"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { LucideLoader, PlusCircleIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { useTextSelection } from "@/hooks/use-text-selection"
import { toast } from "@/hooks/use-toast"

import { PlaceholderAdder } from "./placeholder-adder"
import {
  Button,
  buttonVariants,
  Input,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui"

type FormValues = {
  title: string
  text: string
  placeholders: {
    name: string
  }[]
}

type PlaceholdersType = FormValues["placeholders"]

export function DocCreate() {
  const [slideover, setSlideover] = useState<boolean>(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>()
  const [placeholders, setPlaceholders] = useState<PlaceholdersType>([])
  const [isLoading, setIsLoading] = useState(false)

  const { ref, ...rest } = register("text", { required: true })
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const { textContent } = useTextSelection(
    textareaRef.current ? textareaRef.current : undefined
  )

  const addPlaceholder = () => {
    if (textContent && textareaRef.current) {
      const trimmedText = textContent.trim()
      setPlaceholders((prevPlaceholders) => [
        ...prevPlaceholders,
        { name: trimmedText },
      ])
      textareaRef.current.value = textareaRef.current?.value.replace(
        trimmedText,
        `{${trimmedText}}`
      )
      textareaRef.current.focus()
    } else {
      throw new Error("text or ref not present")
    }
  }

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)

    const response = await fetch("/api/docs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        text: data.text,
        placeholders: placeholders,
      }),
    })

    setIsLoading(false)

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your post was not created. Please try again.",
        variant: "destructive",
      })
    }
    setSlideover(false)
    router.push("/dashboard")
  }

  return (
    <>
      <Sheet open={slideover} onOpenChange={setSlideover}>
        <SheetTrigger>
          <Button
            className="absolute bottom-16 right-6 bg-secondary-foreground"
            size="icon"
          >
            <PlusCircleIcon className="h-full w-full p-2 text-secondary" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col w-full sm:w-2/3 xl:w-1/2">
          <SheetHeader>
            <SheetTitle>New Document</SheetTitle>
            <SheetDescription>Create a new document</SheetDescription>
          </SheetHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("flex grow flex-col justify-between gap-2")}
          >
            <Input
              id="title"
              placeholder="Document Title"
              {...register("title", { required: true })}
            />
            {errors?.title && (
              <span className="text-xs text-destructive">
                This field is required
              </span>
            )}
            <textarea
              placeholder="Document Text"
              className={cn(
                "flex h-20 w-full flex-1 resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              )}
              {...rest}
              ref={(e) => {
                ref(e)
                textareaRef.current = e
              }}
            />
            {errors?.text && (
              <span className="text-xs text-destructive">
                This field is required
              </span>
            )}
            {placeholders.length > 0 && (
              <>
                <div className="flex gap-2 items-center">
                  <div className="text-sm text-muted-foreground">
                    Placeholders:
                  </div>
                  {placeholders.map((p, i) => (
                    <button
                      disabled
                      className={cn(
                        buttonVariants({ variant: "outline", size: "xs" }),
                        "rounded-full text-xs px-2 "
                      )}
                      key={i}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </>
            )}
            <PlaceholderAdder
              textContent={textContent}
              submitPlaceholder={addPlaceholder}
            />
            <div className="flex items-end justify-center py-2">
              {isLoading ? (
                <Button variant="ghost" disabled>
                  <LucideLoader className="animate-spin" />
                </Button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className={cn(
                    buttonVariants({
                      variant: isValid ? "default" : "outline",
                    }),
                    !isValid && "text-muted-foreground"
                  )}
                >
                  Save Document
                </button>
              )}
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </>
  )
}

import { X } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  buttonVariants,
} from "./ui"
import { Badge } from "./ui/badge"

type PlaceholderBadgeProps = {
  p: { name: string }
  repeatPlaceholder: (p: { name: string }) => void
  deletePlaceholder: (p: { name: string }) => void
}

export function PlaceholderBadge({
  p,
  repeatPlaceholder,
  deletePlaceholder,
}: PlaceholderBadgeProps) {
  return (
    <Badge variant="outline" className={cn("rounded-full text-xs")}>
      <Button
        variant="ghost"
        className="rounded-full h-5 px-2"
        onClick={() => repeatPlaceholder(p)}
      >
        {p.name}
      </Button>
      <AlertDialog>
        <AlertDialogTrigger
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "rounded-full p-0.5 h-5 w-5 text-foreground bg-background hover:bg-background hover:text-destructive"
          )}
        >
          <X />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Placeholder</AlertDialogTitle>
            <AlertDialogDescription>
              This action will delete this placeholder and all of it's
              instances.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deletePlaceholder(p)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Badge>
  )
}

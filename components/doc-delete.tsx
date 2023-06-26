"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Document } from "@prisma/client"
import { Loader, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

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

async function deleteDocument(postId: string) {
  const response = await fetch(`/api/docs/${postId}`, {
    method: "DELETE",
  })

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      description: "Your post was not deleted. Please try again.",
      variant: "destructive",
    })
    return false
  }

  return true
}

interface DocDeleteProps {
  document: Pick<Document, "id" | "title">
}

export function DocDelete({ document }: DocDeleteProps) {
  const router = useRouter()
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false)
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false)

  return (
    <>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogTrigger asChild>
          <Button
            onClick={() => setShowDeleteAlert(true)}
            variant="destructive"
            size="iconsm"
          >
            <Trash2 className="h-full w-full p-2" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Document</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this document? It will be
              permanently removed. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async (event) => {
                event.preventDefault()
                setIsDeleteLoading(true)

                const deleted = await deleteDocument(document.id)

                if (deleted) {
                  setIsDeleteLoading(false)
                  setShowDeleteAlert(false)
                  router.push("/dashboard")
                } else {
                  setIsDeleteLoading(false)
                }
              }}
              className={cn(buttonVariants({ variant: "destructive" }))}
            >
              {isDeleteLoading ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="mr-2 h-4 w-4" />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

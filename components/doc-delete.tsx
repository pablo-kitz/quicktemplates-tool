"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button, buttonVariants } from "./ui";
import { Loader, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Document } from "@prisma/client";
import { cn } from "@/lib/utils";

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
            className={cn("h-4 w-4", isDeleteLoading && "animate-spin", buttonVariants({ variant: "destructive", size: "squaresm", rounded: "round" }))}
            onClick={() => setShowDeleteAlert(true)}
          >
            <Trash2 />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Document</AlertDialogTitle>
            <AlertDialogDescription>Are you sure you want to delete this document? It will be permanently removed. This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async (event) => {
                event.preventDefault()
                setIsDeleteLoading(true)

                console.log(document.id)
                const deleted = await deleteDocument(document.id)

                if (deleted) {
                  setIsDeleteLoading(false)
                  setShowDeleteAlert(false)
                  router.push("/dashboard")
                }
              }}
              className="bg-red-600 focus:ring-red-600"
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
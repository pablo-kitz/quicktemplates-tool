"use client"

import { PlusCircleIcon } from "lucide-react";
import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui";
import { useState } from "react";
import { DocForm } from "./doc-form";

export function DocCreate() {
  // TODO: Hoistear este estado?
  const [slideover, setSlideover] = useState<boolean>(false)

  return (
    <>
      <Sheet
        open={slideover}
        onOpenChange={setSlideover}
      >
        <SheetTrigger>
          <Button
            className=" absolute bottom-16 right-6"
            size="square"
            rounded="round">
            <PlusCircleIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle>New Document</SheetTitle>
            <SheetDescription>Create a new document</SheetDescription>
          </SheetHeader>
          <DocForm />
        </SheetContent>
      </Sheet>
    </>
  )
}
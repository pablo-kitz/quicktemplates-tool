import { PlusCircleIcon } from "lucide-react"

import { Button } from "./ui"

export default function Instructions() {
  return (
    <>
      <div className="flex select-none items-center justify-center gap-2">
        To start, try creating a document
        <Button aria-hidden variant="secondary" size="icon" disabled={true}>
          <PlusCircleIcon />
        </Button>
      </div>
    </>
  )
}

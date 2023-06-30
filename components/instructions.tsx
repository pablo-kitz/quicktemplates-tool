import { PlusCircleIcon } from "lucide-react"

import { Button } from "./ui"

export default function Instructions() {
  return (
    // TODO: Tool explanation should be on landing page
    <>
      <div className="select-none">
        This tool is made to simplify commonly used text templates
      </div>
      <div className="flex select-none items-center justify-center gap-2">
        To start, try creating a document
        <Button aria-hidden variant="secondary" size="icon" disabled={true}>
          <PlusCircleIcon />
        </Button>
      </div>
    </>
  )
}

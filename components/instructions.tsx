import { PlusCircleIcon } from "lucide-react"

import { Button } from "./ui"

export default function Instructions() {
  return (
    // TODO: Arreglar para que ocupe toda la altura, algo esta fallando
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
      {/* TODO: Solo mostrar lo siguiente si no hay docs */}
      <div className="flex select-none items-center justify-center gap-2">
        Or selecting one from your personal library
      </div>
    </>
  )
}

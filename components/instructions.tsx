import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui";
import { Toggle } from "@radix-ui/react-toggle";

export default function Instructions() {
  return (
    // TODO: Arreglar para que ocupe toda la altura, algo esta fallando
    <>
      <div>This tool is made to simplify commonly used text templates</div>
      <div className="flex items-center justify-center gap-2">
        To start, try creating a document
        <Button
          aria-hidden
          size="square"
          rounded="round"
          disabled={true}>
          <PlusCircleIcon />
        </Button>
      </div>
      {/* TODO: Solo mostrar lo siguiente si no hay docs */}
      <div className="flex items-center justify-center gap-2">
        Or selecting one from your personal library
      </div>
    </>
  )
}
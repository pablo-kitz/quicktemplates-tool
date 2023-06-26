import { TooltipTrigger } from "@radix-ui/react-tooltip"
import { HelpCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants, Tooltip, TooltipContent } from "./ui"

type PlaceholderAdderProps = {
  textContent: string | undefined
  submitPlaceholder: () => void
}

export function PlaceholderAdder({
  textContent,
  submitPlaceholder,
}: PlaceholderAdderProps) {
  return (
    <div className="flex w-full items-center rounded-full bg-muted p-2">
      <div className="px-4">
        {textContent ? (
          <div>{textContent}</div>
        ) : (
          <div className="flex justify-between items-center text-muted-foreground/80">
            Select text to transform to placeholder
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="ml-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">
                  Placeholders are used for replacing parts of the document that
                  may vary for every use
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}
      </div>
      {textContent ? (
        <button
          type="button"
          onClick={submitPlaceholder}
          className={cn(buttonVariants(), "ml-auto rounded-full")}
        >
          Add
        </button>
      ) : (
        <button
          disabled
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "ml-auto rounded-full"
          )}
        ></button>
      )}
      {/* TODO: Placeholder Types
       <div className="text-muted-foreground">
        <i className="text-xs">this feature is coming soon</i>
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="string" id="r1" disabled />
            <Label htmlFor="r1">String</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="boolean" id="r2" disabled />
            <Label htmlFor="r2">Boolean</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="choice" id="r3" disabled />
            <Label htmlFor="r3">Choice</Label>
          </div>
        </RadioGroup>
      </div> */}
    </div>
  )
}

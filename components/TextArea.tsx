"use client"

import { Popover } from "./Popover"
import { Textarea } from "./ui"
import { useTextSelection } from "@/hooks/use-text-selection"

type TextAreaProps = {
  value: string
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ value, handleChange }: TextAreaProps) => {

  return (
    <>
      <Textarea
        className="dark:bg-gray-700 h-full w-full resize-none rounded-md border-neutral-300 p-2 ring-neutral-300 focus:ring-blue-500 dark:text-white dark:drop-shadow-lg"
        id="text"
        placeholder="Document Text"
        value={value}
        onChange={handleChange}
      />
    </>
  )
}
export default TextArea
"use client"

import { useState } from "react"
import { Document, Placeholder } from "@prisma/client"
import { useForm } from "react-hook-form"

import { HelpTooltip } from "./help-tooltip"
import { ToClipboard } from "./to-clipboard"
import { Button, Input } from "./ui"

type DocumentGenerateFormProps = {
  document: Document
  placeholders: Placeholder[] | null
}

export default function DocumentGenerateForm({
  document,
  placeholders,
}: DocumentGenerateFormProps) {
  const [output, setOutput] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function generateDocument(data: any) {
    let output = document.text
    for (const key in data) {
      if (data[key] == undefined || data[key] == "") {
        throw new Error("undefined value")
      }
      output = output.replace(`{${key}}`, data[key])
    }
    setOutput(output)
  }

  return (
    <form
      onSubmit={handleSubmit(generateDocument)}
      className="flex h-full flex-1 flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-start gap-y-4 gap-x-2"
    >
      <div className="w-full sm:w-3/5 whitespace-pre-line rounded-xl bg-muted border text-muted-foreground p-4 text-lg shadow sm:text-base lg:text-lg">
        {document.text}
      </div>
      <div className="flex flex-col sm:w-2/6 justify-center gap-2 relative">
        <HelpTooltip
          tooltipText="Complete the placeholders to create variations"
          className="absolute -top-8 top right-2"
        />
        {placeholders &&
          placeholders.map((placeholder, index) => {
            return (
              <>
                <Input
                  key={placeholders.indexOf(placeholder)}
                  id={placeholder.id}
                  placeholder={placeholder.name}
                  {...register(placeholder.name, { required: true })}
                  type="text"
                />
                {errors[placeholder.name] && (
                  <span className="text-xs text-destructive">
                    This field is required
                  </span>
                )}
              </>
            )
          })}
      </div>
      <div className="flex justify-center sm:w-full">
        <Button type="submit" variant="outline" size="lg">
          Generate
        </Button>
      </div>
      <>
        {output && (
          <div className="relative w-full mx-auto flex h-full flex-1 flex-col gap-6 rounded">
            <div className="w-full whitespace-pre-line bg-muted rounded-xl border p-4 text-base shadow sm:text-sm">
              {output}
            </div>
            <ToClipboard output={output} className="absolute right-2 top-2" />
          </div>
        )}
      </>
    </form>
  )
}

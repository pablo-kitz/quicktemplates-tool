"use client"

import { Document, Placeholder } from "@prisma/client"
import { DocDelete } from "./doc-delete"
import { useForm } from "react-hook-form"
import { Button, Input } from "./ui"
import { ClipboardType } from "lucide-react"
import { useState } from "react"

type DocumentGenerateFormProps = {
  document: Document
  placeholders: Placeholder[] | null
}

export default function DocumentGenerateForm({ document, placeholders }: DocumentGenerateFormProps) {
  const [output, setOutput] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm()

  function generateDocument(data: any) {
    let output = document.text
    for (const key in data) {
      if (data[key] == undefined || data[key] == "") {
        throw new Error("undefined value");
      }
      output = output.replace(`{${key}}`, data[key])
    }
    setOutput(output)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(generateDocument)}>
        <div className=" m-4 p-4 h-full mx-auto rounded backdrop-blur-lg flex flex-grow flex-col gap-6 sm:w-10/12 sm:flex-grow-0">
          <div className=" flex items-center justify-between text-2xl sm:mx-16">
            <div className="text-gray-800 font-bold dark:text-white">{document.title}</div>
            <DocDelete document={{ id: document.id, title: document.title }} />
          </div>
          <div className="flex justify-between gap-2 gap-x-6 sm:flex-row">
            <div className="w-full">
              <div className="w-full whitespace-pre-line rounded-xl border border-neutral-300 bg-neutral-100 p-4 text-sm shadow dark:border-blue-500 dark:bg-neutral-700 dark:text-white dark:drop-shadow-lg sm:text-base">
                {document.text}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              {placeholders && placeholders.map((placeholder, index) => {
                return (
                  <>
                    <Input
                      key={placeholders.indexOf(placeholder)}
                      id={placeholder.id}
                      placeholder={placeholder.name}
                      {...register(placeholder.name, { required: true })}
                      type="text"
                    />
                    {errors[placeholder.name] && <span className="text-red-500 text-xs">This field is required</span>}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-2">
          <Button
            type="submit"
            variant="outline">
            Generate
          </Button>
        </div>
      </form>
      <div className="m-4 p-4 h-full mx-auto rounded backdrop-blur-lg flex flex-1 flex-col gap-6 sm:w-10/12 sm:flex-grow-0">
        {output &&
          <>
            <div className="w-full whitespace-pre-line rounded-xl border border-neutral-300 bg-neutral-100 p-4 text-sm shadow dark:border-blue-500 dark:bg-neutral-700 dark:text-white dark:drop-shadow-lg sm:text-base">
              {output}
            </div>
            <div className="flex justify-end py-2">
              <Button
                variant="ghost"
                size="square"
                rounded="round">
                <ClipboardType />
              </Button>
            </div>
          </>
        }
      </div>
    </>
  )
}
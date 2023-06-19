"use client"
// TODO: Mover a [docId] cuando este la logica de GET

import { DocDelete } from "@/components/doc-delete";
import { Button, Input } from "@/components/ui";
import { Document } from "@/types";
import { ClipboardType } from "lucide-react";

export function Document({ ...docs }: Document) {
  // TODO: Emprolijar con componentes
  return (
    <div className="flex flex-grow sm: justify-center">
      <div className="flex items-center justify-between text-2xl sm:mx-16">
        <h1 className="text-gray-800 font-bold dark:text-white">{docs.title}</h1>
        {/*Doc Delete*/}
        <DocDelete />
      </div>
      {/* TODO: Transfor into form */}
      <div className="flex flex-col gap-2 gap-x-6 sm:flex-row">
        {/* Doc Title */}
        <div className="w-full whitespace-pre-line rounded-xl border border-neutral-300 bg-neutral-100 p-4 text-sm shadow dark:border-blue-500 dark:bg-neutral-700 dark:text-white dark:drop-shadow-lg sm:text-base">{docs.text}</div>
        {/* Placeholders */}
        <div className="flex flex-col justify-center gap-2">
          {docs.placeholders.map((item) => (
            <Input
              key={docs.placeholders.indexOf(item)}
              id={item}
              name={item}
              placeholder={item}
              // onChange={updateReplacementValue}
              type="text"
            />
          ))}
        </div>
        {/* Generar */}
        <div className="flex justify-center py-2">
          <Button
            // onClick={handleGenerateDoc}
            variant="outline">
            Generate
          </Button>
        </div>
        {/* Output */}
        {/* TODO: Add conditional rendering & mutated text */}
        <div>
          <div className="w-full whitespace-pre-line rounded-xl border border-neutral-300 bg-neutral-100 p-4 text-sm shadow dark:border-blue-500 dark:bg-neutral-700 dark:text-white dark:drop-shadow-lg sm:text-base">{docs.text}</div>
          <div className="flex justify-end py-2">
            <Button
              variant="ghost"
              size="square"
              rounded="round">
              <ClipboardType />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
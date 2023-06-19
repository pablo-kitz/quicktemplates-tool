// TODO: definir implementacion gradual
import { notFound, redirect } from "next/navigation"
import { Document, User } from "@prisma/client"

import { db } from "@/lib/db";

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { Button, Input } from "@/components/ui";
import { DocDelete } from "@/components/doc-delete"
import { ClipboardType } from "lucide-react";
// import { Editor } from "@/components/editor"

async function getDocForUser(docId: Document["id"], userId: User["id"]) {
  return await db.document.findFirst({
    where: {
      id: docId,
      authorId: userId,
    },
  })
}

async function getDocPlaceholders(docId: Document["id"]) {
  return await db.document.findFirst({
    where: {
      id: docId,
    },
    select: {
      placeholders: true,
    },
  })
}

interface DocumentPageProps {
  params: { docId: string }
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const document = await getDocForUser(params.docId, user.id)
  const placeholders = await getDocPlaceholders(params.docId)


  if (!document) {
    notFound()
  }

  // TODO: fix double placeholders & create form
  // const generateDocument = () => {
  //   let generatedDoc = document.text;
  //   if (placeholders) {
  //     placeholders.placeholders.forEach((placeholder) => {
  //       let replaceValue = replacementValues.get(placeholder);
  //       if (replaceValue == undefined) {
  //         throw new Error("undefined placeholder");
  //       }
  //       generatedDoc = generatedDoc.replace(`{${placeholder.name}}`, replaceValue);
  //     });
  //   }
  // }

  return (
    <>
      <form className="container m-4 p-4 h-full mx-auto rounded backdrop-blur-lg flex flex-grow flex-col gap-6 sm:w-10/12 sm:flex-grow-0">
        <div className=" flex items-center justify-between text-2xl sm:mx-16">
          <div className="text-gray-800 font-bold dark:text-white">{document.title}</div>
          <DocDelete />
        </div>
        <div className="flex justify-between gap-2 gap-x-6 sm:flex-row">
          <div className="flex-1 w-full whitespace-pre-line rounded-xl border border-neutral-300 bg-neutral-100 p-4 text-sm shadow dark:border-blue-500 dark:bg-neutral-700 dark:text-white dark:drop-shadow-lg sm:text-base">
            {document.text}
          </div>
          <div className="flex flex-col justify-center gap-2">
            {placeholders && placeholders.placeholders.map((placeholder) => {
              return (
                <Input
                  key={placeholders.placeholders.indexOf(placeholder)}
                  id={placeholder.id}
                  name={placeholder.name}
                  placeholder={placeholder.name}
                  // onChange={updateReplacementValue}
                  type="text"
                />
              );
            })}
          </div>
        </div>
      </form>
      <div className="flex justify-center py-2">
        <Button
          // onClick={generateDocument}
          variant="outline">
          Generate
        </Button>
      </div>
      {/* Output */}
      {/* {currentOutput && (
          */}
      <div className="container m-4 p-4 h-full mx-auto rounded backdrop-blur-lg flex flex-grow flex-col gap-6 sm:w-10/12 sm:flex-grow-0">
        <div className="w-full whitespace-pre-line rounded-xl border border-neutral-300 bg-neutral-100 p-4 text-sm shadow dark:border-blue-500 dark:bg-neutral-700 dark:text-white dark:drop-shadow-lg sm:text-base">
          Just a simple date and weather template
        </div>
        <div className="flex justify-end py-2">
          <Button
            variant="ghost"
            size="square"
            rounded="round">
            <ClipboardType />
          </Button>
        </div>
      </div>
      {/* )}  */}
    </>
  )
}
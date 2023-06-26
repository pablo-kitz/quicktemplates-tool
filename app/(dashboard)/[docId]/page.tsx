// TODO: definir implementacion gradual
import { notFound, redirect } from "next/navigation"
import { Document, User } from "@prisma/client"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { DocDelete } from "@/components/doc-delete"
import DocumentGenerateForm from "@/components/doc-generate-form"

async function getDocForUser(docId: Document["id"], userId: User["id"]) {
  return await db.document.findFirst({
    where: {
      id: docId,
      authorId: userId,
    },
  })
}

async function getDocPlaceholders(docId: Document["id"]) {
  const result = await db.document.findFirst({
    where: {
      id: docId,
    },
    select: {
      placeholders: true,
    },
  })
  if (result) {
    return result.placeholders
  } else {
    return null
  }
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

  if (!document) {
    notFound()
  }

  const placeholders = await getDocPlaceholders(params.docId)

  return (
    <>
      <div className="m-4 mx-auto flex h-full w-full flex-grow flex-col gap-6 rounded p-4 backdrop-blur-lg xl:w-10/12 sm:flex-grow-0">
        <div className="flex items-center gap-4 text-2xl sm:mx-16">
          <h2 className="font-bold text-3xl text-primary">{document.title}</h2>
          <DocDelete document={{ id: document.id, title: document.title }} />
        </div>
        <DocumentGenerateForm document={document} placeholders={placeholders} />
      </div>
    </>
  )
}

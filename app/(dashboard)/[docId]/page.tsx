
// TODO: definir implementacion gradual
import { notFound, redirect } from "next/navigation"
import { Document, User } from "@prisma/client"

import { db } from "@/lib/db";

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import DocumentGenerateForm from "@/components/doc-generate-form";

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
    return result.placeholders;
  } else {
    return null;
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
      <DocumentGenerateForm document={document} placeholders={placeholders} />
    </>
  )
}
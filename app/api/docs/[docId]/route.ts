import { getServerSession } from "next-auth"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

const routeContextSchema = z.object({
  params: z.object({
    docId: z.string(),
  }),
})

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    // Check if the user has access to this document.
    if (!(await verifyCurrentUserHasAccessToDocument(params.docId))) {
      return new Response(null, { status: 403 })
    }

    // Delete the post.
    await db.document.delete({
      where: {
        id: params.docId as string,
      },
    })

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

async function verifyCurrentUserHasAccessToDocument(docId: string) {
  const session = await getServerSession(authOptions)
  const count = await db.document.count({
    where: {
      id: docId,
      authorId: session?.user.id,
    },
  })

  console.log(count)
  return count > 0
}

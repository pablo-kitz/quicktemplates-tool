import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

const documentCreateSchema = z.object({
  title: z.string(),
  text: z.string(),
  placeholders: z.array(z.object({ name: z.string() })).optional(),
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session
    const documents = await db.document.findMany({
      where: {
        authorId: user.id,
      },
    })
    return new Response(JSON.stringify(documents))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session

    // TODO: Implementar limite de posts con esta logica
    // const subscriptionPlan = await getUserSubscriptionPlan(user.id)

    // // If user is on a free plan.
    // // Check if user has reached limit of 3 posts.
    // if (!subscriptionPlan?.isPro) {
    //   const count = await db.post.count({
    //     where: {
    //       authorId: user.id,
    //     },
    //   })

    //   if (count >= 3) {
    //     throw new RequiresProPlanError()
    //   }
    // }

    const json = await req.json()
    const body = documentCreateSchema.parse(json)

    const post = await db.document.create({
      data: {
        title: body.title,
        text: body.text,
        authorId: user.id,
        placeholders: {
          create: body.placeholders?.map((p) => ({
            name: p.name,
            type: "Input",
          })),
        },
      },
    })

    return new Response(JSON.stringify(post))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    // if (error instanceof RequiresProPlanError) {
    //   return new Response("Requires Pro Plan", { status: 402 })
    // }

    return new Response(null, { status: 500 })
  }
}

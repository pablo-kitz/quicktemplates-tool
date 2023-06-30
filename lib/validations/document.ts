import * as z from "zod"

export const documentSchema = z.object({
  title: z.string(),
  text: z.string(),
})

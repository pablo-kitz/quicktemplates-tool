import { z } from "zod"

export const UserSchema = z.object({
  name: z.string(),
  image: z.string().optional(),
  email: z.string().optional(),
})

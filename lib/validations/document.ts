import * as z from "zod";

export const documentSchema = z.object({
	// id: z.string(),
	title: z.string(),
	text: z.string(),
	// placeholders: z.array(z.string()),
	placeholderName: z.string().trim(),
});

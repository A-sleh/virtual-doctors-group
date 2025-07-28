import { z } from 'zod';

export const articleSchema = z.object({
  title: z.string().min(1, 'Enter the article title'),
  description: z.string().min(1, 'Enter the article description'),
  image: z.optional(z.string()),
});

export type articleInput = z.infer<typeof articleSchema>;

import { z } from 'zod';

export const supportSchema = z.object({
  message: z
    .string()
    .min(1, 'You should write the message before send the quetion ...'),
});

export type supportInput = z.infer<typeof supportSchema>;

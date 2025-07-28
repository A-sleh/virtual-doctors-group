import { z } from 'zod';

export const accountSchema = z.object({
  name: z.string().min(3, 'Please enter your real name'),
  phoneNumber: z
    .string()
    .min(10, 'The number most be 10 digits')
    .max(11, 'The number most be 10 digits'),
  birthDate: z.date(),
  personalId: z.number().min(10, 'Please enter your personal id ...'),
  gender: z.enum(['male', 'female']),
  notificationMe: z.string().optional(),
});

export type accountInputs = z.infer<typeof accountSchema>;

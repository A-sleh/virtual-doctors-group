import { z } from 'zod';

export const doctorSettingSchema = z.object({
  syndicateId: z.string().min(1, 'Enter your syndicate Id ...'),
  personalImage: z.string().min(1, 'Enter your personal identity iamge ...'),
});

export type doctorSettingInputs = z.infer<typeof doctorSettingSchema>;

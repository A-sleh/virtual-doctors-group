import { formIsNotValid } from '@/utils';
import { z } from 'zod';

export const doctorSettingSchema = z.object({
  syndicateId: z.string().min(1, 'Enter your syndicate Id ...'),
  note: z.string().min(1, 'Enter your syndicate Id ...').optional(),
  SpecialtyId: z.number().min(1, 'Please select your speciality'),
});

export type doctorSettingInputs = z.infer<typeof doctorSettingSchema>;
export type doctorSettingInputsErrorMessages = {
  [x in keyof doctorSettingInputs]?: string[] | undefined;
};

export function doctorSettingFormIsNotValid(data: doctorSettingInputs) {
  return formIsNotValid(doctorSettingSchema, data);
}

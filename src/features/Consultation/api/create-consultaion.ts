import { formIsNotValid } from '@/utils';
import z from 'zod';

export const consultaionInputSchema = z.object({
  message: z.string().min(1, 'Please enter the consultaion message'),
  cardName: z.string().min(1, 'Please enter your card name'),
  cardNumber: z.string().min(1, 'Please enter your card number'),
  expirDate: z.string().min(1, 'Please enter the expir date'),
  postalCode: z.string().min(1, 'Please enter the postal code'),
});

export type consultaionInput = z.infer<typeof consultaionInputSchema>;
export type consultaionInputErrorMessage = {
  [x in keyof consultaionInput]?: string[] | undefined;
};

export function consultaionFormIsNotValid(data: consultaionInput) {
  return formIsNotValid(consultaionInputSchema, data);
}

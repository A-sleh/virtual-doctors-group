import { formIsNotValid } from '@/utils';
import { z } from 'zod';

export const articleSchema = z.object({
  title: z.string().min(1, 'Please enter the article title'),
  description: z.string().min(1, 'Please enter the article description'),
  image: z.any(),
});

export type articleInput = z.infer<typeof articleSchema>;

export type articleInputErrorMessage = {
  [x in keyof articleInput]?: string[] | undefined;
};

export function articalFormIsValid(data: articleInput) {
  return formIsNotValid(articleSchema, data);
}

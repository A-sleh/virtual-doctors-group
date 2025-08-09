import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { formIsNotValid } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

export enum articleController {
  BASE = '/Article',
}

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

async function createNewArticleApi(data: articleInput) {
  const response = await api.post(`${articleController.BASE}`, data);
  return response;
}

function useCreateNewArticle() {
  const { mutate: createNewArticle, isPending } = useMutation({
    mutationFn: createNewArticleApi,
    onSuccess: () => {
      successToast('The article was created');
    },
    onError: () => {
      errorToast('The article was not created, Please try again');
    },
  });
  return { createNewArticle, isPending };
}

export { useCreateNewArticle };

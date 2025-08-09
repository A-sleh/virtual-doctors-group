import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { formIsNotValid } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

enum supportControler {
  BASE = '/Support',
}

export const supportSchema = z.object({
  message: z
    .string()
    .min(1, 'You should write the message before send the question ...'),
});

export type supportInput = z.infer<typeof supportSchema>;
export type supportInputErrorMessages = {
  [x in keyof supportInput]?: string[];
};

export function supportFormIsNotValid(data: supportInput) {
  return formIsNotValid(supportSchema, data);
}

async function createNewSupportMessageApi() {
  const reposnse = await api.post(`${supportControler.BASE}`);
  return reposnse;
}

function useNewSupportMessage() {
  const { mutate: sendSupportMessage, isPending } = useMutation<
    unknown,
    Error,
    supportInput
  >({
    mutationFn: createNewSupportMessageApi,
    onSuccess: () => {
      successToast('Your message was send, check your gemail messages');
    },
    onError: (erro) => {
      errorToast(`Some thing went wrong, please try later ${erro.message}`);
    },
  });

  return { sendSupportMessage, isPending };
}

export { useNewSupportMessage };

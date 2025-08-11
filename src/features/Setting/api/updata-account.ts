import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { formIsNotValid } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

enum accountSettingController {
  BASE = '/Account',
}

export const accountSchema = z.object({
  firstName: z.string().min(3, 'Please enter your name'),
  lastName: z.string().min(3, 'Please enter your last name'),
  email: z
    .string()
    .min(1, 'Please enter your email')
    .email('This email invalid'),
  phone: z
    .string()
    .min(10, 'The number most be 10 digits')
    .max(11, 'The number most be 10 digits'),
  birthDate: z.string().min(1, 'Please enter your birth date'),
  personalId: z.string().min(10, 'Please enter your personal id ...'),
  gender: z.enum(['male', 'female']),
  notificationMe: z.string().optional(),
});

export type accountInputs = z.infer<typeof accountSchema>;
export type accountInputsErrorMessages = {
  [x in keyof accountInputs]?: string[] | undefined;
};

export function accountSettingFormIsNotValid(data: accountInputs) {
  return formIsNotValid(accountSchema, data);
}

async function updateAccountSettingApi() {
  const response = await api.put(`${accountSettingController.BASE}`);
  return response;
}

function useUpdateAccountSetting() {
  const { mutate: updateAccountSetting, isPending } = useMutation<
    unknown,
    Error,
    accountInputs,
    unknown
  >({
    mutationFn: updateAccountSettingApi,
    onSuccess: () => {
      successToast('The setting was updated');
    },
    onError: (err) => {
      errorToast(`Some thing went wrong, ${err.message}`);
    },
  });

  return { updateAccountSetting, isPending };
}

export { useUpdateAccountSetting };

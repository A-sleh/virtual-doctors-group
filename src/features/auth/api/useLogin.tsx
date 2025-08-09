import { z } from 'zod';
import { useNavigate } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ROLES } from '@/context/auth/AuthProvider';
import { formIsNotValid } from '@/utils';
import { intialUrlBasedOnRole } from '@/lib/auth';

import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';

import { IUserResponse } from './useUser';
import { errorToast, successToast } from '@/components/custom/toast';

enum loginControler {
  BASE = 'Auth',
}

export const loginInputSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email')
    .email('This email is invalid try again'),
  password: z.string().min(5, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
export type LoginInputErrorMessage = {
  [x in keyof LoginInput]?: string[] | undefined;
};

export function loginFormIsNotValid(data: LoginInput) {
  return formIsNotValid(loginInputSchema, data);
}

async function loginApi(loginData: LoginInput): Promise<IUserResponse> {
  const response = await api.post<LoginInput, IUserResponse>(
    loginControler.BASE,
    loginData,
  );
  return response;
}

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending: loginPending,
    isSuccess,
  } = useMutation<IUserResponse, unknown, LoginInput, unknown>({
    mutationFn: loginApi,
    onSuccess: (userInfo) => {
      queryClient.setQueryData([QYERY_KEYS.user], userInfo);
      successToast('Log in successfully');
      navigate(intialUrlBasedOnRole(ROLES[userInfo.user.role]));
    },
    onError: () => {
      errorToast('There is no like this email or password is wrong...');
    },
  });

  return { login, loginPending, isSuccess };
}

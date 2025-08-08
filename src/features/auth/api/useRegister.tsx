import { z } from 'zod';
import { IUserResponse } from './useUser';
import { formIsNotValid } from '@/utils';
import { api } from '@/lib/api-client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { QYERY_KEYS } from '@/lib/query-key';
import { toast } from 'sonner';
import { intialUrlBasedOnRole } from '@/lib/auth';
import { ROLES } from '@/context/auth/AuthProvider';

enum RegisterControler {
  BASE = 'Auth/Register',
}

export const registerInputSchema = z.object({
  firstName: z.string().min(6, 'Your name should be more than 6 letters'),
  lastName: z.string().min(1, 'Please enter your last name'),
  personalId: z
    .string()
    .min(10, 'You should enter your perosn id, and at least 10 letters'),
  phone: z.string().min(10, 'The number most be equal 10 numbers').max(10),
  birthDate: z.date(),
  gender: z.enum(['male', 'female']).default('male'),
  profileImage: z.string().optional(),
  email: z.string().min(1, 'email is required').email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password is required and most be more than 8 character'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;
export type RegisterInputAPI = Pick<RegisterInput, 'password' | 'email'> & {
  person: Omit<RegisterInput, 'password' | 'email'>;
};

export type RegisterInputErrorMessage = {
  [x in keyof RegisterInput]?: string[] | undefined;
};

export function registerFormIsNotValid(data: RegisterInput) {
  return formIsNotValid(registerInputSchema, data);
}

async function registerApi(
  registerData: RegisterInputAPI,
): Promise<IUserResponse> {
  const response = await api.post<RegisterInputAPI, IUserResponse>(
    RegisterControler.BASE,
    registerData,
  );
  return response;
}

export function useRegister() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: signUp,
    isPending: registerPending,
    isSuccess,
  } = useMutation<IUserResponse, unknown, RegisterInputAPI, unknown>({
    mutationFn: registerApi,
    onSuccess: (userInfo) => {
      queryClient.setQueryData([QYERY_KEYS.user], userInfo);
      toast.success('Registering successfully');
      navigate(intialUrlBasedOnRole(ROLES[userInfo.user.role]));
    },
    onError: () => {
      toast.error('The email is already exist...');
    },
  });

  return { signUp, registerPending, isSuccess };
}

import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(5, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

interface IUserResponse {
  token: string;
}

async function login(loginData: LoginInput): Promise<IUserResponse> {
  const response = await api.post<LoginInput, IUserResponse>('Auth', loginData);
  return response;
}

export function useLogin() {
  const navigate = useNavigate();
  const mutaionRes = useMutation<IUserResponse, unknown, LoginInput, unknown>({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      navigate('/patient/home');
    },
    onError: () => {
      toast.error('There is no like this email or password is wrong...');
    },
  });

  return mutaionRes;
}

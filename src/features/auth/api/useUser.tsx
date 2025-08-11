import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { userLocalStorage } from '../localstorage/user.localstore';
import { accountInputs } from '@/features/Setting/api/updata-account';

export type IUserResponse = {
  token: {
    accessToken: string;
    expiresIn: number;
  };
  user: {
    userId: number;
    email: string;
    role: string;
    personId: number;
    firstName: string;
    lastName: string;
    phone: string;
  };
};
type IUserProfileResponse = accountInputs;

export type User = Pick<IUserResponse, 'user'> | null;

async function getUser(user: User | undefined): Promise<IUserResponse | null> {
  if (!user) return null;
  const response = await api.get<User, IUserResponse>(
    `user/${user.user.userId}`,
  );
  return response;
}

async function getUserProfile(): Promise<IUserProfileResponse> {
  const response = await api.get<unknown, IUserProfileResponse>(`User/Profile`);
  return response;
}

export function useUserProfile() {
  const { data: userProfile, isPaused } = useQuery({
    queryKey: [QYERY_KEYS.patient.userProfile],
    queryFn: async () => getUserProfile(),
  });
  return { userProfile, isPaused };
}

export function useUser() {
  const { data: user, isError } = useQuery<IUserResponse | null>({
    queryKey: [QYERY_KEYS.user],
    queryFn: async (): Promise<IUserResponse | null> => getUser(user),
    initialData: userLocalStorage.getUser,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (!user) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  useEffect(() => {
    if (isError) userLocalStorage.removeUser();
  }, [isError]);

  return {
    user: user ?? null,
  };
}

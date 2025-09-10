import { useUser } from '@/features/auth/api/useUser';
import { userLocalStorage } from '@/features/auth/localstorage/user.localstore';
import { removeHeaderToken, setHeaderToken } from '@/lib/api-client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ROLES: { [key in string]: string } = {
  User: 'patient',
  Doctor: 'doctor',
  Admin: 'admin',
} as const;

type userAuthType = {
  ROLE: (typeof ROLES)[keyof typeof ROLES];
  userId: number;
};
const intialUserAuth: userAuthType = {
  ROLE: 'patient',
  userId: 0,
};

const AuthContext = createContext<userAuthType>(intialUserAuth);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [userAuth, setUserAuth] = useState<userAuthType>(intialUserAuth);

  useEffect(() => {
    const userInfo = userLocalStorage.getUser();
    if (userInfo) {
      setUserAuth({
        ROLE: ROLES[userInfo.user.role],
        userId: userInfo.user?.doctorId
          ? userInfo.user?.doctorId
          : userInfo.user.userId,
      });
      setHeaderToken(userInfo?.token.accessToken);
    } else {
      setUserAuth(intialUserAuth);
      removeHeaderToken();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={userAuth}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('AtuhContext was used outside of auth context provider');
  }
  return context;
}

export { AuthProvider, useAuth, ROLES };

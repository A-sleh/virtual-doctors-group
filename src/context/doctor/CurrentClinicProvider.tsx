import { withChildProps } from '@/types/api';
import { createContext, useContext, useState } from 'react';

type subClinicType = {
  id: number;
  name: string;
};

type CurrentClinicProviderContextType = {
  clinic: subClinicType;
  setClinic: React.Dispatch<React.SetStateAction<subClinicType>>;
};

const CurrentClinicProviderContext =
  createContext<CurrentClinicProviderContextType>(
    {} as CurrentClinicProviderContextType,
  );

function CurrentClinicProvider({ children }: withChildProps) {
  const [clinic, setClinic] = useState<subClinicType>({} as subClinicType);

  return (
    <CurrentClinicProviderContext.Provider value={{ clinic, setClinic }}>
      {children}
    </CurrentClinicProviderContext.Provider>
  );
}

function useCurrentClinic() {
  const context = useContext(CurrentClinicProviderContext);
  if (context === undefined) {
    throw new Error(
      'You was used the  doctor clinic profile outsid the provider',
    );
  }

  return context;
}

export { CurrentClinicProvider, useCurrentClinic };

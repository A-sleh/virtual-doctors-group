import {
  IDoctorInfoResponse,
  useGetDoctorInfo,
} from '@/features/Doctor_Features/Profile/api/get-profile-info';
import { withChildProps } from '@/types/api';
import { createContext, useContext } from 'react';
import { useParams } from 'react-router';

type DoctorProfileContextType = {
  doctorInfo: IDoctorInfoResponse | undefined;
  isPending: boolean;
};

const DoctorProfileContext = createContext<DoctorProfileContextType>(
  {} as DoctorProfileContextType,
);

function DoctorProfileProvider({ children }: withChildProps) {
  const { id: doctorId } = useParams();
  const { doctorInfo, isPending } = useGetDoctorInfo(Number(doctorId));

  return (
    <DoctorProfileContext.Provider value={{ doctorInfo, isPending }}>
      {children}
    </DoctorProfileContext.Provider>
  );
}

function useDoctorProfile() {
  const context = useContext(DoctorProfileContext);
  if (context === undefined) {
    throw new Error('You was used the doctor profile outsid the provider');
  }

  return context;
}

export { DoctorProfileProvider, useDoctorProfile };

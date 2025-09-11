import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';

import PatientRating from './components/PatientRating';
import { useParams } from 'react-router';
import { useGetDcotorRating } from './api/get-profile-info';
import DoctorBoxSkeleton from '@/components/skeleton/DoctorBoxSkeleton';
import { useAuth } from '@/context/auth/AuthProvider';
import { isDoctor } from '@/lib/auth';

export default function PatientOpinion() {
  const { id } = useParams();
  const { ROLE, userId } = useAuth();
  const idd = isDoctor(ROLE) ? userId : id ;
  const { doctorRating, isPending } = useGetDcotorRating(idd);

  return (
    <div className="space-y-1">
      <AnimateDownEffect className="sub-header">
        What my patients say
      </AnimateDownEffect>
      <div className="flex flex-wrap gap-2">
        {isPending ? (
          <DoctorBoxSkeleton repeat={3} />
        ) : doctorRating?.length == 0 ? (
          <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
            This doctor is unRated
          </h2>
        ) : (
          doctorRating?.map((patient) => {
            return (
              <AnimateFromToRightInView>
                <PatientRating patient={patient} />
              </AnimateFromToRightInView>
            );
          })
        )}
      </div>
    </div>
  );
}

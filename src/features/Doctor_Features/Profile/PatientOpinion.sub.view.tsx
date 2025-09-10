import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { patientOpinion } from './api/data';
import PatientRating from './components/PatientRating';
import { useParams } from 'react-router';
import { useGetDcotorRating } from './api/get-profile-info';
import DoctorBoxSkeleton from '@/components/skeleton/DoctorBoxSkeleton';

export default function PatientOpinion() {
  const { id } = useParams();
  const { doctorRating, isPending } = useGetDcotorRating(id);
  
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

import { useGetDoctorClinics } from './api/get-profile-info';
import { useParams } from 'react-router';
import ClinicCard from './components/ClinicCard';
import ClinicsSkeletion from '@/components/skeleton/profile/ClinicsSkeletion';

import AnimateParentUpEffect from '@/lib/Animation/AnimateParentUpEffect';

export default function Clinics() {
  const { id: doctorId } = useParams();
  const { doctorClinics, isPending } = useGetDoctorClinics(Number(doctorId));

  return (
    <AnimateParentUpEffect className="space-y-3 grid md:grid-cols-2 lg:grid-cols-4 gap-2">
      {isPending ? (
        <ClinicsSkeletion repateNumber={6} />
      ) : (
        doctorClinics?.map((clinic) => {
          return <ClinicCard clinic={clinic} />;
        })
      )}
    </AnimateParentUpEffect>
  );
}

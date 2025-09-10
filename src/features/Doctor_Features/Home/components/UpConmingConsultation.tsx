import { paths } from '@/config/paths';

import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { useAuth } from '@/context/auth/AuthProvider';
import { useGetConsultaions } from '@/features/Consultation/api/get-consultaion';
import DoctorBoxSkeleton from '@/components/skeleton/DoctorBoxSkeleton';
import Header from '@/features/patient_Features/Home/components/Header';
import DoctorConsultationCard from '@/features/Consultation/components/DoctorConsultationCard';

export default function UpConmingConsultation() {
  const { userId, ROLE } = useAuth();

  const { consultaions, isLoading } = useGetConsultaions(userId, ROLE);

  const upConmingCons = consultaions?.slice(0, 3) || [];

  return (
    <div className="space-y-2 mb-2">
      <Header
        title="UpCouming consultaions"
        link={paths.app.consultation.getHref(userId)}
      />
      {isLoading ? (
        <DoctorBoxSkeleton repeat={3} />
      ) : upConmingCons.length == 0 ? (
        <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
          There are not upcoming conslutaions yet ...
        </h2>
      ) : (
        upConmingCons?.map((consultaion, index: number) => {
          return (
            <AnimateFromToRight duration={(index + 1) / 2}>
              <DoctorConsultationCard consultaion={consultaion} />
            </AnimateFromToRight>
          );
        })
      )}
    </div>
  );
}

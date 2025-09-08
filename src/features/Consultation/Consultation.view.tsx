import DoctorConsultationCard from './components/DoctorConsultationCard';
import ConsultaionHeader from './components/ConsultaionHeader';

import { AnimateUpInView } from '@/lib/Animation/AnimateUpEffect';
import { useSearchParams } from 'react-router';
import { useGetConsultaions } from './api/get-consultaion';
import { useAuth } from '@/context/auth/AuthProvider';
import DoctorBoxSkeleton from '@/components/skeleton/DoctorBoxSkeleton';
import ConsultaionHeaderSkeleton from '@/components/skeleton/ConsultaionHeaderSkeleton';
import { isPatient } from '@/lib/auth';

export default function Consultation() {
  const [queryParams] = useSearchParams();
  const selectedState = queryParams.get('filter') || 'all';

  const { userId, ROLE } = useAuth();
  const { consultaions, isLoading } = useGetConsultaions(
    userId,
    ROLE == 'patient' ? 'User' : 'Doctor',
  );


  return (
    <section className="w-full rounded-md space-y-3  overflow-y-auto h-[100vh] pb-45">
      {isLoading ? (
        <ConsultaionHeaderSkeleton />
      ) : (
        <ConsultaionHeader consultaions={consultaions || []} />
      )}
      <section className="flex flex-col gap-2 overflow-y-auto h-full ">
        {isLoading ? (
          <DoctorBoxSkeleton repeat={3} />
        ) : consultaions?.length ? (
          consultaions?.map((consultaion) => {
            if (
              selectedState != 'all' &&
              selectedState != consultaion.status?.toLowerCase()
            )
              return;
            return (
              <AnimateUpInView>
                <DoctorConsultationCard consultaion={consultaion} />
              </AnimateUpInView>
            );
          })
        ) : (
          <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
            {isPatient(ROLE) ? "You don't make any consultaions yet ..." : "There are not upcoming conslutaions yet ..."}
          </h2>
        )}
      </section>
    </section>
  );
}

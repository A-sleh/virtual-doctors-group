import Header from './Header';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { limitProps } from '../types/home';
import { paths } from '@/config/paths';

import { useAuth } from '@/context/auth/AuthProvider';
import { useGetConsultaions } from '@/features/Consultation/api/get-consultaion';
import DoctorBoxSkeleton from '@/components/skeleton/DoctorBoxSkeleton';
import DoctorConsultationCard from '@/features/Consultation/components/DoctorConsultationCard';

export default function MyConsultaions({ limitNumber = 2 }: limitProps) {
  const { userId, ROLE } = useAuth();
  const { consultaions, isLoading } = useGetConsultaions(
    userId,
    ROLE == 'patient' ? 'User' : 'Doctor',
  );

  if (isLoading) {
    return <DoctorBoxSkeleton repeat={3} />;
  }

  const slicedConsultaions = consultaions?.slice(0, limitNumber) || [];

  return (
    <section className="flex flex-col gap-2">
      <Header title="Consultations" link={paths.app.consultation.getHref(userId)} />
      {slicedConsultaions.length ? (
        slicedConsultaions.map((consultaion, index: number) => {
          return (
            <AnimateFromToRight duration={(index + 1) / 2} key={consultaion.id}>
              <DoctorConsultationCard consultaion={consultaion} />
            </AnimateFromToRight>
          );
        })
      ) : (
        <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
          You don't make any consultaions yet ...
        </h2>
      )}
    </section>
  );
}

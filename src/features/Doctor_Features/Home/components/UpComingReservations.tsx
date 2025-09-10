// import { upConmingRes } from '@/features/patient_Features/Home/api/data';

import { paths } from '@/config/paths';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';

import { useAuth } from '@/context/auth/AuthProvider';
import Header from '@/features/patient_Features/Home/components/Header';
import { useCurrentClinic } from '@/context/doctor/CurrentClinicProvider';
import { useGetReservation } from '../../Reservation/api/get-clinic-reservation';
import DoctorBoxSkeleton from '@/components/skeleton/DoctorBoxSkeleton';

import DoctorReservationCard from '@/features/patient_Features/Reservation/components/DoctorReservationCard';
import { getDateFromDayAndTime } from '@/utils';

export default function UpComingReservations() {
  const { clinic } = useCurrentClinic();
  const { userId } = useAuth();
  const { clinicReservations, isLoading } = useGetReservation(
    clinic.id,
    getDateFromDayAndTime(new Date().getDay().toString(),'00:00'),
  );

  const upConmingRes =
    clinicReservations
      ?.filter((reservation) => reservation.user)
      ?.slice(0, 3) || [];

      console.log(isLoading)

  return (
    <div className="space-y-2 mb-2">
      <Header
        title={`reservation of ${clinic.name}`}
        link={paths.app.consultation.getHref(userId)}
      />
      {isLoading ? (
        <DoctorBoxSkeleton repeat={3} />
      ) : upConmingRes.length == 0 ? (
        <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
          There are no reservations today...
        </h2>
      ) : (
        upConmingRes.map((reservation, index: number) => {
          return (
            <AnimateFromToRight duration={(index + 1) / 2}>
              <DoctorReservationCard reservationInfo={reservation} />
            </AnimateFromToRight>
          );
        })
      )}
    </div>
  );
}

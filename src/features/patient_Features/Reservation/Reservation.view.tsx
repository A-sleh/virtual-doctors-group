import DoctorReservationCard from './components/DoctorReservationCard';
// import { doctorData } from './api/data';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import { useGetReservation } from './api/get-reservations';
import { useAuth } from '@/context/auth/AuthProvider';
import DoctorBoxSkeleton from '@/components/skeleton/DoctorBoxSkeleton';

export default function Reservation() {
  const { userId } = useAuth();
  const { reservations, isLoading } = useGetReservation(Number(userId));

  return (
    <section className="space-y-2">
      <AnimateDownEffect className="sub-header">
        You have{' '}
        <span className="text-primary">{reservations?.length || 0}</span>{' '}
        reservations
      </AnimateDownEffect>
      <section className="flex flex-col gap-2.5 w-full">
        {!isLoading && reservations != undefined ? (
          reservations.map((reservation) => {
            const { virtualClinic: reservationInfo } = reservation;
            return (
              <AnimateFromToRightInView
                key={`${reservationInfo.doctor.firstName} ${reservationInfo.doctor.lastName}`}
              >
                <DoctorReservationCard reservationInfo={reservation} />
              </AnimateFromToRightInView>
            );
          })
        ) : (
          <DoctorBoxSkeleton repeat={3} />
        )}
      </section>
    </section>
  );
}

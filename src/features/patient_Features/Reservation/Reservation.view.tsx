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

  if (isLoading) {
    return <DoctorBoxSkeleton repeat={3} />;
  }

  return (
    <section className="space-y-2">
      <AnimateDownEffect className="sub-header">
        You have{' '}
        <span className="text-primary">{reservations?.length || 0}</span>{' '}
        reservations
      </AnimateDownEffect>
      <section className="flex flex-col gap-2.5 w-full">
        {reservations?.length ? (
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
          <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
            {"You don't make any reservation yet ..."}
          </h2>
        )}
      </section>
    </section>
  );
}

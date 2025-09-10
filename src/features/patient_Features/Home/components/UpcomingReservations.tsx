import Header from './Header';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { limitProps } from '../types/home';
import { paths } from '@/config/paths';
import { useAuth } from '@/context/auth/AuthProvider';
import { useGetReservation } from '../../Reservation/api/get-reservations';
import DoctorBoxSkeleton from '@/components/skeleton/DoctorBoxSkeleton';
import DoctorReservationCard from '../../Reservation/components/DoctorReservationCard';

export default function UpcomingReservations({ limitNumber = 2 }: limitProps) {
  const { userId } = useAuth();
  const { reservations, isLoading } = useGetReservation(Number(userId));

  if (isLoading) {
    return <DoctorBoxSkeleton repeat={3} />;
  }

  const upComingRerservations = reservations?.slice(0, limitNumber) || [];

  return (
    <section className="flex flex-col gap-2 ">
      <Header
        title="Upcoming Reservations"
        link={paths.app.patient.reservation.getHref(userId)}
      />
      {upComingRerservations.length ? (
        upComingRerservations.map((reservation, index: number) => {
          return (
            <AnimateFromToRight duration={(index + 1) / 2} key={reservation.id}>
              <DoctorReservationCard reservationInfo={reservation} />
            </AnimateFromToRight>
          );
        })
      ) : (
        <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
          {"You don't make any reservation yet ..."}
        </h2>
      )}
    </section>
  );
}

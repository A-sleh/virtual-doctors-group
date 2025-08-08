import DoctorReservationCard from './components/DoctorReservationCard';
import { doctorData } from './api/data';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import { useGetReservation } from './api/get-reservations';
import { useAuth } from '@/context/auth/AuthProvider';

export default function Reservation() {
  const { userId } = useAuth();
  const { reservations, isLoading } = useGetReservation(userId);
  console.log(reservations, isLoading);
  return (
    <section className="space-y-2">
      <AnimateDownEffect className="sub-header">
        You have <span className="text-primary">5</span> reservations
      </AnimateDownEffect>
      <section className="flex flex-col gap-2.5 w-full">
        {doctorData.map((doctor) => {
          return (
            <AnimateFromToRightInView key={doctor.name}>
              <DoctorReservationCard doctor={doctor} />
            </AnimateFromToRightInView>
          );
        })}
      </section>
    </section>
  );
}

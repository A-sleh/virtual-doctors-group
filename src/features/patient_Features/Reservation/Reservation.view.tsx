import DoctorReservationCard from './components/DoctorReservationCard';
import { doctorData } from './api/data';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';

export default function Reservation() {
  return (
    <section className="space-y-2">
      <AnimateDownEffect className="sub-header">
        You have <span className="text-primary">5</span> reservations
      </AnimateDownEffect>
      <section className="flex flex-col gap-2.5 w-full">
        {doctorData.map((doctor) => {
          return (
            <AnimateFromToRightInView>
              <DoctorReservationCard doctor={doctor} />
            </AnimateFromToRightInView>
          );
        })}
      </section>
    </section>
  );
}

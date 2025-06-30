import { upConmingRes } from '../api/data';

import DoctorBox from '@/features/Doctors/components/DoctorBox';
import Header from './Header';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';

type UpcomingReservationsProps = {
  limitNumber: number;
};

export default function UpcomingReservations({
  limitNumber = 2,
}: UpcomingReservationsProps) {
  const upComingRerservations = upConmingRes.slice(0, limitNumber);

  return (
    <section className="flex flex-col gap-2 ">
      <Header title="Upcoming Reservations" />
      {upComingRerservations.map((doctor, index: number) => {
        return (
          <AnimateFromToRight duration={(index + 1) / 2}>
            <DoctorBox doctor={doctor}  />
          </AnimateFromToRight>
        );
      })}
    </section>
  );
}

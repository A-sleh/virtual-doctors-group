import { upConmingRes } from '../api/data';

import DoctorBox from '@/features/Consultation/components/DoctorBox';
import Header from './Header';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { limitProps } from '../types/home';
import { paths } from '@/config/paths';

export default function UpcomingReservations({
  limitNumber = 2,
}: limitProps) {
  const upComingRerservations = upConmingRes.slice(0, limitNumber);

  return (
    <section className="flex flex-col gap-2 ">
      <Header title="Upcoming Reservations" link={paths.app.patient.reservation.getHref(1)} />
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

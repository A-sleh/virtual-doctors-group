
import { upConmingRes } from '@/features/patient_Features/Home/api/data'; 

import FilterClinicContainer from './FilterClinicContainer';
import { paths } from '@/config/paths';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import DoctorBox from '@/features/Consultation/components/DoctorBox';

export default function UpComingReservations() {
  return (
    <FilterClinicContainer showMoreLink={paths.app.doctor.reservation.getHref(1)}>
      {upConmingRes.map((doctor, index: number) => {
        return (
          <AnimateFromToRight duration={(index + 1) / 2}>
            <DoctorBox doctor={doctor}  />
          </AnimateFromToRight>
        );
      })}
    </FilterClinicContainer>
  )
}

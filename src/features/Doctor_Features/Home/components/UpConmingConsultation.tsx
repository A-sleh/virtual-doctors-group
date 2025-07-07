import { paths } from '@/config/paths';
import { upConmingCons } from '@/features/patient_Features/Home/api/data'; 
import FilterClinicContainer from './FilterClinicContainer';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import DoctorBox from '@/features/Consultation/components/DoctorBox';

export default function UpConmingConsultation() {
  return (
    <FilterClinicContainer showMoreLink={paths.app.consultation.getHref(1)}>
      {upConmingCons.map((doctor, index: number) => {
        return (
          <AnimateFromToRight duration={(index + 1) / 2}>
            <DoctorBox doctor={doctor} />
          </AnimateFromToRight>
        );
      })}
    </FilterClinicContainer>
  );
}

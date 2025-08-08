import { upConmingCons } from '../api/data';

import DoctorBox from '@/features/Consultation/components/DoctorBox';
import Header from './Header';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { limitProps } from '../types/home';
import { paths } from '@/config/paths';

export default function MyConsultaions({ limitNumber = 2 }: limitProps) {
  const consultaions = upConmingCons.slice(0, limitNumber);

  return (
    <section className="flex flex-col gap-2">
      <Header title="Consultations" link={paths.app.consultation.getHref(1)} />
      {consultaions.map((doctor, index: number) => {
        return (
          <AnimateFromToRight duration={(index + 1) / 2} key={doctor.name}>
            <DoctorBox doctor={doctor} />
          </AnimateFromToRight>
        );
      })}
    </section>
  );
}

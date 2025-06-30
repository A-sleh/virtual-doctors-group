import { upConmingCons } from '../api/data';

import DoctorBox from '@/features/Consultation/components/DoctorBox';
import Header from './Header';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';

type myConsultaionProps = {
  limitNumber: number;
};

export default function MyConsultaions({
  limitNumber = 2,
}: myConsultaionProps) {
  const consultaions = upConmingCons.slice(0, limitNumber);

  return (
    <section className="flex flex-col gap-2">
      <Header title="Consultations" />
      {consultaions.map((doctor,index: number) => {
        return (
          <AnimateFromToRight duration={( index + 1 ) / 2 } >
            <DoctorBox doctor={doctor} />
          </AnimateFromToRight>
        );
      })}
    </section>
  );
}

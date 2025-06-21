import { upConmingCons } from '../api/data';

import DoctorBox from '@/features/Doctors/components/DoctorBox';
import Header from './Header';

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
      {consultaions.map((doctor) => {
        return <DoctorBox doctor={doctor} />;
      })}
    </section>
  );
}

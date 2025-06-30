import { doctorData } from './api/data';

import DoctorConsultationCard from './components/DoctorConsultationCard';
import ConsultaionHeader from './components/ConsultaionHeader';

import { AnimateUpInView } from '@/lib/Animation/AnimateUpEffect';

export default function Consultation() {
  return (
    <section className="space-y-3">
      <ConsultaionHeader />
      <section className="flex flex-col gap-2.5 w-full">
        {doctorData.map((doctor) => {
          return (
            <AnimateUpInView>
              <DoctorConsultationCard doctor={doctor} />
            </AnimateUpInView>
          );
        })}
      </section>
    </section>
  );
}

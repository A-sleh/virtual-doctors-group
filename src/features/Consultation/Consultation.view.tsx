import { doctorData } from './api/data';

import DoctorConsultationCard from './components/DoctorConsultationCard';
import ConsultaionHeader from './components/ConsultaionHeader';

import { AnimateUpInView } from '@/lib/Animation/AnimateUpEffect';

export default function Consultation() {
  return (
    <section className="w-full rounded-md space-y-3  overflow-y-auto h-[100vh] pb-45">
      <ConsultaionHeader />
      <section className="flex flex-col gap-2 overflow-y-auto h-full ">
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

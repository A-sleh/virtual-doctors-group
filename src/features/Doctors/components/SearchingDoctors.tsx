import AnimateFromToRight, { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import { doctors } from '../api/data';
import DoctorConsultResarveBox from './DoctorConsultResarveBox';



export default function SearchingDoctors() {
  return (
    <section className="w-full rounded-md space-y-3 h-full overflow-hidden">
      <AnimateFromToRight>
        <header className="sub-header">
          <span className="text-primary">45</span> Doctors Available
        </header>
      </AnimateFromToRight>
      <div className="flex flex-col gap-2 overflow-y-auto h-full pb-20 ">
        {doctors.map((doctor,index: number) => {
          return (
            <AnimateFromToRightInView duration={index < 3 ? index / 2 : 0.4}>
              <DoctorConsultResarveBox doctor={doctor} />
            </AnimateFromToRightInView>
          );
        })}
      </div>
    </section>
  );
}

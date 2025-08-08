import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';

import { topDoctors } from '../api/data';
import { paths } from '@/config/paths';
import DoctorInfo from './DoctorInfo';
import Header from './Header';
import { limitProps } from '../types/home';

export default function TopDoctors({ limitNumber = 2 }: limitProps) {
  const doctors = topDoctors.slice(0, limitNumber);

  return (
    <section className="flex flex-col gap-2">
      <Header title="Top doctors" link={paths.app.searchingDoctor.getHref()} />
      <AnimateParentLeftEffect className="grid md:grid-cols-2  gap-2">
        {doctors.map((doctor, index: number) => {
          return (
            <AnimateChildLeftEffect duration={index / 2} key={doctor.name}>
              <DoctorInfo doctor={doctor} rating={doctor.rating} />
            </AnimateChildLeftEffect>
          );
        })}
      </AnimateParentLeftEffect>
    </section>
  );
}

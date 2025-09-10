import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';

import { paths } from '@/config/paths';
import DoctorInfo from './DoctorInfo';
import Header from './Header';
import { limitProps } from '../types/home';
import { useGetDoctors } from '../api/get-doctors';
import TopDoctorsSkeleton from '@/components/skeleton/doctor/TopDoctorsSkeleton';

export default function TopDoctors({ limitNumber = 2 }: limitProps) {
  const { isPending, topDoctors } = useGetDoctors();

  
  if(isPending) {
    return <TopDoctorsSkeleton />
  }

  const topFourDoctors = topDoctors?.slice(0, limitNumber) || [];

  return (
    <section className="flex flex-col gap-2">
      <Header title="Top doctors" link={paths.app.searchingDoctor.getHref()} />
      <AnimateParentLeftEffect className="grid md:grid-cols-2  gap-2">
        {topFourDoctors.map((doctor, index: number) => {
          return (
            <AnimateChildLeftEffect duration={index / 2} key={doctor.doctorId}>
              <DoctorInfo doctor={doctor}  />
            </AnimateChildLeftEffect>
          );
        })}
      </AnimateParentLeftEffect>
    </section>
  );
}

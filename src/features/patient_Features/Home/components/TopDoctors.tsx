import { motion } from 'motion/react';
import { topDoctors } from '../api/data';
import DoctorInfo from './DoctorInfo';
import Header from './Header';
import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';

type topDoctorsProps = {
  limitNumber: number;
};

export default function TopDoctors({ limitNumber = 2 }: topDoctorsProps) {
  const doctors = topDoctors.slice(0, limitNumber);

  return (
    <section className="flex flex-col gap-2">
      <Header title="Top doctors" />
      <AnimateParentLeftEffect className="grid md:grid-cols-2  gap-2">
        {doctors.map((doctor, index: number) => {
          return (
            <AnimateChildLeftEffect duration={index / 2}>
              <DoctorInfo doctor={doctor} rating={doctor.rating} />
            </AnimateChildLeftEffect>
          );
        })}
      </AnimateParentLeftEffect>
    </section>
  );
}

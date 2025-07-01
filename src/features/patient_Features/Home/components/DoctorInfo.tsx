import { LiaStarSolid } from 'react-icons/lia';
import { BsArrowRight } from 'react-icons/bs';
import { DoctorInfoProps } from '../types/home';
import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';

export default function DoctorInfo({ doctor, rating }: DoctorInfoProps) {
  return (
    <div className="rounded-box flex gap-1 items-end justify-between">
      <DoctorVectorInfo name={doctor.name} specility={doctor.specility}>
        <h5 className="flex gap-1 items-center text-sm ">
          <LiaStarSolid size={20} color="yellow" />
          <p className="font-ligh text-secondaryt">{rating}</p>
        </h5>
      </DoctorVectorInfo>
      <BsArrowRight
        size={30}
        className="cursor-pointer text-primary self-end w-fit "
      />
    </div>
  );
}

import { LiaStarSolid } from 'react-icons/lia';
import { BsArrowRight } from 'react-icons/bs';
import DoctorVectorInfo, {
  doctorInfoProps,
} from '@/features/Doctors/components/DoctorVectorInfo';

export type DoctorInfoProps = doctorInfoProps & {
  rating?: string;
};

export default function DoctorInfo({ doctor, rating }: DoctorInfoProps) {
  return (
    <div className="rounded-box flex gap-1 items-end justify-between">
      <DoctorVectorInfo name={doctor.name} specility={doctor.specility}>
        <h5 className="flex gap-1 items-center text-sm ">
          <LiaStarSolid size={20} color="yellow" />
          <p className="font-light">{rating}</p>
        </h5>
      </DoctorVectorInfo>
      <BsArrowRight size={30} color="#1579e5" className="cursor-pointer self-end w-fit " />
    </div>
  );
}

import { LiaStarSolid } from 'react-icons/lia';
import { BsArrowRight } from 'react-icons/bs';
import { DoctorInfoProps } from '../types/home';
import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';
import { paths } from '@/config/paths';
import { Link } from 'react-router';

export default function DoctorInfo({ doctor }: DoctorInfoProps) {
  return (
    <div className="rounded-box flex gap-1 items-end justify-between">
      <div className='flex-1'>
        <div className="flex justify-between items-start ">
          <DoctorVectorInfo
            imgSrc={doctor?.imageUrl}
            name={doctor.firstName ? doctor.firstName  + ' ' + doctor.lastName : doctor.doctorName}
            specility={doctor.speciality}
            doctorId={doctor.doctorId}
            
          />

          <h5 className="flex gap-1 items-center text-sm  ml-2">
            <LiaStarSolid size={18} color="yellow" />
            <p className="font-ligh text-secondaryt">{Math.floor( doctor.rating)}</p>
          </h5>
        </div>
        <p className='text-secondary my-1'>{doctor.description}</p>
      </div>
      <Link to={paths.app.doctor.profile.getHref(doctor.doctorId)}>
        <BsArrowRight
          size={30}
          className="cursor-pointer text-primary self-end w-fit "
        />
      </Link>
    </div>
  );
}

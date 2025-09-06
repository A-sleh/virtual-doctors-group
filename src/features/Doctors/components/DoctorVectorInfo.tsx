import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateScale from '@/lib/Animation/AnimateScale';
import { DoctorVectorInfoProps } from '../types/doctor';
import { Link } from 'react-router';
import { paths } from '@/config/paths';
import fofImg from '@/assets/images/pexels-jrfotosgrand-fotografia-12660379.jpg';

export default function DoctorVectorInfo({
  name,
  doctorId,
  specility,
  imgSrc,
  children,
  imageSize = 'h-14 w-14',
  fontSize = '',
  withAnimation = false,
}: DoctorVectorInfoProps) {
  return (
    <div className="flex gap-3">
      <AnimateScale run={withAnimation}>
        <img
          src={imgSrc || fofImg}
          alt="doctor image"
          className={`rounded-full ${imageSize}`}
        />
      </AnimateScale>
      <AnimateFromToRight className="flex flex-col gap-2" run={withAnimation}>
        <div className="flex flex-col space-y-1">
          <Link
            to={paths.app.doctor.profile.getHref(doctorId)}
            className={`font-medium ${fontSize}`}
          >
            {specility && <span className="text-primary ">Dr.</span>}
            {name}
          </Link>
          {specility && (
            <span className="text-secondary bg-third text-sm px-2 py-1  rounded-sm w-fit">
              {specility}
            </span>
          )}
        </div>
        {children}
      </AnimateFromToRight>
    </div>
  );
}

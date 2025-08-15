import { Link } from 'react-router';
import { IDoctorClinicsResponse } from '../api/get-profile-info';
import { paths } from '@/config/paths';
import { AnimateChildUpEffect } from '@/lib/Animation/AnimateParentUpEffect';

export default function ClinicCard({
  clinic,
}: {
  clinic: IDoctorClinicsResponse;
}) {
  const {
    endWorkHours,
    startWorkHours,
    doctorId,
    location,
    name,
    previewCost,
    status,
    id: clinicId,
  } = clinic;

  return (
    <AnimateChildUpEffect className="p-2 rounded-box relative">
      <Link
        to={paths.app.doctor.profile.info.clinic.getHref(doctorId, clinicId)}
      >
        <span className='px-2 py-1 content-["${status}"] bg-white absolute left-4 top-4 text-primary font-bold rounded-sm '>
          {status} / {previewCost == 0 ? 'free' : previewCost + ' $'} for
          preview
        </span>
        <img src="" className="w-full h-[10rem] bg-fourth rounded-md" />
        <h3 className="font-bold my-3 text-secondary flex justify-between items-center">
          {name} <span className="text-secondary font-medium">{location}</span>
        </h3>
        <div className="flex gap-2">
          <span className="w-full rounded-bl-md  rounded-tr-md    text-white bg-primary px-3 py-1">
            Open at - {startWorkHours}
          </span>
          <span className="w-full rounded-bl-md  rounded-tr-md text-white bg-primary px-3 py-1">
            Closes at - {endWorkHours}
          </span>
        </div>
      </Link>
    </AnimateChildUpEffect>
  );
}

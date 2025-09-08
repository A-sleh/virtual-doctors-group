// Icon components
import { FaLocationDot } from 'react-icons/fa6';

import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';
import RatingItem from '@/features/Doctors/components/RatingItem';
import ProfileHeaderSkeleton from '@/components/skeleton/profile/ProfileHeaderSkeleton';
import ProfileLinks from './components/ProfileLinks';
import DoctorStarsRating from './components/DoctorStarsRating';

import { Outlet, useParams } from 'react-router';
import { useGetDoctorInfo } from './api/get-profile-info';

export default function Profile() {
  const { id: doctorId } = useParams();
  const { doctorInfo, isPending } = useGetDoctorInfo(Number(doctorId));

  return (
    <div className="space-y-2 ">
      {isPending ? (
        <ProfileHeaderSkeleton />
      ) : (
        <>
          <section className="rounded-box flex justify-between">
            <div className="space-y-3 ">
              <DoctorVectorInfo
                doctorId={Number(doctorId)}
                name={`${doctorInfo?.firstName} ${doctorInfo?.lastName}`}
                specility={doctorInfo?.speciality}
                imageSize={'h-40 w-40'}
                fontSize="text-3xl"
                withAnimation={true}
              >
                <div className="space-y-2 mt-2">
                  <RatingItem Icon={FaLocationDot} text={'syria, aleppo'} />
                </div>
              </DoctorVectorInfo>
              <DoctorStarsRating starsNumber={Number(doctorInfo?.doctorId) % 6} />
            </div>
          </section>
          <ProfileLinks />
        </>
      )}
      <Outlet />
    </div>
  );
}

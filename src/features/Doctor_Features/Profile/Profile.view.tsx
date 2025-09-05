// Icon components
import { FaLocationDot } from 'react-icons/fa6';

import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';
import RatingItem from '@/features/Doctors/components/RatingItem';

import MainInformation from './components/MainInformation';
import ProfileLinks from './components/ProfileLinks';
import { Outlet, useParams } from 'react-router';
import DoctorStarsRating from './components/DoctorStarsRating';
import { useGetDoctorInfo } from './api/get-profile-info';
import ProfileHeaderSkeleton from '@/components/skeleton/profile/ProfileHeaderSkeleton';

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
              <DoctorStarsRating starsNumber={3.5} />
            </div>
            <MainInformation />
          </section>
          <ProfileLinks />
        </>
      )}
      <Outlet />
    </div>
  );
}

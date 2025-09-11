// Icon components
import { FaLocationDot } from 'react-icons/fa6';

import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';
import RatingItem from '@/features/Doctors/components/RatingItem';
import ProfileHeaderSkeleton from '@/components/skeleton/profile/ProfileHeaderSkeleton';
import ProfileLinks from './components/ProfileLinks';
import DoctorStarsRating from './components/DoctorStarsRating';

import { Outlet, useParams } from 'react-router';
import { useGetDoctorInfo } from './api/get-profile-info';
import ConsultADoctor from '@/features/patient_Features/Models/ConsultADoctor.Model';
import HasPermission from '@/context/auth/HasPermission';
import UpdateTitcketCost from './components/UpdateTitcketCost';

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
                imgSrc={doctorInfo?.imageUrl}
                fontSize="text-3xl"
                withAnimation={true}
              >
                <div className="space-y-2 mt-2">
                  <RatingItem Icon={FaLocationDot} text={'syria, aleppo'} />
                </div>
              </DoctorVectorInfo>
              <DoctorStarsRating
                starsNumber={Number(doctorInfo?.doctorId) % 6}
              />
            </div>
            {doctorInfo?.ticketOption.toLocaleLowerCase() != 'none' && (
              <HasPermission allowedTo={['patient']} userIdOut={doctorInfo?.doctorId}>
                <div className="">
                  <span className="font-light px-2 h-fit bg-danger text-white rounded-tl-sm rounded-br-sm text-nowrap w-full ">
                    {doctorInfo?.ticketCost === 0
                      ? 'Free'
                      : `${doctorInfo?.ticketCost}$`}
                  </span>
                  <ConsultADoctor
                    doctorId={Number(doctorId)}
                    cost={doctorInfo?.ticketCost}
                    doctor={{
                      name: doctorInfo?.firstName + ' ' + doctorInfo?.lastName,
                      specility: doctorInfo?.speciality || '',
                      location: '',
                    }}
                  />
                </div>
              </HasPermission>
            )}

            <HasPermission allowedTo={['doctor']} userIdOut={doctorInfo?.doctorId}>
              <UpdateTitcketCost
                ticketCost={doctorInfo?.ticketCost}
                ticketOption={doctorInfo?.ticketOption}
              />
            </HasPermission>
          </section>
          <ProfileLinks />
        </>
      )}
      <Outlet />
    </div>
  );
}

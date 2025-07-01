// Icon components
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';
import RatingItem from '@/features/Doctors/components/RatingItem';

import MainInformation from './components/MainInformation';
import ProfileLinks from './components/ProfileLinks';
import { Outlet } from 'react-router';
import DoctorStarsRating from './components/DoctorStarsRating';

export default function Profile() {
  return (
    <div className="space-y-2">
      <section className="rounded-box flex justify-between">
        <div className="space-y-3 ">
          <DoctorVectorInfo
            name="Abdufatah"
            specility="software enginer"
            imageSize={"h-40 w-40"}
            fontSize="text-3xl"
            withAnimation={true}
          >
            <div className="space-y-2 mt-2">
              <RatingItem Icon={FaLocationDot} text={'syria, aleppo'} />
              <RatingItem Icon={MdOutlineWorkspacePremium} text="10 +years" />
            </div>
          </DoctorVectorInfo>
          <DoctorStarsRating starsNumber={3.5} />
        </div>
        <MainInformation />
      </section>
      <ProfileLinks />
      <Outlet />
    </div>
  );
}

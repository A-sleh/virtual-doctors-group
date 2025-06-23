// Icon components
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';
import RatingItem from '@/features/Doctors/components/RatingItem';

import MainInformation from './components/MainInformation';
import { NavLink, Outlet } from 'react-router';
import { paths } from '@/config/paths';

export default function Profile() {
  return (
    <div className="space-y-2">
      <section className="rounded-box flex justify-between">
        <div className='space-y-3 '>
          <DoctorVectorInfo
            name="Abdufatah"
            specility="software enginer"
            imageSize="h-40 w-40"
            fontSize="text-3xl"
          >
            <div className="space-y-2 mt-2">
              <RatingItem Icon={FaLocationDot} text={'syria, aleppo'} />
              <RatingItem Icon={MdOutlineWorkspacePremium} text="10 +years" />
            </div>
          </DoctorVectorInfo>
          <div className="flex gap-2 px-4">
            <FaStar size={25} className='text-yellow-300'/>
            <FaStar size={25} className='text-yellow-300'/>
            <FaStar size={25} className='text-yellow-300'/>
            <FaStar size={25} className='text-yellow-300'/>
            <FaStarHalfStroke size={25} className='text-yellow-300'/>
          </div>
        </div>
        <MainInformation />
      </section>
      <section className="rounded-box space-x-2">
        <NavLink
          to={paths.app.doctor.profile.info.about.getHref(10)}
          className={({ isActive }) =>
            (isActive
              ? 'text-white bg-primary'
              : 'bg-transparent text-primary') +
            ' border border-primary btn-rounded font-medium rounded-tl-[0px] rounded-br-[0px] r bg-primary transition-all duration-200'
          }
        >
          About
        </NavLink>
        <NavLink
          to={paths.app.doctor.profile.info.clinics.getHref(10)}
          className={({ isActive }) =>
            (isActive
              ? 'text-white bg-primary'
              : 'bg-transparent text-primary') +
            ' border border-primary btn-rounded font-medium rounded-tl-[0px] rounded-br-[0px] r bg-primary transition-all duration-200'
          }
        >
          Clinics
        </NavLink>
        <NavLink
          to={paths.app.doctor.profile.info.patientOpinion.getHref(10)}
          className={({ isActive }) =>
            (isActive
              ? 'text-white bg-primary'
              : 'bg-transparent text-primary') +
            ' border border-primary btn-rounded font-medium rounded-tl-[0px] rounded-br-[0px] r bg-primary transition-all duration-200'
          }
        >
          Patient opinions
        </NavLink>
      </section>

      <Outlet />
    </div>
  );
}

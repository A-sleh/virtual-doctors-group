import { paths } from '@/config/paths';
import { NavLink, useParams } from 'react-router';
import NewClinicModel from '../../Models/NewClinic.Model';

export default function ProfileLinks() {
  const { id: doctorId } = useParams();
  return (
    <section className="rounded-box flex justify-between items-center">
      <div className="space-x-2">
        <NavLink
          to={paths.app.doctor.profile.info.about.getHref(Number(doctorId))}
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
          to={paths.app.doctor.profile.info.clinics.getHref(Number(doctorId))}
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
          to={paths.app.doctor.profile.info.patientOpinion.getHref(
            Number(doctorId),
          )}
          className={({ isActive }) =>
            (isActive
              ? 'text-white bg-primary'
              : 'bg-transparent text-primary') +
            ' border border-primary btn-rounded font-medium rounded-tl-[0px] rounded-br-[0px] r bg-primary transition-all duration-200'
          }
        >
          Patient opinions
        </NavLink>
      </div>
      <div className="w-fit">
        <NewClinicModel />
      </div>
    </section>
  );
}

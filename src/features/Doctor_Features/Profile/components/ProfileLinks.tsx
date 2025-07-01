import { paths } from "@/config/paths";
import { NavLink } from "react-router";

export default function ProfileLinks() {
  return (
    <section className="rounded-box space-x-2">
      <NavLink
        to={paths.app.doctor.profile.info.about.getHref(10)}
        className={({ isActive }) =>
          (isActive ? 'text-white bg-primary' : 'bg-transparent text-primary') +
          ' border border-primary btn-rounded font-medium rounded-tl-[0px] rounded-br-[0px] r bg-primary transition-all duration-200'
        }
      >
        About
      </NavLink>
      <NavLink
        to={paths.app.doctor.profile.info.clinics.getHref(10)}
        className={({ isActive }) =>
          (isActive ? 'text-white bg-primary' : 'bg-transparent text-primary') +
          ' border border-primary btn-rounded font-medium rounded-tl-[0px] rounded-br-[0px] r bg-primary transition-all duration-200'
        }
      >
        Clinics
      </NavLink>
      <NavLink
        to={paths.app.doctor.profile.info.patientOpinion.getHref(10)}
        className={({ isActive }) =>
          (isActive ? 'text-white bg-primary' : 'bg-transparent text-primary') +
          ' border border-primary btn-rounded font-medium rounded-tl-[0px] rounded-br-[0px] r bg-primary transition-all duration-200'
        }
      >
        Patient opinions
      </NavLink>
    </section>
  );
}

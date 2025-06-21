import { paths } from '@/config/paths';

import { NavLink, Outlet } from 'react-router';

export default function Setting() {
  return (
    <section className='space-y-2'>
      <header className="sub-header space-x-4">
        <NavLink
          to={paths.app.setting.account.getHref(1)}
          end
          className={({ isActive }) =>
            isActive
              ? 'text-[#1579e5]'
              : 'text-black ' + 'transition-all duration-300'
          }
        >
          Account
        </NavLink>
        <NavLink
          to={paths.app.setting.subscribAsDoctor.getHref(1)}
          end
          className={({ isActive }) =>
            isActive
              ? 'text-[#1579e5]'
              : 'text-black ' + 'transition-all duration-300'
          }
        >
          Subscrib as a doctor
        </NavLink>
      </header>
      <Outlet />
    </section>
  );
}

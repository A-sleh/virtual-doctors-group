import { paths } from '@/config/paths';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { NavLink } from 'react-router';

export default function SettingHeader() {
  return (
    <AnimateDownEffect className="sub-header space-x-4">
      <NavLink
        to={paths.app.setting.account.getHref(1)}
        end
        className={({ isActive }) =>
          isActive
            ? 'text-primary'
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
            ? 'text-primary'
            : 'text-black ' + 'transition-all duration-300'
        }
      >
        Subscrib as a doctor
      </NavLink>
    </AnimateDownEffect>
  );
}

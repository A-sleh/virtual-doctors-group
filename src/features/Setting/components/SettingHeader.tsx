import { paths } from '@/config/paths';
import { useAuth } from '@/context/auth/AuthProvider';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { isPatient } from '@/utils/userPermission';
import { NavLink } from 'react-router';

export default function SettingHeader() {
  const { ROLE } = useAuth();
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
        {isPatient(ROLE) ? 'Subscrib as a doctor' : 'My personal info'}
      </NavLink>
    </AnimateDownEffect>
  );
}

import { NavLink } from 'react-router';
import { useAuth } from '@/context/auth/AuthProvider';

import HasPermission from '@/context/auth/HasPermission';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { isPatient } from '@/lib/auth';

import { paths } from '@/config/paths';

export default function SettingHeader() {
  
  const { ROLE, userId } = useAuth();

  return (
    <AnimateDownEffect className="sub-header space-x-4">
      <NavLink
        to={paths.app.setting.account.getHref(userId)}
        end
        className={({ isActive }) =>
          isActive
            ? 'text-primary'
            : 'text-black ' + 'transition-all duration-300'
        }
      >
        Account
      </NavLink>
      <HasPermission allowedTo={['patient']}>
        <NavLink
          to={paths.app.setting.subscribAsDoctor.getHref(userId)}
          end
          className={({ isActive }) =>
            isActive
              ? 'text-primary'
              : 'text-black ' + 'transition-all duration-300'
          }
        >
          {isPatient(ROLE) ? 'Subscrib as a doctor' : 'My personal info'}
        </NavLink>
      </HasPermission>
    </AnimateDownEffect>
  );
}

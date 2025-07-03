import { ROLE } from '@/config/app.config';

type users = 'admin' | 'doctor' | 'patient'

type HasPermissionProps = {
  children: React.ReactNode;
  allowedTo: users[];
  condition?: boolean;
};

export default function HasPermission({
  children,
  allowedTo,
  condition = true,
}: HasPermissionProps) {
  // dont render the element if the condition doesn't equal to true
  if (!allowedTo.includes(ROLE) || !condition) return null;
  return children;
}

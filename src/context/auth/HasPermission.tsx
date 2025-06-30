import { ROLE } from '@/config/app.config';

type HasPermissionProps = {
  children: React.ReactNode;
  allowedTo: ['admin' | 'doctor' | 'patient'];
};

export default function HasPermission({
  children,
  allowedTo,
}: HasPermissionProps) {
  if (!allowedTo.includes(ROLE)) return null;
  return children;
}

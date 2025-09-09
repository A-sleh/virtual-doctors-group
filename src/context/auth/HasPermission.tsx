import { useAuth } from './AuthProvider';

type HasPermissionProps = {
  children: React.ReactNode;
  allowedTo: string[];
  condition?: boolean;
};

export default function HasPermission({
  children,
  allowedTo,
  condition = true,
}: HasPermissionProps) {
  const { ROLE } = useAuth();
  // dont render the element if the condition doesn't equal to true
  if (!allowedTo.includes(ROLE.toLowerCase()) || !condition) return null;
  return children;
}

import { useAuth } from './AuthProvider';

type HasPermissionProps = {
  children: React.ReactNode;
  allowedTo: string[];
  condition?: boolean;
  userIdOut?: number | string | null;
};

export default function HasPermission({
  children,
  allowedTo,
  userIdOut = null,
  condition = true,
}: HasPermissionProps) {
  const { ROLE, userId } = useAuth();
  const isOwner = userIdOut ? userId == userIdOut : null;

  // dont render the element if the condition doesn't equal to true
  if (
    !allowedTo.includes(ROLE.toLowerCase()) ||
    !condition ||
    (userIdOut != null && !isOwner)
  )
    return null;
  return children;
}

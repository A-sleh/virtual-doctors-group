import { paths } from '@/config/paths';
import { useAuth } from '@/context/auth/AuthProvider';
import { Link } from 'react-router';

export const MainErrorFallback = () => {
  const { ROLE } = useAuth();
  const url = ROLE ? paths.app[ROLE]?.home.getHref() : '';
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Link className="mt-4" to={url}>
        Refresh
      </Link>
    </div>
  );
};

import { RouterProvider } from 'react-router';
import { router } from '@/app/Routes/router';

export default function AppProvider() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

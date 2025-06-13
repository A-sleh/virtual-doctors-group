import { RouterProvider } from 'react-router';
import { router } from './Routes/router';

export default function AppProvider() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

import { RouterProvider } from 'react-router';
import { router } from '@/app/Routes/router';
import "@/config/main.css"

export default function AppProvider() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

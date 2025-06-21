import { RouterProvider } from 'react-router';
import { router } from '@/app/Routes/router';
import "@/assets/scss/main.css"

export default function AppProvider() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

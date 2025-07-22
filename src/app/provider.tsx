import { RouterProvider } from 'react-router';
import { router } from '@/app/Routes/router';
import '@/assets/scss/main.css';
import { Toaster } from 'sonner';

export default function AppProvider() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

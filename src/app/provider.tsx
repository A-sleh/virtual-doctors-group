import { createBrowserRouter, RouterProvider } from 'react-router';
import '@/assets/scss/main.css';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { useRoutes } from './Routes/router';
import { CurrentClinicProvider } from '@/context/doctor/CurrentClinicProvider';

export default function AppProvider() {
  const router = createBrowserRouter(useRoutes());
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 2,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CurrentClinicProvider>
          <RouterProvider router={router} />
          <Toaster />

        </CurrentClinicProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

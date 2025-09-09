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
          <a
            href="http://vdg.runasp.net/swagger/index.html"
            target="_blank"
            style={{
              position: 'fixed',
              right: '200px',
              bottom: '10px',
              zIndex: '400',
              backgroundColor: 'green',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Open swagger
          </a>
        </CurrentClinicProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

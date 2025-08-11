import { createBrowserRouter, RouterProvider } from 'react-router';
import '@/assets/scss/main.css';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { useRoutes } from './Routes/router';
import { userLocalStorage } from '@/features/auth/localstorage/user.localstore';

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
        <RouterProvider router={router} />
        <Toaster />
        <a
          href="/auth/login"
          onClick={() => userLocalStorage.removeUser()}
          style={{
            position: 'fixed',
            right: '10px',
            bottom: '10px',
            zIndex: '400',
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          remove user
        </a>
      </AuthProvider>
    </QueryClientProvider>
  );
}

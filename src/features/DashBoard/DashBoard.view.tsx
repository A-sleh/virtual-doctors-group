import DashBoardLayout from '@/components/layouts/dashboard-layout'; 
import { Outlet } from 'react-router';

export default function DashBoard() {
  return (
    <DashBoardLayout>
      <Outlet />
    </DashBoardLayout>
  );
}

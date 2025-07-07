import SideBar from '@/features/sidebar/SideBard';
import NavBar, { NavBarProvider } from './NavBar';

type DashBoardLayoutProp = {
  children: React.ReactNode;
};

export default function DashBoardLayout({ children }: DashBoardLayoutProp) {
  return (
    <NavBarProvider>
      <div className="flex min-h-screen relative dark:bg-black">
        <SideBar />
        <div className="flex-1">
          <NavBar />
          <main className="bg-third rounded-xl p-3 min-h-[93vh] pb-1.5  dark:bg-third overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </NavBarProvider>
  );
}

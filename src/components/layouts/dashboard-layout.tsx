import SideBar from '@/features/sidebar/SideBard';

type DashBoardLayoutProp = {
  children: React.ReactNode;
};

export default function DashBoardLayout({ children }: DashBoardLayoutProp) {
  return (
    <div className="flex min-h-screen relative dark:bg-black">
      <SideBar />
      <div className="flex-1">
        <nav className="p-4 sticky top-0 bg-white dark:bg-black dark:text-white z-50">
          navebard
        </nav>
        <main className="bg-third rounded-xl p-3 min-h-[93vh] pb-1.5  dark:bg-third overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

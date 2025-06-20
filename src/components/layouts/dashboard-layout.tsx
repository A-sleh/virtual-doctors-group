import SideBar from '@/features/sidebar/SideBard';

type DashBoardLayoutProp = {
  children: React.ReactNode;
};

export default function DashBoardLayout({ children }: DashBoardLayoutProp) {
  return (
    <div className="flex min-h-screen relative dark:bg-black">
      <SideBar />
      <div className='flex-1'>
        <nav className="p-4 sticky top-0 bg-white dark:bg-black dark:text-white">navebard</nav>
        <main className="bg-sky-50 rounded-xl p-2 min-h-screen pb-1.5  dark:bg-gray-500">{children}</main>
      </div>
    </div>
  );
}

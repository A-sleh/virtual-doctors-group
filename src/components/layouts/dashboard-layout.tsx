import SideBar from '@/features/sidebar/SideBard';

type DashBoardLayoutProp = {
  children: React.ReactNode;
};

export default function DashBoardLayout({ children }: DashBoardLayoutProp) {
  return (
    <div className="flex min-h-screen relative">
      <SideBar />
      <div className='flex-1'>
        <nav className="p-4 sticky top-0 bg-white">navebard</nav>
        <main className="bg-sky-50 rounded-xl p-4 min-h-screen pb-1.5">{children}</main>
      </div>
    </div>
  );
}

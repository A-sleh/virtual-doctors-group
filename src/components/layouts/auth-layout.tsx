import img from '@/assets/images/Types-of-Hospitals-2.jpg'

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen overflow-auto `}>
      <img
        src={img}
        className="absolute w-full h-screen glass-layer top-0 left-0 z-0  "
      />
      <div className=" absolute bg-white/20  w-full h-full z-1"></div>
      <div className="p-2 md:flex h-fit  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white overflow-hidden z-2 ">
        {children}
      </div>
    </div>
  );
}

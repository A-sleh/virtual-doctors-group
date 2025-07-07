import { NavBarContext } from '@/components/layouts/NavBar';
import { useContext } from 'react';
import { BsHospital } from 'react-icons/bs';
import { IoCloseCircleOutline } from 'react-icons/io5';

export default function Logo() {
  const {isOpen,setIsOpen} = useContext(NavBarContext)
  const iconVisibleStyle = isOpen ? 'sm:hidden md:flex' : 'hidden';

  return (
    <section className="flex items-center justify-between sm:px-0 px-4 dark:text-white">
      <IoCloseCircleOutline
        size={30}
        onClick={() => setIsOpen?.(false)}
        className={`sm:hidden font-bold  cursor-pointer  hover:text-red-600 transition-all duration-200 `}
      />
      <div className="flex gap-2 items-center justify-center m-5 mr-0 ">
        <BsHospital size={30} />
        <h3 className={`${iconVisibleStyle} font-bold text-primary  text-xl`}>
          <span className="text-black dark:text-white">C</span>ureSync
        </h3>
      </div>
    </section>
  );
}

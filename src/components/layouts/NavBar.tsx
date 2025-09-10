import React, { createContext, useContext, useState } from 'react';

import { AiOutlineLogout } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdNotificationsOutline } from 'react-icons/io';

import fofoImg from '@/assets/images/pexels-jrfotosgrand-fotografia-12660379.jpg';
import ChangeClinic from '@/features/Doctor_Features/Models/ChangeClinic.Model';
import HasPermission from '@/context/auth/HasPermission';

import BreadCrumb from './BreadCrumb';
import { useLogout } from '@/features/auth/api/useLogout';
import { useCurrentClinic } from '@/context/doctor/CurrentClinicProvider';

type navBarType = {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBarContext = createContext<navBarType>({
  isOpen: true,
  setIsOpen: () => null,
});

function NavBarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <NavBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavBarContext.Provider>
  );
}

function useNavbar() {
  const context = useContext(NavBarContext);
  if (context === undefined)
    throw new Error('Navbar context was used outside of the provider');

  return context;
}

export default function NavBar() {
  const { clinic } = useCurrentClinic();
  const { setIsOpen } = useNavbar();
  const logout = useLogout();

  return (
    <nav className="p-4 py-2 sticky top-0 bg-white dark:bg-black dark:text-white z-50 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <RxHamburgerMenu
          size={30}
          className="text-primary cursor-pointer"
          onClick={() => setIsOpen?.((last: boolean) => !last)}
        />
        <BreadCrumb />
      </div>

      <div className="flex items-center gap-2">
        <HasPermission allowedTo={['doctor']}>
          <span className="px-2 py-1 bg-primary text-white rounded-md items-center flex gap-2">
            {clinic.name}

            <ChangeClinic />
          </span>
        </HasPermission>
        <IoMdNotificationsOutline
          size={33}
          className="text-secondary bg-third p-1 rounded-full rotate-12 hover:rotate-0  transition-all duration-300 cursor-pointer"
        />
        <AiOutlineLogout
          onClick={() => logout()}
          size={30}
          className="bg-danger rounded-full text-white cursor-pointer p-1 hover:rotate-180  duration-200 transition-all"
          title="Logout"
        />
      </div>
    </nav>
  );
}

export { NavBarProvider, useNavbar };

import React, { createContext, useContext, useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdNotificationsOutline } from 'react-icons/io';

import fofoImg from '@/assets/images/pexels-jrfotosgrand-fotografia-12660379.jpg';
import ChangeClinic from '@/features/Doctor_Features/Models/ChangeClinic.Model';
import HasPermission from '@/context/auth/HasPermission';

import BreadCrumb from './BreadCrumb';

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
  const { setIsOpen } = useNavbar();

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
          <ChangeClinic />
        </HasPermission>
        <IoMdNotificationsOutline
          size={33}
          className="text-secondary bg-third p-1 rounded-full rotate-12 hover:rotate-0  transition-all duration-300 cursor-pointer"
        />
        <img src={fofoImg} className="w-11 h-11 rounded-full " />
      </div>
    </nav>
  );
}

export { NavBarProvider, useNavbar };

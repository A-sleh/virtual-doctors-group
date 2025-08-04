import { Link } from 'react-router';

import { ICON_SIZE, sidebarLinks, subSideBareLink } from './sdiebarLinks';
import { IoMdLogIn } from 'react-icons/io';
import { paths } from '@/config/paths';

import { useNavbar } from '@/components/layouts/NavBar';
import HasPermission from '@/context/auth/HasPermission';
import Logo from './components/Logo';
import List from './components/List';
import AnimateParentUpEffect from '@/lib/Animation/AnimateParentUpEffect';

export default function SideBar() {
  const { isOpen } = useNavbar();
  const subscripAsDoctorStyle = isOpen ? 'md:flex sm:hidden ' : 'hidden';
  const sideBarStyle = isOpen
    ? 'fixed w-full pr-5 sm:pr-2 sm:w-fit sm:sticky md:pr-5 '
    : 'w-0  sm:w-fit sm:sticky sm:pr-3 ';

  return (
    <aside
      className={`bg-white dark:bg-black h-[100vh] transition-all duration-100 top-0 z-100 overflow-hidden ${sideBarStyle}`}
    >
      <Logo />
      <section className="flex flex-col gap-28">
        <AnimateParentUpEffect className="flex flex-col gap-7 ">
          <List links={sidebarLinks} sideBarStatus={isOpen} />
          <hr className="text-[#6b6f74] w-[80%]  m-auto" />
          <List links={subSideBareLink} sideBarStatus={isOpen} />
        </AnimateParentUpEffect>
        <HasPermission allowedTo={['patient']}>
          <Link
            to={paths.app.setting.subscribAsDoctor.getHref(1)}
            className="btn-rounded px-4  bg-primary flex items-center gap-2 text-white w-fit my-auto mx-auto sm:ml-3 md:ml-3 hover:bg-[#157ae59f] transition-all duration-200"
          >
            <IoMdLogIn size={ICON_SIZE} />
            <h4 className={`text-md font-medium ${subscripAsDoctorStyle} `}>
              Subscribe as doctor
            </h4>
          </Link>
        </HasPermission>
      </section>
    </aside>
  );
}

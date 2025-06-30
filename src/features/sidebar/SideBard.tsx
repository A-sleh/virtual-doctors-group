import { Link } from 'react-router';
import { ICON_SIZE, sidebarLinks, subSideBareLink } from './sdiebarLinks';
import { IoMdLogIn } from 'react-icons/io';
import { paths } from '@/config/paths';

import Logo from './components/Logo';
import List from './components/List';
import HasPermission from '@/context/auth/HasPermission';
import AnimateParentUpEffect from '@/lib/Animation/AnimateParentUpEffect';

export default function SideBar() {
  return (
    <aside className="fixed w-full bg-white pr-5 sm:pr-2 md:pr-5 sm:w-fit sm:sticky top-0 h-[100vh] z-50 dark:bg-black">
      <Logo />
      <section className="flex flex-col gap-28">
        <AnimateParentUpEffect className="flex flex-col gap-7 ">
          <List links={sidebarLinks} />
          <hr className="text-[#6b6f74] w-[80%]  m-auto" />
          <List links={subSideBareLink} />
        </AnimateParentUpEffect>
        <HasPermission allowedTo={['patient']}>
          <Link
            to={paths.app.setting.subscribAsDoctor.getHref(1)}
            className="btn-rounded  bg-primary flex items-center gap-2 text-white w-fit my-auto mx-auto sm:ml-3 md:ml-3 hover:bg-[#157ae59f] transition-all duration-200"
          >
            <IoMdLogIn size={ICON_SIZE} />
            <h4 className="text-md font-medium  md:flex sm:hidden ">
              Subscribe as doctor
            </h4>
          </Link>
        </HasPermission>
      </section>
    </aside>
  );
}

import { Link, NavLink } from 'react-router';
import { ICON_SIZE, sidebarLinks, subSideBareLink } from './sdiebarLinks';
import { IoMdLogIn } from 'react-icons/io';
import { paths } from '@/config/paths';
import { ROLE } from '@/config/app.config';

type link = {
  icon: React.ReactNode;
  title: string;
  permission: string[];
  path: {
    admin?: string;
    patient?: string;
    doctor?: string;
  };
};

type links = link[];

export default function SideBar() {
  return (
    <aside className="fixed w-full bg-white pr-5 sm:pr-2 md:pr-5 sm:w-fit sm:sticky top-0 h-[100vh] z-50 dark:bg-black">
      <Logo />
      <section className="flex flex-col gap-28">
        <section className="flex flex-col gap-7 ">
          <List links={sidebarLinks} />
          <hr className="text-[#6b6f74] w-[80%]  m-auto" />
          <List links={subSideBareLink} />
        </section>
        {ROLE === 'patient' && (
          <Link
            to={paths.app.setting.getHref(1)}
            className="btn-rounded  bg-primary flex items-center gap-2 text-white w-fit my-auto mx-auto sm:ml-3 md:ml-3 hover:bg-[#157ae59f] transition-all duration-200"
          >
            <IoMdLogIn size={ICON_SIZE} />
            <h4 className="text-md font-medium  md:flex sm:hidden ">
              Subscribe as doctor
            </h4>
          </Link>
        )}
      </section>
    </aside>
  );
}

function List({ links }: links) {
  const sectionLinks = links.filter((link: link) => {
    return link.permission.includes(ROLE);
  });

  return (
    <ul className="flex flex-col gap-4">
      {sectionLinks.map((link: link) => {
        return (
          <NavLink
            to={link.path[ROLE] || ''}
            end
            className={({ isActive }) =>
              (isActive
                ? 'bg-[#1579e5] text-white before:bg-[#1579e5] '
                : 'text-black before:bg-[#ffffff] dark:before:bg-[#000000] ') +
              'li-style btn-rounded dark:text-white'
            }
            key={link.title}
          >
            {link.icon}
            <h4 className="text-md font-medium md:flex sm:hidden ">
              {link.title}
            </h4>
          </NavLink>
        );
      })}
    </ul>
  );
}

function Logo() {
  return (
    <section className="flex items-center justify-between sm:px-0 px-4 dark:text-white">
      <i className="bi bi-x-lg sm:hidden font-bold text-lg cursor-pointer  hover:text-red-600 transition-all duration-200 "></i>
      <div className="flex gap-2 items-center justify-center m-5 mr-0 ">
        <i className="bi bi-hospital text-[30px]"></i>
        <h3 className="font-bold text-[#1579e5]  text-xl sm:hidden md:flex">
          <span className="text-black dark:text-white">C</span>ureSync
        </h3>
      </div>
    </section>
  );
}

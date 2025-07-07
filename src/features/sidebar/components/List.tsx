import { ROLE } from '@/config/app.config';
import { links, linksProps } from '../types/sidebar';
import { NavLink } from 'react-router';
import { AnimateChildUpEffect } from '@/lib/Animation/AnimateParentUpEffect';

export default function List({ links ,sideBarStatus }: linksProps) {
  const sectionLinks: links = links.filter((link) => {
    return link.permission.includes(ROLE);
  });

  const textVisibleStyle = sideBarStatus ? 'md:flex sm:hidden' : 'hidden'
  const textContainerStyle = sideBarStatus ? "md:min-w-48 md:flex w-full sm:w-fit md:w-full " : "w-0 sm:w-fit md:flex" 

  return (
    <ul className="flex flex-col gap-4">
      {sectionLinks.map((link, index: number) => {
        return (
          <AnimateChildUpEffect duration={index / 2}>
            <NavLink
              to={link.path[ROLE] || ''}
              className={({ isActive }) =>
                (isActive
                  ? 'bg-primary text-white before:bg-primary '
                  : 'text-black before:bg-[#ffffff] dark:before:bg-[#000000] ') +
                `li-style btn-rounded dark:text-white md:px-4 ${textContainerStyle}`
              }
              key={link.title}
            >
              {link.icon}
              <h4 className={`text-md font-medium  ${textVisibleStyle}`}>
                {link.title}
              </h4>
            </NavLink>
          </AnimateChildUpEffect>
        );
      })}
    </ul>
  );
}

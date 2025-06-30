import { ROLE } from '@/config/app.config';
import { links, linksProps } from '../types/sidebar';
import { NavLink } from 'react-router';
import { AnimateChildUpEffect } from '@/lib/Animation/AnimateParentUpEffect';

export default function List({ links }: linksProps) {
  const sectionLinks: links = links.filter((link) => {
    return link.permission.includes(ROLE);
  });

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
                'li-style btn-rounded dark:text-white md:min-w-48'
              }
              key={link.title}
            >
              {link.icon}
              <h4 className="text-md font-medium md:flex sm:hidden ">
                {link.title}
              </h4>
            </NavLink>
          </AnimateChildUpEffect>
        );
      })}
    </ul>
  );
}

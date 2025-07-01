import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router';
import { headerProps } from '../types/home';

export default function Header({ title, link = '' }: headerProps) {
  return (
    <AnimateDownEffect className="sub-header text-md flex justify-between gap-10">
      <h3 className="font-bold">{title}</h3>
      <Link
        to={link}
        className="text-primary text-sm flex items-center gap-1 font-normal cursor-pointer"
      >
        View all <IoIosArrowForward />
      </Link>
    </AnimateDownEffect>
  );
}

import { IoIosArrowForward } from 'react-icons/io';

type headerProps = {
  title: string;
  link?: string;
};
export default function Header({ title, link }: headerProps) {
  return (
    <div className="sub-header text-md flex justify-between gap-10">
      <h3 className='font-bold'>{title}</h3>
      <span className='text-primary text-sm flex items-center gap-1 font-normal cursor-pointer'>
        View all <IoIosArrowForward />
      </span>
    </div>
  );
}

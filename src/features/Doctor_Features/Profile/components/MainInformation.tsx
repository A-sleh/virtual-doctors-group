import AnimateParentLeftEffect, { AnimateChildLeftEffect } from '@/lib/Animation/AnimateParentLeftEffect';
import { BsPostcard } from 'react-icons/bs';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaClinicMedical } from 'react-icons/fa';

const ICON_SIZE = 30;

export default function MainInformation() {
  return (
    <AnimateParentLeftEffect className="w-1/4 text-nowrap space-y-2">
      <AnimateChildLeftEffect duration={1} className="flex items-center w-full px-4 py-2 text-xl font-normal bg-primary text-white space-x-2 rounded-tl-md rounded-br-md">
        <BsPostcard size={ICON_SIZE} />
        <h2 className="flex justify-between w-full">
          Number of clinics <span>2</span>
        </h2>
      </AnimateChildLeftEffect>
      <AnimateChildLeftEffect duration={2} className="flex items-center w-full px-4 py-2 text-xl font-normal bg-primary text-white space-x-2 rounded-tl-md rounded-br-md">
        <FaClinicMedical size={ICON_SIZE} />
        <h2 className="flex justify-between w-full">
          Number of posts<span>10</span>
        </h2>
      </AnimateChildLeftEffect>
      <AnimateChildLeftEffect duration={3} className="flex items-center w-full px-4 py-2 text-xl font-normal bg-primary text-white space-x-2 rounded-tl-md rounded-br-md">
        <BsCalendar2Date size={ICON_SIZE} />
        <h2 className="flex justify-between w-full">
          Registeratino date <span>2025-1-1</span>
        </h2>
      </AnimateChildLeftEffect>
    </AnimateParentLeftEffect>
  );
}

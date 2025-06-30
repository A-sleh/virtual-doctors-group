import { BsCalendar2Month } from 'react-icons/bs';
import { MdArrowBackIos } from 'react-icons/md';
import { IoCalendarOutline } from 'react-icons/io5';

import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { generateRangedNumber } from '@/utils/generateRangedNumber';
import SelectorWithIcon from '@/components/ui/inputs/SelectorWithIcon';

export default function ReservationHeader() {
  return (
    <AnimateDownEffect duration={0.3} offsetValue={-100}
      className="sub-header py-1 text-lg items-center flex justify-between"
    >
      March 2025
      <div className="flex gap-4 cursor-pointer">
        <MdArrowBackIos
          size={38}
          className="p-2 pr-0 flex items-center justify-center bg-secondary-hover border-secondary border-2 rounded-full"
        />
        <MdArrowBackIos
          size={38}
          className="p-2 pr-0 flex items-center justify-center bg-secondary-hover border-secondary border-2 rounded-full rotate-180"
        />
      </div>
      <div className="flex gap-2">
        <SelectorWithIcon
          options={generateRangedNumber(1, 12)}
          Icon={BsCalendar2Month}
        />
        <SelectorWithIcon
          options={generateRangedNumber(2025, 2222)}
          Icon={IoCalendarOutline}
        />
      </div>
    </AnimateDownEffect>
  );
}

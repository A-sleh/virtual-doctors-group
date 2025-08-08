import { BsCalendar2Month } from 'react-icons/bs';
import { MdArrowBackIos } from 'react-icons/md';
import { IoCalendarOutline } from 'react-icons/io5';

import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { formatDateMonthYearDay, generateRangedNumber } from '@/utils';
import SelectorWithIcon from '@/components/ui/inputs/SelectorWithIcon';
import { useCalender } from '@/context/reservation/Calender';

export default function ReservationHeader() {
  const {
    setYear,
    setMonth,
    year,
    month,
    increasMonthBy,
    decreaseMonthBy,
    day,
  } = useCalender();
  const currentDate = new Date();

  return (
    <AnimateDownEffect
      duration={0.3}
      offsetValue={-100}
      className="sub-header py-1 text-lg items-center sm:flex justify-between"
    >
      {formatDateMonthYearDay(day || currentDate)}
      <div className="flex gap-4 cursor-pointer">
        <MdArrowBackIos
          size={38}
          onClick={() => decreaseMonthBy()}
          className="p-2 pr-0 flex items-center justify-center bg-secondary-hover border-secondary border-2 rounded-full"
        />
        <MdArrowBackIos
          onClick={() => increasMonthBy()}
          size={38}
          className="p-2 pr-0 flex items-center justify-center bg-secondary-hover border-secondary border-2 rounded-full rotate-180"
        />
      </div>
      <div className="flex gap-2">
        <SelectorWithIcon
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          options={generateRangedNumber(1, 12)}
          Icon={BsCalendar2Month}
        />
        <SelectorWithIcon
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          options={generateRangedNumber(
            currentDate.getFullYear(),
            currentDate.getFullYear() + 5,
          )}
          Icon={IoCalendarOutline}
        />
      </div>
    </AnimateDownEffect>
  );
}

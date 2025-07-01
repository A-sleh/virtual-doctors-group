import { useState } from 'react';
import { MdAccessTime } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateDropDownList from '@/lib/Animation/AnimateDropDownList';
import { reservatDayCardProps } from '../types/reservation';



export default function ReservatDayCard({
  reservation,
  duration,
}: reservatDayCardProps) {
  const [openReservation, setOpenReservation] = useState(false);
  const { time, desctiption, owner } = reservation;

  function handleOpenRes() {
    setOpenReservation((last) => !last);
  }

  return (
    <AnimateFromToRight duration={duration}>
      <div
        className="px-1.5 py-1 h-fit flex justify-between items-center bg-white rounded-sm cursor-pointer"
        onClick={handleOpenRes}
      >
        <div className="flex gap-1">
          <MdAccessTime size={25} />
          {time}
        </div>
        <IoIosArrowDown
          size={22}
          className={`${
            !openReservation && 'rotate-180'
          } transition-all duration-200`}
        />
      </div>

      <AnimateDropDownList
        className={`rounded-bl-sm rounded-br-sm overflow-hidden bg-white mt-0.5 ${
          !openReservation && 'h-0'
        } `}
      >
        <h5 className="pt-2 pl-2 font-medium">{owner}</h5>
        <p className="text-wrap text-secondary text-sm p-2 ">{desctiption}</p>
        <AnimateButton
          scale={1.1}
          className="text-center font-normal w-full bg-danger text-white cursor-pointer"
        >
          Previewed
        </AnimateButton>
      </AnimateDropDownList>
    </AnimateFromToRight>
  );
}

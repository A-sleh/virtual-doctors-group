import { useState } from 'react';
import { MdAccessTime } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateDropDownList from '@/lib/Animation/AnimateDropDownList';
import { reservatDayCardProps } from '../types/reservation';
import ConfirmModel from '@/components/models/ConfirmModel';
import { useDeleteReservation } from '@/features/patient_Features/Reservation/api/delete-reservation';

export default function ReservatDayCard({
  reservation,
  duration,
}: reservatDayCardProps) {
  const [openReservation, setOpenReservation] = useState(false);
  const { deleteReservation } = useDeleteReservation();
  const { time, desctiption, owner } = reservation;

  return (
    <AnimateFromToRight duration={duration}>
      <div
        className="px-1.5 py-1 h-fit flex justify-between items-center bg-white rounded-sm cursor-pointer"
        onClick={() => setOpenReservation((last) => !last)}
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
        <ConfirmModel
          openKey="preview-reservation"
          onConfirmClick={() => deleteReservation(1)}
          description="Are you sure to previewed this reservation, if not click on cancel button"
        >
          <AnimateButton
            scale={1.1}
            className="text-center font-normal w-full bg-danger text-white cursor-pointer"
          >
            Previewed
          </AnimateButton>
        </ConfirmModel>
      </AnimateDropDownList>
    </AnimateFromToRight>
  );
}
